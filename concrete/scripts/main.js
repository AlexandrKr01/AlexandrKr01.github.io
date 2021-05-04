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

let gallery = document.querySelectorAll('.gallery');

function toggleInit(gallery) {
	let btnPrev = gallery.querySelector('.gallery__button--prew');
	let btnNext = gallery.querySelector('.gallery__button--next');

	btnNext.addEventListener('click', (evt) => {
		toggleByButtons('next', gallery);
	})

	btnPrev.addEventListener('click', (evt) => {
		toggleByButtons('prev', gallery);
	})

	function toggleByButtons(flag, gallery) {
		let miniatureContainer = gallery.querySelector('.gallery__miniatures');

		let targetSlide;
		if(flag === 'prev') {
			targetSlide = miniatureContainer.children[miniatureContainer.children.length - 1];
		}
		else if(flag === 'next') {
			targetSlide = miniatureContainer.children[0];
		}
		else {
			console.log('No flag "prev" or "next"');
			return
		};
		
		let targetImage = targetSlide.querySelector('img');

		let outputSlide = gallery.querySelector('.gallery__output');
		let outputImage = outputSlide.querySelector('img');

		targetSlide.remove();

		targetSlide.innerHTML = `
			<picture>
				<source type="image/webp" srcset="${outputImage.src.replace('.jpg', '.webp')}" class="gallery__miniature">
				<img src="${outputImage.src}" alt="work-1" class="gallery__miniature">
			</picture>
		`
		outputSlide.innerHTML = `
			<picture>
				<source type="image/webp" srcset="${targetImage.src.replace('.jpg', '.webp')}" class="gallery__image">
				<img src="${targetImage.src}" alt="work-1" class="gallery__image">
			</picture>
		`

		if(flag === 'prev') {
			miniatureContainer.prepend(targetSlide);
		}
		else if(flag === 'next') {
			miniatureContainer.append(targetSlide);
		}
		else console.log('No flag "prev" or "next"');	
	}
}


function galleryInit(gallery) {

	let miniatures = gallery.querySelectorAll('.gallery__miniature-wrap');

	miniatures.forEach((item)=> {
		toggleMiniatures(gallery, item);
	})
}

function toggleMiniatures(gallery, miniature) {
	miniature.addEventListener('click', (evt) => {
		let output = gallery.querySelector('.gallery__output');
		let outputSwap = output.querySelector('img').src;
		output.innerHTML = `
			<picture>
				<source type="image/webp" srcset="${evt.target.src.replace('.jpg', '.webp')}" class="gallery__image">
				<img src="${evt.target.src}" alt="work-1" class="gallery__image">
			</picture>
		`
		evt.target.closest('.gallery__miniature-wrap').innerHTML = `
			<picture>
				<source type="image/webp" srcset="${outputSwap.replace('.jpg', '.webp')}" class="gallery__miniature">
				<img src="${outputSwap}" alt="work-1" class="gallery__miniature">
			</picture>
		`;
	})
}

gallery.forEach((item) => {
	galleryInit(item);
	toggleInit(item);
});



// phone mask

let tels = document.querySelectorAll('input[type="tel"]');

tels.forEach((tel) => {
	let phoneMask = IMask(tel, {
	  mask: '+{38}(000)000-00-00',
	  lazy: true,
	});
})


function validateForms(selector, rules) {
	new window.JustValidate(selector, {
		rules: {
			name: {required: true, minLength: 3}, 
			phone: {required: true, minLength: 17},
			
		},
		messages: {
	      name: {
	        minLength: 'Имя должно быть не меньше 3-ч символов',
	        required: 'Поле ввода обязательно'
	      },
	      phone: {
	        minLength: 'Введите полный номер телефона',
	        required: 'Поле ввода обязательно'
	      }
	    },
		submitHandler: function(form, values, ajax) {
			
			let formData = new FormData(form);

			fetch('mail.php', {
				method: 'POST',
				body: formData
			})
			.then(function(data) {
				form.reset();
			})
		}
	});
}


validateForms('.form-1');
validateForms('.form-2');
validateForms('.form-3');