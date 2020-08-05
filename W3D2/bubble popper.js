$(function(){
 
    "use strict";
    let timerId=null;


 
    $('#start').click(showCircle);
 
    function showCircle(){
 
        let width=$('#width').val();
 
        let num=$('#number').val();
 
        $('.circle').show().css({"height":width,"width":width,"top":"200px","left":"50%"});
 
        let count=parseInt($('#number').val());
 
        for(let i=0;i<count;i++){
            var $newCircle = $('<div />').appendTo('body');
            $newCircle.addClass("circle");
            let col="rgb("+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255)+","+Math.floor(Math.random() * 255) +")";
            $newCircle.css("background-color",col);
            $newCircle.click(hide);
            $newCircle.mouseenter(changeOpacity);
            $newCircle.mouseleave(resetOpacity);
        }
 
        //$(body).append($('<div class="circle"></div>'));


 
        timerId=setInterval(grow,$('#rate').val());



 
    }
    function grow(evt){
        let growAmt=parseInt($('#growAmt').val());
 
        let circle=$('.circle');

