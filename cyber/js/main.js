(function toggleMenu() {
	var toggler = document.querySelector(".menu__btn");
	var menu = document.querySelector(".menu");
	menu.classList.remove("menu--noscript");
	menu.classList.add("menu--closed");
	function openMenu() {
		toggler.classList.remove("button--openMenu");
		toggler.classList.add("button--closeMenu");
		menu.classList.remove("menu--closed");
		menu.classList.add("menu--opened");
		toggler.removeEventListener("click", openMenu);
		toggler.addEventListener("click", closeMenu);
	};
	function closeMenu() {
		menu.classList.remove("menu--opened");
		menu.classList.add("menu--closed");
		toggler.classList.remove("button--closeMenu");
		toggler.classList.add("button--openMenu");
		toggler.removeEventListener("click", closeMenu);
		toggler.addEventListener("click", openMenu);
	};
	toggler.addEventListener("click", openMenu);
})();

(function togglePopup() {
	var openBtn = document.querySelector(".inform__link");
	var closeBtn = document.querySelector(".video-popup__close-btn");
	var popup = document.querySelector(".video-popup");
	function openPopup(evt) {
		evt.preventDefault();
		popup.classList.remove("video-popup--hidden");
		popup.classList.add("video-popup--shown");
	};
	function closePopup(evt) {
		evt.preventDefault();
		popup.classList.remove("video-popup--shown");
		popup.classList.add("video-popup--hidden");
	};
	openBtn.addEventListener("click", openPopup);
	closeBtn.addEventListener("click", closePopup);
})();

