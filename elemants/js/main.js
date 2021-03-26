$(document).ready(function(){

    $("#hide").click(function(){
        $("h1").hide(1000);
    })
    
    $("#show").click(function(){
        $("h1").show(1000);
    })
    $("#show-box").click(function(){
        $(".demo1").fadeTo(5000);
    })
    $("#show-box").click(function(){
        $(".demo2").fadeIn(2000);
    })
    $("#show-box").click(function(){
        $(".demo3").slideDown(3000);
    }) 
    $("#stop").click(function(){
        $(".demo3").stop();
    })




})