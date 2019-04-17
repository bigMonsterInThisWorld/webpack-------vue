/**
 *
 * 获取ipv4
 *
 *
 *
 *
 *
 */

const os = require('os');
let arr = os.networkInterfaces()['以太网'];
let ipv4 = '';
arr.forEach(function (item) {
    if(item.family === 'IPv4'){
        ipv4 = item.address
    }
});
module.exports  = ipv4;







