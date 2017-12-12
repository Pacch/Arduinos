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
