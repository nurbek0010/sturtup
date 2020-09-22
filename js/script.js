$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 4,
        prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>'
    });
    $('.sponsor-slider').slick({
        arrows: false,
        dots: true
    })
});