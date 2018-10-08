$(document).ready(function() {

	$('.owl-carousel-s1').on('initialized.owl.carousel', function() {
		setTimeout(function() {
			carouselS1()
		}, 100);
	});

	$('.owl-carousel-s1').owlCarousel({
		loop: true,
		items: 3,
		mouseDrag: true,
		nav: true,
		dots: false,
		smartSpeed:1000,
		autoplay: false,
		autoplayTimeout:4000,
		touchDrag: true,
		autoplayHoverPause: true,
		responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});

	$('.owl-carousel-reviews').owlCarousel({
		loop: true,
		items: 1,
		mouseDrag: true,
		nav: true,
		dots: false,
		smartSpeed:1000,
		autoplay: false,
		autoplayTimeout:4000,
		touchDrag: true,
		autoplayHoverPause: true
	});

	function carouselS1() {
		$('.owl-carousel-item').each(function() {
			var ths      = $(this),
					thsheith = ths.find('.owl-carousel-content').outerHeight();
					ths.find('.owl-carousel-image').css('min-height', thsheith);
		});
	}carouselS1();

//equalHeights from site
	$('.owl-carousel-s1').equalHeights({
        onResize: true,
        onLoad: true
  });
});

