var webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//加载模板文件
const CleanWebpackPlugin = require("clean-webpack-plugin");//删除哈希文件，
module.exports = {
    mode: "production", //development
	devtool: 'source-map',//cheap-module-eval-source-map
	entry:  __dirname + "/src/index.js",//已多次提及的唯一入口文件
	output: {
	  	path: __dirname + "/build",//打包后的文件存放的地方
	  	filename: "bundle.js"//打包后输出文件的文件名
	},
	devServer: {
	    contentBase: "/build",//本地服务器所加载的页面所在的目录
	    historyApiFallback: true,//不跳转
	    inline: true,//实时刷新
        host: '192.168.64.101',
        // 设置热替换
        hot: true,
        proxy: {
            '/data/*': {
                target: 'http://192.168.64.101:9093',
                //pathRewrite: {'^/data': ''},
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            }
        },
        disableHostCheck: true
	},
	module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
	 //    new CleanWebpackPlugin('build/*.*', {
		//     root: __dirname,
		//     verbose: true,
		//     dry: false
		// }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        new HtmlWebpackPlugin({
	        template: __dirname + "/src/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
	    })
        
    ],
}
// http://localhost:8080/data