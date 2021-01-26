const { exec } = require('child_process');
const config = require('../config');

const deploy = (repository) => {
  const repo = config.repositories[repository];

  exec(
    `cd ${repo.dirPath} && git pull && npm ci --only=production && pm2 restart ecosystem.config.js`,
    (error) => {
      if (error) throw error;
    }
  );
};

module.exports = { deploy };
