$(document).ready(function(){
   $('.js-slider').slick({
      dots: true,
      arrows: true,
      infinite: false,
      initialSlide:1,
      appendArrows: $('.main-slider__arrrows'),
      prevArrow: $('.main-slider__prev'),
      nextArrow: $('.main-slider__next'),
      appendDots: $('.main-slider__dots'),
   })
});

$(document).ready(function(){
   $('.js-quotes-slider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      initialSlide:1,
      appendDots: $('.quotes__dots'),
   })
});

$(function(){
	$('.js-scroll').click(function(){
		$('html, body').animate({scrollTop: 0}, 900);
	});
});