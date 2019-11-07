$(function(){
    // 1.请求侧边栏html,css,js
    function aside(res){
        // 1.1添加html
        $(res).replaceAll("aside");
        // 1.2添加css
        $('<link rel="stylesheet" href="./css/aside.css">').appendTo('head')
        // 1.3添加js
    };
    bfun.getAside(aside);
})