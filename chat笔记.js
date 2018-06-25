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














