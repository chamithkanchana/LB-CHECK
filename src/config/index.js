const accessEnv = require('../helpers/access-env');

const data = {
  NODE_ENV: accessEnv('NODE_ENV', 'development'),
  PORT: accessEnv('PORT', 3333),
  DB_URL: accessEnv('DB_URL', 'mongodb://localhost:27017/users'),
  JWT_SECRET: accessEnv('JWT_SECRET', 'password'),
  JWT_EXPIRE_INTERVAL: accessEnv('JWT_EXPIRE_INTERVAL', 60),
};

module.exports = data;
