import React from 'react'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'


class Dashboard extends React.Component{

	render(){
		return (<div>
			<h2>主面板页-共用头底</h2>
			<List>
						<InputItem>用户名：</InputItem>
						<InputItem >密码：</InputItem>
					</List>
					<Button type='primary' >登录</Button>
					<WhiteSpace/>
					<Button type="primary">注册</Button>
			
		</div>)
	}
}


export default Dashboard








