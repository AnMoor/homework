const slider = $('.slider-list').bxSlider({
    pager: false,
    controls: false,
    infinityLoop: true,
    touchEnabled: true,
    hideControlOnEnd: false,
});

$('.button-prev').click((e) => {
    e.preventDefault();
    slider.goToPrevSlide();
});

$('.button-prev').click((e) => {
    e.preventDefault();
    slider.goToNextSlide();
});