const express = require('express');
const router = express.Router();
const {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    getProfile
} = require('../controllers/userController');
const { protect, authorize } = require('../middleware/auth');

// Protect all routes
router.use(protect);

// Routes
router.get('/profile', getProfile);
router.get('/', authorize('admin'), getAllUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', authorize('admin'), deleteUser);

module.exports = router; 