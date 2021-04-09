
$(document).ready(function(){

    $(window).resize(function(){
        if ($(window).width() > 700){ 
      
            
            $("nav").css('transform', 'translateY(0%)');
            $('.hamburger').css('display', 'none');
            $('#cross1').css('display', 'none');


    
        }  
        else{

            $('.hamburger').css('display','flex');
            $('#cross1').css('display', 'none');
            $("nav").css('transform', 'translateY(-100%)');



        }

    });

    $('.hamburger').click(function(){

        $('.hamburger').css('display','none');
        $('nav').show(0);
        $('nav').css('transform','translateY(0%)');
        $('nav').css('background-color','rgba(117, 145, 153, 1)');
        $('#cross1').css('display','flex');

        $('#cross1').click(function(){

            $('#cross1').css('display','none');
            $('.hamburger').css('display','flex')
            $('nav').css('transform','translateY(-100%)');
            $('nav').css('background-color','rgba(117, 145, 153, 0.5)');


        });
    });

    $(window).scroll(function(){

        if($(window).scrollTop()>30)
        {
            $('nav').css('background-color','rgba(117, 145, 153, 1)');

        }
        else{

            $('nav').css('background-color','rgba(117, 145, 153, 0.5)');

        }


    });
});