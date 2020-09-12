$(document).ready(function() {
    var banner_top = $('.billboard').offset().top;
    catalogResponsive();

    $(window).resize(function() {
        banner_top = $('.billboard').offset().top;

        catalogResponsive();
    });

    $(window).scroll(function() {
        var ww = $(window).width();

        if (ww < 768) {
            var scrollTop = $(window).scrollTop();

            if (scrollTop >= banner_top) {
                $('.mobile-header').addClass('mobile-header--show');
                $('.header__top-menu-wrap').addClass('header__top-menu-wrap--scroll');
            }
            else {
                $('.header__top-menu-wrap').removeClass('header__top-menu-wrap--scroll');
                $('.mobile-header').removeClass('mobile-header--show');
            }
        }
        else {
            $('.header__top-menu-wrap--scroll').removeClass('header__top-menu-wrap--scroll');
            $('.mobile-header--show').removeClass('mobile-header--show');
        }
    });

    $('.category__list').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('category__list--opened');
    });

    // results

    $('.result__table').on('click', '.result-minus', function() {
        var count = $(this).next().text();
        if (parseInt(count) > 0) {
            $(this).next().text(count-1);
        }
    });

    $('.result__table').on('click', '.result-plus', function() {
        var count = parseInt($(this).prev().text());
        $(this).prev().text(count+1);
    });

    $('.result__table').on('click', '.result__info', function () {
        location.href = $(this).find('a').attr('href');
    });
    
    $('.result__table').on('click', '.result__similar', function () {
        location.href = $(this).prev().find('a').attr('href');
    });

    $('.result__label').click(function() {
        if ($(this).hasClass('result__label--opened')) {
            $(this).removeClass('result__label--opened');
            $(this).text('Показать комплектующие');
            $(this).next().slideUp();
        }
        else {
            $(this).addClass('result__label--opened');
            $(this).text('Комплектующие');
            $(this).next().slideDown();
        }
    });

    $('.header__menu-link--catalog').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('header__menu-link--active');
    });

    if ($(window).width() < 768) {
        $('.header__menu-link--opening').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('header__menu-link--active');
        });
    }

    $('body').click(function() {
        $('.header__menu-link--catalog').removeClass('header__menu-link--active');
    });
});

function catalogResponsive() {
    if ($(window).width() < 768) {
        $('.category__content').append($('.category__left-label'));
        $('.category__content').append($('.category__list-block'));
        $('.category__content').append($('.category__left-remont'));
    }
    else {
        $('.category__filter').append($('.category__left-label'));
        $('.category__filter').append($('.category__list-block'));
        $('.category__filter').append($('.category__left-remont'));
    }
}