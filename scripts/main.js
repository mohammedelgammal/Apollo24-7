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

let items = document.querySelectorAll('footer .child h3');
let spanContainer = document.querySelectorAll('footer .child .span-container');

for(let i = 0; i < items.length; i++){
    items[i].addEventListener('click', () => {
        if(spanContainer[i].style.display === 'flex'){
            spanContainer[i].style.display = 'none';
        } else {
            spanContainer[i].style.display = 'flex';
        }
    })
}

let doctor = document.querySelector('.doctor img');
let closingPanel = document.querySelector('.closing');
let docPanel = document.querySelector('.doctor-panel');

closingPanel.addEventListener('click', () => {
    docPanel.style.display = 'none';
    closingPanel.style.display = 'none';
});

doctor.addEventListener('click', () => {
    if(docPanel.style.display === 'flex'){
        docPanel.style.display = 'none';
        closingPanel.style.display = 'none';
    } else {
        docPanel.style.display = 'flex';
        closingPanel.style.display = 'flex';
    }
});



