$(document).ready(function(){
   $('.js-slider').slick({
      dots: true,
      arrows: true,
      infinite: false,
      initialSlide:1,
      appendArrows: $('.main-slider__prev'),
      prevArrow: $('.main-slider__prev'),
      nextArrow: $('.main-slider__next'),
      appendDots: $('.main-slider__dots'),
   })
});

$(document).ready(function(){
   $('.quotes__slider').slick({
      dots: true,
      arrows: false,
      infinite: false,
      initialSlide:1,
      appendDots: $('.quotes__dots'),
   })
});
