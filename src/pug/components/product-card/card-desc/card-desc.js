import $ from 'jquery';
import 'magnific-popup';

$(()=>{
    $('.js-video-play').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: true
    });
});