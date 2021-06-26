const { body } = require('express-validator');

module.exports = {
  login: [
    body('username').exists().withMessage('Username is required').escape(),
    body('password').exists().withMessage('Password is required').escape(),
  ],
};
