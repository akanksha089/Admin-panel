const express = require('express');
const userRoutes = require('./user.routes');
const authRoutes = require('./auth.routes'); // Import authentication routes

const router = express.Router();

router.use('/users', userRoutes);
// Use /auth route for authentication actions
router.use('/auth', authRoutes);

module.exports = router;

