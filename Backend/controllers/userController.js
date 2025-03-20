const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Get all users (Admin only)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');

        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// Get single user (Admin or Same User)
exports.getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Check if user is admin or the same user
        if (req.user.role !== 'admin' && req.user.id !== req.params.id) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to access this user data'
            });
        }

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// Update user (Admin or Same User)
exports.updateUser = async (req, res) => {
    try {
        // First check if the user exists
        const userToUpdate = await User.findById(req.params.id);

        if (!userToUpdate) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // Check if user is authorized to update
        // Only admin or the same user can update the profile
        if (req.user.role !== 'admin' && req.user.id !== req.params.id) {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to update this user'
            });
        }

        // If user is not admin, they can't update role
        if (req.body.role && req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Not authorized to change role'
            });
        }

        // If updating password, hash it
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }

        // Update user
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            {
                new: true,
                runValidators: true,
                select: '-password'
            }
        );

        res.status(200).json({
            success: true,
            data: updatedUser,
            message: 'User updated successfully'
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: 'Validation Error',
                errors: messages
            });
        }
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// Delete user (Admin only)
exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// Get user profile (Current logged in user)
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: error.message
        });
    }
};

// Add other controller methods as needed 