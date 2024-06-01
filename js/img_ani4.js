function view() {
    const winTop = $(document).scrollTop();

    $('.img').each(function () {
        const imgTop = $(this).offset().top - 100;

        if (imgTop <= winTop) {
            $(this).addClass('on');
        }
    });
}

$(window).on('scroll', () => {
    view();
});

// 초기 실행
$(document).ready(() => {
    view();
});

