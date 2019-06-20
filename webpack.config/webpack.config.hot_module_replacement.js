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
const child_process  = require('child_process');

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
    console.log(ipv4);
    console.log('\n');
    console.log('\n');
    console.log('\n');
    console.log('------------------------------------------------------------------------');
    console.log('\nlocalhost:5000/index.html\n');
    console.log(`\nhttp://${ipv4}:5000/index.html\n`);
    console.log('------------------------------------------------------------------------');
    console.log('\n');
    console.log('\n');
    console.log('\n');
});

child_process.exec(`start http://${ipv4}:5000/index.html`);



