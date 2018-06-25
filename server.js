const express =require("express") //引入模块，nodejs还不支持es6，只能用require
const bodyParser=require("body-parser")
const cookieParser=require("cookie-parser")
const path=require("path")
const app=express()
app.use(bodyParser.json())
const mongoose =require("mongoose")
const connect="mongodb://localhost:27017/chatonline"//这里连接到mongoose
mongoose.connect(connect)//这三个合起来算是连接成功
mongoose.connection.on("connected",function(){
	console.log("连接mongoose成功")//这里在cmd会打印出来
})

const User =mongoose.model("user",new mongoose.Schema({//user小写无关-代表表名
	user:{type:String,require:true},//有两个字段，定义了类型，是否必须；
	pwd:{type:String,require:true},//必须大写，不大写就报错
	type:{type:String,require:true},
	avatar:{type:String},
	desc:{type:String},
	title:{type:String},
	company:{type:String},
	money:{type:String}
}))

// User.create({//User应该是表名了，下面就直接是数据，上面的小写user是啥？
// 	user:"genius",                    //小写的user应该是默认主键之类的
// 	pwd:'123',  //还不能刷新太快了，数据库连接数据相当慢
// 	type:'genius',
// 	avatar:'1',
// 	desc:'个人简介',
// 	title:'我睡牛人',
// 	company:'bta',
// 	money:'10K'
// },function(err,doc){
// 	if(!err){
// 		console.log(doc)//新增数据成功
// 	}else{
// 		console.log(err)
// 	}
// })
app.get('/data/log',function(req,res){//这里是自定义端口后面的路径
	console.log('连接数据库--输出内容到页面')
	User.find({},function(err,doc){//从数据库查询出数据病输出到页面上
		if(!err){
			//console.log(doc)
			res.json(doc)
		}else{console.log(err)}
	})
})
app.post('/data/login',function(req,res){
	console.log(req.body,52)
	// User.find({},function(err,doc){
	// 	if(!err){
	// 		//console.log(doc)
	// 		res.json(doc)
	// 	}else{console.log(err)}
	// })
	const {usera,pwdb}=req.body
	console.log(usera,pwdb)//a,b解构出来两个属性值
	User.findOne({user:usera,pwd:pwdb},function(err,doc){//,'pwd':0
		if(!err){
			// console.log("连接失败")
			return res.json(doc)
		}else{
			// res.cookie('userid',doc._id)
			 return res.json({a:'没有'})//到这里是直接连接成功的，
		}
	})
	//res.json({name:"you",home:"test"})
})

app.listen(9093,function(){//到这里就可以打开端口了；
	console.log("监听9093端口")//只是页面还没有任何内容
})



