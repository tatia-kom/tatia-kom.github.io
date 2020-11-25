$(document).ready(function() {

    $('.scroll-to').click(function(e) {
        e.preventDefault();
        var block = $(this).attr('href');
        $('html, body').animate({scrollTop: $(block).offset().top + 'px'});
    });

    $('.top__down').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $('#company').offset().top + 'px'});
    });

    $('.top-item').click(function(e) {
        var block = $(this).attr('data-block');

        $('.top-block--active').removeClass('top-block--active');
        $('.top-item--active').removeClass('top-item--active');
        $('.top__bg .active').removeClass('active');
        $(block + '-img').addClass('active');
        $(block).addClass('top-block--active');
        $(this).addClass('top-item--active');
    });

    $('.objects-accordeon__title').click(function(e) {
        $('.objects-accordeon--active .objects-accordeon__description').slideUp(300);
        if (!$(this).parents('.objects-accordeon').hasClass('objects-accordeon--active')) {
            $('.objects-accordeon--active').removeClass('objects-accordeon--active');

            // photos

            var photos = $(this).parents('.objects-accordeon').attr('data-photos');
            $('.objects-photos--active').removeClass('objects-photos--active');
            $(photos).addClass('objects-photos--active');
        }
        $(this).parents('.objects-accordeon').toggleClass('objects-accordeon--active');
        $('.objects-accordeon--active .objects-accordeon__description').slideToggle(300);
    });

    $('.footer__up').click(function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0});
    });

    // responsive

    if ($(window).width() < 768) {
        $('.objects-photos').each(function() {
            var id = $(this).attr('id');
            $(this).appendTo($('.objects-accordeon[data-photos="#'+id+'"] .objects-accordeon__description'));
        });

        $('.about__title').click(function(e) {
            $(this).toggleClass('about__title--active');
            $('.about__content').slideToggle();
        });
    }

    $('.header__mobile-button').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('frozen');
        $('.header').toggleClass('header--active');
    });

});

