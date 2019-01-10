const server = require('./server');
const logger = require('./logger');


const port = process.env.port | 3000;

server.listen(port);
server.on('listening', () => {
  logger.info(`Server listening on port ${port}`);
});

// error
process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);