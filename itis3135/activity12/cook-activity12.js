$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 10,
        randomStart: true,
        moveSlides: 1,
        captions: true,
        pause: 3000,
        pager: true,
        pagerType: "short"
    });
});