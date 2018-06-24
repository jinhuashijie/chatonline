cnpm install webpack webpack-cli webpack-dev-server babel-core babel-loader babel-preset-env babel-preset-react react react-dom style-loader css-loader   --save-dev
cnpm install express mongoose body-parser cookie-parser socket.io nodemon socket.io-client axios  --save-dev
---插件部分
cnpm install html-webpack-plugin clean-webpack-plugin  --save-dev  
cnpm install antd-mobile redux react-router-dom react-redux redux-thunk --save-dev

目录结构：

chatonline
		node_modules+ 依赖项
		src+        自己写的静态文件目录
			redux+       中间件
			component+   辅助插件
			container+   主路由文件
			index.js    主入口js文件   需要修改配置文件的入口和出口路径了
		server+     服务端的文件
		build+      打包后静态资源存放的文件夹

















