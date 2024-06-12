module.exports = {
  apps: [
    {
      name: 'Dep',
      script: 'next',
      args: 'start',
      instances: '2',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};
