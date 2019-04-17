/**
 * HMR
 *
 *
 *
 *
 */


const base_config = require('./webpack.config.base');
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const ipv4 = require('./get_ip');

let HMR_config = {
    ...base_config,
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    mode: 'development'
};

const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};

HMR_config.plugins.concat([
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
]);


webpackDevServer.addDevServerEntrypoints(HMR_config,options);
const compiler =  webpack(HMR_config);
const server_1 = new webpackDevServer(compiler,options);
const server_2 = new webpackDevServer(compiler,options);
server_1.listen(5000,'localhost');
server_2.listen(5000,ipv4,()=>{
    console.log('\n');
    console.log('\n');
    console.log('\n');
    console.log('------------------------------------------------------------------------');
    console.log('\nlocalhost:5000/home.html\n');
    console.log('\n192.168.1.5:5000/home.html\n');
    console.log('------------------------------------------------------------------------');
    console.log('\n');
    console.log('\n');
    console.log('\n');
});


