const express = require('express');

const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');

// base route - /api/v1
const router = express.Router();

// Health check route
router.get('/health', (req, res) => {
  return res.status(200).send('UP');
});

router.use('/auth', authRoutes);

router.use('/users', userRoutes);

module.exports = router;
