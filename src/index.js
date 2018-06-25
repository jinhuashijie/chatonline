
import React from 'react'
import ReactDOM from 'react-dom';
import {Route,Redirect,BrowserRouter,Link,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Login from './container/login'
import Register from './container/register'
import Geniusinfo from './container/geniusinfo'
import Dashboard from './container/dashboard'

// function Dashboard(){
// 	return <h3>主面板界面--登陆后的主页</h3>
// }
function Err404(){
	return <h3>404引入cdn，配置两个22秒++</h3>
}
ReactDOM.render(
	(
		<BrowserRouter>
			<div>
				<Switch>
					<Route path='/' exact component={Login}></Route>
					<Route path='/login' exact component={Login}></Route>
					<Route path='/register' exact component={Register}></Route>
					<Route path='/dashboard' exact component={Dashboard}></Route>
					<Route path='/geniusinfo' exact component={Geniusinfo}></Route>
					<Route   component={Err404}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	),
	document.getElementById('root')
)
// <Provider></Provider>

					// <Route path='/register' exact component={Register}></Route>
					// <Route path='/dashboard' exact component={Dashboard}></Route>
					// <Route   component={Login}></Route>












