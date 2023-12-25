import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/scrollbar';
new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  spaceBetween: 32,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
