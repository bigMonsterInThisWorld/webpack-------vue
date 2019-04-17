/**
 *  webpack热更新配置
 *  基于express框架
 *  所需  webpack-dev-middleware express
 *
 */




const base_config = require('./webpack.config.base');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');


let middleware_config = {   //webpack配置
    ...base_config,
    devServer: {
        contentBase:'./dist',
    },
    mode: 'development'
};

middleware_config.output.publicPath = '/';


let app = express();  //生成一个服务 app
let compiler = webpack(middleware_config);
app.use(webpackDevMiddleware(compiler,{  //配置app
    publicPath:middleware_config.output.publicPath
}));

app.listen(3000,function () {
    console.log('\nExample app listening on port 3000!\n');
});  //监听端口


