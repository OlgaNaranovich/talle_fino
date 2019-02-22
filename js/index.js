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
    autoplayTimeout: 5000,
    touchDrag: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $('.reviews__owl-carousel').owlCarousel({
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
      const thsHeight = ths.find('.owl-carousel-content').outerHeight(true);
      ths.find('.owl-carousel-image').css('min-height', thsHeight);
    });
  }carouselS1();

  $('.owl-carousel-s1').equalHeights({
    onResize: true,
    onLoad: true,
  });
});

$(document).ready(function() {
  $('select').niceSelect();
});

const body = document.querySelector('.body');
const header = document.querySelector('.header');
const navList = document.querySelector('.nav__list');
const toggleMenu = document.querySelector('.toggle-menu');
const nav = document.querySelector('.nav');
nav.addEventListener('click', function() {
  if (body.offsetWidth <= 768) {
    if (!navList.classList.contains('nav-show')) {
      navList.classList.add('nav-show');
      toggleMenu.style.display = 'none';
    } else {
      navList.classList.remove('nav-show');
      toggleMenu.style.display = 'block';
    }
    console.log(navList);
  }
});
console.log(header.offsetHeight);