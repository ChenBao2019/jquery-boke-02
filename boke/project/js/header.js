$(function(){
    function callback(result){
        $(result).replaceAll("header");
        $(`<link rel="stylesheet" href="./css/header.css">`).appendTo("head");
    }
    fun.getHeader(callback);
})