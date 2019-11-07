$(function(){
    //修改
    // 1.先查询 
    function selStu(res){
        if(res.length>0){
            var {lid,title,small_title,cont}=res[0];
            $("#lid").val(lid);
			$("#title").val(title);
            $("#small_title").val(small_title);
            $("#cont").val(cont);
        }else{
			alert("查询失败")
		}
    };
    bfun.getSelStu(selStu);
    // 2.再判断
    //标题
    $("#title").blur(function(){
		if ($(this).val()=="") {
			$("#tit").html(`标题不能为空`)
		}else if ($(this).val().length>50) {
			$("#sim").html(`标题最大长度为50位`)
		}else{
			$("#isupd").val(`false`)
		}
    })
    //二级标题
    $("#small_title").blur(function(){
		if ($(this).val()=="") {
			$("#sma_tit").html(`二级标题不能为空`)
		}else if ($(this).val().length>50) {
			$("#sma_tit").html(`二级标题最大长度为50位`)
		}else{
			$("#isupd").val(`false`)
		}
	})
	//简介
	$("#cont").blur(function(){
		if ($(this).val()=="") {
			$("#con").html(`简介不能为空`)
		}else if ($(this).val().length>300) {
			$("#con").html(`简介最大长度为300位`)
		}else{
			$("#isupd").val(`fasle`)
		}
	})
    // 3.然后提交
    $("#update").click(function(){
        function updstu(res){
            if (res==1) {
                alert("修改成功");
                location.href="http://127.0.0.1:5050/back/study.html"
            }else{
                alert('修改失败')
            }
        };
        bfun.getUpdStu(updstu);
    })
})