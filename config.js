const path = require('path');

module.exports = {
  branch_name: process.env.BRANCH_NAME || 'refs/heads/main',
  log_path: path.join(__dirname, process.env.LOG_PATH || '/logs/app.log'),
  repositories: JSON.parse(process.env.REPOSITORIES),
};
