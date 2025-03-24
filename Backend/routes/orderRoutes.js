const express = require('express');
const router = express.Router();
const {
    createOrder,
    getUserOrders,
    getOrder,
    updateOrderStatus,
    handleStripeWebhook,
    getAllOrders
} = require('../controllers/orderController');
const { protect, authorize } = require('../middleware/auth');

// Stripe webhook route (no auth required)
router.post('/webhook', express.raw({ type: 'application/json' }), handleStripeWebhook);

// Protected routes
router.use(protect);

// User routes
router.post('/', createOrder);
router.get('/my-orders', getUserOrders);
router.get('/:id', getOrder);

// Admin only routes
router.get('/', authorize('admin'), getAllOrders);
router.put('/:id/status', authorize('admin'), updateOrderStatus);

module.exports = router; 