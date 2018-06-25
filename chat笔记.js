1：config文件配置的时候，相对路径是不能带点的；可以成功，
2：Redirect组件的必须属性是to属性，表示重定向的新地址。
	<Redirect to='/new-path' />                       用来改变地址
	<Route path='/new-path' component={NewPage}/>     用来包含显示这地址的内容
	Switch组件 ：只渲染所匹配到的第一个路由组件，
3：ReactDOM  dom三个字母完全是大写的，不然就找不到---忘了要写入id了；
4：最慢的速度需要大概18秒钟
	完全不要配置，start需要：56秒钟；server需要：30秒钟；--二次打包也需要25秒
5:配置单独打包模块： webpack lib-bundle.js lib.js   没有配置，并且新建目标文件，报成功，但新建了dist/main.js
	但是项目本身哪里都没有引入libjs这个文件，尝试从主html中引入
	配置之后速度确实是快了，但是为什么会找不到这个libjs文件呢？奇了怪了，路径绝度是对的
	start 和 server都只需要25秒左右  bundle.js只有十几K了；
	使用cdn引入打包速度也之后10秒不到--Provider是找不到的--不行，太多找不到
6：antd-mobile需要配置json文件才行                      直接配置打包报错
	cnpm install babel-plugin-transform-decorators-legacy --save   打包报错
	cnpm install babel-plugin-import --save-dev   还是不行
	真正的需要配置babelrc文件，而且要删除react-app这个字段
7：只配置config，js文件import是找不到react模块的-引入cdn也还是找不到
	果然跟大小写有关
	externals: {
        React: 'react'
    },
    在没有引入cdn的情况下，react-dom居然也是有效的，速度没有快，引入的应该是原来的
8:最终选择热更新组件，速度明显更快；连babelrc文件改变都能被更新到，算是可以了；--但要小心缓存
9：antd的输入框取值跟普通input是不一样的，是通过传参数的，
	路由转发也不一样，--为什么无法传到后台去？直接改配置文件完全不行
	改json增加转发也不行；--必须在data后面，因为配置是这样设置的；
	但报504错误，就是后端的问题: target: 'http://127.0.0.1:9093',前台配置要改
	仅仅是这里的问题，跟其他没有关系，json可以不用改，host也可以不用改
	前后端路径也是对应的
	后台无法接收到前台请求的问题，必须加转换组件：app.use(bodyParser.json())












