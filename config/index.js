const dev = require('./config-dev');
const prod = require('./config-prod');

const env = process.env.NODE_ENV;

const config = {
    dev,
    prod
};

module.exports = config[env];