var bfun={
    //登录
    getLogin:function(login){
        //获取提交的数据
        var $sname=$("#sname").val().trim();
        var $spwd=$("#spwd").val().trim();
        if ($sname!=="" || $spwd!=="") {
            $.ajax({
                url:"http://127.0.0.1:5050/back/login",
                type:"post",
                data:`sname=${$sname}&spwd=${$spwd}`,
                success:res=>{
                    login(res);
                    
                }
            })
        }else{
            alert("账号或密码为空");
        }	
    },
    //修改密码
    //1.先查询
    selPass:function(selpwd){
        $.ajax({
            url:"http://127.0.0.1:5050/back/update/selpass",
            type:"post",
            dataType:"json",
            success:function(result){
              selpwd(result);
            }
        })
    },
    //2.再修改
    updPass:function(uptpwd){
        //获取要修改的数据
        var $sname=$("#sname").val();
        var $spwd=$("#spwd").val();
        //判断非空
        if ($sname !=="" && $spwd!=="") {
            $.ajax({
                url:"http://127.0.0.1:5050/back/update/updpass",
                type:"post",
                data:`sname=${$sname}&&spwd=${$spwd}`,
                dataType:"json",
                success:function(result){
                  uptpwd(result);
                }
            })
        }
    },

    //请求头部
    getHeader:function(head){
        $.ajax({
            url:'header.html',
            type:'get',
            success:res=>{
                head(res);
            }
        })
    },

    //请求侧边栏
    getAside:function(aside){
    	$.ajax({
    		url:"aside.html",
    		type:"get",
    		success:function(result){
    			aside(result)
    		}
    	})
    },

    //博文列表
    getListOper:function(list){
    	$.ajax({    
    		url:"http://127.0.0.1:5050/back/operList",
    		type:"get",
            dataType:"json",
    		success:function(res){
    			list(res);
    		}
    	})
    },
    //博文id查询
    getSelOper:function(selaid){
        //获取提交的数据
        var $aid=$("#aid").val().trim();
        if ($aid!=="") {
            $.ajax({
                url:"http://127.0.0.1:5050/back/selAidOper",
                type:"get",
                data:`aid=${$aid}`,
                dataType:"json",
                success:function(res){
                    selaid(res);
                }
            })
        }
    },
    //删除博文
    getDelOper:function(deloper){
        //获取要删除的id
        var $aid=window.location.href.split("?")[1];
        $.ajax({
            url:"http://127.0.0.1:5050/back/delOper",
            type:"get",
            data:`aid=${$aid}`,
            dataType:"json",
            success:function(result){
                deloper(result);
            }
        })
    },
    //修改博文(两步，查询修改)
    //查询
    updSelOper:function(callback){
        //获取要修改的id
        var $aid=window.location.href.split("=")[1];
        $.ajax({
            url:"http://127.0.0.1:5050/back/update/selOper",
            type:"get",
            data:`aid=${$aid}`,
            dataType:"json",
            success:function(result){
              callback(result);
            }
        })
    },
    //载修改
    updOper:function(callback){
        //获取要修改的值
        var $aid=$("#up_aid").val();
        var $title=$("#up_title").val().trim();
        var $simple=$("#up_simple").val().trim();
        var $cont=$("#up_cont").val().trim();
        if ($title!=="" || $simple!=="" || $content!==""){
            $.ajax({
                url:"http://127.0.0.1:5050/back/update/updOper",
                type:"get",
                data:`aid=${$aid}&title=${$title}&simple=${$simple}&cont=${$cont}`,
                dataType:"json",
                success:function(result){
                  callback(result);
                }
            })
        }else{
            alert("信息格式错误")
        }
    },
    //添加博文
    getAddOper:function(addoper){
        //获取提交的数据
        $title=$("#title").val().trim();
        $simple=$("#simple").val().trim();
        $content=$("#cont").val().trim();
        if ($title!=="" && $simple!=="" && $content!==""){
            $.ajax({
                url:"http://127.0.0.1:5050/back/addOper",
                type:"post",
                data:`title=${$title}&simple=${$simple}&content=${$content}`,
                dataType:"json",
                success:function(result){
                    addoper(result);
                }
            })
        }else{
            alert('提交的内容不能有空的')
        }    	
    },

    //学习推荐列表
    getStuList:function(operlist){
        $.ajax({
            url:'http://127.0.0.1:5050/back/stuList',
            type:'get',
            dataType:'json',
            success:function(res){
                operlist(res);
            }
        })
    },
    //id查询学习推荐
    getAidStu:function(adiStu){
        //接受参数
        var $lid=$("#lid").val().trim();
        if ($lid !="") {
            $.ajax({
                url:"http://127.0.0.1:5050/back/selAidStu",
                type:"get",
                data:`lid=${$lid}`,
                dataType:"json",
                success:function(res){
                    adiStu(res);
                }
            })
        }else{
            alert("请输入编号")
        }
    },
    //删除学习推荐
    getDelStu:function(delstu){
        //接受参数
        var $lid=window.location.href.split("?")[1];
        $.ajax({
            url:"http://127.0.0.1:5050/back/delAidStu",
            type:"get",
            data:`lid=${$lid}`,
            dataType:"json",
            success:function(res){
                delstu(res);
            }
        })
    },
    //修改学习推荐
    //1.先查询
    getSelStu:function(selStu){
        //接受参数
        var $lid=window.location.href.split("=")[1]
        $.ajax({
            url:"http://127.0.0.1:5050/back/update/selAidStu",
            type:"get",
            data:`lid=${$lid}`,
            dataType:"json",
            success:function(result){
                selStu(result);
            }
        })
    },
    //2.再修改
    getUpdStu:function(updstu){
        //接收参数
        var $lid=$("#lid").val();
        var $title=$("#title").val().trim();
        var $small_title=$("#small_title").val().trim();
        var $cont=$("#cont").val().trim();
        var $img=$("#File").val();
        console.log($lid,$title,$small_title,$cont)
        if ($title !=="" && $small_title !=="" && $cont !==""){
            $.ajax({
                url:"http://127.0.0.1:5050/back/update/updAidStu",
                type:"get",
                data:`lid=${$lid}&title=${$title}&small_title=${$small_title}&cont=${$cont}&img=null`,
                dataType:"json",
                success:function(result){
                    updstu(result);
                }
            })
        }else{
            alert("123123")
        }
    },
    //添加学习推荐
    getAddStu:function(addstu){
        //接收参数
        var $title=$("#title").val().trim();
        var $small_title=$("#small_title").val().trim();
        var $cont=$("#cont").val().trim();
        var $img=$("#File").val();
        if ($title!=="" || $small_title !=="" || $cont!==""){
            $.ajax({
                url:"http://127.0.0.1:5050/back/addStudy",
                type:"get",
                data:`title=${$title}&small_title=${$small_title}&cont=${$cont}&img=${$img}`,
                dataType:"json",
                success:function(result){
                    addstu(result);
                }
            })
        }else{
            alert("信息格式错误")
        }
    },
    


    //我的足迹
    // 添加我的足迹
    getAddTrac:function(addtrac){
        var $title=$("#title").val().trim();
        var $cont=$("#cont").val().trim();
        var $img=$("#File").val();
        if ($title!=="" || $cont!==""){
            $.ajax({
                url:"http://127.0.0.1:5050/back/addtracks",
                type:"get",
                data:`title=${$title}&cont=${$cont}&img=${$img}`,
                dataType:"json",
                success:function(result){
                    addtrac(result);
                }
            })
        }else{
            alert("信息格式错误")
        }
    },
    // 我的足迹列表
    getTracList:function(traclist){
        $.ajax({
            url:'http://127.0.0.1:5050/back/tracksList',
            type:'get',
            dataType:'json',
            success:function(res){
                traclist(res);
            }
        })
    },
    // 按id查询我的足迹
    getFidTrac:function(fidTrac){
        //接受参数
        var $fid=$("#fid").val();
        if ($fid !="") {
            $.ajax({
                url:"http://127.0.0.1:5050/back/fidTracks",
                type:"get",
                data:`fid=${$fid}`,
                dataType:"json",
                success:function(res){
                    fidTrac(res);
                }
            })
        }else{
            alert("请输入编号")
        }
    },
    // 删除我的足迹
    getDelTrac:function(delTrac){
        //接受参数
        var $fid=window.location.href.split("?")[1];
        $.ajax({
            url:"http://127.0.0.1:5050/back/delFidTrac",
            type:"get",
            data:`fid=${$fid}`,
            dataType:"json",
            success:function(res){
                delTrac(res);
            }
        })
    },
    // 修改我的足迹
    //1.先查询
    getSelTrac:function(selTrac){
        //接受参数
        var $fid=window.location.href.split("=")[1]
        $.ajax({
            url:"http://127.0.0.1:5050/back/update/selFidTrac",
            type:"get",
            data:`fid=${$fid}`,
            dataType:"json",
            success:function(result){
                selTrac(result);
            }
        })
    },
    //2.再修改
    getUpdTrac:function(updTrac){
        //接收参数
        var $fid=$("#fid").val();
        var $title=$("#title").val().trim();
        var $cont=$("#cont").val().trim();
        var $img=$("#File").val();
        if ($title !=="" && $cont !==""){
            $.ajax({
                url:"http://127.0.0.1:5050/back/update/updFidTrac",
                type:"get",
                data:`fid=${$fid}&title=${$title}&cont=${$cont}&img=${$img}`,
                dataType:"json",
                success:function(result){
                    updTrac(result);
                }
            })
        }else{
            alert("信息格式错误")
        }
    },
}