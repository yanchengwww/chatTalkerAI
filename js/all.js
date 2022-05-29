$(document).ready(function () {
    $('.gotop').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1500);
    });

    $('.QA-title').click(function (e) {
        e.preventDefault();

        $(this).toggleClass('blue');  //自己變藍
        $(this).parent().parent().siblings().find('.QA-title').removeClass('blue');  //別人變黑

        $(this).toggleClass('QA-plus').toggleClass('QA-minus');  //自己變+
        $(this).parent().parent().siblings().find('.QA-title').removeClass('QA-minus').addClass('QA-plus');  //別人變-

        $(this).parent().siblings('.QA-answer').slideToggle();  //自己展開
        $(this).parent().parent().siblings().find('.QA-answer').slideUp();  //別人收闔

    });

});