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
		this._parentClass = options.parentClass;
		this._itemsClass = options.itemsClass;
		this._buttonPrevClass = options.buttonPrev;
		this._buttonNextClass = options.buttonNext;
		this._caruseleClass = options.caruseleClass;

		this._counterRestClass = options.counterRest;
		this._counterNumberClass = options.counterNumber;

		this._paginatorsContainerClass = options.paginatorsContainer;
		this._paginatorClass = options.paginatorClass;
		this._paginatorActiveClass = options.paginatorActiveClass;
		this._paginatorPassiveClass = options.paginatorPassiveClass;
		this._paginatorButtonClass = options.paginatorButtonClass;

		this._parent = document.querySelector(this._parentClass);
		this._carusele = this._parent.querySelector(this._caruseleClass);
		this._slides = this._parent.querySelectorAll(this._itemsClass);
		this._btnPrev = this._parent.querySelector(this._buttonPrevClass);
		this._btnNext = this._parent.querySelector(this._buttonNextClass);

		this._index = 0;
		this._rest = this._parent.querySelector(this._counterRestClass);
		this._counterNumber = this._parent.querySelector(this._counterNumberClass);

		this._paginatorsContainer = this._parent.querySelector(this._paginatorsContainerClass);
	}

	fillRest() {
		if(this._rest && this._slides) {
			this._rest.textContent = this._slides.length;
		}
		return
	}

	makeEvent(elem) {
		let slide = new Event('slide');
		elem.dispatchEvent(slide);
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
		this.makeEvent(this._parent);
	}

	moveBack() {
		if (this._index <= 0) {
			this._index = this._slides.length - 1;
		}
		else this._index--;
		this.moveSlides();
		this.paginatorHighlight();
		this.toggleCounter();
		this.makeEvent(this._parent);
	}

	resizeFix() {
		let currenSize = window.innerWidth;
		window.addEventListener('resize', () => {
			if(window.innerWidth === currenSize) return false
			this._index = 0;
			this.moveSlides();
			this.toggleCounter();
			this.paginatorHighlight();

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

	_isSlideBySwipeNone() {
		let modileWidth = 540;
		return (window.innerWidth > modileWidth && !this._btnPrev);
	}

	_slideBySwipeInit(startListener, finishListener) {
		this._parent.addEventListener('touchstart', startListener);
		this._parent.addEventListener('touchend', finishListener);		
	}

	_slideBySwipeCancel(startListener, finishListener) {
		this._parent.removeEventListener('touchstart', startListener);
		this._parent.removeEventListener('touchend', finishListener);
	}

	slideBySwipe() {
		let moveStart = 0;
		let delta = 70;
		let moveEnd = 0;
		let startInit = (evt) => {
			moveStart = evt.changedTouches[0].clientX;
		}
		let finishInit = (evt) => {
			moveEnd = evt.changedTouches[0].clientX;
			if(moveStart - delta > moveEnd) {
				this.moveForward();
			}
			else if(moveStart + delta < moveEnd) {
				this.moveBack();
			}
			else return false;
		}
		window.addEventListener('resize', () => {
			if(this._isSlideBySwipeNone()) {
				this._slideBySwipeCancel(startInit, finishInit);
				return
			}
			this._slideBySwipeInit(startInit, finishInit);
		})
		if(this._isSlideBySwipeNone()) return false;
		this._slideBySwipeInit(startInit, finishInit);
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

	_paginatorsDefine() {
		return this._paginatorsContainer.children;
	}

	_isLongPaginator(paginatorsMoveLength) {
		return this._paginatorsDefine().length > paginatorsMoveLength;
	}

	paginatorsMove(index) {
		let paginators = this._paginatorsDefine();
		let moveIndex = 3;
		let backIndex = 2;
		let moveStep = 1;
		let paginatorsMoveLength = 5;

		if(this._isLongPaginator(paginatorsMoveLength)) {
			for(let i = 0; i < paginators.length; i++) {
				if(index > moveIndex && index < paginators.length - moveIndex) {				
					paginators[i].style.transform = `translateX(${(index - moveIndex)*-100}%)`;
					paginators[i].classList.remove(this.dotSlice(this._paginatorPassiveClass));
					paginators[index-moveIndex].classList.add(this.dotSlice(this._paginatorPassiveClass));
					paginators[index+moveStep].classList.add(this.dotSlice(this._paginatorPassiveClass));
				}

				else if(index === (paginators.length - moveIndex)) {
					paginators[i].style.transform = `translateX(${(index - backIndex)*-100}%)`;
					paginators[i].classList.remove(this.dotSlice(this._paginatorPassiveClass));
					paginators[paginators.length - paginatorsMoveLength].classList.add(this.dotSlice(this._paginatorPassiveClass));
				}

				else if(index <= moveIndex) {
					paginators[i].style.transform = `translateX(0)`;
					paginators[i].classList.remove(this.dotSlice(this._paginatorPassiveClass));
					paginators[paginatorsMoveLength - 1].classList.add(this.dotSlice(this._paginatorPassiveClass));
				} 

				else if(index === paginators.length - 1) {
					paginators[i].style.transform = `translateX(${(index - moveIndex - 1)*-100}%)`;
					paginators[index].classList.remove(this.dotSlice(this._paginatorPassiveClass));
					paginators[index-(paginatorsMoveLength - 1)].classList.add(this.dotSlice(this._paginatorPassiveClass));
				}
			}	
		}		
	}

	paginatorHighlight() {
		let paginators = this._paginatorsDefine();

		for(let i = 0; i < paginators.length; i++) {
			if(paginators[i].classList.contains(this.dotSlice(this._paginatorActiveClass))) {
				paginators[i].classList.remove(this.dotSlice(this._paginatorActiveClass))
			}
		}
		paginators[this._index].classList.add(this.dotSlice(this._paginatorActiveClass))
		this.paginatorsMove(this._index);
	}

	paginatorsInit() {
		this.paginatorsFill();
		this.paginatorHighlight();
	}

	slideByPaginator() {
		let paginators = this._paginatorsDefine();
		let movablePaginatorLength = 5;
		if(this._isLongPaginator(movablePaginatorLength)) return false;
		this._paginatorsContainer.addEventListener('click', (evt) => {
			let target = evt.target.closest('li');
			for(let i = 0; i < paginators.length; i++) {
				if(target == paginators[i]) {
					this._index = target.dataset.slide;
					this.moveSlides();
					this.paginatorHighlight();
					this.toggleCounter();
				}
			}
		})
	}

	_makeTag(element, className, text) {
		if(element) {
			let node = document.createElement(element);
			if(className) {
				node.classList = className;
			}
			if(text) {
				node.textContent = text
			}
			return node;
		}
	}

	renderCard(data) {
		
		let list = this._carusele;
		data.forEach((item, i) => {
			let li = this._makeTag(data[i].itemElement.itemTag, `${data[i].itemElement.itemClass} ${this.dotSlice(this._itemsClass)}`)

			let picture;
			let source;

			let image = this._makeTag(data[i].imageElement.imageTag, data[i].imageElement.imgClass);
			image.src = data[i].imageElement.imageSrc;
			image.alt = data[i].imageElement.imgAlt;
			let wrapper = this._makeTag(data[i].contentContainer.containerTag, data[i].contentContainer.containerClass);

			let title = this._makeTag(data[i].contentTitle.titleTag, data[i].contentTitle.titleClass, data[i].contentTitle.titleContent);
			title.dataset.ingredient_title = data[i].contentTitle.titleData;

			let content;

			let price = this._makeTag(data[i].contentPrice.priceTag, data[i].contentPrice.priceClass, data[i].contentPrice.priceText);

			let button = this._makeTag(data[i].button.buttonTag, data[i].button.buttonClass, data[i].button.buttonValue);
			button.href = data[i].button.buttonHref;
			button.dataset.ingredient_value = data[i].button.buttonData;


			wrapper.append(title);
			if(data[i].contentDescription) {
				content = this._makeTag(data[i].contentDescription.descriptionTag, data[i].contentDescription.descriptionClass, data[i].contentDescription.descriptionText);
				wrapper.append(content);
			} 
			wrapper.append(price);
			wrapper.append(button);

			if(data[i].pictureElement && data[i].sourceElement) {

				picture = this._makeTag(data[i].pictureElement.pictureTag, data[i].pictureElement.pictureClass);
				source = this._makeTag(data[i].sourceElement.sourceTag);
				source.srcset = data[i].sourceElement.sourceSrc;
				source.media = data[i].sourceElement.sourceMedia;

				picture.append(source);
				picture.append(image);

				li.append(picture);
			}
			else {
				li.append(image);
			}
			
			li.append(wrapper);

			list.append(li);	
		})
		return new Promise(function(resolve, reject) {
			resolve();
		})		
	}

	renderToggler(data) {
		let list = this._carusele;

		data.forEach((item, i) => {
			let li = this._makeTag(data[i].itemElement.itemTag, `${data[i].itemElement.itemClass} ${this.dotSlice(this._itemsClass)}`)

			let input = this._makeTag(data[i].inputElement.imageTag, data[i].inputElement.inputClass);
			input.type = data[i].inputElement.inputType;
			input.name = data[i].inputElement.inputName;
			input.id = data[i].inputElement.inputId;

			let label = this._makeTag(data[i].inputLabel.labelTag, data[i].inputLabel.labelClass, data[i].inputLabel.labelContent);
			label.for = data[i].inputLabel.labelFor;
			label.dataset.size_title = data[i].inputLabel.labelData;

			let description = this._makeTag(data[i].contentDescription.descriptionTag, data[i].contentDescription.descriptionClass, data[i].contentDescription.descriptionText);
			let persons = this._makeTag(data[i].contentPersone.personeTag, data[i].contentPersone.personeClass, data[i].contentPersone.personeText);

			let button = this._makeTag(data[i].button.buttonTag, data[i].button.buttonClass, data[i].button.buttonValue);
			button.href = data[i].button.buttonHref;
			button.dataset.size_value = data[i].button.buttonData;

			li.append(input);
			li.append(label);
			li.append(description);
			li.append(persons);
			li.append(button);

			list.append(li);
		})

		return new Promise(function(resolve, reject) {
			resolve();
		})
	}

	_makeEngine(slideByButtons, slideByPaginator, slideByToutch) {
		this._slides = this._parent.querySelectorAll(this._itemsClass);
		this.paginatorsInit()
		this.fillRest()
		this.resizeFix()

		if(slideByButtons) {
			this._parent.addEventListener('click', (evt) => {
				this.slideByButtons(evt);
			});
		}

		if(slideByPaginator) {
			this.slideByPaginator();
		}

		if(slideByToutch) {
			this.slideBySwipe();
		}
	}

	init(url, slideByButtons, slideByPaginator, slideByToutch) {
		fetch(url)
			.then((response) => {
			    return response.json();
			})
			.then((data) => {
				if(url.includes('size')) {
					this.renderToggler(data)
				}
				else {
					this.renderCard(data)
				}
			})
			.then( () => {
				this._makeEngine(slideByButtons, slideByPaginator, slideByToutch);
			}
		)
			.catch( (err) => {
				alert(err);
				console.log(err)
			})
	}

	static greateSlider(options) {
		return new Slider(options);
	}

	static setDefaultOptions(itemsClass, buttonPrev, buttonNext, caruseleClass, parentClass, counterRest, 
		counterNumber, paginatorsContainer, paginatorClass, paginatorActiveClass, paginatorPassiveClass, paginatorButtonClass) {
		return {
			itemsClass, 
			buttonPrev, 
			buttonNext,
			caruseleClass,
			parentClass, 
			counterRest,
			counterNumber,
			paginatorsContainer,
			paginatorClass,
			paginatorActiveClass,
			paginatorPassiveClass,
			paginatorButtonClass,
		}
	}

	static setOptions(options) {
		return this.setDefaultOptions(
			options.itemsClass, 
			options.buttonPrev, 
			options.buttonNext,
			options.caruseleClass,
			options.parentClass, 
			options.counterRest, 
			options.counterNumber, 
			options.paginatorsContainer,
			options.paginatorClass,
			options.paginatorActiveClass,
			options.paginatorPassiveClass,
			options.paginatorButtonClass,
		)
	}
}

class CommentSlider extends Slider {
	constructor(options) {
		super(options);
		this._commentClass = options.commentClass;
		this._expandClass = options.expandClass;
		// this._expendButtton = this._parent.querySelectorAll(options.expandClass);
	}


	expandComment() {
		let comment = this._parent.querySelector(this._commentClass);
		let standartHeight = comment.style.height;
		let target = null;

		let expendButtton = this._parent.querySelectorAll(this._expandClass);

		

		this._slides.forEach((item, index) => {
			item.addEventListener('click', (evt) => {
				evt.preventDefault();
				target = evt.target.closest(this._expandClass);
				if(target !==  expendButtton[index]) return false;
				if(target.textContent === 'Развернуть') {
					target.previousElementSibling.style.height = 'auto';
					target.textContent = 'Свернуть';
				}
				else if(target.textContent === 'Свернуть') {
					target.previousElementSibling.style.height = standartHeight;
					target.textContent = 'Развернуть';
				}

				this._parent.addEventListener('slide', () => {
					target.previousElementSibling.style.height = standartHeight;
					target.textContent = 'Развернуть';
				})
			})
			
		})
	}

	renderComments(data) {
		let list = this._carusele;

		data.forEach((item, i) => {
			let li = this._makeTag(data[i].itemElement.itemTag, `${data[i].itemElement.itemClass} ${this.dotSlice(this._itemsClass)}`)

			let imageWrapper = this._makeTag(data[i].imageContainer.containerTag, data[i].imageContainer.containerClass);
			let image = this._makeTag(data[i].imageElement.imageTag, data[i].imageElement.imgClass);
			image.src = data[i].imageElement.imageSrc;
			image.alt = data[i].imageElement.imgAlt;

			imageWrapper.append(image);

			let commentWrapper = this._makeTag(data[i].contentContainer.containerTag, data[i].contentContainer.containerClass);
			let title = this._makeTag(data[i].contentTitle.titleTag, data[i].contentTitle.titleClass, data[i].contentTitle.titleContent);
			let details = this._makeTag(data[i].contentDetails.detailsTag, data[i].contentDetails.detailsClass, data[i].contentDetails.detailsText);
			let content = this._makeTag(data[i].contentDescription.descriptionTag, data[i].contentDescription.descriptionClass, data[i].contentDescription.descriptionText);
			let expandBtn = this._makeTag(data[i].rewiewButton.buttonTag, data[i].rewiewButton.buttonClass, data[i].rewiewButton.buttonValue);
			expandBtn.href = data[i].rewiewButton.buttonHref;

			commentWrapper.append(title);
			commentWrapper.append(details);
			commentWrapper.append(content);
			commentWrapper.append(expandBtn);

			li.append(imageWrapper);
			li.append(commentWrapper);

			list.append(li);
		})

		return new Promise(function(resolve, reject) {
			resolve();
		})
	}

	commentInit(url, slideByButtons, slideByPaginator, slideByToutch) {
		fetch(url)
			.then((response) => {
			    return response.json();
			})
			.then((data) => {
				this.renderComments(data)
			})
			.then( () => {
				this._makeEngine(slideByButtons, slideByPaginator, slideByToutch);
				this.expandComment();
			}
		)
			.catch( (err) => {
				alert(err);
				console.log(err);
			})	
	}

	static greateSlider(options) {
		return new CommentSlider(options);

	}


	static setDefaultOptions(itemsClass, buttonPrev, buttonNext, caruseleClass, parentClass, counterRest, 
		counterNumber, paginatorsContainer, paginatorClass, paginatorActiveClass, paginatorPassiveClass, paginatorButtonClass, expandClass, commentClass) {
		return {
			itemsClass, 
			buttonPrev, 
			buttonNext, 
			caruseleClass,
			parentClass, 
			counterRest,
			counterNumber,
			paginatorsContainer,
			paginatorClass,
			paginatorActiveClass,
			paginatorPassiveClass,
			paginatorButtonClass,
			expandClass,
			commentClass,
		}
	}

	static setOptions(options) {
		return this.setDefaultOptions(
			options.itemsClass, 
			options.buttonPrev, 
			options.buttonNext,
			options.caruseleClass, 
			options.parentClass, 
			options.counterRest, 
			options.counterNumber, 
			options.paginatorsContainer,
			options.paginatorClass,
			options.paginatorActiveClass,
			options.paginatorPassiveClass,
			options.paginatorButtonClass,
			options.expandClass,
			options.commentClass,
		)
	}

}

let options1 = Slider.setDefaultOptions(
	'.carusele__item',
	'.card__arrow--prev',
	'.card__arrow--next',
	'.carusele__list',
	'.carusele-1', 
	'.counter__rest',
	'.counter__number',
	'.paginators',
	'.paginators__item',
	'.paginators__item--active',
	'.paginators__item--passive',
	'.paginators__button',
);

let options2 = Slider.setOptions(options1)
options2.parentClass = '.carusele-2';
options2.itemsClass = '.toggler';
options2.caruseleClass = '.size__list';

let options3 = Slider.setOptions(options1);
options3.parentClass = '.carusele-3';
options3.transformPersent = 114;

let options4 = Slider.setOptions(options1);
options4.itemsClass = '.review';
options4.buttonPrev = '.reviews__arrow--prev';
options4.buttonNext = '.reviews__arrow--next';
options4.parentClass = '.reviews__carusele';
options4.expandClass = '.review__link';
options4.commentClass = '.review__content';

Slider.greateSlider(options1).init('backand/ingredients.json', true, true, true);
let slider2 = Slider.greateSlider(options2);
slider2.init('backand/size.json', true, true, true);


Slider.greateSlider(options3).init('backand/decor.json', true, true, true);
CommentSlider.greateSlider(options4).commentInit('backand/comments.json', true, true, true);

(function fillOrder() {
	let order = {
		ingredients: null,
		size: null,
		decor: null,
		toString() {
			return `Начинка: ${this.ingredients}, вес: ${this.size}, украшение: ${this.decor}<br> Заказ оформлен успешно:)`
		}
	}

	let odrerParams = document.querySelectorAll('.order__item');
	let result = document.querySelectorAll('.result__value');

	let orderButton = document.querySelector('.result__button');

	odrerParams.forEach((item, i) => {
		item.addEventListener('click', (evt) => {
			evt.preventDefault();
			if(!(evt.target.classList.contains('card__button') || evt.target.classList.contains('toggler__label') ||  evt.target.closest('li').classList.contains('card--nerrow'))) {
				return false;
			};
			if(evt.target.parentElement.querySelector('.card__title')) {
				order[item.dataset['order']] = evt.target.parentElement.querySelector('.card__title').textContent;
			};
			if(evt.target.querySelector('.card__title'))  {
				order[item.dataset['order']] = evt.target.querySelector('.card__title').textContent;
			};
			if(evt.target.parentElement.querySelector('.toggler__label')) {
				order[item.dataset['order']] = evt.target.parentElement.querySelector('.toggler__label').textContent;
				
			}
			if(result[i].dataset['order'] === item.dataset['order']) {
				result[i].classList.remove('result__value--error');
				result[i].value = order[item.dataset['order']] ;
			}
		})
	})

	function fillOrderMistakes() {
		result.forEach((iten, i) => {
			result[i].classList.remove('result__value--error');
			if(!(result[i].value) || result[i].value === '--') {
				result[i].classList.add('result__value--error');
			}
		})
	}

	function isValidOrder(obj) {
		for(let key in obj) {
			if(!obj[key]) {
				return false
			}
		}
		return true
	}

	function setModal(modalClass, order, timer) {
		let modal = document.createElement('div');
		modal.classList.add(modalClass);

		modal.innerHTML = order;
		document.body.append(modal)
		setTimeout(() => {modal.remove()}, timer)
	}

	function setErrorModal(order, timer) {
		let modal = document.createElement('div');
		modal.classList.add('modalSuccess');

		modal.textContent = order;
		document.body.append(modal)
		setTimeout(() => {modal.remove()}, timer)
	}

	orderButton.addEventListener('click', (evt) => {
		evt.preventDefault();
		fillOrderMistakes();
		if(isValidOrder(order)) {
			fetch('backand/orders.json', {
			  method: 'POST',
			  headers: {
			    'Content-Type': 'application/json;charset=utf-8'
			  },
			  body: JSON.stringify(order)
			})
			.then(() => {setModal('modalSuccess', order, 5000)});
		}
	})

	   })();