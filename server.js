require('dotenv').config();
const polka = require('polka');
const { json } = require('body-parser');
const logger = require('./middleware/logger');
const deploy = require('./routes/deploy');

const server = polka();

server.use(json(), logger);

server.use('/deploy', deploy);

module.exports = server;
