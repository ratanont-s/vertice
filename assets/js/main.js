$(function () {
  var scroll = new SmoothScroll('a[href*="#"]');

  $('body').scrollspy({
    target: '#navbarSupportedContent'
  });

  $('.navbar-nav a[href*="#"]').not('[href="#"]').on('click', function () {
    console.log('click');
    $('.navbar-toggler').addClass('collapsed');
    $('.navbar-collapse').removeClass('show');
  });

  // Banner
  $(".banner").slick({
    autoplay: false,
    slidesToShow: 2,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 2,

    // the magic
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  });

  // Labels
  $("#labelsSlide1").slick({
    autoplay: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: true,
    appendDots: $('#labelsDots1'),

    // the magic
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });
  $("#labelsSlide2").slick({
    autoplay: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: true,
    appendDots: $('#labelsDots2'),

    // the magic
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });
  $("#labelsSlide3").slick({
    autoplay: false,
    slidesToShow: 4,
    pauseOnFocus: false,
    pauseOnHover: false,
    dots: true,
    appendDots: $('#labelsDots3'),

    // the magic
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  });
});