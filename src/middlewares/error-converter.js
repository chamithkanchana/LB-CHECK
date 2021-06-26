const APIError = require('../helpers/api-error');

const errorConverter = (err, req, res, next) => {
  let convertedError = err;

  if (!(err instanceof APIError)) {
    convertedError = new APIError({
      message: err.message,
      status: err.status,
      stack: err.stack,
    });
  }
  return next(convertedError);
};

module.exports = errorConverter;
