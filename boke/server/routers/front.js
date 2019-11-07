//前端路由器

// 1.连接express模块
const express=require('express');
// 2.连接数据库连接池模块
const pool=require('../pool.js');
// 3.创建路由对象
var router=express.Router();
// 4.接口

// 4.1首页最新发布列表
router.get('/list',function(req,res){
    // 1.设置sql语句
    var sql="select * from bk_article order by aid desc limit 3";
	// 2.执行sql语句
	pool.query(sql,function(err,result){
		if(err) throw err;
		if (result.length >0) {
			res.send(result);
		}
	});
});
// 4.2详情页
router.get('/details',function(req,res){
	// 1.获取要查看的博文的id
    var $id=req.query.id;
    // 2.设置sql语句
    var sql="select * from bk_article where aid=?";
	// 3.执行sql语句
	pool.query(sql,[$id],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}
	})
})
//首页更多
router.get('/indexMore',function(req,res){
	var sql='select * from bk_article';
	pool.query(sql,function(err,result){
		if(err)throw err;
		if(result.length>0){
			res.send(result)
		}else{
			res.send("0")
		}
	})
})


// 学无止境推荐
router.get('/limit/list',function(req,res){
	var sql="select * from bk_learn  limit 4";
	pool.query(sql,function(err,result){
		if(err)throw err;
		if(result.length>0){
			res.send(result)
		}else{
			res.send("0")
		}
	})
})
// 学无止境更多
router.get('/limit/more',function(req,res){
	var sql="select * from bk_learn";
	pool.query(sql,function(err,result){
		if(err)throw err;
		if(result.length>0){
			res.send(result)
		}else{
			res.send("0")
		}
	})
})

// 我的足迹首页
router.get('/tracks/list',function(req,res){
	var sql="select * from bk_footprint order by fid limit 4";
	pool.query(sql,function(err,result){
		if(err)throw err;
		if(result.length>0){
			res.send(result)
		}else{
			res.send("0")
		}
	})
})
// 我的足迹更多
router.get('/tracks/more',function(req,res){
	var sql="select * from bk_footprint";
	pool.query(sql,function(err,result){
		if(err)throw err;
		if(result.length>0){
			res.send(result)
		}else{
			res.send("0")
		}
	})
})
// 5.导出路由对象
module.exports=router;