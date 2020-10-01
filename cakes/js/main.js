'use strict'

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

class Slider {
	constructor(options) {
		this._parent = document.querySelector(options.parentClass);
		this._slides = this._parent.querySelectorAll(options.itemsClass);
		this._btnPrev = this._parent.querySelector(options.buttonPrev);
		this._btnNext = this._parent.querySelector(options.buttonNext);

		this._index = 0;
		this._rest = this._parent.querySelector(options.counterRest);
		this._counterNumber = this._parent.querySelector(options.counterNumber);

		this._paginatorsContainer = this._parent.querySelector(options.paginatorsContainer);
		this._paginatorClass = options.paginatorClass;
		this._paginatorActiveClass = options.paginatorActiveClass;
		this._paginatorButtonClass = options.paginatorButtonClass;
	}
	

	fillRest() {
		if(this._rest && this._slides) {
			this._rest.textContent = this._slides.length;
		}
		return
	}

	toggleCounter() {
		let step = 1;
		if(this._counterNumber && this._slides) {
			this._counterNumber.textContent = Math.abs(this._index) + step;
		}
		return
	}

	moveSlides() {
		this._slides.forEach((item) => {
			if(parseFloat(getComputedStyle(item).marginLeft) || parseFloat(getComputedStyle(item).marginRight)) {
				item.style.transform = `translateX(calc(${this._index*-(parseFloat(getComputedStyle(item).width) + parseFloat(getComputedStyle(item).marginLeft) + parseFloat(getComputedStyle(item).marginRight))}px)`
			}
			else item.style.transform = `translateX(${this._index*-100}%`
		});
	}

	moveForward() {
		if (this._index >= this._slides.length - 1) {
			this._index = 0;
		}
		else this._index++;
		this.moveSlides();
		this.paginatorHighlight();
		this.toggleCounter();
	}

	moveBack() {
		if (this._index <= 0) {
			this._index = this._slides.length - 1;
		}
		else this._index--;
		this.moveSlides();
		this.paginatorHighlight();
		this.toggleCounter();
	}

	fixResize() {
		let currenSize = window.innerWidth;
		window.addEventListener('resize', () => {
			if(window.innerWidth === currenSize) return false
			this._index = 0;
			this.moveSlides();
			this.toggleCounter();
		})
	}

	slideByButtons(evt) {
		evt.preventDefault();
		if(evt.target == this._btnPrev) {
			this.moveBack()
		}
		if(evt.target == this._btnNext) {
			this.moveForward();
		}
	}

	slideBySwipe() {
		let moveStart = 0;
		let delta = 70;
		let moveEnd = 0;
		if(window.innerWidth > 540 && !this._btnPrev) return false;
		this._parent.addEventListener('touchstart', (evt) => {
			moveStart = evt.changedTouches[0].clientX;
		});
		this._parent.addEventListener('touchend', (evt) => {
			moveEnd = evt.changedTouches[0].clientX;
			if(moveStart - delta > moveEnd) {
				this.moveForward();
			}
			else if(moveStart + delta < moveEnd) {
				this.moveBack();
			}
			else return false;
		})

	}

	dotSlice(expresion) {
		expresion = expresion.replace('.', '');
		return expresion;
	}

	paginatorsFill() {
		this._paginatorClass = this.dotSlice(this._paginatorClass);
		this._paginatorButtonClass = this.dotSlice(this._paginatorButtonClass);
		for(let i = 0; i < this._slides.length; i++) {
			let paginator = document.createElement('li');
			paginator.classList.add(this._paginatorClass);
			paginator.innerHTML = `<span class="${this._paginatorButtonClass}"></span>`;
			paginator.dataset.slide = i;
			this._paginatorsContainer.appendChild(paginator);
		}
	}

	paginatorHighlight() {
		let paginators = this._paginatorsContainer.children;
		for(let i = 0; i < this._paginatorsContainer.children.length; i++) {
			if(paginators[i].classList.contains(this.dotSlice(this._paginatorActiveClass))) {
				paginators[i].classList.remove(this.dotSlice(this._paginatorActiveClass))
			}
		}
		this._paginatorsContainer.children[this._index].classList.add(this.dotSlice(this._paginatorActiveClass))
		
	}

	paginatorsInit() {
		this.paginatorsFill();
		this.paginatorHighlight();
	}

	init() {
		this.paginatorsInit();
		this.fillRest();
		this._parent.addEventListener('click', (evt) => {
			this.slideByButtons(evt);
		});
		this.slideBySwipe();
		this.fixResize();
	}

	static greateSlider(options) {
		return new Slider(options);
	}

	static setDefaultOptions(itemsClass, buttonPrev, buttonNext, parentClass, counterRest, 
		counterNumber, paginatorsContainer, paginatorClass, paginatorActiveClass, paginatorButtonClass) {
		return {
			itemsClass, 
			buttonPrev, 
			buttonNext, 
			parentClass, 
			counterRest,
			counterNumber,
			paginatorsContainer,
			paginatorClass,
			paginatorActiveClass,
			paginatorButtonClass,
		}
	}

	static setOptions(options) {
		return this.setDefaultOptions(
			options.itemsClass, 
			options.buttonPrev, 
			options.buttonNext, 
			options.parentClass, 
			options.counterRest, 
			options.counterNumber, 
			options.paginatorsContainer,
			options.paginatorClass,
			options.paginatorActiveClass,
			options.paginatorButtonClass,
		)
	}
}


let options1 = Slider.setDefaultOptions(
	'.carusele__item',
	'.card__arrow--prev',
	'.card__arrow--next', 
	'.carusele-1', 
	'.counter__rest',
	'.counter__number',
	'.paginators',
	'.paginators__item',
	'.paginators__item--active',
	'.paginators__button',
);

let options2 = Slider.setOptions(options1)
options2.parentClass = '.carusele-2';
options2.itemsClass = '.toggler';

let options3 = Slider.setOptions(options1);
options3.parentClass = '.carusele-3';
options3.transformPersent = 114;

let options4 = Slider.setOptions(options1);
options4.itemsClass = '.review';
options4.buttonPrev = '.reviews__arrow--prev', 
options4.buttonNext = '.reviews__arrow--next', 
options4.parentClass = '.reviews__carusele',

Slider.greateSlider(options1).init();
Slider.greateSlider(options2).init();
Slider.greateSlider(options3).init();
Slider.greateSlider(options4).init();
