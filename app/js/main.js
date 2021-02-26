$(function () {
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    },
    animation: {
      duration: 350
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true
  });

});