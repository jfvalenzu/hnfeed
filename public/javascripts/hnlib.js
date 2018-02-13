$(document).ready(function(){
    
    
    $(".fa-trash").hide();
    
    
    $("li").mouseover(function(event){
       // event.stopPropagation();
        $(this).find(".fa-trash").show();
        
        
    });
    $("li").mouseout(function(event){
        event.stopPropagation();
        $(this).find(".fa-trash").hide();
    });
    
    
    $("i.fa-trash").click(function(event){
        
        var row = $(this).parent().parent().parent();
        var id = $(this).attr("id");
        
            $.ajax({
                type: 'post',
                url: '/delete/' + id
            }
        ).done(function(event){
                row.remove();
            });
        
        
    });
    
    
});