const menu = document.querySelector('.Menu')
const toggle = document.querySelector('#toggle')


toggle.addEventListener('click', function(){

menu.classList.toggle('active')

})
var swiper = new Swiper('.Hero_Swiper', {
    slidesPerView: 1,
    loop:true,
    });

var swiper = new Swiper('.Product_Swiper', {
    slidesPerView: 4,
    loop:true,
    autoplay:true,
    spaceBetween:30,
    breakpoints:{
        0:{
        slidesPerView:1,
        },
        768:{
        slidesPerView:2,
        },
        1000:{
    
        slidesPerView:3,
        },
        1200:{
        slidesPerView:4,
        }
        }
});
    
