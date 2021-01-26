const Pino = require('pino');
const config = require('../config');

const logger = (req, _res, next) => {
  req.log = new Pino(config.log_path);
  next();
};

module.exports = logger;
