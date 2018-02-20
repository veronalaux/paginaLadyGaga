$(window).scroll(function(){
	if ($('.navbar').offset().top > 50) {
		$('.navbar-fixed-top').addClass('colapsar-nav');
	}else{
		$('.navbar-fixed-top').removeClass('colapsar-nav');
	}
});

$(function(){
	$('.pagina-scroll a').bind('click', function(){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		});

});





// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});
