import React from 'react'
import {List,InputItem,WingBlank,WhiteSpace,Button,NavBar,TextareaItem } from 'antd-mobile'


class Geniusinfo extends React.Component{

	render(){
		return (
			<div>
				<NavBar >牛人完善信息页</NavBar>
				<InputItem >求职岗位</InputItem>
				<TextareaItem
					rows={3}
					autoHeight
					title='个人简介'
				></TextareaItem>
				<Button 
					type="primary"
				>保存</Button>
			</div>)
	}
}


export default Geniusinfo








