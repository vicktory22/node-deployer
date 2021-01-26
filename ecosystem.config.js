// THIS CONFIG IS USED BY PM2
module.exports = {
  apps: [
    {
      name: 'Deployer',
      script: './index.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
