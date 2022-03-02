import burger from './modules/burger.js';
import smoothscroll from 'smoothscroll-polyfill';
import scroll from './modules/smoothScroll.js';
// import tabbis from "./vendor/tabs.js"
import accordion from './modules/accordion.js';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';

// Burger ======================================================================
burger('.burger', '.nav', '.nav__link', 'body', '.phone');

// SmoothScroll ================================================================
smoothscroll.polyfill();
scroll('.anchor-link');

// Tabs ========================================================================
// tabbis({
//   tabGroup: "[tabs]",
//   paneGroup: "[tabs-content]",
// })

// Accordeon ===================================================================
accordion('.accordion__head');

// Swiper ======================================================================
/* eslint-disable no-unused-vars */
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    568: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
/* eslint-enable no-unused-vars */
