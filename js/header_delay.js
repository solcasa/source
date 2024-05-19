$(function () {
    $('.header .top-menu-bar .row>li').mouseenter(function () {
        $(this).addClass('active');
        $(this).find('> a').addClass('active');
    });

    $('.header .top-menu-bar .row>li').mouseleave(function () {
        $(this).removeClass('active');
        $(this).find('> a').removeClass('active');
    });

    $('.header .top-menu-bar .row .menu-1').mouseenter(function () {
        $('.sub-menu-bg').css('height', '140px');
    });
    $('.header .top-menu-bar .row .menu-1').mouseleave(function () {
        $('.sub-menu-bg').css('height', '');
    });

    $('.header .top-menu-bar .row .menu-2').mouseenter(function () {
        $('.sub-menu-bg').css('height', '160px');
    });
    $('.header .top-menu-bar .row .menu-2').mouseleave(function () {
        $('.sub-menu-bg').css('height', '');
    });

    $('.header .top-menu-bar .row .menu-3').mouseenter(function () {
        $('.sub-menu-bg').css('height', '140px');
    });
    $('.header .top-menu-bar .row .menu-3').mouseleave(function () {
        $('.sub-menu-bg').css('height', '');
    });

    $('.header .top-menu-bar .row .menu-4').mouseenter(function () {
        $('.sub-menu-bg').css('height', '120px');
    });
    $('.header .top-menu-bar .row .menu-4').mouseleave(function () {
        $('.sub-menu-bg').css('height', '');
    });

    $('.header .top-menu-bar .row .menu-5').mouseenter(function () {
        $('.sub-menu-bg').css('height', '120px');
    });
    $('.header .top-menu-bar .row .menu-5').mouseleave(function () {
        $('.sub-menu-bg').css('height', '');
    });

    //모바일버튼
    $('.m-header .m-menu-btn').click(function () {
        if ($(this).hasClass('active')) {
            $('html').removeClass('m-menu-scroll');

            $(this).removeClass('active');
            $(this).siblings('.mobile-mask').css('height', '');
            $(this).siblings('.m-menu-list').removeClass('active');
        }
        else {
            $('html').addClass('m-menu-scroll');

            $(this).siblings('.m-menu-list').find(' > ul > li.active').removeClass('active');
            $(this).siblings('.m-menu-list').find(' > ul > li > ul').slideUp(0);

            $(this).addClass('active');
            $(this).siblings('.mobile-mask').css('height', '100%');
            $(this).siblings('.m-menu-list').addClass('active');
        };
    });
    // 모바일 메뉴 리스트
    $('.m-header .m-menu-list ul>li').click(function () {
        if ($(this).hasClass('active')) {
            $(this).find(' > ul').slideUp(300);
            $(this).removeClass('active');
        }
        else {
            $(this).siblings('li.active').removeClass('active');
            $(this).siblings().find(' > ul').slideUp(300);
            $(this).find(' > ul').slideDown(300);
            $(this).addClass('active');
        }
    });

    $('.m-header .m-menu-list ul>li ul').click(function (e) {
        e.stopPropagation();
    });

});