import React from 'react'
import ReactDOM from 'react-dom';
import {Route,Redirect,BrowserRouter,Link,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import Login from './container/login'
 

ReactDOM.render(
	(<Provider>
		<BrowserRouter>
			<div>
				<Switch>
					<Route path='/' exact component={Login}></Route>
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>),
	document.getElementById('root')
)













