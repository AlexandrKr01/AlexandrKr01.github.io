'use strict';
let menuList = document.querySelector('.menu__list');
let menuBtnContainer = document.querySelector('.button');
let menuBtn = document.querySelector('.button__menu');

menuBtnContainer.addEventListener('click', openMenu);

function openMenu(evt) {
	evt.preventDefault();
	menuList.classList.remove('tablet--hidden');
	menuBtn.classList.add('button__menu--close');
	this.removeEventListener('click', openMenu);
	this.addEventListener('click', closeMenu);
};

function closeMenu(evt) {
	evt.preventDefault();
	menuList.classList.add('tablet--hidden');
	menuBtn.classList.remove('button__menu--close');
	this.removeEventListener('click', closeMenu);
	this.addEventListener('click', openMenu);
};