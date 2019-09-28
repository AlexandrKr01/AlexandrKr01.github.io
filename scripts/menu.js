'use strict';
// const doc = document;
let menuList = doc.querySelector('.menu__list');
let menuBtnContainer = doc.querySelector('.button');
let menuBtn = doc.querySelector('.button__menu');

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