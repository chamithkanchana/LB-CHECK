const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');

const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

app.use(morgan('dev'));

// parse body params and attache them to req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TODO:
// Disable gzip compression if not needed
// gzip compression
app.use(compression());

// lets you use HTTP verbs such as PUT or DELETE
// in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// TODO:
// enable rate limit

app.use('/api/v1', routes);

// if error is not an instanceOf APIError, convert it.
app.use(middlewares.errorConverted);

// catch 404 and forward to error handler
app.use(middlewares.notFoundError);

// error handler, send stacktrace only during development
app.use(middlewares.errorHandler);

module.exports = app;
