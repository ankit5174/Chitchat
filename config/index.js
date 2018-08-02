const dev = require('./config-dev');
const prod = require('./config-prod');

const env = process.env.NODE_ENV;
console.log('env'+env);

const config = {
    dev,
    prod
};

module.exports = config[env];