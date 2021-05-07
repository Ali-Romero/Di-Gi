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

// $(".main-slider__next").click(function(){ 
//     $(".main-slider__next").css("background-color","#F9F6E5");
// });

// $('img.content_item').each(function(){
//   var $img = $(this);
//   var imgClass = $img.attr('class');
//   var imgURL = $img.attr('src');
//   $.get(imgURL, function(data) {
//     var $svg = $(data).find('svg');
//     if(typeof imgClass !== 'undefined') {
//       $svg = $svg.attr('class', imgClass+' replaced-svg');
//     }
//     $svg = $svg.removeAttr('xmlns:a');
//     if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
//       $svg.attr('viewBox', '0 0 16 26' + $svg.attr('height') + ' ' + $svg.attr('width'))
//     }
//     $img.replaceWith($svg);
//   }, 'xml');
// });

// $('.main-slider__next').on("click", function() {
//     $('.test').css({ fill: "#929292" });
// });
// // $('.arrow-prew').click(function(event) {
// //    $('.js-slider').slick('slickPrev');
// // });
// // $('.arrow-next').click(function(event) {
// //    $('.js-slider').slick('slickNext');
// // })

$('.js-trigger').click(function () {
  $(this).next().slideToggle(320)
  $(this).toggleClass('active')
});