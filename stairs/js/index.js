import './imports.js';
import './sprite.js';

import swiper, { Swiper } from 'swiper';



// import '../img/sprite.svg';


let menuButton = document.querySelector('.menu__button');
let menu = document.querySelector('.menu');

document.addEventListener('click', (evt) => {
  if (evt.target.closest('.menu__button')) {
    menu.classList.toggle('menu--open');
  }
  else menu.classList.remove('menu--open');
});

let commentSlider = new Swiper('.reviews__content', {
  speed: 400,
  spaceBetween: 100,
})