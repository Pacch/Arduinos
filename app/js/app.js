// $(document).ready(function(){
//     $('.container-whats-arduino').click(function(){
//        $('.container-contenido').slideDown();
//        $(this).hide();
//     });
//     $('.close').click(function(){
//         $('.container-contenido').slideUp('slow');
//         $('.container-whats-arduino').show();
//         $('html,body').animate({scrollTop: 0}, 600);
//      });

//     //  $('.flecha-superior').click(function(){
//     //     $('html,body').animate({scrollTop: 0}, 600);
//     //  });

//      $('.burguer-menu').click(function(){
//         $('.menu').slideToggle();
//      });

//      $('.menu-option-products').click(function(){
//         $('.menu-option-products .submenu-menu').slideToggle();
//         $('.menu-option-learning .submenu-menu').slideUp();
//         $('.menu-option-support .submenu-menu').slideUp();
//         $('.menu-option-community .submenu-menu').slideUp();
//      });

//      $('.menu-option-community').click(function(){
//         $('.menu-option-community .submenu-menu').slideToggle();
//         $('.menu-option-products .submenu-menu').slideUp();
//         $('.menu-option-learning .submenu-menu').slideUp();
//         $('.menu-option-support .submenu-menu').slideUp();
//      });

//      $('.menu-option-learning').click(function(){
//         $('.menu-option-learning .submenu-menu').slideToggle();
//         $('.menu-option-products .submenu-menu').slideUp();
//         $('.menu-option-community .submenu-menu').slideUp();
//         $('.menu-option-support .submenu-menu').slideUp();
//      });

//      $('.menu-option-support').click(function(){
//         $('.menu-option-support .submenu-menu').slideToggle();
//         $('.menu-option-products .submenu-menu').slideUp();
//         $('.menu-option-learning .submenu-menu').slideUp();
//         $('.menu-option-community .submenu-menu').slideUp();
//      });

//     });

//  $(window).scroll(function() {
//     if($(document).scrollTop() >= 70) {
//         $('header').addClass('scroll');
//         $('.header-menu').addClass('scroll');
//         $('.arduino-logo').addClass('scroll-logo');
//         $('.arduino-logo-compressed').addClass('scroll-logo-compressed');
//         $('.container-logos').addClass('scroll');
//         $('.container-menu').addClass('scroll-menu');
//         $('.container-login').addClass('scroll');
//         $('.submenu-menu').addClass('scroll');


//     }
//     else{
//         $('header').removeClass('scroll');
//         $('.header-menu').removeClass('scroll');
//         $('.arduino-logo').removeClass('scroll-logo');
//         $('.arduino-logo-compressed').removeClass('scroll-logo-compressed');
//         $('.container-logos').removeClass('scroll');
//         $('.container-menu').removeClass('scroll-menu');
//         $('.container-login').removeClass('scroll');
//         $('.submenu-menu').removeClass('scroll');

//     }
//  });
// "use strict"
class Scroll {
    constructor(btn) {
        this.btn = document.querySelector(btn);
        this.animacion = this.animacion.bind(this);
        this.altoWindow = this.altoWindow.bind(this);
    }
    // stopInterval(){
    //     console.log("stop")
    //     clearInterval( scrollLoopId )
    // }
    altoWindow(){
        return document.body.getBoundingClientRect().height;
    }
    puntoInicial(){
        return this.btn.getBoundingClientRect().top + window.scrollY;
    }
    

    animacion(){
        debugger
        let altoWindow = this.altoWindow();
        console.log(`el punto inicial es  ${this.puntoInicial()}`);
        console.log(`el alto de windows es ${this.altoWindow()}`);
        let distanciaRecorrer = this.altoWindow() - this.puntoInicial();
        console.log(`la distancia a recorrer es ${distanciaRecorrer}`);
        let windowsRecorrido = 10;
        let scrollLoopId;

        function incrementScroll() {
            if(altoWindow <= distanciaRecorrer ){
                // console.log(`el alto de windows es ${this.altoWindow()}`);
                // console.log(`la distancia a recorrer es ${distanciaRecorrer}`);
                stopInterval();
            }else{
                // console.log(`el alto de windows es ${this.altoWindow()}`);
                // console.log(`la distancia a recorrer es ${distanciaRecorrer}`);
                incrementador();
            }
        }

        function stopInterval(){
            console.log("stop")
            clearInterval( scrollLoopId )
        }

        function incrementador(){
            window.scrollBy(0, -windowsRecorrido ) ;
            distanciaRecorrer += windowsRecorrido;
            console.log(distanciaRecorrer);
        }

        function startScrollLoop() {
            scrollLoopId = setInterval( incrementScroll,1) ; 
        }

        startScrollLoop();
    }
    scrollTop(){
        console.log("estoy en scroll top");
        this.btn.addEventListener("click", this.animacion)
    }   
}

// class Button {

//     constructor() {
//         let element = document.querySelector('.flecha-superior');
//         this.doSomething = this.doSomething.bind(this)
//         element.addEventListener("click", this.doSomething);
//         // this.createTitle = this.createTitle.bind(this);
        
//     }
    
    
//     createTitle() {
//     console.log('createTitle')
    
//     }
//     doSomething() {
//     this.createTitle();
//     console.log('nada')
//     }
// }

// let boton = new Button();

const p1 = new Scroll(".flecha-superior");
p1.scrollTop();


// function scrollTop(){
//     let scrollTop = document.querySelector(".flecha-superior");

//     scrollTop.addEventListener("click",scrollAnimation);
//     function scrollAnimation(){
//         let totalAlto = 0;
//         let division = 60;
//         let altoWindow = window.scrollY;
//         let windowsRecorrido = window.scrollY/division;
//         let scrollLoopId;

//         let incrementScroll = function() {
//             if( totalAlto >= altoWindow ){
//                 stopInterval();
//             }else{
//                 incrementador();
//             }
//         }

//         let stopInterval = function(){
//             clearInterval( scrollLoopId )
//         }
//         let incrementador = function(){
//             window.scrollBy(0, -windowsRecorrido ) ;
//             totalAlto += windowsRecorrido;
//             console.log(totalAlto);

//         }
//         let startScrollLoop = function() {
//             scrollLoopId = setInterval( incrementScroll,1000/600) ; 
//         }
//         startScrollLoop();
//     }

// }

// scrollTop();

