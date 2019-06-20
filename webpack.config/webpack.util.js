const glob = require('glob');
const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
let obj_;
obj_ = {
    getPages: function () {  //获取所写的页面
        let arr = glob.sync('./src/pages/*/js/index.js');
        let pages_arr = arr.map(function (item, index) {
            console.log(item);
            return item.split('/')[3]
        });
        console.log(pages_arr);
        return pages_arr;
    },

    createNewHtmlPluginConfig: function () {  //配置htmlWebpackPlugin
        return obj_.getPages().map(function (item,index) {
            return new htmlWebpackPlugin({
                template: `./src/index.html`,
                filename: `${item}.html`,
                title: '666',
                chunks:[item]
            })
        })
    },

    createNewMiniCssExtractPlugin:function () {
        return obj_.getPages().map(function (item,index) {
            return new miniCssExtractPlugin({
                filename: `${item}.[hash].css`,
            })
        })

    }


};

module.exports = obj_;
