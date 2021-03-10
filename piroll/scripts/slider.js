// options = {
//   sliderListClass: 'slider__list',
//   slideClass: 'slider__slide',
//   controllsContainerClass: 'slider__controlls',
//   controllElemrnt: 'li',
//   controllClass: 'slider__controll',
//   controllActiveClass: 'slider__controll--active',
// }

class Slider {

  constructor(options) {
    this._sliderContainer = document.querySelector(`.${options.sliderListClass || 'slider'}`)
    this._slides = document.querySelectorAll(`.${options.slideClass || 'slide'}`);
    this._controllsClass = options.controllsContainerClass || 'controlls';
    this._controllElement = options.controllElemrnt || 'div';
    this._controllClass = options.controllClass || 'controll';
    this._controllActiveClass = options.controllActiveClass || 'controll-active';
    this._slidesLength = this._slides.length;
    this._index = 0;
    this._toggles = [];

  }

  togglersInit() {
    let toggleContainer = document.querySelector(`.${this._controllsClass}`);
    let toggler = `<${this._controllElement} class="${this._controllClass}"></${this._controllElement}>`;
    let length = this._slidesLength;

    if(toggleContainer) {
      while(length) {
        toggleContainer.innerHTML += toggler;
        length--;
      }
    }
  }

  getTogglers() {
    this._toggles = document.querySelectorAll(`.${this._controllClass}`);
  }

  togglerSetActive() {
    if(!this._toggles.length) return;

    this._toggles.forEach((toggle) => {
      toggle.classList.remove(this._controllActiveClass);
    })

    this._toggles[this._index].classList.add(this._controllActiveClass);
  }

  sliderMove(sign) {
    this._slides.forEach((slide) => {
      slide.style.transform = `translateX(${this._index*(sign+100)*-1}%)`;
    })
  }

  isForward() {
    return !(this._index >= this._slidesLength-1)
  }

  checkForward() {
    if(this.isForward()) {
      this._index++;
    }
    else this._index = 0;
  }

  isBack() {
   return this._index >= 0;
  }

  checkBack() {
    if(this.isBack()) {
      this._index--;
    }
    else this._index = this._slidesLength-1;
  }

  moveForward() {
    this.checkForward();
    this.sliderMove('+');
    this.togglerSetActive();
  }

  moveBack() {
    if(this.checkBack()) {
      this._index--;
    }
    else this._index = this._slidesLength-1;
    this.sliderMove('-');
    this.togglerSetActive();
  }

  moveByTime(time, type) {
    setInterval(() => {
      switch(type) {
      case 'moveForward': 
        this.moveForward()
      break
      case 'infinity':
        this.infinitMoveInit()
      break
      default:
        this.infinitMoveInit()
      break
    }}, time);
    return this;
  }

  infinitMoveInit() {
    this._slides[this._index].remove();
    this._sliderContainer.append(this._slides[this._index]);
    this.checkForward();
    this.togglerSetActive();
  }

  init() {
    this.togglersInit();
    this.getTogglers();
    this.togglerSetActive();
    return this;
  }
}

