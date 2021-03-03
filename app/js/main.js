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

  let isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  };

  let body = document.querySelector('body');

  if (isMobile.any()) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.dropdown-icon');
    for (i = 0; i < arrow.length; i++) {
      let thisLink = arrow[i].previousElementSibling;
      let subMenu = arrow[i].nextElementSibling;
      let thisArrow = arrow[i];

      thisLink.classList.add('parent');
      arrow[i].addEventListener('click', function () {
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    }
  } else {
    body.classList.add('mouse');
    let arrow = document.querySelectorAll('.dropdown-icon');
    for (i = 0; i < arrow.length; i++) {
      let thisLink = arrow[i].previousElementSibling;
      thisLink.classList.add('parent');
    }
  }
});