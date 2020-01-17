import Swiper from 'swiper';
import 'magnific-popup';
import $ from 'jquery';

$(() => {
	let topSlides = $('.js-preview-wrapper').html();
	$('.js-thumbs-wrapper').html(topSlides);

	// Задает высоту галлереи по высоте блока информации о товаре
	let w_width = $(window).width();

	if(w_width>430){
		$('.js-card-gallery').height($('.card-buy-info').height());
	} else {
		$('.js-card-gallery').height($('.card-buy-info').height()*0.5);
	}

	$(window).resize(function () {
		w_width=$(window).width();

		if(w_width>430){
			$('.js-card-gallery').height($('.card-buy-info').height());
		} else {
			$('.js-card-gallery').height($('.card-buy-info').height()*0.5);
		}
	});
	// --------------------------------------------------------------


	let galleryThumbs = new Swiper('.js-gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 4,
		loop: true,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});

	let galleryTop = new Swiper('.js-gallery-top', {
		spaceBetween: 10,
		loop:true,
		loopedSlides: 5, //looped slides should be the same
		navigation: {
			nextEl: '.js-btn-thumbs-next',
			prevEl: '.js-btn-thumbs-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});

	$('.js-preview-wrapper').magnificPopup({
		delegate: '.js-gallery__slide',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		disableOn: 700,
		fixedContentPos: true,
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				// return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				return item.el.attr('title');
			}
		}
	});
});
