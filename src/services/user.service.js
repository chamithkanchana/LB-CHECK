const httpStatus = require('http-status');
const APIError = require('../helpers/api-error');

const loginUser = async ({ username, password }) => {
  try {
    if (username === password) {
      return {
        user: {
          fname: 'fname',
          lname: 'lname',
          mobile: 'mobile',
          userrole: 'patient',
        },
        token: {
          access_token: 'xxxx',
          access_token_expire: 60 * 60,
          refresh_token: 'xxxxx',
          refresh_token_expire: 7 * 24 * 60 * 60,
        },
      };
    }
    throw new APIError({
      message: 'Invalid credentials',
      status: httpStatus.UNAUTHORIZED,
      isPublic: true,
    });
  } catch (error) {
    throw new APIError(error);
  }
};

module.exports = {
  loginUser,
};
