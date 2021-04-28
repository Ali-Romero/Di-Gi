$(document).ready(function(){
   $('.js-slider').slick({
      dots:true,
   })
});

$('.btn-link__info').click(function(event) {
   $('.js-slider').slick('slickPrev');
});
$('.menu__btn').click(function(event) {
   $('.js-slider').slick('slickNext');
})