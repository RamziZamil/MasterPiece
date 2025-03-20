const express = require("express");
const { authorize } = require("../middleware/auth");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Cart = require("../models/Cart");
const router = express.Router();

// Controller function to create a payment intent
const createPaymentIntent = async (req, res) => {
  try {
    const userId = req.user._id;
    const cart = await Cart.findOne({ user: userId }).populate("items.item");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ success: false, message: "Cart is empty" });
    }

    const amount = cart.items.reduce((total, cartItem) => {
      return total + cartItem.item.pricePerUnit * cartItem.quantity;
    }, 0);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Convert to cents
      currency: "jod",
      metadata: { integration_check: "accept_a_payment" },
    });

    res.status(200).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
      cartItems: cart.items,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Payment failed",
      error: error.message,
    });
  }
};

// Route to create a payment intent
router.post(
  "/create-payment-intent",
  authorize("user", "admin"),
  createPaymentIntent
);

module.exports = router;
