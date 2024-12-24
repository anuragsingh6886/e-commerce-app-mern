const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authController = {
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // Validate input
            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }

            // Find user by email
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            // Verify password
            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            // Generate JWT token
            const token = jwt.sign(
                { userId: user._id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            // Return user data without password
            const userResponse = user.toObject();
            delete userResponse.password;

            res.status(200).json({
                message: 'Login successful',
                token,
                user: userResponse
            });
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    googleLogin: async (req, res) => {
        try {
            const { googleId, email, name, picture } = req.body;

            let user = await User.findOne({ email });

            if (!user) {
                // Create new user if doesn't exist
                user = new User({
                    email,
                    name,
                    googleId,
                    picture,
                    password: await bcrypt.hash(Math.random().toString(36), 10) // Random password for Google users
                });
                await user.save();
            } else {
                // Update existing user's Google information
                user.googleId = googleId;
                user.picture = picture || user.picture;
                await user.save();
            }

            // Generate JWT token
            const token = jwt.sign(
                { userId: user._id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            const userResponse = user.toObject();
            delete userResponse.password;

            res.status(200).json({
                message: 'Google login successful',
                token,
                user: userResponse
            });
        } catch (error) {
            console.error('Google login error:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
};

module.exports = authController;