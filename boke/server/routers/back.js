//后端路由器


// 1.连接express模块
const express=require('express');
// 2.连接数据库连接池模块
const pool=require('../pool.js');
// 3.创建路由对象
var router=express.Router();
// 4.接口

// 登录
router.post('/login',function(req,res){
	//获取提交的数据
	var $sname=req.body.sname;
	var $spwd=req.body.spwd;
	//执行sql语句
	pool.query('select * from super_user where sname=? and spwd=?',[$sname,$spwd],
		function(err,result){
			if(err) throw err;
			if (result.length > 0) {
				res.send('1');
			}else{
				res.send('0');
			}
		}
	);
});

// 首页博文
// 添加博文
router.post('/addOper',function(req,res){
	//获取提交时间
	var time=new Date();
	var $uptime=time.toLocaleString();
	var $title=req.body.title;
	var $simple=req.body.simple;
	var $cont=req.body.content;
	pool.query('insert into  bk_article values(?,?,?,?,?)',
		[null,$title,$simple,$cont,$uptime],function(err,result){
			if(err) throw err;
			if (result.affectedRows > 0) {
				res.send('1');
			}else{
				res.send('0');
			}
		});
});

// 博文列表
router.get('/operList',function(req,res){
	pool.query('select * from bk_article order by aid desc',function(err,result){
		if(err) throw err;
		if(result.length > 0){
			res.send(result);
			return;
		}
	});
});

// 根据id查询博文
router.get('/selAidOper',function(req,res){
	var $aid=req.query.aid;
	pool.query('select * from bk_article where aid=?',[$aid],
	function(err,result){
		if(err) throw err;
		if(result.length >0){
			res.send(result);
		}else{
			res.send('0');
		}
	});
});

// 删除博文
router.get('/delOper',function(req,res){
	var $aid=req.query.aid;
	pool.query('delete from bk_article where aid=?',[$aid],
		function(err,result){
			if(err) throw err;
			if (result.affectedRows > 0) {
				res.send('1')
			}else{
				res.send('0');
			}
		});
});

// 修改博文
// 1.先查询博文
router.get('/update/selOper',function(req,res){
	var $aid=req.query.aid;
	pool.query('select * from bk_article where aid=?',[$aid],
		function(err,result){
			if(err) throw err;
			if (result.length >0) {
				res.send(result);
			}else{
				res.send('0');
			}
		});
});
// 2.再修改博文
router.get('/update/updOper',function(req,res){
	//创建提交事件
	var time=new Date();
	var $uptime=time.toLocaleString();
	//获取提交的数据
	var $aid=req.query.aid;
	var $title=req.query.title;
	var $simple=req.query.simple;
	var $cont=req.query.cont;
	//执行sql语句
	pool.query('update bk_article set title=?,simple=?,uptime=?,cont=? where aid=?',[$title,$simple,$uptime,$cont,$aid],
		function(err,result){
			console.log(result);
			if(err) throw err;
			if (result.affectedRows>0) {
				res.send('1');
			}else{
				res.send('0');
			}
        }
    );
});

// 修改密码
// 1先查询
router.post('/update/selpass',function(req,res){
	pool.query('select * from super_user',function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}
	});
});
// 2再修改
router.post('/update/updpass',function(req,res){
	//获取提交的数据
	var $sname=req.body.sname;
	var $spwd=req.body.spwd;
	//执行sql语句
	pool.query('update super_user set spwd=? where sname=?',[$spwd,$sname],
	function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	});
});



//  学无止境推荐
// 列表
router.get('/stuList',function(req,res){
	var sql='select * from bk_learn order by lid desc';
	pool.query(sql,function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result)
		}else{
			res.send(0)
		}
	})
})

// 新增
router.get('/addStudy',function(req,res){
	var $title=req.query.title;
	var $small_title=req.query.small_title;
	var $cont=req.query.cont;
	var $img=req.query.img;
	//获取提交时间
	var time=new Date();
	var $ftime=time.toLocaleString();
	var sql='insert into  bk_learn values(?,?,?,?,?,?)';
	pool.query(sql,[null,$title,$small_title,$cont,$img,$ftime],function(err,result){
		if(err) throw err;
		if (result.affectedRows > 0) {
			res.send('1');
		}else{
			res.send('0');
		}
	})
})

// id查询
router.get('/selAidStu',function(req,res){
	var $lid=req.query.lid;
	var sql='select * from bk_learn where lid=?';
	pool.query(sql,[$lid],function(err,result){
		if(err) throw err;
		if (result.length > 0) {
			res.send(result);
		}else{
			res.send('0');
		}
	})
})

// 修改
// 1.先查询
router.get('/update/selAidStu',function(req,res){
	var $lid=req.query.lid;
	var sql='select * from bk_learn where lid=?';
	pool.query(sql,[$lid],function(err,result){
		if(err) throw err;
		if (result.length > 0) {
			res.send(result);
		}else{
			res.send('0');
		}
	})
})
// 2.再修改
router.get('/update/updAidStu',function(req,res){
	var $lid=req.query.lid;
	var $title=req.query.title;
	var $small_title=req.query.small_title;
	var $cont=req.query.cont;
	var $img=req.query.img;
	//创建提交时间
	var time=new Date();
	var $ftime=time.toLocaleString();
	//执行sql语句
	pool.query('update bk_learn set title=?,small_title=?,cont=?,img=?,ftime=? where lid=?',
	[$title, $small_title,$cont,$img,$ftime,$lid],
		function(err,result){
			console.log(result);
			if(err) throw err;
			if (result.affectedRows>0) {
				res.send('1');
			}else{
				res.send('0');
			}
        }
    );
})

// 删除学习推荐
router.get('/delAidStu',function(req,res){
	//接收参数
	var $lid=req.query.lid;
	var sql="delete from bk_learn where lid=?";
	pool.query(sql,[$lid],function(err,result){
		if(err)throw err;
		if (result.affectedRows>0) {
			res.send('1');
		}else{
			res.send('0');
		}
	})
})


//我的足迹
//新增我的足迹
router.get('/addtracks',function(req,res){
	//接收参数
	var $title=req.query.title;
	var $img=req.query.img;
	var $cont=req.query.cont;
	//创建提交时间
	var time=new Date();
	var $ftime=time.toLocaleString();
	//设置sql语句
	var sql="insert into  bk_footprint values(?,?,?,?,?)";
	//执行sql语句
	pool.query(sql,[null,$title,$img,$ftime,$cont],function(err,result){
		if(err)throw err;
		//发送结果
		if (result.affectedRows > 0) {
			res.send('1');
		}else{
			res.send('0');
		}
	})
})
// 我的足迹列表
router.get('/tracksList',function(req,res){
	var sql="select * from bk_footprint order by fid desc";
	pool.query(sql,function(err,result){
		if(err)throw err;
		if(result.length>0){
			res.send(result)
		}else{
			res.send('0')
		}
	})
})
// 按id查询我的足迹
router.get('/fidTracks',function(req,res){
	var $fid=req.query.fid;
	var sql='select * from bk_footprint where fid=?';
	pool.query(sql,[$fid],function(err,result){
		if(err) throw err;
		if (result.length > 0) {
			res.send(result);
		}else{
			res.send('0');
		}
	})
})
// 删除我的足迹
router.get('/delFidTrac',function(req,res){
	//接收参数
	var $fid=req.query.fid;
	var sql="delete from bk_footprint where fid=?";
	pool.query(sql,[$fid],function(err,result){
		if(err)throw err;
		if (result.affectedRows>0) {
			res.send('1');
		}else{
			res.send('0');
		}
	})
})
// 修改我的足迹
	// 1.先查询
	router.get('/update/selFidTrac',function(req,res){
		var $fid=req.query.fid;
		var sql='select * from bk_footprint where fid=?';
		pool.query(sql,[$fid],function(err,result){
			if(err) throw err;
			if (result.length > 0) {
				res.send(result);
			}else{
				res.send('0');
			}
		})
	})
	// 2.在修改
	router.get('/update/updFidTrac',function(req,res){
		var $fid=req.query.fid;
		var $title=req.query.title;
		var $img=req.query.img;
		var $cont=req.query.cont;
		//创建提交时间
		var time=new Date();
		var $ftime=time.toLocaleString();
		//执行sql语句
		pool.query('update bk_footprint set title=?,img=?,cont=?,ftime=? where fid=?',
		[$title,$img,$cont,$ftime,$fid],
			function(err,result){
				console.log(result);
				if(err) throw err;
				if (result.affectedRows>0) {
					res.send('1');
				}else{
					res.send('0');
				}
			}
		);
	})
// 5.导出路由对象
module.exports=router;