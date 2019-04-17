
const base_config = require('./webpack.config.base');

let build_config = {
    ...base_config,
    mode:'production'
};

module.exports = build_config;


