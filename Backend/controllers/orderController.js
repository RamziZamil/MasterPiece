const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Item = require('../models/Item');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create order and initiate payment
exports.createOrder = async (req, res) => {
    try {
        const { shippingAddress } = req.body;
        const userId = req.user._id;

        // Get user's cart
        const cart = await Cart.findOne({ user: userId }).populate('items.item');
        if (!cart || cart.items.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'Cart is empty'
            });
        }

        // Calculate total amount
        const totalAmount = cart.items.reduce((total, cartItem) => {
            return total + (cartItem.item.pricePerUnit * cartItem.quantity);
        }, 0);

        // Create Stripe checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: cart.items.map(cartItem => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: cartItem.item.name,
                        description: cartItem.item.description || '',
                    },
                    unit_amount: Math.round(cartItem.item.pricePerUnit * 100),
                },
                quantity: cartItem.quantity,
            })),
            mode: 'payment',
            success_url: `${req.protocol}://${req.get('host')}/api/payment/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.protocol}://${req.get('host')}/api/payment/cancel`,
            metadata: {
                userId: userId.toString(),
                cartId: cart._id.toString()
            },
        });

        // Create order
        const order = await Order.create({
            user: userId,
            items: cart.items.map(item => ({
                item: item.item._id,
                quantity: item.quantity,
                price: item.item.pricePerUnit
            })),
            totalAmount,
            shippingAddress,
            paymentIntentId: session.payment_intent,
            paymentMethod: 'card',
            paymentStatus: 'pending'
        });

        res.status(201).json({
            success: true,
            data: order,
            checkoutUrl: session.url
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating order',
            error: error.message
        });
    }
};

// Get user's orders
exports.getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user._id })
            .populate('items.item')
            .sort('-createdAt');

        res.status(200).json({
            success: true,
            count: orders.length,
            data: orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching orders',
            error: error.message
        });
    }
};

// Get single order
exports.getOrder = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
            .populate('items.item')
            .populate('user', 'name email');

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        // Check if user is authorized to view this order
        if (order.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to view this order'
            });
        }

        res.status(200).json({
            success: true,
            data: order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching order',
            error: error.message
        });
    }
};

// Update order status (Admin only)
exports.updateOrderStatus = async (req, res) => {
    try {
        const { orderStatus, trackingNumber } = req.body;
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                message: 'Order not found'
            });
        }

        order.orderStatus = orderStatus;
        if (trackingNumber) order.trackingNumber = trackingNumber;
        await order.save();

        res.status(200).json({
            success: true,
            data: order
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating order status',
            error: error.message
        });
    }
};

// Handle Stripe webhook
exports.handleStripeWebhook = async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        );
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            const order = await Order.findOne({ paymentIntentId: paymentIntent.id });

            if (order) {
                order.paymentStatus = 'paid';
                order.orderStatus = 'processing';
                await order.save();

                // Update item stock
                for (const item of order.items) {
                    await Item.findByIdAndUpdate(item.item, {
                        $inc: { stockQuantity: -item.quantity }
                    });
                }
            }
            break;

        case 'payment_intent.payment_failed':
            const failedPayment = event.data.object;
            const failedOrder = await Order.findOne({ paymentIntentId: failedPayment.id });

            if (failedOrder) {
                failedOrder.paymentStatus = 'failed';
                await failedOrder.save();
            }
            break;

        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
};

// Get all orders (Admin only)
exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find()
            .populate('items.item')
            .populate('user', 'name email')
            .sort('-createdAt');

        res.status(200).json({
            success: true,
            count: orders.length,
            data: orders
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching orders',
            error: error.message
        });
    }
}; 