const getEntry = require('./webpack.getEntry');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');  //用于生成html文件
const cleanWebpackPlugin = require('clean-webpack-plugin');
const util = require('./webpack.util');
const VueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: getEntry(),
    output: {
        filename: './js/[name].bundle.[hash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    devtool: 'inline-source-map',  //错误与警告追踪
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    // style-loader
                    {loader: 'style-loader'},
                    // css-loader
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    },
                ]
            },
            {
                test: /\.less/,
                use: ['vue-style-loader','css-loader','less-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                exclude: /(node_modules)/,
                use:'vue-loader',
            }
        ]
    },
    plugins: [
        new cleanWebpackPlugin(),  //清空打包的文件夹
        new webpack.ProgressPlugin(),  //用于打印打包的进度
        new VueLoaderPlugin(),
        ...util.createNewHtmlPluginConfig(),
        // ...util.createNewMiniCssExtractPlugin()
    ]
};


