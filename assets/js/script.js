$(document).ready(function(){
    
    //Smooth Scroll
    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function(){
                window.location.hash = gato;
            })

        
        }
    });

    //Cambio de color navbar al hacer scroll
    $(window).scroll(function(){

        $('nav').toggleClass('scrolled', $(this).scrollTop()>50);
    });
    

    //Tooltip Quienes Somos
    $('[data-toggle="tooltip"]').tooltip()

    
    //Hover Destacados (ingreso del cursor)
    $('.col-sm-3').hover(function(){
        $(this).animate({marginTop: "-=1%",
        },200);
    },

    //Hover Destacados (salida del cursor)    
    function(){
        $(this).animate({marginTop: "0%",
        },200);
    });

});