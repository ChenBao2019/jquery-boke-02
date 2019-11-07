$(function(){
    function list(res){
        $(res).each(function(i,item){
            var {fid,title,cont,img}=item;
            $(`<div class="col-12 px-0">
            <div class="row mx-0">
                <div class="col-4 p-3 text-center"><img src="/${img}" class="w-75" alt=""/></a>
                </div>
                <div class="col-8 p-3 text-left">
                    <h5 class="font-weight-bold my-4">
                        <a href="javascript:;">${title}</a>
                    </h5>
                    <p>${cont}</p>
                </div>
            </div>
        </div>`).appendTo("#lst");
        })
    };
    fun.getTracksIndex(list);
})