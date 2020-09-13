const path = require('path');//引入path模块
const CompressionPlugin = require('compression-webpack-plugin')
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}
module.exports = {
    publicPath: './',
    assetsDir: 'static',
    productionSourceMap: false,
    outputDir:process.env.outputDir,
    chainWebpack:(config)=>{
        config.resolve.alias
            .set('@',resolve('./src'))
            .set('components',resolve('./src/components'))
        //set第一个参数：设置的别名，第二个参数：设置的路径

    },
    configureWebpack: config =>{
        if (process.env.NODE_ENV ==='production'){
            return {
                plugins: [
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css/, //对js，css，html压缩
                        threshold: 10240, //大于10K才压
                        deleteOriginalAssets: false //是否删除原文件
                    })
                ]
            }
        }
    }
}
