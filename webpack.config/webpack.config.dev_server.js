

const base_config = require('./webpack.config.base');



let dev_config = {
    ...base_config,
    devServer: {
      contentBase:'./dist',
    },
    mode: 'development'
};


module.exports = dev_config;


