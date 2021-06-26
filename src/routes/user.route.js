const express = require('express');

const userController = require('../controllers/user.controller');

// auth route - /api/v1/user
const router = express.Router();

router.get('/', userController.getUsers);

module.exports = router;
