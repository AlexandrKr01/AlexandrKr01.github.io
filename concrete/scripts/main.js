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
 