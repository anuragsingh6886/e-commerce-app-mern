const express = require('express');
const cors = require('cors');
const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'postmessage'
);

app.post('/api/auth/google', async (req, res) => {
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
    const userId = payload['sub'];
    const email = payload['email'];
    const name = payload['name'];
    const picture = payload['picture'];

    const user = {
      userId,
      email,
      name,
      picture
    };

    const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token, user });
  } catch (error) {
    console.error('Error verifying Google token:', error);
    res.status(401).json({ error: 'Authentication failed' });
  }
});

app.use((err, req, res, next) => {
    console.log(err);

    if (err) {
      if (err.output) {
        return res.status(err.output.statusCode || 500).json(err.output.payload);
      }

      return res.status(500).json(err);
    }
});

app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
});

module.exports = app;