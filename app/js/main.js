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
  if (containerEl1, containerEl2) {
    var mixer1 = mixitup(containerEl1, config);
    var mixer2 = mixitup(containerEl2, config);
  }

  $('.menu__btn').on('click', function () {
    $('.menu__box').toggleClass('menu__box--active');
    $(this).toggleClass('menu__btn--active');
  });

  $('.filter-btn').on('click', function(){
    $('.blog-page__aside').slideToggle();
    $('.filters').slideToggle();
  });

  $('.dropdown-icon').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
  });

  $('.related-slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 531,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.products-tabs__control-link').on('click', function (e) {
    e.preventDefault();

    $('.products-tabs__control-link').removeClass('products-tabs__control-link--active');
    $(this).addClass('products-tabs__control-link--active');

    $('.products-tabs__content-item').removeClass('products-tabs__content-item--active');
    $($(this).attr('href')).addClass('products-tabs__content-item--active');
  });


  $('.products-slide__nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    vertical: true,
    arrows: false,
    draggable: false,
    asNavFor: '.products-slide__for',

    responsive: [
      {
        breakpoint: 591,
        settings: {
          centerMode: true,
          centerPadding: '75px',
          vertical: false,
        }
      },  
      {
        breakpoint: 531,
        settings: {
          centerMode: false,
          vertical: false,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          vertical: false,
          variableWidth: true
        }
      },
    ]
  });
  $('.products-slide__for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    draggable: false,
    asNavFor: '.products-slide__nav'
  });

  $('.products-content__filter-btn').on('click', function () {
    $('.products-content__filter-btn').removeClass('products-content__filter-btn--active');
    $(this).addClass('products-content__filter-btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--list');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
  });

  $('.products-content__filter-select, .products-one__input').styler();

  $('.top-slider__inner').slick({
    arrows: false,
    dots: true,
    fade: true
  });

  $('.filters__title').on('click', function () {
    $(this).closest('.filters-category, .filters-price, .filters-brand, .filters-recent,.recent-posts').toggleClass('filters__item--hidden');
  });

  $('.filters-price__input').ionRangeSlider({
    onStart: function (data) {
      $('.filters-price__from').text(data.from);
      $('.filters-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filters-price__from').text(data.from);
      $('.filters-price__to').text(data.to);
    }
  });

  $('.rate').rateYo({
    readOnly: true,
    starWidth: "11px",
    numStars: 5,
    spacing: "8px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    "starSvg": '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="11pt" height="11pt" viewBox="0 0 11 11" version="1.1">' +
      '<g id="surface1">' +
      '<path style="stroke:none;fill-rule:nonzero;fill:inherit;fill-opacity:1;" d="M 10.96875 4.21875 C 10.894531 3.996094 10.699219 3.835938 10.464844 3.816406 L 7.289062 3.527344 L 6.035156 0.589844 C 5.941406 0.375 5.730469 0.234375 5.496094 0.234375 C 5.265625 0.234375 5.054688 0.375 4.960938 0.589844 L 3.707031 3.527344 L 0.53125 3.816406 C 0.296875 3.835938 0.101562 3.996094 0.0273438 4.21875 C -0.0429688 4.441406 0.0234375 4.683594 0.199219 4.839844 L 2.597656 6.941406 L 1.890625 10.058594 C 1.839844 10.289062 1.929688 10.523438 2.117188 10.660156 C 2.21875 10.734375 2.339844 10.773438 2.460938 10.773438 C 2.566406 10.773438 2.667969 10.746094 2.761719 10.691406 L 5.496094 9.054688 L 8.234375 10.691406 C 8.433594 10.808594 8.6875 10.800781 8.875 10.660156 C 9.066406 10.523438 9.15625 10.289062 9.105469 10.058594 L 8.398438 6.941406 L 10.796875 4.839844 C 10.972656 4.683594 11.039062 4.441406 10.96875 4.21875 Z M 10.96875 4.21875 "/>' +
      '</g>' +
      '</svg>'
  });
});