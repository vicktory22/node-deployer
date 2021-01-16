const { exec } = require("child_process");
const config = require("../config");

const deploy = (repository) => {
    const repo = config.repositories[repository];

    exec(
        `cd ${repo.dirPath} && git pull && pm2 restart ${repo.processName}`,
        (error, stdout, stderr) => {
            if (error) throw error;
        }
    );
};

module.exports = { deploy };
