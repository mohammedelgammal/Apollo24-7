let swiperSlider = new Swiper('.slider-one', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    freeMode: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
    centeredSlides: true
});

let swiperHealth = new Swiper('.health', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 8,
    freeMode: true,
    centeredSlides: true,
});

let swiperTest = new Swiper('.test', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    freeMode: true,
    centeredSlides: true
});

let swiperTop = new Swiper('.top', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    freeMode: true,
    centeredSlides: true
});