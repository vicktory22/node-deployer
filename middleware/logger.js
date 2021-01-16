const pino = require("pino");
const config = require("./../config");

const logger = (req, res, next) => {
    req.log = new pino(config.log_path);
    next();
};

module.exports = logger;
