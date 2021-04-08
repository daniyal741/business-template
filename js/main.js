
$(document).ready(function(){

    $(window).resize(function(){
        if ($(window).width() > 700){ 
      
            
            $("header").css('transform', 'translateY(0%)');
            $('.hamburger').css('display', 'none');
            $('#cross1').css('display', 'none');


    
        }  
        else{

            $('.hamburger').css('display','flex');
            $('#cross1').css('display', 'none');
            $("header").css('transform', 'translateY(-100%)');



        }

    });

    $('.hamburger').click(function(){

        $('.hamburger').css('display','none');
        $('header').show(0);
        $('header').css('transform','translateY(0%)');
        $('header').css('background-color','rgba(117, 145, 153, 1)');
        $('#cross1').css('display','flex');

        $('#cross1').click(function(){

            $('#cross1').css('display','none');
            $('.hamburger').css('display','flex')
            $('header').css('transform','translateY(-100%)');
            $('header').css('background-color','rgba(117, 145, 153, 0.5)');


        });
    });

    $(window).scroll(function(){

        if($(window).scrollTop()>30)
        {
            $('header').css('background-color','rgba(117, 145, 153, 1)');

        }
        else{

            $('header').css('background-color','rgba(117, 145, 153, 0.5)');

        }


    });
});