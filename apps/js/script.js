const menuBtns = document.getElementById("menuBtn");
const mobileMenu = document.querySelector(".mobile-menu");
const header = document.querySelector(".header");
const errorMail = document.querySelector(".error");
const body = document.querySelector("body");
const button = document.querySelector(".button");
const email = document.querySelector(".email"); 


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

     // Check E-mail Is Valid  
     function checkEmail(inputText) {  
      const mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
      if(inputText.value.match(mailformat)) {  
       return true;  
      } else {  
       errorMail.classList.remove('hide');  
      }  
     }  
   
     button.addEventListener("submit", (e) => {    
      checkEmail(email);   
     });