// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

//vue-cli 的配置文件
// vue-cli的配置文件
module.exports = {
    devServer: {
        proxy: {
            "/api": {
                // target: "http://test.my-site.com",
                target: "http://127.0.0.1:3002"
            },
            "/static": {
                target: "http://127.0.0.1:3002"
            }
        },
    },
    configureWebpack: require("./webpack.config"),
};