$(document).ready(function () {
    //Gotop設定
    $('.gotop').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1500);
    });

    //選擇方案
    $('.plan-number').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('bg-blue');  //自己變藍
        $(this).parent().siblings().find('.plan-number').removeClass('bg-blue');  //別人變白

        planNumber = $(this).find('.people').text();  //取人數數值
        $('.plan-people').text(planNumber);  //放入數值

        $('.plan-cost').text(planNumber *0.06);
        $('.cal-cost').text(planNumber *0.16);
    });
    $('.people-up').on('click', function (event) { //超過25000位
        $('.plan-cost').text('洽客服');
        $('.cal-cost').text('洽客服');
    });

    //常見問題
    $('.QA-title').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('blue');  //自己變藍
        $(this).parent().parent().siblings().find('.QA-title').removeClass('blue');  //別人變黑

        $(this).toggleClass('QA-plus').toggleClass('QA-minus');  //自己變+
        $(this).parent().parent().siblings().find('.QA-title').removeClass('QA-minus').addClass('QA-plus');  //別人變-

        $(this).parent().siblings('.QA-answer').slideToggle();  //自己展開
        $(this).parent().parent().siblings().find('.QA-answer').slideUp();  //別人收闔
    });

    //首頁 好評輪播
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 16,
        nav: false,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1025: {
            items: 3
          }
        }
      });

});