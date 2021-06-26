const express = require('express');

const userController = require('../controllers/user.controller');
const validations = require('../validations/auth.validation');

// auth route - /api/v1/auth
const router = express.Router();

router.post('/login', validations.login, userController.loginUser);

module.exports = router;
