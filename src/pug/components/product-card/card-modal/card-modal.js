import $ from 'jquery';
import 'magnific-popup';

$(() => {
// Окно соства продукта
    $('.js-modal-consist').magnificPopup({
		tClose: 'Закрыть (Esc)',
		type: 'inline',
		preloader: false,
		focus: '#name',
		fixedContentPos: true,

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

// Окно отзыва
	$('.js-modal-reviews').magnificPopup({
		tClose: 'Закрыть (Esc)',
		type: 'inline',
		preloader: false,
		focus: '#name',
		fixedContentPos: true,

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	$('.js-reviews-content').on('keyup focus change', function () {
		let $btn = $(this).find('.js-reviews-btn');
		$btn.prop('disabled',!validReviews(this));
	});

	$('.js-reviews-btn').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		fixedContentPos: true,

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});

// проверка на заполненость окна отзыва
function validReviews(selector){
	let $name = $(selector).find('.js-reviews-userName');
	let $comment = $(selector).find('.js-reviews-comment');
	// let $btn = $(selector).find('.js-reviews-btn');

	return $name.val().length>=3 && $comment.val().length>=10;
}