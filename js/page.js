var ww = $(window).width();

$(document).ready(function() {

    subcategoriesTabs();

    subcategoriesSlider();

    orderSlider();

    $('.subcategories__content').css({minHeight: $('.subcategories__slider--active').height()+'px'});

    $('body').on('click', '.subcategories__tab:not(.subcategories__tab--open)', function(e) {
        e.preventDefault();
        var block = $(this).attr('data-id');

        $('.subcategories__tab--active').removeClass('subcategories__tab--active');
        $('.subcategories__slider--active').removeClass('subcategories__slider--active');

        $(this).addClass('subcategories__tab--active');
        $(block).addClass('subcategories__slider--active');
        $('.subcategories__content').css({minHeight: $('.subcategories__slider--active').height()+'px'});
    });

    $(window).resize(function() {

        // down

        if (ww > 1199 && $(window).width() <= 1199) {

            // to md

            console.log('down to md');

            subcategoriesFull();
            subcategoriesDesktop();
        }

        if (ww > 991 && $(window).width() <= 991) {

            // to sm

            console.log('down to sm');

            subcategoriesFull();
            subcategoriesDesktop();
        }

        if (ww > 767 && $(window).width() <= 767) {

            // to xs

            console.log('down to xs');

            subcategoriesFull();
            subcategoriesMobile();

            $('.subcategories__slider').slick('unslick');
            setTimeout(function () {
                $('.subcategories__slider').slick({
                    arrows: false,
                    dots: false,
                    autoplay: false,
                    infinite: false,
                    centerMode: true,
                    centerPadding: '35px'
                });
            }, 200);
        }

        // up

        if (ww <= 767 && $(window).width() > 767) {

            // to sm

            console.log('up to sm');

            subcategoriesFull();
            subcategoriesDesktop();

            $('.subcategories__slider').slick('unslick');
            setTimeout(function () {
                $('.subcategories__slider').slick({
                    arrows: true,
                    dots: false,
                    autoplay: false,
                    infinite: false,
                    rows: 2,
                    slidesPerRow: 3,
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesPerRow: 2
                            }
                        }
                    ]
                });
            }, 200);
        }

        if (ww <= 991 && $(window).width() > 991) {

            // md

            console.log('up to md');

            subcategoriesFull();
            subcategoriesDesktop();

            $('.order__slider').slick({
                arrows: true,
                dots: false,
                autoplay: false,
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: 'unslick'
                    }
                ]
            });
        }

        if (ww <= 1199 && $(window).width() > 1199) {

            // lg

            console.log('up to lg');

            subcategoriesFull();
            subcategoriesDesktop();
        }

        ww = $(window).width();
    });

});

function subcategoriesSlider() {
    if ($(window).width() < 768) {
        $('.subcategories__slider').slick({
            arrows: false,
            dots: false,
            autoplay: false,
            infinite: false,
            centerMode: true,
            centerPadding: '35px'
        });
    }
    else {
        $('.subcategories__slider').slick({
            arrows: true,
            dots: false,
            autoplay: false,
            infinite: false,
            rows: 2,
            slidesPerRow: 3,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesPerRow: 2
                    }
                }
            ]
        });
    }
}

function subcategoriesTabs() {
    if ($(window).width() > 767) {
        subcategoriesDesktop();
    }
    else {
        subcategoriesMobile();
    }
}

function subcategoriesDesktop() {
    var tabsCount = $('.subcategories__tab:not(.subcategories__tab--open)').length;
    var blockWidth = $('.subcategories__tabs').width();
    var tabsWidth = 0;
    var moreButton = false;
    const moreButtonWidth = 105;

    $('.subcategories__tab:not(.subcategories__tab--open)').each(function(index) {
        if (!moreButton) {
            tabsWidth += $(this).outerWidth();
            if (tabsWidth > (blockWidth - moreButtonWidth)) {
                moreButton = true;
                $(this).appendTo($('.subcategories__hidden-tabs'));
            }
        }
        else {
            $(this).appendTo($('.subcategories__hidden-tabs'));
        }
    });

    if (moreButton) {
        $('.subcategories__tab--open').unbind('click');
        $('.subcategories__tab--open').text('Другое');
        $('.subcategories__tab--open').show();
        $('.subcategories__hidden-tabs').removeClass('subcategories__hidden-tabs--opened');
        $('.subcategories__hidden-tabs-wrap').show();
    }
}

function subcategoriesMobile() {
    var tabsCount = $('.subcategories__tab:not(.subcategories__tab--open)').length;
    if (tabsCount > 3) {
        $('.subcategories__tab--open').text('Показать больше');
        $('.subcategories__tab:not(.subcategories__tab--open)').each(function(index) {
            if (index > 2) {
                $(this).appendTo($('.subcategories__hidden-tabs'));
            }
        });

        $('.subcategories__hidden-tabs-wrap').show();

        $('.subcategories__tab--open').click(function(e) {
            e.preventDefault();
            $(this).hide();
            $('.subcategories__hidden-tabs').addClass('subcategories__hidden-tabs--opened');
        });
    }
}

function subcategoriesFull() {
    $('.subcategories__hidden-tabs-wrap').hide();

    $('.subcategories__hidden-tabs .subcategories__tab').each(function() {
        $(this).insertBefore($('.subcategories__hidden-tabs-wrap'));
    });
}

function orderSlider() {
    if ($(window).width() > 991) {
        $('.order__slider').slick({
            arrows: true,
            dots: false,
            autoplay: false,
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: 'unslick'
                }
            ]
        });
    }
}