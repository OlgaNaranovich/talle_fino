// import $ from '../libs/jquery/jquery-1.11.1.min';

$(document).ready(() => {
  $('.owl-carousel-s1').on('initialized.owl.carousel', () => {
    setTimeout(() => {
      carouselS1();
    }, 100);
  });

  $('.owl-carousel-s1').owlCarousel({
    loop: true,
    items: 3,
    mouseDrag: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    autoplay: false,
    autoplayTimeout: 4000,
    touchDrag: true,
    autoplayHoverPause: true,
    responsive: { // Адаптивность. Кол-во выводимых элементов при определенной ширине.
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $('.owl-carousel-reviews').owlCarousel({
    loop: true,
    items: 1,
    mouseDrag: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    autoplay: false,
    autoplayTimeout: 4000,
    touchDrag: true,
    autoplayHoverPause: true,
  });

  function carouselS1() {
    $('.owl-carousel-item').each(function () {
      const ths = $(this);
      const thsHeight = ths.find('.owl-carousel-content').outerHeight();
      ths.find('.owl-carousel-image').css('min-height', thsHeight);
    });
  }carouselS1();

  $('.owl-carousel-s1').equalHeights({
    onResize: true,
    onLoad: true,
  });
});
