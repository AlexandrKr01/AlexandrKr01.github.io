'use strict';
let doc = document;

let btnBack = doc.querySelector('.button__controll--back');
let btnForward = doc.querySelector('.button__controll--forward');
let cardBlock = doc.querySelector('.slider');
let cards = doc.querySelectorAll('.slide');
let index = 0;

(function () {
	let startCoord = 0;
	let endCoord = 0;
	let startTime, endTime;

	let moveOffset = 30;
	let moveDelay = 1;

	for(let i = 0; i < cards.length; i++) {
		cards[i].addEventListener('touchstart', (e) => {
			startCoord = e.changedTouches[0].clientX;
			startTime = new Date().getSeconds();
		}, {passive: true});

		cards[i].addEventListener('touchend', (e) => {
			let offsetCheck;
			endCoord = e.changedTouches[0].clientX;
			endTime = new Date().getSeconds();
			offsetCheck = (endCoord - startCoord) > moveOffset || (startCoord - endCoord) > moveOffset;

			if(offsetCheck && (endTime - startTime) < moveDelay) {
				e.preventDefault();
				(startCoord > endCoord) ? goBack() : goForward();
			}
			else return;
		}, {passive: true});
	}
})();


btnBack.addEventListener('click', goBack);
btnForward.addEventListener('click', goForward);


function goBack() {
	cards[index].classList.remove('card--active');
	if(index > 0) {
		index--;
	}
	else {
		index = cards.length - 1;
	};
	cards[index].classList.add('card--active');
};
function goForward() {
	cards[index].classList.remove('card--active');
	if(index < cards.length - 1) {
		index++;
	}
	else {
		index = 0;
	};
	cards[index].classList.add('card--active');
}