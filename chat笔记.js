1：config文件配置的时候，相对路径是不能带点的；可以成功，
2：Redirect组件的必须属性是to属性，表示重定向的新地址。
	<Redirect to='/new-path' />                       用来改变地址
	<Route path='/new-path' component={NewPage}/>     用来包含显示这地址的内容
	Switch组件 ：只渲染所匹配到的第一个路由组件，
3：ReactDOM  dom三个字母完全是大写的，不然就找不到---忘了要写入id了；













