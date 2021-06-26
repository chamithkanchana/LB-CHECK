const httpStatus = require('http-status');
const { validationResult } = require('express-validator');
const userService = require('../services/user.service');

const loginUser = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(httpStatus.UNPROCESSABLE_ENTITY).json({ message: 'Invalid request', errors: errors.array() });
    }
    const { username, password } = req.body;
    const data = await userService.loginUser({ username, password });
    return res.status(httpStatus.OK).json(data);
  } catch (error) {
    return next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const data = [
      {
        fname: 'fname',
        lname: 'lname',
        mobile: 'mobile',
        userrole: 'patient',
      },
      {
        fname: 'fname1',
        lname: 'lname1',
        mobile: 'mobile1',
        userrole: 'patient',
      },
    ];
    return res.status(httpStatus.OK).json(data);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  loginUser,
  getUsers,
};
