
import React from 'react'
import ReactDOM from 'react-dom';
import {Route,Redirect,BrowserRouter,Link,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Login from './container/login'

function Register(){
	return <h3>注册界面</h3>
}

function Dashboard(){
	return <h3>主面板界面</h3>
}

ReactDOM.render(
	(
		<BrowserRouter>
			<div>
				<Switch>
					<Route path='/login' exact component={Login}></Route>
					<Route path='/register' exact component={Register}></Route>
					<Route path='/dashboard' exact component={Dashboard}></Route>
					<Route   component={Login}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	),
	document.getElementById('root')
)
// <Provider></Provider>












