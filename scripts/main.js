let prev = document.querySelector('.health .left');
let next = document.querySelector('.health .right');
let wrapper = document.querySelector('.swiper-container-health');
let slides = document.querySelectorAll('.health .slide');
let slideWidth = slides[0].clientWidth;
let counter = 0;

let swiperOne = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

next.addEventListener('click', () => {
    if(counter >= 6) {
        next.style.cssText = 'pointer-events: none; opacity: 0.5;'
    };
    wrapper.style.transition = 'transform 0.3s ease';
    counter++;
    wrapper.style.transform = `translateX(${slideWidth * counter * -1}px)`;
    prev.style.cssText = 'pointer-events: all; opacity: 1;'
});

prev.addEventListener('click', () => {
    if(counter <= 1){
        prev.style.cssText = 'pointer-events: none; opacity: 0.5;'
    };
    wrapper.style.transition = 'transform 0.3s ease';
    counter--;
    wrapper.style.transform = `translateX(${slideWidth * counter * -1}px)`;
    next.style.cssText = 'pointer-events: all; opacity: 1;'
});

//slider 2

let prev2 = document.querySelector('.test .left');
let next2 = document.querySelector('.test .right');
let wrapper2 = document.querySelector('.swiper-container-test');
let slides2 = document.querySelectorAll('.test .slide');
let slideWidth2 = slides2[0].clientWidth;
let counter2 = 0;

next2.addEventListener('click', () => {
    if(counter2 >= 14) {
        next2.style.cssText = 'pointer-events: none; opacity: 0.5;'
    };
    wrapper2.style.transition = 'transform 0.3s ease';
    counter2++;
    wrapper2.style.transform = `translateX(${slideWidth2 * counter2 * -1}px)`;
    prev2.style.cssText = 'pointer-events: all; opacity: 1;'
});

prev2.addEventListener('click', () => {
    if(counter2 <= 1){
        prev2.style.cssText = 'pointer-events: none; opacity: 0.5;'
    };
    wrapper2.style.transition = 'transform 0.3s ease';
    counter2--;
    wrapper2.style.transform = `translateX(${slideWidth2 * counter2 * -1}px)`;
    next2.style.cssText = 'pointer-events: all; opacity: 1;'
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