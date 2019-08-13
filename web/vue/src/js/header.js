

$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
           $(result).replaceAll("header");
        //    动态创建样式
          $(`<link rel="stylesheet" href="../css/header.css">`).appendTo("head");
        }
    })
})