const polka = require('polka');
const config = require('../config');
const { deploy } = require('../services/deployer');

const server = polka();

const onMasterBranch = (body) => {
  try {
    return body.ref === config.branch_name;
  } catch (e) {
    if (e instanceof TypeError) return false;

    throw e;
  }
};

server.post('/', async (req, res) => {
  if (!onMasterBranch(req.body)) {
    res.end('OK');
    return;
  }

  try {
    deploy(req.body.repository.name);
    req.log.info(`Deployment of ${req.body.repository.name} successful.`);
    res.end('OK');
  } catch (err) {
    req.log.error(err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
});

module.exports = server;
