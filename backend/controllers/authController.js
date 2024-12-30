const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'postmessage'
);

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

    getGoogleConfig: (req, res) => {
        res.json({ clientId: process.env.GOOGLE_CLIENT_ID });
    },

    handleGoogleAuth: async (req, res) => {
        const { code } = req.body;
        if (!code) {
            return res.status(400).json({ error: 'Missing authorization code' });
        }

        try {
            const { tokens } = await client.getToken(code);
            const ticket = await client.verifyIdToken({
                idToken: tokens.id_token,
                audience: process.env.GOOGLE_CLIENT_ID
            });

            const payload = ticket.getPayload();
            const googleId = payload['sub'];
            const email = payload['email'];
            const name = payload['name'];
            const picture = payload['picture'];

            let user = await User.findOne({ email });

            if (!user) {
                user = new User({
                    email,
                    name,
                    googleId,
                    picture,
                    password: await bcrypt.hash(Math.random().toString(36), 10)
                });
                await user.save();
            } else {
                user.googleId = googleId;
                user.picture = picture || user.picture;
                await user.save();
            }

            const token = jwt.sign(
                { userId: user._id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            const userResponse = user.toObject();
            delete userResponse.password;

            res.json({
                message: 'Google login successful',
                token,
                user: userResponse
            });
        } catch (error) {
            console.error('Error verifying Google token:', error);
            res.status(401).json({ error: 'Authentication failed' });
        }
    }
};

module.exports = authController;