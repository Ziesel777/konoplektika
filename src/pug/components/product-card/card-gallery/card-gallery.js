import Swiper from 'swiper';
import $ from 'jquery';

$(() => {
	let topSlides = $('.js-preview-wrapper').html();
	$('.js-thumbs-wrapper').html(topSlides);

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


});
