'use strict'

// menu toggler

function toggleMenu(menuClass, togglerClass, activeClass, closeClass) {
	function toggle (evt) {
		let toggler = document.querySelector(togglerClass);
		let menu = document.querySelector(menuClass);
		// console.log(evt.target)
		if(evt.target === toggler) {
	    	menu.classList.toggle(activeClass);
	    	toggler.classList.toggle(closeClass);
	    }
	    else {menu.classList.remove(activeClass); toggler.classList.remove(closeClass)};
	}

	document.addEventListener('click', toggle)
}

toggleMenu('.menu__list', '.menu__button', 'menu__list--active', 'menu__button--close');

// toggleElements

function toggleItems(itemClass, listClass, activeClass, options) {

	// multiActive = true, stopper, parrentTarget, multiList
	let list;
	let lists;
	let items;

	function addClass(itemList, items) {
		itemList.addEventListener('click', (evt) => {
			if(evt.target.closest(options.stopper) || evt.target.closest(options.childTarget)) return

			if(!(evt.target.closest(itemClass).classList.contains(...activeClass) )) {
				items.forEach((item) => {
					if(item.classList.contains(...activeClass) && (!options.multiActive)) {
						item.classList.remove(...activeClass);						
					}
					evt.target.closest(itemClass).classList.add(...activeClass)
				})
			}
			else {
				evt.target.closest(itemClass).classList.remove(...activeClass)
			}


		})
	}

	if(options.multiList) {
		lists = document.querySelectorAll(listClass);
		lists.forEach((elem) => {
			items = elem.querySelectorAll(itemClass);
			addClass(elem, items)
		})
	}

	else {
		list = document.querySelector(listClass);
		items = list.querySelectorAll(itemClass);
		addClass(list, items);
	}	
}

toggleItems('.producers__item', '.producers', ['producers__item--active'], {});
toggleItems('.gallery__card', '.gallery', ['gallery__card--active', 'card--active'], {
	multiActive: true,
	stopper:'video',
	childTarget: ['.social__button', '.rating__list']});

toggleItems('.rating__mark', '.rating', ['rating__mark--active'], {multiList:true});
