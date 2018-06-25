import React from 'react'
import {List,InputItem,WingBlank,WhiteSpace,Button} from 'antd-mobile'
import axios from 'axios'

class Login extends React.Component{
	constructor(props){
		super(props)
		this.state={
			user:'',
			pwd:'',
			wrong:"用户名与密码不匹配"
		}
		this.getVal=this.getVal.bind(this)
		this.onPost=this.onPost.bind(this)
		this.rediTo=this.rediTo.bind(this)
	}
	componentDidMount(){
		axios.get("/data/log")
		.then(res=>{
				console.log(res.data)
		})
	}
	getVal(key,val){
		this.setState({
			[key]:val
		})
	}
	rediTo(){
		// console.log(this.props)
		// console.log(this.props.match)
		// console.log(this.props.match.path)
		//this.props.match.path='/login'
		this.props.history.push("/geniusinfo")
	}
	onPost(){
		let t=this.rediTo;
		const a=this.state.user
		const b=this.state.pwd
		axios.post("/data/login",{usera:a,pwdb:b})
		.then(res=>{
				console.log(res.data)
				if(res.data!==null){
					t()
				}else{console.log('错误')}
				
		})
		
	}
	render(){
		return (<div>
			<h2>登录界面：{this.state.wrong}</h2>
			<List>
				<InputItem type='text' onChange={(v)=>{this.getVal('user',v)}}>用户名：</InputItem>
				<InputItem type='text' onChange={(v)=>{this.getVal('pwd',v)}} >密码：</InputItem>
			</List>
			<Button type='primary' onClick={this.onPost} >登录</Button>
			<WhiteSpace/>
			<Button type="primary">注册</Button>
			<p>{this.state.user}+{this.state.pwd}</p>
		</div>)
	}
}


export default Login








