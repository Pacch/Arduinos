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
     $('.flecha-superior').click(function(){
        $('html,body').animate({scrollTop: 0}, 600);
     });

 });

 $(window).scroll(function() {
    if($(document).scrollTop() >= 37) {
        $('header').addClass('scroll');
        $('.header-menu').addClass('scroll');
        $('.arduino-logo').addClass('scroll-logo');
        $('.arduino-logo-compressed').addClass('scroll-logo-compressed');
        $('.container-logos').addClass('scroll');
        $('.container-menu').addClass('scroll-menu');
        $('.container-login').addClass('scroll');
        $('.submenu-menu').addClass('scroll');


    }
    else{
        $('header').removeClass('scroll');
        $('.header-menu').removeClass('scroll');
        $('.arduino-logo').removeClass('scroll-logo');
        $('.arduino-logo-compressed').removeClass('scroll-logo-compressed');
        $('.container-logos').removeClass('scroll');
        $('.container-menu').removeClass('scroll-menu');
        $('.container-login').removeClass('scroll');
        $('.submenu-menu').removeClass('scroll');
    }
 });
