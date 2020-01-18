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

    dynamicStarHover('.js-dynamic-star');

    function drawStarRating(elem) {
        let html = '';

        let dataRating = $(elem).attr('data-rating'),
            srcStarFull = $(elem).attr('src-starfull'),
            srcStarEmpty = $(elem).attr('src-starempty'),
            rating = Math.round(Number(dataRating));

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

    function dynamicStarHover(elem){
        let stars = $(elem).find('img');
        let srcStarFull = $(elem).attr('src-starfull'),
            srcStarEmpty = $(elem).attr('src-starempty');

        let i=1;
        for(let star of stars){
            $(star).attr('star-rating', i++);
        }

        $(stars).hover(function () {
            let rating = $(this).attr('star-rating');

            for(let star of stars){
                let star_rating = $(star).attr('star-rating');
                if(star_rating <= rating){
                    $(star).attr('src',srcStarFull);
                } else {
                    $(star).attr('src',srcStarEmpty);
                }
            }
        });

        $(elem).hover(function () {
                // over
            }, function () {
                // out
                for(let star of stars){
                    let star_rating = $(star).attr('star-rating');
                    let data_rating = $(elem).attr('data-rating');
                    if(star_rating <= data_rating){
                        $(star).attr('src',srcStarFull);
                    } else {
                        $(star).attr('src',srcStarEmpty);
                    }
                }
            }
        );

        $(stars).mouseup(function () {
            let rating = $(this).attr('star-rating');
            $(elem).attr('data-rating',rating);
        });
    }
});