// webpack 配置文件
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode:"development", // 模式 production development  development模式打包出来的不压缩 [- -]-v
    entry: "./src/js/index.js", // 入口文件
    output: {
        filename: "bundle.js", // 打包后的文件
        path: path.resolve(__dirname,"./build") // 文件的绝对路径,需要用node.js中的path模块解析  __dirname: 当前目录
    },
    devServer:{
        port: 3000,
        progress: true,
        contentBase: "./build",
        open: true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html", // 模板所在路径
            filename: "index.html" // 打包后的文件
        })
    ]
}