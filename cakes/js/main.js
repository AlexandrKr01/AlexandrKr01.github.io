// menu toggler

function toggleMenu(menuClass, togglerClass, activeClass) {
	function toggle (evt) {
		let toggler = document.querySelector(togglerClass);
		let menu = document.querySelector(menuClass);

		if(evt.target === toggler) {
	    	menu.classList.toggle(activeClass);
	    }
	    else menu.classList.remove(activeClass);
	}

	document.addEventListener('click', toggle)
}

toggleMenu('.menu--main', '.menu__toggler', 'menu--active');


// carusele

function initSlider(itemsClass, buttonPrev, buttonNext, parentClass, transformPersent = 100) {
	let parent = document.querySelector(parentClass);
	let slides = parent.querySelectorAll(itemsClass);
	let	btnPrev = parent.querySelector(buttonPrev);
	let btnNext = parent.querySelector(buttonNext);
	let index = 0;

	function fillRest() {
		let rest = parent.querySelector('.counter__rest');
		if(rest && slides) {
			rest.textContent = slides.length;
		}
		return
	}

	function toggleCounter(evt) {
		let counterNumber = parent.querySelector('.counter__number');
		let step = 1;

		if(counterNumber && slides) {
			counterNumber.textContent = Math.abs(index) + step;
		}
		return
	}

	function maveSlides() {
		slides.forEach((item) => {
			item.style.transform = `translateX(${index*-transformPersent}%)`;
		});
	}

	function slideByButtons(evt) {
		evt.preventDefault();
		if(evt.target == btnPrev) {
			if (index <= 0) {
				index = slides.length - 1;
			}
			else index--;
			maveSlides();
		}
		if(evt.target == btnNext) {
			if (index >= slides.length - 1) {
				index = 0;
			}
			else index++;
			maveSlides();
		}
	}

	parent.addEventListener('click', slideByButtons);
	parent.addEventListener('click', toggleCounter);
	fillRest();
}

initSlider('.carusele__item', '.card__arrow--prev', '.card__arrow--next', '.carusele-1');
initSlider('.carusele__item', '.card__arrow--prev', '.card__arrow--next', '.carusele-2');
initSlider('.carusele__item', '.card__arrow--prev', '.card__arrow--next', '.carusele-3', 114);
initSlider('.review', '.reviews__arrow--prev', '.reviews__arrow--next', '.reviews__carusele');

// card__arrow--prev
// card__arrow--next

// carusele__item - all

