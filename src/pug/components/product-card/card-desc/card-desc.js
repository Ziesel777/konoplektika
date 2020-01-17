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

	let selects = $('.js-desc__selects').find('.js-select-item');
	let inputs = $(selects).find('input');
	drawDescItem(getCheckSelect(selects),0);

	$(inputs).change(function () {
		drawDescItem(getCheckSelect(selects),300);
	});

	// проверка состояния нажатия каждого пункта
	function getCheckSelect(selects){
		let arrChecks =[];

		for(const sel of selects){
			let name = $(sel).find('input').attr('id');
			let check = $(sel).find('input').prop('checked');
			arrChecks.push({
				name: name,
				check: check,
			});
		}
		return arrChecks;
	}

	// показ или скрытие в зависимости от состояния
	function drawDescItem(arrChecks,time){
		let descItems = $('.js-desc__item');

		for (const itemCheck of arrChecks) {
			for(let itemDesc of descItems){
				let name = $(itemDesc).attr('data-id');
				if(itemCheck.name == name){
					if(itemCheck.check){
						$(itemDesc).show(time);
					} else {
						$(itemDesc).hide(time);
					}
				}
			}
		}
	}
});