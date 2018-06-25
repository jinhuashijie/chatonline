import React from 'react'
import {List,InputItem,WingBlank,WhiteSpace,Button,Radio} from 'antd-mobile'


class Register extends React.Component{

	render(){
		const RadioItem=Radio.RadioItem
		return (<div>
			<h2>注册界面</h2>
				<WingBlank>
					<List>
						<InputItem >用户名</InputItem>
						<InputItem type="password" >密码</InputItem>
						<InputItem type="password" >确认密码</InputItem>
						<RadioItem 
						>牛人</RadioItem>
						<RadioItem
						>boss</RadioItem>
					</List>
					<WhiteSpace/>
					<Button type="primary">注册</Button>
				</WingBlank>
			
		</div>)
	}
}


export default Register








