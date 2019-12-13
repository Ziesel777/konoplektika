import $ from 'jquery';

import './card-gallery/card-gallery';
import './card-buy-info/card-buy-info';
import './card-desc/card-desc';
import './card-addition/card-addition';
import './card-modal/card-modal';

console.log('hello world');

$(()=>{

    // поиск на странице всех звёзд рейтинга и отрисовка содержимого
    let itemsRatings = $('.js-product-card').find('.js-star-rating');
    for(let item of itemsRatings){
        drawStarRating(item);
    }

    function drawStarRating(elem) {
        let html = '';

        let dataRating = $(elem).attr('data-rating'),
            srcStarFull = $(elem).attr('src-starfull'),
            srcStarEmpty = $(elem).attr('src-starempty'),
            rating = Math.floor(Number(dataRating));

        let htmlStarFull = `<img src="${srcStarFull}" alt="">`,
            htmlStarEmpty = `<img src="${srcStarEmpty}" alt="">`;

        if(rating >=0 && rating <=5){
            for(let i=0;i<rating;i++){
                html += htmlStarFull;
            }
            for(let i=0;i<(5-rating);i++){
                html += htmlStarEmpty;
            }
        }

        // если после звёзд находится в блоке элемент span
        // с числовым значение рейтинга
        if($(elem).find('span').length != 0){
            let span = $(elem).find('span');
            $(span).text(dataRating);
            html += span[0].outerHTML;
        }
        // console.log( $(elem).find('span') );

        $(elem).html(html);
    }
});