// 服务器

// 1.连接express模块
const express=require('express');
// 2.连接body-parser模块 设置post结束数据方式
const bodyParser=require('body-parser');
// 3.连接cors模块  解决跨域问题
const cors=require("cors");
// 4.连接路由器模块
// 4.1连接前端路由器模块
const frontRouter=require('./routers/front.js');
// 4.2连接后端路由器模块
const backRouter=require('./routers/back.js');
// 5.创建服务器
var app=express();
// 6.设置端口号
app.listen(5050);
// 7.设置post结束数据方式
app.use(bodyParser.urlencoded({
	extended:false
}));
// 8.解决跨域问题
app.use(cors({
    origin:["http://localhost:8080","http://127.0.0.1:5500"]
  }));
// 9.托管资源
app.use(express.static('./public'));
app.use(express.static('../project'));
// 10.挂载路由
// 10.1挂载前台路由
app.use('/front',frontRouter);
// 10.2挂载后台路由
app.use('/back',backRouter);