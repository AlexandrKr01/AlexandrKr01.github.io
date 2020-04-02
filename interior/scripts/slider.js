function sliderClick(slider, slide, toggler) {
	let slides = document.querySelectorAll(`.${slider} .${slide}`);
	let toggles = document.querySelector(`.${slider} .${toggler}`);
	let i = 0;

	toggles.addEventListener('click', (evt) => {
		let target = evt.target;
		if (target.tagName != 'LI') return;
		toggle(target);
	});

	function toggle(node) {
		let cildren = toggles.children;
		let index = node.getAttribute('data-index')-1;
		for (let child of cildren) {
			child.classList.remove('active');
		}
		for (let slide of slides) {
			slide.classList.remove('active');
		}
		node.classList.add('active');
		slides[index].classList.add('active');
	}

	setInterval(() => {
		let event = new Event('click');
	  	toggles.children[i].dispatchEvent(event);
	  	toggle(event.target);
	  	i++;
	  	if(i >= toggles.children.length) {
	  		i = 0;
	  	}
	}, 4000)
}

sliderClick('slider--top', 'slider__slide', 'slider__pagginators');
sliderClick('slider--bottom', 'slider__slide', 'slider__pagginators');