const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/login', authController.login);
router.get('/google/config', authController.getGoogleConfig);
router.post('/google', authController.handleGoogleAuth);

module.exports = router;