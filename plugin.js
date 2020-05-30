$(document).ready(function() {

    $('.hetta').on('click', function() {
        $('.side-bar').toggleClass('is-open');
        event.stopPropagation();
        //  $('.main-wrapper').toggleClass('active');
    });

    $('html').on('click', function(event) {
        if (!$(event.target).hasClass('.hetta')) {
            $('.side-bar').removeClass('is-open');
            //$('.main-wrappe').removeClass('active');
        }
    });


    $('.hetta').on('click', function() {
        $('.layout').toggleClass('show');
        event.stopPropagation();
        //  $('.main-wrapper').toggleClass('active');
    });

    $('html').on('click', function(event) {
        if (!$(event.target).hasClass('.show')) {
            $('.layout').removeClass('show');
            //$('.main-wrappe').removeClass('active');
        }
    });

    $(".ontop-letter span").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });

});