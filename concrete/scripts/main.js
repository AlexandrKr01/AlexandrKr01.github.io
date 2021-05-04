'use strict'

// menu toggler

function toggleMenu(menuClass, togglerClass, activeClass, togglerAddClass) {
	function toggle (evt) {
		let toggler = document.querySelector(togglerClass);
		let menu = document.querySelector(menuClass);

		if(evt.target === toggler) {
	    	menu.classList.toggle(activeClass);
	    	toggler.classList.toggle(togglerAddClass);
	    }
	    else {
	    	menu.classList.remove(activeClass);
	    	toggler.classList.remove(togglerAddClass);
	    }
	}

	document.addEventListener('click', toggle)
}

toggleMenu('.menu__collapse', '.menu__button', 'menu__collapse--open', 'menu__button--close');

// popup 

document.addEventListener('click', (evt) => {
	let openButton = document.querySelectorAll('.button--service');
	let popup = document.querySelector('.popup');
	let closeButton = document.querySelector('.popup__close');
	let wrapper = document.querySelector('.popup__wrapper')
	openButton.forEach((item) => {
		if(evt.target === item) {
			popup.classList.add('popup--open')
		}
	})
	if(evt.target === closeButton || evt.target === wrapper) {
		popup.classList.remove('popup--open')
	}
	
})

// gallery

let gallery = document.querySelector('.gallery');
let srcs = [];
let image = gallery.querySelector('.gallery__image');

console.log(gallery)


// phone mask

let tels = document.querySelectorAll('input[type="tel"]');

tels.forEach((tel) => {
	let phoneMask = IMask(tel, {
	  mask: '+{38}(000)000-00-00',
	  lazy: false,  // make placeholder always visible
	  placeholderChar: '_'     // defaults to '_'
	});
})