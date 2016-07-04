$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        loop: true
    });
    
    $('nav div.header a').click(function(e){
        e.preventDefault();
        $(this).parent().toggleClass('opened');
        $(this).parent().next('ul').toggleClass('opened');
    });
});