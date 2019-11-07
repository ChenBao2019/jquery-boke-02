$(function(){
    // 1.列表
    function traclist(res){
        $(res).each(function(i,item){
			var {fid,title,cont,img,ftime}=item;
			$(`<tr>
	            	<td>${fid}</td>
                    <td>${title}</td>
	                <td>${cont}</td>
					<td>${img}</td>
					<td>${ftime}</td>
	                <td style="text-align:center">
		                <a href="?${fid}" style="color:black">删除</a>
		                <a href="upd-tracks.html?aid=${fid}" style="color:black;">修改</a>
	                </td>
	            </tr>`).appendTo("#list>table")
		})
    };
    bfun.getTracList(traclist);
    // 2.按id查询
    $("#fid").next().click(function(){
        function fidTrac(res){
            if (res !='0') {
				var {fid,title,cont,img,ftime}=res[0];
				$(`<table border="1">
                <tr>
	                <th>编号</th>
					<th>标题</th>
                    <th>简介</th>
                    <th>图片</th>
	                <th>时间</th>
                </tr>
                <tr>
	                <td>${fid}</td>
	                <td>${title}</td>
	                <td>${cont}</td>
                    <td>${img}</td>
                    <td>${ftime}</td>
                </tr>
                </table>`).appendTo("#selects");
			}else{
				alert('查无此编号');
			}
        };        
    bfun.getFidTrac(fidTrac);
    })
    // 3.删除
    function delTrac(result){
		if (result==1) {
			location.href="http://127.0.0.1:5050/back/tracks.html"
			alert("删除成功")
		}
	}
	bfun.getDelTrac(delTrac)
})