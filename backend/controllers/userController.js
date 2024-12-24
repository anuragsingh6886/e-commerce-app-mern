const User = require('../models/User');
const bcrypt = require('bcryptjs');

const userController = {
    createUser: async (req, res) => {
        try {
            const { email, password, name } = req.body;

            // Validate input
            if (!email || !password || !name) {
                return res.status(400).json({ error: 'All fields are required' });
            }

            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ error: 'Email already registered' });
            }

            // Hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            // Create new user
            const user = new User({
                name,
                email,
                password: hashedPassword
            });

            await user.save();

            // Return user data without password
            const userResponse = user.toObject();
            delete userResponse.password;

            res.status(201).json({
                message: 'User created successfully',
                user: userResponse
            });
        } catch (error) {
            console.error('User creation error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await User.find({}, '-password');
            res.status(200).json(users);
        } catch (error) {
            console.error('Get users error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id).select('-password');
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            console.error('Get user by ID error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

module.exports = userController;