$(function(){
    //先查询
    function selTrac(res){
        if(res.length>0){
            var {fid,title,cont}=res[0];
            $("#fid").val(fid);
			$("#title").val(title);
            $("#cont").val(cont);
        }else{
			alert("查询失败")
		}
    };
    bfun.getSelTrac(selTrac);
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
        function updTrac(res){
            if (res==1) {
                alert("修改成功");
                location.href="http://127.0.0.1:5050/back/tracks.html"
            }else{
                alert('修改失败')
            }
        };
        bfun.getUpdTrac(updTrac);
    })
})