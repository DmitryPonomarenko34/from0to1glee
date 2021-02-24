$(function(){
  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true
  });

  
  var mixer = mixitup('.product__items', {
    animation: {
        duration: 300
    }
})
});