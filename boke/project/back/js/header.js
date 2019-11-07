$(function(){
    // 1.判断是否登录
    if(!sessionStorage.getItem('key')){
        //没有登录就返回登录界面
        location.href="http://127.0.0.1:5050/back/login.html";
        return;
    }
    // 2.请求头部html，css，js
    function head(res){
        //2.1添加html
        $(res).replaceAll("header");
        //2.2添加css
        $('<link rel="stylesheet" href="./css/header.css">').appendTo('head');
        //2.3请求成功过后更换管理员的名称
        let admin_name=((sessionStorage.getItem('key').split(','))[0]);
        $("#admin").html(admin_name);
        //2.4 绑定事件 退出登录
        $("#logout").click(function(){
            //清空session的值
            sessionStorage.removeItem('key');
            location.href="http://127.0.0.1:5050/back/login.html";
        })
    }
    bfun.getHeader(head);
})