$(function(){
    //学无止境推荐
    function list(res){
        $(res).each(function(i,item){
            var {lid,title,small_title,cont,img}=item;
            $(`<div class="col-12 bg-hei my-2 p-3 border1">
            <div class="row m-0">
                <!--图片-->
                <div class="col-lg-3 col-sm-12">
                    <img src="/${img}" class="w-100"/>
                </div>
                <!--介绍-->
                <div class="col-lg-9 col-sm-12 font-color">
                    <h4 class="font-weight-bold my-4"><a href="javascript:;">${title}</a></h4>
                    <p>${small_title}</p>
                    <p>${cont}</p>
                </div>
            </div>
        </div>`).appendTo("#lst");
        })
    };
    fun.getLimitIndex(list);
})