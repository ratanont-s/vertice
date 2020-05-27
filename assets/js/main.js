$(function () {
  var scroll = new SmoothScroll('a[href*="#"]');

  $('body').scrollspy({ target: '#navbarSupportedContent' });

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

  // Slider
  $(".slider").slick({
      autoplay: false,
      slidesToShow: 4,
      centerMode: true,
      pauseOnFocus: false,
      pauseOnHover: false,
    
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
      }]
    });
});