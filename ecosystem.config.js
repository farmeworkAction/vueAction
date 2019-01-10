module.exports = {
  apps : [{
    name: 'API',
    script: 'app.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '47.104.12.129',
      ref  : 'origin/master',
      repo : 'git@github.com:farmeworkAction/vueAction.git',
      path : '/root/work/vueAction/dist',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      "env": {
          "NODE_ENV": "production"
      }
    }
  }
};
