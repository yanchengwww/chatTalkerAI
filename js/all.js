$(document).ready(function () {
    $('.gotop').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 1500);
    });
});