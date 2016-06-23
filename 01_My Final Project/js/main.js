$(window).scroll(function() {

    if ($(this).scrollTop() > 50){  
        $('header').addClass("box-shadow");
    }
    else{
        $('header').removeClass("box-shadow");
    }
});

$("#mobile-hamburger").click(function(){
    $("#list-nav").toggle();
 
});