let accordionItems = document.querySelectorAll('.accordion__item');
let accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
	accordion.addEventListener('click', (evt) => {
		accordionItems.forEach((item) => {
			if(item.classList.contains('accordion__item--open')) {
				item.classList.remove('accordion__item--open');
			}
			
		});
		evt.target.closest('.accordion__item').classList.add('accordion__item--open');
		return
	});

});

let togglerList = document.querySelector('.tabs__togglers');
let togglerTitles = document.querySelectorAll('.toggler__content');
let tabTogglers = document.querySelectorAll('.tabs__toggler');
let tabContents = document.querySelectorAll('.tabs__content');
let tabTitle = document.querySelector('.tabs__title');
let tabsBody = document.querySelector('.tabs__body');


togglerList.addEventListener('click', (evt) => {
	tabTogglers.forEach((item, i) => {
		item.style.order = i;
		if (evt.target.closest('.tabs__toggler')) {
			tabsBody.style.order = evt.target.closest('.tabs__toggler').style.order;
		
			if(tabContents[i].classList.contains('tabs__content--active')) {
				tabContents[i].classList.remove('tabs__content--active');
			}
			if(item.classList.contains('toggler--active')) {
				item.classList.remove('toggler--active')
			}
			if(evt.target.closest('.tabs__toggler').dataset.toggler == tabContents[i].id) {
				evt.target.closest('.tabs__toggler').classList.add('toggler--active');
				tabContents[i].classList.add('tabs__content--active');
				tabTitle.innerText = togglerTitles[i].dataset.title;
			}
		}
	})
});

let menuButton = document.querySelector('.menu__button');
let menu = document.querySelector('.menu');

document.addEventListener('click', (evt) => {
	if(evt.target.closest('.menu__button')) {
		menu.classList.toggle('menu--open');
	}
	else menu.classList.remove('menu--open');
});

let popUp = document.querySelector('.pop-up');
let wrapper = document.querySelector('.pop-up__wrapper');
let closePopUp = document.querySelector('.pop-up__close');

document.addEventListener('click', (evt) => {
	if(evt.target.closest('.button--popup')) {
		popUp.classList.add('pop-up--open');
	}
	else if(evt.target == wrapper || evt.target == closePopUp) {
		evt.preventDefault();
		popUp.classList.remove('pop-up--open');
	}
});




let buttonSliders = document.querySelectorAll('.work');

function toggleSlider(slider) {
	let view = slider.querySelector('.work__view img');
	let thumbs = slider.querySelectorAll('.work__thamb img');

	slider.addEventListener('click', (evt) => {
		thumbs.forEach((item) => {
			let swap = null;
			if(evt.target == item) {
				swap = view.src;
				view.src = evt.target.src;
				evt.target.src = swap;
			}
			
		})
	})
};

buttonSliders.forEach((item) => {
	toggleSlider(item);
});

let commentsPhotoSlider = new Swiper('.reviews__images', {
	slidesPerView: 1,
	watchSlidesProgress: true,
	allowTouchMove: false,
	simulateTouch: false,
	effect: 'fade',
	fadeEffect: {
	    crossFade: true
	},
});

let commentsSlider = new Swiper('.reviews__content', {
	slidesPerView: 1,
	loop: true,
	navigation: {
	  nextEl: '.reviews__toggle--next',
	  prevEl: '.reviews__toggle--prev',
	},
	thumbs: {
	  swiper: commentsPhotoSlider,
	},
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
	        minLength: 'Имя должно быть не меньше 3-x символов',
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


validateForms('.pop-up__form');
