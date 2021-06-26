const httpStatus = require('http-status');
const { NODE_ENV } = require('../config');

// eslint-disable-next-line
const errorHandler = (err, req, res, next) => {
  const response = {
    status: err.status,
    message: err.message || httpStatus[err.status],
    errors: err.errors,
    stack: err.stack,
  };
  if (NODE_ENV !== 'development') {
    delete response.stack;
  }
  res.status(err.status);
  res.json(response);
  res.end();
};

module.exports = errorHandler;
