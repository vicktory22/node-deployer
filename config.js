module.exports = {
    branch_name: process.env.BRANCH_NAME || "refs/heads/main",
    log_path: process.env.LOG_PATH || "./logs/app.log",

    repositories: JSON.parse(process.env.REPOSITORIES),
};
