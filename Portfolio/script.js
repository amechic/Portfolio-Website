$(document).ready(() => {
    $(window).on('scroll', () => {
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    //slide-up script
    $('.scroll-up-btn').on('click', () => {
        $('html').animate({scrollTop: 0});
    });


     // toggle menu/navbar script
     $('.menu-btn').on('click', () => {
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
     });
});