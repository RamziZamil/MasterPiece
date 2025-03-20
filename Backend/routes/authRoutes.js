const express = require('express');
const router = express.Router();
const { register, login, logout, registerAdmin } = require('../controllers/authController');
const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', protect, logout);
router.post('/register-admin', registerAdmin);

module.exports = router; 