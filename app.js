/*
    MD5加密
*/

var crypto = require("crypto");

function md5(pwd) {
    var md5 = crypto.createHash("md5");  // createHash:MD5是一种常用的哈希算法
    var password = md5.update(pwd).digest("base64");
    return password;
}

var mathRan = parseInt(Math.random()*1000);
console.log(md5("123456" + mathRan));    // 生成自己的加密算法  YSrc8VhoN//FAmqx7vM22Q==
console.log(md5(md5("0123456789").substr(1,6)));  // AlySPROqK3M//F0l8e4WWw==
console.log(md5(md5("123456")));                  // DIjVZpTC+zvMQW4SLBBy6w==
