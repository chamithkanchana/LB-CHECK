const http = require('http');

let server = null;
// let dbConnection = null;

const closeServer = () => {
  if (server) {
    server.close(() => {
      console.log('Shutting down API!!!');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

process.on('uncaughtException', (err) => {
  console.log(err.name, err.message);
  console.log('UNCAUGHT EXCEPTION! 💥');
  closeServer();
});

const app = require('./app');
// const mongo = require('./helpers/mongo');

const { PORT } = require('./config');

const main = async () => {
  try {
    // TODO:
    // initialize DB here

    server = http.createServer(app);

    server.listen(PORT, () => {
      console.log(`API is listening on ${PORT}`);
    });
  } catch (error) {
    console.error('Error occured, server exit: ', error);
    process.exit(1);
  }
};

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION! 💥');
  closeServer();
});

main();
