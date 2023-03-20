// 生成验证码
const svgCaptcha = require('svg-captcha')
module.exports.getCaptchaService = async function() {
    return svgCaptcha.create({
        size: 4,
        ignoreChats: "iIl10oO", //过滤掉的字符
        noise: 6,
        color: true
    });
}