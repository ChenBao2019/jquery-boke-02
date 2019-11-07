$(function(){
    //标题
    $("#title").blur(function(){
		if ($(this).val()=="") {
			$("#tit").html(`标题不能为空`)
		}else if ($(this).val().length>50) {
			$("#tit").html(`标题最大长度为50位`)
		}else{
			$("#isadd").val(`true`)
		}
	})
	//二级标题
    $("#small_title").blur(function(){
		if ($(this).val()=="") {
			$("#sma_tit").html(`二级标题不能为空`)
		}else if ($(this).val().length>50) {
			$("#sma_tit").html(`二级标题最大长度为50位`)
		}else{
			$("#isadd").val(`true`)
		}
	})
	//简介
	$("#cont").blur(function(){
		if ($(this).val()=="") {
			$("#con").html(`简介不能为空`)
		}else if ($(this).val().length>300) {
			$("#con").html(`简介最大长度为300位`)
		}else{
			$("#isadd").val(`true`)
		}
    })
    //添加
    $("#add").click(function(){
        function addstu(res){
            if (res==1) {
				alert('提交成功');
            	location.href="http://127.0.0.1:5050/back/study.html";
			}else{
				alert("错误")
			}
        };
        bfun.getAddStu(addstu);
    })
})