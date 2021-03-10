'use strict'

// menu toggler

function toggleMenu(menuClass, togglerClass, activeClass, closeClass) {
	function toggle (evt) {
		let toggler = document.querySelector(togglerClass);
		let menu = document.querySelector(menuClass);
		if(evt.target === toggler) {
	    	menu.classList.toggle(activeClass);
	    	toggler.classList.toggle(closeClass);
	    }
	    else {menu.classList.remove(activeClass); toggler.classList.remove(closeClass)};
	}

	document.addEventListener('click', toggle)
}

toggleMenu('.menu__list', '.menu__button', 'menu__list--active', 'menu__button--close');

// block empty links 

;(function blockLinks() {
	let links =document.querySelectorAll('a[href="#"]');
	links.forEach((item) => {
		item.addEventListener('click', (evt) => {
			evt.preventDefault()
		})
	})
})();

// dymamic skills 

function fillBarr(valueClass, progressClass) {
	let valueElements = document.querySelectorAll(`.${valueClass}`);
	let progressElements = document.querySelectorAll(`.${progressClass}`);
	progressElements.forEach((item, index) => {
		item.style.width = `${valueElements[index].dataset.skill}%`;
	})
}

fillBarr('skill__value', 'skill__bar--full')

// Подкрасить меню при скроле 

document.addEventListener('scroll', (evt) => {
	let header = document.querySelector('.header');
	let offset = window.pageYOffset;
	let offsetGap = 10;
	(offset >= offsetGap) ? header.classList.add('header--white') : header.classList.remove('header--white')
})

let sliderOptions = {
  sliderListClass: 'slider__list',
  slideClass: 'slider__slide',
  controllsContainerClass: 'slider__controlls',
  controllElemrnt: 'li',
  controllClass: 'slider__controll',
  controllActiveClass: 'slider__controll--active',
}

let slider = new Slider(sliderOptions);
slider.init().moveByTime(5000, 'moveForward');

let caruseleOptions = {
  sliderListClass: 'partners__list',
  slideClass: 'partners__item',
}

let carusele = new Slider(caruseleOptions);
carusele.init().moveByTime(5000, 'infinity');