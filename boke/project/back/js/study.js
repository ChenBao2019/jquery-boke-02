$(function(){
    // 1.显示列表
    function list(res){
        $(res).each(function(i,item){
			var {lid,title,small_title,cont,img,ftime}=item;
			$(`<tr>
	            	<td>${lid}</td>
                    <td>${title}</td>
                    <td>${small_title}</td>
	                <td>${cont}</td>
					<td>${img}</td>
					<td>${ftime}</td>
	                <td style="text-align:center">
		                <a href="?${lid}" style="color:black">删除</a>
		                <a href="upd-study.html?aid=${lid}" style="color:black;">修改</a>
	                </td>
	            </tr>`).appendTo("#list>table")
		})
    }
    bfun.getStuList(list)
    // 2.id查询
    $("#lid").next().click(function(){
        function aidStu(res){
            if (res !='0') {
				var {lid,title,small_title,cont,img,ftime}=res[0];
				$(`<table border="1">
                <tr>
	                <th>编号</th>
					<th>标题</th>
					<th>二级标题</th>
                    <th>简介</th>
                    <th>图片</th>
	                <th>时间</th>
                </tr>
                <tr>
	                <td>${lid}</td>	·
					<td>${title}</td>
					<td>${small_title}</td>
	                <td>${cont}</td>
                    <td>${img}</td>
                    <td>${ftime}</td>
                </tr>
                </table>`).appendTo("#selects");
			}else{
				alert('查无此编号');
			}
        };        
    bfun.getAidStu(aidStu);
    })
    // 3.删除
    function delstu(result){
		if (result==1) {
			location.href="http://127.0.0.1:5050/back/study.html"
			alert("删除成功")
		}
	}
	bfun.getDelStu(delstu)
})