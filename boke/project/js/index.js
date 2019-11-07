$(function(){
    function callback(result){
        $(result).each(function(i,item){
			var {aid,title,simple,uptime}=item;
			$(`<div class="w-100 p-2 my-3 box">
            <div class="w-100 p-2 article mt-2">
                <div class="my-1 clearfix">
                    <h5 class="font-weight-bold float-left">标题：</h5>
                    <a href="details.html?${aid}">
                        <span id="title" style="color:black;font-size:18px;font-weight:800">${title}</span>
                    </a>                    
                </div>
                <div class="my-1 clearfix">
                    <h5 class="font-weight-bold float-left">时间：</h5>
                    <div id="c_time">${uptime}</div>
                </div>
                <div class="my-1 clearfix">
                    <h5 class="font-weight-bold float-left">简介：</h5>
                    <div id="jianjie">${simple}</div>
                </div>
            </div>
        </div>`).appendTo("#lst")
		})
    }
    fun.getIndex(callback);
})