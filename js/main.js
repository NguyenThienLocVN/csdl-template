AOS.init({
  duration: 1200,
})
$(window).load(function(){
    $('.loader').fadeOut();
});
$(document).ready(function() {
    $('.sp-cn').hide();
    $(".sp-sn").click(function(){
        $(this).hide();
        $('.sp-cn').show();
        $("body").addClass("push-left");
    });
    $(".sp-cn").click(function(){
        $(this).hide();
        $('.sp-sn').show();
        $("body").removeClass("push-left");
    });
    /*--------------------------------------------*/
	$('.slider-banner').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    items:1,
	    dots: false,
	    autoplay: true,
	    autoplayTimeout: 5000,
	    animateOut: 'fadeOut',
	    navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
	})
    /*---------------------------------------*/
    
	/*-----------------------------------------*/
    var slpn = $(".slider-pn").lightSlider({
        item:4,
        loop:true,
        auto:true,
        pause: 5000,
        controls: false,
        pager: false,
        slideMargin: 30,
        responsive : [
            {
                breakpoint:767,
                settings: {
                    item:3,
                    slideMargin:20,
                  }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMargin:20,
                  }
            }
        ]
    }); 
    $('.prev-pn').click(function(){
        slpn.goToPrevSlide(); 
    });
    $('.next-pn').click(function(){
        slpn.goToNextSlide(); 
    });
    /*----------------------------------------------*/
    $('#back-to-top').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').show();
        } else {
            $('#back-to-top').hide();
        }
    });
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    $('#back-to-top').tooltip('show');
});
function openNav() {
    document.getElementById("mySidenav").style.width = "280px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}