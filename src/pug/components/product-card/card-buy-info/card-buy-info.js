import $ from 'jquery';

$(()=>{
    $('.js-btn-num').mouseup(function () {
        counterNum(this);
    });

    $('.js-block-submit, .js-btn-num').mouseup(function () {
        getPrice();
    });

    $('.js-prop__size').on('change', function () {
        getPrice();
    });


    function counterNum(elem){
        let num = $('.js-num-value').val();
        let type = $(elem).attr('data-type');

        switch (type) {
            case '+':
                num++;
                break;

            case '-':
                if(num>1){
                    num--;
                }
                break;
        }
        $('.js-num-value').val(num);
    }

    function getPrice(){
        let priceItems = $('.js-prop__size');
        let num = $('.js-num-value').val();

        for (const itemPrice of priceItems) {
            const check = $(itemPrice).prop('checked');

            if(check){
                let price = $(itemPrice).attr('data-price');
                price = Number(price)*num;
                $('.js-block-price').find('span').text(`${price} руб.`);
            }
        }
    }
});