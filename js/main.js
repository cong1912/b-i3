$(document).ready(function(){
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change')
    });
    $(window).scroll(function(){
        let position =$(this).scrollTop();
        console.log(position);
        if(position>=200){
            $('.nav-menu').addClass('custom-navbar');
        }else{
            $('.nav-menu').removeClass('custom-navbar');
        }
    });
    $(window).scroll(function(){
        let position=$(this).scrollTop();
        console.log(position);
        if(position>=650){
            $('.camera-img').addClass('fromLeft');

            $('.mission-text').addClass('fromRight');
        }
        else{
            $('.camera-img').removeClass('fromLeft');
            $('.mission-text').removeClass('fromRight');
        }
    });
    $('.gallery-list-item').click(function(){
        let value=$(this).attr('data-filter')
        if(value==='all'){
            $('.filter').show(300);
        }else{
            $('.filter').not('.'+value).hide(300);
            $('.filter').filter('.'+value).show(300);
        }

    });
    $('gallery-list-item').click(function(){
        $(this).addClass('active-item').sibling().removeClass('active-item')
    });
    $(window).scroll(function(){
        let position=$(this).scrollTop();
        if(position>=4300){
            $('.card-2').addClass('moveFromBotton');
            $('.card-1').addClass('moveFromLeft');
            $('.card-3').addClass('moveFromRight');
        }else{
            $('.card-2').removeClass('moveFromBotton');
            $('.card-1').removeClass('moveFromLeft');
            $('.card-3').removeClass('moveFromRight');
        }
    });
    // $('#nav a').on('click',function(event){
    //     if(this.hash != ''){
    //         event.preventDefault();
    //         const hash = this.hash;
    //         $('html, body').animate({
    //             scrollTop: $(hash).offset().top - 80
    //         },
    //         800);
    //     }
    // });
    $('body').scrollspy({
        target: '.navbar',offset:50
    });

});

