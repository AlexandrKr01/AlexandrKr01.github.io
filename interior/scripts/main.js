"use strict";

(function () {
	let searchLink = document.querySelector('.search__link');
	// let searchInput = document.querySelector('.search__input');
	searchLink.addEventListener('click', (evt) => {
		evt.preventDefault();
		evt.currentTarget.classList.toggle('active');
		// if(searchInput.value || evt.currentTarget.classList.contains('active')) {
		// 	evt.currentTarget.classList.remove('active');
		// 	alert(searchInput.value);
		// }
		// else {
		// 	evt.currentTarget.classList.add('active');
		// }
	});
})();

(function () {
	let menuButton = document.querySelector('.navigation__toggler--open');
	let menu = document.querySelector('.navigation__list');

	menuButton.addEventListener('click', (e) => {
		menuButton.classList.toggle('navigation__toggler--close');
		if(menuButton.classList.contains('navigation__toggler--close')) {
			menu.classList.add('navigation__list--opened')
		}
		else {
			menu.classList.remove('navigation__list--opened')
		}
	});
})();


