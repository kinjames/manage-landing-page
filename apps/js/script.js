const menuBtns = document.getElementById("menuBtn");
const mobileMenu = document.querySelector(".mobile-menu");
const header = document.querySelector(".header");
const errorMail = document.querySelector(".error");
const body = document.querySelector("body");
const button = document.querySelector(".button");
const email = document.querySelector(".email").value;
 


menuBtns.addEventListener('click', function() {
    if (mobileMenu.classList.contains('hide')){
        menuBtns.classList.add('burger');
        mobileMenu.classList.remove('hide');
        mobileMenu.classList.add('active');
        body.classList.add('noscroll');
    } else {
        mobileMenu.classList.remove('active');
        mobileMenu.classList.add('hide');
        menuBtns.classList.remove('burger');
        body.classList.remove('noscroll');
    }
})

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 0,
    centeredSlides: true,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        640: {
        slidesPerView: 3,
        spaceBetween: 20,
        mousewheel: true,
        initialSlide: 1,
        grabCursor:true,
        centeredSlides: true,
      },
    }
  });

  button.addEventListener('click',function(){
    if(errorMail.classList.contains('hide')){
      errorMail.classList.remove('hide');
      errorMail.classList.add('active');
    } else {
      errorMail.classList.add('hide');
      errorMail.classList.remove('active');
    }
  })


