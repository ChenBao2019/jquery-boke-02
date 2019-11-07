//数据库连接池

// 1.连接数据库模块
const mysql=require('mysql');
// 2.创建连接池对象
var pool=mysql.createPool({
	host:'127.0.0.1',   //数据库地址
	port:'3306',        //端口
	user:'root',        //用户名
	password:'',        //密码
	database:'boke',    //数据库名
	connectionimit:15   //连接数量
});
// 3.导出连接池对象
module.exports=pool;