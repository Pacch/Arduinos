$(document).ready(function(){
    $('.container-whats-arduino').click(function(){
       $('.container-contenido').slideDown();
       $(this).hide();
    });
    $('.close').click(function(){
        $('.container-contenido').slideUp('slow');
        $('.container-whats-arduino').show();
        $('html,body').animate({scrollTop: 0}, 600);
     });
 });

 console.log($(document).scrollTop());

 $(window).scroll(function() {
    if($(document).scrollTop() >= 37) {
        $('header').addClass('scroll');
        $('.header-menu').addClass('scroll');
        $('.arduino-logo').addClass('scroll-logo');
        $('.arduino-logo-compressed').addClass('scroll-logo-compressed');
        $('.container-logos').addClass('scroll');

    }
    else{
        $('header').removeClass('scroll');
        $('.header-menu').removeClass('scroll');
        $('.arduino-logo').removeClass('scroll-logo');
        $('.arduino-logo-compressed').removeClass('scroll-logo-compressed');
        $('.container-logos').removeClass('scroll');
    }
 });
