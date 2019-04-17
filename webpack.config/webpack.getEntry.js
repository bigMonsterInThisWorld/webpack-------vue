const util = require('./webpack.util');

function getEntry() {

    let arr = util.getPages();
    let obj = {
        // main: './src/main'
    };
    arr.forEach(function (item,index) {
        obj[item] = `./src/pages/${item}/js/index.js`
    });
    return obj;
}

// getEntry();
module.exports = getEntry;

