/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/imports.js":
/*!***********************!*\
  !*** ./js/imports.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.html */ "./index.html");
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_html__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/index.scss */ "./scss/index.scss");
/* harmony import */ var _img_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/favicon.png */ "./img/favicon.png");




/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _imports_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imports.js */ "./js/imports.js");
/* harmony import */ var _sprite_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite.js */ "./js/sprite.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/swiper.esm.js");
/* harmony import */ var baguettebox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! baguettebox.js */ "../node_modules/baguettebox.js/dist/baguetteBox.min.js");
/* harmony import */ var baguettebox_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(baguettebox_js__WEBPACK_IMPORTED_MODULE_3__);




var menuButton = document.querySelector('.menu__button');
var menu = document.querySelector('.menu');
document.addEventListener('click', function (evt) {
  if (evt.target.closest('.menu__button')) {
    menu.classList.toggle('menu--open');
  } else menu.classList.remove('menu--open');
});
var commentsPhotoSlider = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.reviews__images', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_2__.EffectFade],
  slidesPerView: 1,
  watchSlidesProgress: true,
  allowTouchMove: false,
  simulateTouch: false,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
});
var commentsSlider = new swiper__WEBPACK_IMPORTED_MODULE_2__["default"]('.reviews__content', {
  modules: [swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_2__.Thumbs, swiper__WEBPACK_IMPORTED_MODULE_2__.EffectFade],
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.reviews__toggle--next',
    prevEl: '.reviews__toggle--prev'
  },
  thumbs: {
    swiper: commentsPhotoSlider
  }
});
baguettebox_js__WEBPACK_IMPORTED_MODULE_3___default().run('#gallery');

/***/ }),

/***/ "./js/sprite.js":
/*!**********************!*\
  !*** ./js/sprite.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_svg_burger_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/svg/burger.svg */ "./img/svg/burger.svg");
/* harmony import */ var _img_svg_brick_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/svg/brick.svg */ "./img/svg/brick.svg");
/* harmony import */ var _img_svg_house_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/svg/house.svg */ "./img/svg/house.svg");
/* harmony import */ var _img_svg_docs_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/svg/docs.svg */ "./img/svg/docs.svg");
/* harmony import */ var _img_svg_quality_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/svg/quality.svg */ "./img/svg/quality.svg");
/* harmony import */ var _img_svg_star_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/svg/star.svg */ "./img/svg/star.svg");
/* harmony import */ var _img_svg_icon_prew_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/svg/icon-prew.svg */ "./img/svg/icon-prew.svg");
/* harmony import */ var _img_svg_icon_next_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/svg/icon-next.svg */ "./img/svg/icon-next.svg");
/* harmony import */ var _img_svg_phone_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/svg/phone.svg */ "./img/svg/phone.svg");
/* harmony import */ var _img_svg_mail_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/svg/mail.svg */ "./img/svg/mail.svg");
/* harmony import */ var _img_svg_map_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/svg/map.svg */ "./img/svg/map.svg");
// ! Пример вставки SVG в HTML

/* <svg class="icon">
 <use xlink:href="#comment"></use>
</svg> */












/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./img/promo_image.jpg */ "./img/promo_image.jpg");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./img/about_image.jpg */ "./img/about_image.jpg");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ./img/stairs1.jpg */ "./img/stairs1.jpg");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ./img/stairs2.jpg */ "./img/stairs2.jpg");
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ./img/stairs3.jpg */ "./img/stairs3.jpg");
var ___HTML_LOADER_IMPORT_5___ = __webpack_require__(/*! ./img/stairs4.jpg */ "./img/stairs4.jpg");
var ___HTML_LOADER_IMPORT_6___ = __webpack_require__(/*! ./img/stairs5.jpg */ "./img/stairs5.jpg");
var ___HTML_LOADER_IMPORT_7___ = __webpack_require__(/*! ./img/stairs6.jpg */ "./img/stairs6.jpg");
var ___HTML_LOADER_IMPORT_8___ = __webpack_require__(/*! ./img/advantage-bg-sm.png */ "./img/advantage-bg-sm.png");
var ___HTML_LOADER_IMPORT_9___ = __webpack_require__(/*! ./img/advantage-bg.png */ "./img/advantage-bg.png");
var ___HTML_LOADER_IMPORT_10___ = __webpack_require__(/*! ./img/gallery1.jpg */ "./img/gallery1.jpg");
var ___HTML_LOADER_IMPORT_11___ = __webpack_require__(/*! ./img/gallery2.jpg */ "./img/gallery2.jpg");
var ___HTML_LOADER_IMPORT_12___ = __webpack_require__(/*! ./img/gallery3.jpg */ "./img/gallery3.jpg");
var ___HTML_LOADER_IMPORT_13___ = __webpack_require__(/*! ./img/gallery4.jpg */ "./img/gallery4.jpg");
var ___HTML_LOADER_IMPORT_14___ = __webpack_require__(/*! ./img/gallery5.jpg */ "./img/gallery5.jpg");
var ___HTML_LOADER_IMPORT_15___ = __webpack_require__(/*! ./img/gallery6.jpg */ "./img/gallery6.jpg");
var ___HTML_LOADER_IMPORT_16___ = __webpack_require__(/*! ./img/gallery7.jpg */ "./img/gallery7.jpg");
var ___HTML_LOADER_IMPORT_17___ = __webpack_require__(/*! ./img/gallery10.jpg */ "./img/gallery10.jpg");
var ___HTML_LOADER_IMPORT_18___ = __webpack_require__(/*! ./img/gallery8.jpg */ "./img/gallery8.jpg");
var ___HTML_LOADER_IMPORT_19___ = __webpack_require__(/*! ./img/gallery9.jpg */ "./img/gallery9.jpg");
var ___HTML_LOADER_IMPORT_20___ = __webpack_require__(/*! ./img/review1.jpg */ "./img/review1.jpg");
var ___HTML_LOADER_IMPORT_21___ = __webpack_require__(/*! ./img/feedback-img.jpg */ "./img/feedback-img.jpg");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_4___);
var ___HTML_LOADER_REPLACEMENT_5___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_5___);
var ___HTML_LOADER_REPLACEMENT_6___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_6___);
var ___HTML_LOADER_REPLACEMENT_7___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_7___);
var ___HTML_LOADER_REPLACEMENT_8___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_8___);
var ___HTML_LOADER_REPLACEMENT_9___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_9___);
var ___HTML_LOADER_REPLACEMENT_10___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_10___);
var ___HTML_LOADER_REPLACEMENT_11___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_11___);
var ___HTML_LOADER_REPLACEMENT_12___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_12___);
var ___HTML_LOADER_REPLACEMENT_13___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_13___);
var ___HTML_LOADER_REPLACEMENT_14___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_14___);
var ___HTML_LOADER_REPLACEMENT_15___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_15___);
var ___HTML_LOADER_REPLACEMENT_16___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_16___);
var ___HTML_LOADER_REPLACEMENT_17___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_17___);
var ___HTML_LOADER_REPLACEMENT_18___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_18___);
var ___HTML_LOADER_REPLACEMENT_19___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_19___);
var ___HTML_LOADER_REPLACEMENT_20___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_20___);
var ___HTML_LOADER_REPLACEMENT_21___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_21___);
var code = "<!DOCTYPE html>\r\n<html lang=\"ru\">\r\n\r\n<head>\r\n\t<meta http-equiv=\"x-ua-compatible\" content=\"IE=edge\">\r\n\t<meta name=\"description\" content=\"\">\r\n\t<meta name=\"keywords\" content=\"\">\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t<title>Document</title>\r\n\t<!-- <link rel=\"icon\" type=\"image/png\" href=\"img/favicon.png\" sizes=\"32x32\">\r\n\t<link rel=\"apple-touch-icon\" href=\"img/favicon.png\" sizes=\"72x72\">\r\n\t<meta name=\"msapplication-TileImage\" content=\"img/favicon.png\"> -->\r\n\t<meta name=\"msapplication-TileColor\" content=\"#202020\">\r\n\t<meta name=\"theme-color\" content=\"#202020\">\r\n</head>\r\n\r\n<body>\r\n\t<header class=\"header\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"header__wrapper\">\r\n\t\t\t\t<div class=\"header__logo logo\">\r\n\t\t\t\t\t<a href=\"#\" class=\"logo__link\">\r\n\t\t\t\t\t\t(LOGO)\r\n\t\t\t\t\t\t<img src=\"#\" alt=\"\" class=\"logo__image\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<nav class=\"header__menu menu\">\r\n\t\t\t\t\t<ul class=\"menu__list\">\r\n\t\t\t\t\t\t<li class=\"menu__item\"><a href=\"#about\" class=\"menu__link\">О нас</a></li>\r\n\t\t\t\t\t\t<li class=\"menu__item\"><a href=\"#servises\" class=\"menu__link\">Услуги компании</a></li>\r\n\t\t\t\t\t\t<li class=\"menu__item\"><a href=\"#advantages\" class=\"menu__link\">Преимущества лестниц</a></li>\r\n\t\t\t\t\t\t<li class=\"menu__item\"><a href=\"#workflow\" class=\"menu__link\">Этапы работы</a></li>\r\n\t\t\t\t\t\t<li class=\"menu__item\"><a href=\"#feedback\" class=\"menu__link\">Контакты</a></li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<button class=\"menu__button\">\r\n\t\t\t\t\t\t<svg class=\"icon\">\r\n\t\t\t\t\t\t\t<use xlink:href=\"#burger\"></use>\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</nav>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</header>\r\n\r\n\t<section class=\"promo\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"promo__wrapper\">\r\n\t\t\t\t<div class=\"promo__content\">\r\n\t\t\t\t\t<div class=\"promo__content-wrapper\">\r\n\t\t\t\t\t\t<div class=\"promo__content-container\">\r\n\t\t\t\t\t\t\t<h1 class=\"promo__title title title--large title--light\">Создание бетонных лестниц</h1>\r\n\t\t\t\t\t\t\t<p class=\"promo__subtitle content content--large content--light\">Качество. Профессионализм. Гарантия.</p>\r\n\t\t\t\t\t\t\t<button class=\"promo__button button button--light\">Бесплатная консультация</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"promo__image-wrapper\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"promo stairs\" class=\"promo__image\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"promo__cards\">\r\n\t\t\t\t<div class=\"promo__card card-header\">\r\n\t\t\t\t\t<p class=\"card-header__top\"><span class=\"card-header__top--large\">2</span> дня</p>\r\n\t\t\t\t\t<p class=\"card-header__bottom\">срок строительства лестницы</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"promo__card card-header\">\r\n\t\t\t\t\t<p class=\"card-header__top\"><span class=\"card-header__top--large\">10</span> лет</p>\r\n\t\t\t\t\t<p class=\"card-header__bottom\">гарантия на нашу работу</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"promo__card card-header\">\r\n\t\t\t\t\t<p class=\"card-header__top\"><span class=\"card-header__top--large\">15</span> лет</p>\r\n\t\t\t\t\t<p class=\"card-header__bottom\">работаем на рынке Украины</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section class=\"about\" id=\"about\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"about__top\">\r\n\t\t\t\t<div class=\"about__content\">\r\n\t\t\t\t\t<h2 class=\"about__title\">О компании</h2>\r\n\t\t\t\t\t<p class=\"about__text\">Компания «Бетонные лестницы» – занимается узкоспециализированным направлением по\r\n\t\t\t\t\t\tпроектированию и изготовлению эксклюзивных бетонных лестниц и проявила себя как надежный партнер и подрядчик\r\n\t\t\t\t\t\tдля многих строительных компаний, архитекторов, дизайнеров, частных заказчиков.\r\n\t\t\t\t\t</p>\r\n\t\t\t\t\t<p class=\"about__text\">Наша задача быть неповторимыми – создавать уникальный стиль для каждого дома и\r\n\t\t\t\t\t\tинтерьера, выполнять взятые на себя задания качественно и в срок.</p>\r\n\t\t\t\t\t<p class=\"about__text\">Мы продумаем, подскажем  и просчитаем лучшее лестничное  решение для вашего объекта,\r\n\t\t\t\t\t\tбудь то дом, квартира, баня, служебное помещение или коммерческая недвижимость.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"about__image-wrapper\">\r\n\t\t\t\t\t<svg class=\"icon about__star spin\">\r\n\t\t\t\t\t\t<use xlink:href=\"#star\"></use>\r\n\t\t\t\t\t</svg>\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"about image\" class=\"about__image\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"about__cards\">\r\n\t\t\t\t<div class=\"about__card\">\r\n\t\t\t\t\t<svg class=\"icon about__icon\">\r\n\t\t\t\t\t\t<use xlink:href=\"#brick\"></use>\r\n\t\t\t\t\t</svg>\r\n\t\t\t\t\t<p class=\"about__card-text\">Применяем только качественные материалы и современные технологии</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"about__card\">\r\n\t\t\t\t\t<svg class=\"icon about__icon\">\r\n\t\t\t\t\t\t<use xlink:href=\"#quality\"></use>\r\n\t\t\t\t\t</svg>\r\n\t\t\t\t\t<p class=\"about__card-text\">Разработка идивидуального проекта по Вашим пожелениям и идеям</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"about__card\">\r\n\t\t\t\t\t<svg class=\"icon about__icon\">\r\n\t\t\t\t\t\t<use xlink:href=\"#house\"></use>\r\n\t\t\t\t\t</svg>\r\n\t\t\t\t\t<p class=\"about__card-text\">Бесплатное проектирование лестницы именно под Ваше помещение</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"about__card\">\r\n\t\t\t\t\t<svg class=\"icon about__icon\">\r\n\t\t\t\t\t\t<use xlink:href=\"#docs\"></use>\r\n\t\t\t\t\t</svg>\r\n\t\t\t\t\t<p class=\"about__card-text\">Работаем без предоплаты и с возможностью заключения договора</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section class=\"servises\" id=\"servises\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"servises__top\">\r\n\t\t\t\t<h2 class=\"servises__title\">Наши услуги</h2>\r\n\t\t\t\t<p class=\"servises__content\">Наша компания предлагает изготовление лестниц из бетона под заказ, от создания\r\n\t\t\t\t\tпроекта и разработки дизайна и заканчивая установкой и сдачей в эксплуатацию.</p>\r\n\t\t\t\t<div class=\"servises__discount-wrapper\">\r\n\t\t\t\t\t<svg class=\"icon servises__discount-icon spin\">\r\n\t\t\t\t\t\t<use xlink:href=\"#star\"></use>\r\n\t\t\t\t\t</svg>\r\n\t\t\t\t\t<p class=\"servises__discount\"><span class=\"servises__discount-value\">5%</span> скидки в ноябре\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t\t<div class=\"servises__cards\">\r\n\t\t\t\t<div class=\"servises__card card\">\r\n\t\t\t\t\t<div class=\"card__image-wrapper\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"stairs1\" class=\"card__image\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h3 class=\"card__title\">Винтовая лестница</h3>\r\n\t\t\t\t\t<p class=\"card__content\">от 20 000 грн.</p>\r\n\t\t\t\t\t<button class=\"card__button button\">Оставить заявку</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"servises__card card\">\r\n\t\t\t\t\t<div class=\"card__image-wrapper\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"stairs2\" class=\"card__image\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h3 class=\"card__title\">Прямая лестница</h3>\r\n\t\t\t\t\t<p class=\"card__content\">от 10 000 грн.</p>\r\n\t\t\t\t\t<button class=\"card__button button\">Оставить заявку</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"servises__card card\">\r\n\t\t\t\t\t<div class=\"card__image-wrapper\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"stairs3\" class=\"card__image\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h3 class=\"card__title\">Криволинейная лестница</h3>\r\n\t\t\t\t\t<p class=\"card__content\">от 14 000 грн.</p>\r\n\t\t\t\t\t<button class=\"card__button button\">Оставить заявку</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"servises__card card\">\r\n\t\t\t\t\t<div class=\"card__image-wrapper\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"stairs4\" class=\"card__image\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h3 class=\"card__title\">П-образная лестница</h3>\r\n\t\t\t\t\t<p class=\"card__content\">от 12 000 грн.</p>\r\n\t\t\t\t\t<button class=\"card__button button\">Оставить заявку</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"servises__card card\">\r\n\t\t\t\t\t<div class=\"card__image-wrapper\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"stairs5\" class=\"card__image\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h3 class=\"card__title\">Г-образная лестница</h3>\r\n\t\t\t\t\t<p class=\"card__content\">от 12 000 грн.</p>\r\n\t\t\t\t\t<button class=\"card__button button\">Оставить заявку</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"servises__card card\">\r\n\t\t\t\t\t<div class=\"card__image-wrapper\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"stairs6\" class=\"card__image\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<h3 class=\"card__title\">Т-образная лестница</h3>\r\n\t\t\t\t\t<p class=\"card__content\">от 20 000 грн.</p>\r\n\t\t\t\t\t<button class=\"card__button button\">Оставить заявку</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section class=\"advantages\" id=\"advantages\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<h2 class=\"advantages__title\">Преимущества бетонных лестниц</h2>\r\n\t\t\t<div class=\"advantages__wrapper\">\r\n\t\t\t\t<div class=\"advantages__image-wrapper\">\r\n\t\t\t\t\t<picture class=\"advantages__image\">\r\n\t\t\t\t\t\t<source media=\"(max-width: 576px)\" srcset=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"advantage\" class=\"advantages__image\">\r\n\t\t\t\t\t</picture>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ul class=\"advantages__list\">\r\n\t\t\t\t\t<li class=\"advantages__item\">\r\n\t\t\t\t\t\t<div class=\"advantages__item-wrapper\">\r\n\t\t\t\t\t\t\t<h4 class=\"advantages__item-title\">Практичность</h4>\r\n\t\t\t\t\t\t\t<p class=\"advantages__content\">Они долго сохраняют аккуратную и ровную поверхность без трещин, сколов и\r\n\t\t\t\t\t\t\t\tповреждений, не скрипят и не ржавеют. Они хорошо смотрятся в любом помещении. </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"advantages__item\">\r\n\t\t\t\t\t\t<div class=\"advantages__item-wrapper\">\r\n\t\t\t\t\t\t\t<h4 class=\"advantages__item-title\">Удобство</h4>\r\n\t\t\t\t\t\t\t<p class=\"advantages__content\">Лестницы абсолютно неприхотливы в эксплуатации. Они без проблем переносят\r\n\t\t\t\t\t\t\t\tколебание температуры, влажность и большие нагрузки. </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"advantages__item\">\r\n\t\t\t\t\t\t<div class=\"advantages__item-wrapper\">\r\n\t\t\t\t\t\t\t<h4 class=\"advantages__item-title\">Уникальность</h4>\r\n\t\t\t\t\t\t\t<p class=\"advantages__content\">Мы предлагаем создание эксклюзивной лестницы, которая преобразит ваш\r\n\t\t\t\t\t\t\t\tинтерьер\r\n\t\t\t\t\t\t\t\tи\r\n\t\t\t\t\t\t\t\tбудет радовать вас необычным дизайном. </p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section class=\"gallery\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<h2 class=\"gallery__title\">Галерея наших работ</h2>\r\n\t\t\t<div class=\"gallery__container\" id=\"gallery\">\r\n\t\t\t\t<div class=\"gallery__image-wrapper\">\r\n\t\t\t\t\t<a href=\"img/gallery1.jpg\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"image-1\" class=\"gallery__image\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gallery__image-wrapper\">\r\n\t\t\t\t\t<a href=\"img/gallery2.jpg\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"image-2\" class=\"gallery__image\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gallery__image-wrapper\">\r\n\t\t\t\t\t<a href=\"img/gallery3.jpg\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"image-3\" class=\"gallery__image\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gallery__image-wrapper\">\r\n\t\t\t\t\t<a href=\"img/gallery4.jpg\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"image-4\" class=\"gallery__image\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gallery__image-wrapper\">\r\n\t\t\t\t\t<a href=\"img/gallery5.jpg\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_14___ + "\" alt=\"image-5\" class=\"gallery__image\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gallery__image-wrapper\">\r\n\t\t\t\t\t<a href=\"img/gallery6.jpg\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_15___ + "\" alt=\"image-6\" class=\"gallery__image\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gallery__image-wrapper\">\r\n\t\t\t\t\t<a href=\"img/gallery7.jpg\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_16___ + "\" alt=\"image-7\" class=\"gallery__image\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gallery__image-wrapper\">\r\n\t\t\t\t\t<a href=\"img/gallery10.jpg\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"image-10\" class=\"gallery__image\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gallery__image-wrapper\">\r\n\t\t\t\t\t<a href=\"img/gallery8.jpg\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_18___ + "\" alt=\"image-8\" class=\"gallery__image\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"gallery__image-wrapper\">\r\n\t\t\t\t\t<a href=\"img/gallery9.jpg\">\r\n\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_19___ + "\" alt=\"image-9\" class=\"gallery__image\">\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section class=\"workflow\" id=\"workflow\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<h2 class=\"workflow__title\">Этапы работы</h2>\r\n\t\t\t<ul class=\"workflow__list\">\r\n\t\t\t\t<li class=\"workflow__item workflow__item--star\">Бесплатный выезд специалиста на объект</li>\r\n\t\t\t\t<li class=\"workflow__item\">Просчет стоимости проекта, составление сметы</li>\r\n\t\t\t\t<li class=\"workflow__item workflow__item--star\">Составление договора</li>\r\n\t\t\t\t<li class=\"workflow__item\">Проектирование лестницы, разработка 3D модели</li>\r\n\t\t\t\t<li class=\"workflow__item\">Строительство лестницы</li>\r\n\t\t\t\t<li class=\"workflow__item\">Оплата 70% стоимости проекта</li>\r\n\t\t\t\t<li class=\"workflow__item\">Демонтаж опалубки, сдача проекта</li>\r\n\t\t\t\t<li class=\"workflow__item workflow__item--star\">Оплата 30% стоимости проекта</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section class=\"reviews\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"reviews__wrapper\">\r\n\t\t\t\t<h2 class=\"reviews__title\">Отзывы</h2>\r\n\t\t\t\t<div class=\"reviews__content swiper\">\r\n\t\t\t\t\t<div class=\"reviews__item-wrapper swiper-wrapper\">\r\n\t\t\t\t\t\t<div class=\"reviews__item-container swiper-slide\">\r\n\t\t\t\t\t\t\t<p class=\"reviews__text\">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\r\n\t\t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r\n\t\t\t\t\t\t\t\tullamco laboris nisi ut aliquip ex ea commodo consequat.” </p>\r\n\t\t\t\t\t\t\t<p class=\"reviews__author\">Имя клиента</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"reviews__item-container swiper-slide\">\r\n\t\t\t\t\t\t\t<p class=\"reviews__text\">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\r\n\t\t\t\t\t\t\t\ttempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation\r\n\t\t\t\t\t\t\t\tullamco laboris nisi ut aliquip ex ea commodo consequat.” </p>\r\n\t\t\t\t\t\t\t<p class=\"reviews__author\">Имя клиента 2</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"reviews__images\">\r\n\t\t\t\t\t<div class=\"reviews__images-container swiper-wrapper\">\r\n\t\t\t\t\t\t<div class=\"reviews__image-wrapper swiper-slide\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_20___ + "\" alt=\"review\" class=\"reviews__image\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"reviews__image-wrapper swiper-slide\">\r\n\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_17___ + "\" alt=\"review\" class=\"reviews__image\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"reviews__toggles\">\r\n\t\t\t\t\t<button class=\"reviews__toggle reviews__toggle--prev\">\r\n\t\t\t\t\t\t<svg viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t<use xlink:href=\"#icon-prew\" />\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button class=\"reviews__toggle reviews__toggle--next\">\r\n\t\t\t\t\t\t<svg viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\">\r\n\t\t\t\t\t\t\t<use xlink:href=\"#icon-next\" />\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<section class=\"feedback\" id=\"feedback\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"feedback__container\">\r\n\t\t\t\t<div class=\"feedback__wrapper\">\r\n\t\t\t\t\t<h2 class=\"feedback__title\">Оставьте заявку</h2>\r\n\t\t\t\t\t<p class=\"feedback__subtitle\">Наши специалисты ответят на Ваши вопроы и помогут подобрать вид лестницы\r\n\t\t\t\t\t\tподходящий Вам</p>\r\n\t\t\t\t\t<form action=\"#\" class=\"feedback__form\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"feedback__input\" name=\"userName\" placeholder=\"Ваше имя\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"feedback__input\" name=\"userPhone\" placeholder=\"Ваш номер телефона\">\r\n\t\t\t\t\t\t<button class=\"feedback__button\">Отправить заявку</button>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"feedback__image-container\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_21___ + "\" alt=\"feedback\" class=\"feedback__image\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\t</section>\r\n\r\n\t<footer class=\"footer\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<h2 class=\"footer__title\">Контакты</h2>\r\n\t\t</div>\r\n\t\t<div class=\"footer__top\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"footer__top-wrapper\">\r\n\t\t\t\t\t<div class=\"footer__contact\">\r\n\t\t\t\t\t\t<svg viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" class=\"footer__icon\">\r\n\t\t\t\t\t\t\t<use xlink:href=\"#phone\" />\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t<a href=\"tel:+380968803025\" class=\"footer__link\">+38 096 880 30 25</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"footer__contact\">\r\n\t\t\t\t\t\t<svg viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" class=\"footer__icon\">\r\n\t\t\t\t\t\t\t<use xlink:href=\"#mail\" />\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t<a href=\"mailto:test.name@gmail.com\" class=\"footer__link\">test.name@gmail.com</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"footer__contact\">\r\n\t\t\t\t\t\t<svg viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\" class=\"footer__icon\">\r\n\t\t\t\t\t\t\t<use xlink:href=\"#map\" />\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t\t<p class=\"footer__text\">\r\n\t\t\t\t\t\t\tУкраина, Киев, <br>\r\n\t\t\t\t\t\t\tпросп. Победы, 123,\r\n\t\t\t\t\t\t</p>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"footer__bottom\">\r\n\t\t\t\t<p class=\"footer__bottom-content\">\"Бетонные лестницы\"</p>\r\n\t\t\t\t<p class=\"footer__bottom-content footer__bottom-content--centered\">&copy; Все права защищены</p>\r\n\t\t\t\t<p class=\"footer__bottom-content\">Разработано <a class=\"footer__bottom-link\"\r\n\t\t\t\t\t\thref=\"https://web.besale.com.ua/\">Digital Agency BeSale</a> </p>\r\n\r\n\t\t\t</div>\r\n\r\n\t\t</div>\r\n\r\n\t</footer>\r\n\r\n</body>\r\n\r\n</html>";
// Exports
module.exports = code;

/***/ }),

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./img/svg/brick.svg":
/*!***************************!*\
  !*** ./img/svg/brick.svg ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "brick",
  "use": "brick-usage",
  "viewBox": "0 0 60 60",
  "content": "<symbol viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"brick\">\n<path d=\"M58.8501 1.42561C58.1086 0.68414 57.1227 0.275696 56.074 0.275696C55.0253 0.275696 54.0394 0.68414 53.2979 1.42561L43.787 10.9364C42.4515 12.2718 42.2815 14.3379 43.2763 15.8598L42.5738 16.5624C41.6275 17.5087 41.087 18.8188 41.0907 20.157C41.0933 21.0572 40.7296 21.9384 40.0931 22.5749L38.5617 24.1062C37.3702 23.4363 36.0155 22.9397 34.5483 22.6697C30.5352 21.931 26.2962 22.9263 23.4852 25.2672C21.4087 26.9963 20.2652 29.3486 20.2652 31.891V31.9604H0.828767C0.37115 31.9604 0 32.3316 0 32.7892V58.8954C0 59.353 0.37115 59.7242 0.828767 59.7242H40.8859C41.3435 59.7242 41.7146 59.353 41.7146 58.8954V37.0489C42.9302 35.5468 43.6331 33.7649 43.6331 31.8911C43.6331 29.2486 42.237 26.7884 39.9723 25.04L41.2652 23.7472C42.2115 22.8009 42.752 21.4908 42.7482 20.1526C42.7458 19.2524 43.1094 18.3711 43.7459 17.7346L44.4559 17.0247C45.0963 17.4323 45.8295 17.637 46.5632 17.637C47.5685 17.637 48.5739 17.2542 49.3393 16.4889L58.8501 6.97808C59.5916 6.23647 60 5.25065 60 4.20198C60 3.15331 59.5916 2.16722 58.8501 1.42561ZM20.265 33.6181V42.7463C20.265 42.9923 20.3744 43.2257 20.5635 43.3832C20.7135 43.5082 20.9017 43.5751 21.0938 43.5751C21.1437 43.5751 21.1939 43.5705 21.2438 43.5614L22.7911 43.2766V44.8769C22.7911 46.2704 23.9374 47.404 25.3465 47.404C26.7555 47.404 27.9018 46.2702 27.9018 44.8769V42.3358L32.0457 41.573V44.8769C32.0457 46.294 33.1379 47.404 34.532 47.404C35.9261 47.404 37.0183 46.294 37.0183 44.8769V40.4068C38.1465 39.9625 39.1705 39.3757 40.0571 38.6776V48.9502H1.65753V33.618H20.265V33.6181ZM24.4486 42.9714L26.2443 42.6409V44.8769C26.2443 45.3484 25.8331 45.7464 25.3465 45.7464C24.8598 45.7464 24.4486 45.3482 24.4486 44.8769V42.9714ZM33.7032 41.2678L34.5481 41.1122C34.8234 41.0616 35.0937 41.0012 35.3607 40.9349V44.8768C35.3607 45.3725 35.0044 45.7463 34.532 45.7463C34.0596 45.7463 33.7032 45.3724 33.7032 44.8768V41.2678ZM1.65753 58.0668V50.6078H40.0571V58.0668H1.65753ZM41.9756 31.8911C41.9756 35.4654 38.7257 38.658 34.2481 39.4822L21.9227 41.7511V31.8911C21.9227 29.2747 23.3491 27.5376 24.5459 26.5411C26.4485 24.9568 29.124 24.0856 31.8877 24.0856C32.6726 24.0856 33.4648 24.1559 34.2481 24.3001C38.7257 25.1242 41.9756 28.3168 41.9756 31.8911ZM57.6779 5.80579L48.1671 15.3166C47.7387 15.7451 47.169 15.981 46.5631 15.981C46.2539 15.981 45.9546 15.9188 45.6783 15.8018L45.6792 15.801C46.0028 15.4774 46.0028 14.9526 45.6792 14.629C45.3555 14.3053 44.8307 14.3053 44.5072 14.629L44.4957 14.6404C44.1226 13.8063 44.2754 12.7922 44.959 12.1086L54.4699 2.59776C54.8984 2.16929 55.468 1.93337 56.074 1.93337C56.6798 1.93337 57.2496 2.16929 57.6779 2.59776C58.5625 3.4822 58.5625 4.92135 57.6779 5.80579Z\" fill=\"currentColor\" />\n<path d=\"M6.82907 47.4047C8.22333 47.4047 9.35778 46.2704 9.35778 44.876V38.3192C9.35778 36.925 8.22347 35.7905 6.82907 35.7905C5.43466 35.7905 4.30035 36.9248 4.30035 38.3192V44.876C4.30049 46.2704 5.4348 47.4047 6.82907 47.4047ZM5.95803 38.3192C5.95803 37.8388 6.34879 37.4481 6.8292 37.4481C7.30961 37.4481 7.70038 37.8388 7.70038 38.3192V44.876C7.70038 45.3564 7.30961 45.7472 6.8292 45.7472C6.34879 45.7472 5.95803 45.3564 5.95803 44.876V38.3192Z\" fill=\"currentColor\" />\n<path d=\"M16.0572 47.4047C17.4516 47.4047 18.5859 46.2704 18.5859 44.876V38.3192C18.5859 36.925 17.4516 35.7905 16.0572 35.7905C14.6629 35.7905 13.5285 36.9248 13.5285 38.3192V44.876C13.5285 46.2704 14.6628 47.4047 16.0572 47.4047ZM15.186 38.3192C15.186 37.8388 15.5768 37.4481 16.0572 37.4481C16.5376 37.4481 16.9284 37.8388 16.9284 38.3192V44.876C16.9284 45.3564 16.5375 45.7472 16.0572 45.7472C15.5769 45.7472 15.186 45.3564 15.186 44.876V38.3192Z\" fill=\"currentColor\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/burger.svg":
/*!****************************!*\
  !*** ./img/svg/burger.svg ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "burger",
  "use": "burger-usage",
  "viewBox": "0 0 60 40",
  "content": "<symbol viewBox=\"0 0 60 40\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"burger\">\n<line x1=\"0.00488281\" y1=\"1.91333\" x2=\"59.8975\" y2=\"1.91333\" stroke=\"white\" stroke-width=\"3\" />\n<line x1=\"0.00488281\" y1=\"38.4575\" x2=\"59.8975\" y2=\"38.4575\" stroke=\"white\" stroke-width=\"3\" />\n<line y1=\"20.7659\" x2=\"60\" y2=\"20.7659\" stroke=\"white\" stroke-width=\"3\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/docs.svg":
/*!**************************!*\
  !*** ./img/svg/docs.svg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "docs",
  "use": "docs-usage",
  "viewBox": "0 0 60 63",
  "content": "<symbol viewBox=\"0 0 60 63\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"docs\">\n<g clip-path=\"url(#docs_clip0_16:268)\">\n<path d=\"M46.0631 50.8326C46.2808 50.6509 46.4203 50.3726 46.4203 50.0604C46.4203 50.0517 46.4203 4.95975 46.4203 4.95975C46.4203 4.41179 45.9918 3.9678 45.4629 3.9678H17.7627C17.0796 1.67269 15.0134 0 12.577 0C10.1798 0 8.08224 1.6551 7.39224 3.9678H4.32433C3.79544 3.9678 3.36688 4.41179 3.36688 4.95975V61.1702C3.36688 61.7182 3.79544 62.1622 4.32433 62.1622H34.7312C35.0408 62.1622 35.3091 62.0177 35.4846 61.7926L46.0631 50.8326ZM35.6969 58.7668V51.0523H43.1429L35.6969 58.7668ZM12.577 1.9839C13.9382 1.9839 15.1202 2.79135 15.7024 3.9678H9.45139C10.0391 2.78434 11.2354 1.9839 12.577 1.9839ZM5.28178 5.9517H16.0876V12.8953C16.0876 13.807 15.3719 14.5486 14.4919 14.5486C13.6119 14.5486 12.8962 13.807 12.8962 12.8953V8.92754C12.8962 8.37959 12.4676 7.9356 11.9387 7.9356C11.4098 7.9356 10.9813 8.37959 10.9813 8.92754V12.8953C10.9813 14.9008 12.5562 16.5325 14.4919 16.5325C16.4276 16.5325 18.0025 14.9008 18.0025 12.8953V5.9517H44.5054V49.0684H34.7395C34.2106 49.0684 33.782 49.5124 33.782 50.0604V60.1783H5.28178V5.9517Z\" fill=\"currentColor\" />\n<path d=\"M37.8033 45.6959C38.3322 45.6959 38.7607 45.2519 38.7607 44.7039C38.7607 44.156 38.3322 43.712 37.8033 43.712H11.9839C11.455 43.712 11.0265 44.156 11.0265 44.7039C11.0265 45.2519 11.455 45.6959 11.9839 45.6959H37.8033Z\" fill=\"currentColor\" />\n<path d=\"M11.9839 39.7441H37.8033C38.3322 39.7441 38.7607 39.3001 38.7607 38.7521C38.7607 38.2042 38.3322 37.7602 37.8033 37.7602H11.9839C11.455 37.7602 11.0265 38.2042 11.0265 38.7521C11.0265 39.3001 11.455 39.7441 11.9839 39.7441Z\" fill=\"currentColor\" />\n<path d=\"M11.9839 33.7924H37.8033C38.3322 33.7924 38.7607 33.3484 38.7607 32.8005C38.7607 32.2525 38.3322 31.8085 37.8033 31.8085H11.9839C11.455 31.8085 11.0265 32.2525 11.0265 32.8005C11.0265 33.3484 11.455 33.7924 11.9839 33.7924Z\" fill=\"currentColor\" />\n<path d=\"M11.9839 27.8408H37.8033C38.3322 27.8408 38.7607 27.3968 38.7607 26.8488C38.7607 26.3009 38.3322 25.8569 37.8033 25.8569H11.9839C11.455 25.8569 11.0265 26.3009 11.0265 26.8488C11.0265 27.3968 11.455 27.8408 11.9839 27.8408Z\" fill=\"currentColor\" />\n<path d=\"M11.9839 21.889H37.8033C38.3322 21.889 38.7607 21.445 38.7607 20.8971C38.7607 20.3491 38.3322 19.9052 37.8033 19.9052H11.9839C11.455 19.9052 11.0265 20.3491 11.0265 20.8971C11.0265 21.445 11.455 21.889 11.9839 21.889Z\" fill=\"currentColor\" />\n<path d=\"M50.5693 3.96783H49.2927C48.7638 3.96783 48.3353 4.41183 48.3353 4.95978C48.3353 5.50774 48.7638 5.95173 49.2927 5.95173H49.6119V60.1783H39.3899C38.861 60.1783 38.4325 60.6223 38.4325 61.1703C38.4325 61.7182 38.861 62.1622 39.3899 62.1622H50.5693C51.0982 62.1622 51.5268 61.7182 51.5268 61.1703V4.95978C51.5268 4.41183 51.0982 3.96783 50.5693 3.96783Z\" fill=\"currentColor\" />\n<path d=\"M55.6756 3.96783H54.399C53.8701 3.96783 53.4416 4.41183 53.4416 4.95978C53.4416 5.50774 53.8701 5.95173 54.399 5.95173H54.7182V60.1783H54.399C53.8701 60.1783 53.4416 60.6223 53.4416 61.1703C53.4416 61.7182 53.8701 62.1622 54.399 62.1622H55.6756C56.2045 62.1622 56.633 61.7182 56.633 61.1703V4.95978C56.633 4.41183 56.2045 3.96783 55.6756 3.96783Z\" fill=\"currentColor\" />\n</g>\n<defs>\n<clipPath id=\"docs_clip0_16:268\">\n<rect width=\"60\" height=\"62.1622\" fill=\"white\" />\n</clipPath>\n</defs>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/house.svg":
/*!***************************!*\
  !*** ./img/svg/house.svg ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "house",
  "use": "house-usage",
  "viewBox": "0 0 62 55",
  "content": "<symbol viewBox=\"0 0 62 55\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"house\">\n<path d=\"M7.40338 22.9296V53.7715C7.40338 54.4497 7.89982 55 8.5123 55H52.9371C53.5501 55 54.0461 54.4499 54.0461 53.7715V22.9219L60.2274 28.0268C60.4266 28.1906 60.6585 28.2699 60.8903 28.2699C61.2283 28.2699 61.5619 28.0988 61.7805 27.7749C62.1459 27.2311 62.0448 26.4613 61.5539 26.0559L53.8819 19.7202C53.7353 19.4547 53.5013 19.2582 53.2234 19.1754L30.2905 0.239238C30.2692 0.221945 30.2462 0.210261 30.2243 0.194837C30.1903 0.170534 30.1561 0.144828 30.1198 0.126133C30.088 0.10884 30.0555 0.0957539 30.0224 0.0822C29.9884 0.0674777 29.9548 0.0525216 29.9194 0.0417719C29.8848 0.031256 29.8494 0.0244787 29.8129 0.0188702C29.7783 0.0125606 29.7437 0.00484905 29.7078 0.00157742C29.6732 -0.000759455 29.6392 -5.84523e-05 29.6046 0.000876299C29.5675 0.00157736 29.5306 0.0015774 29.4947 0.00648484C29.4612 0.0109249 29.4287 0.019805 29.3962 0.0268157C29.3595 0.0359295 29.323 0.0443426 29.2867 0.0562606C29.2535 0.0686461 29.2208 0.0852376 29.1886 0.100661C29.1561 0.116318 29.1232 0.131041 29.0915 0.15067C29.0569 0.171936 29.0244 0.199044 28.9911 0.224282C28.9694 0.241575 28.9468 0.253025 28.9261 0.271954L19.8395 8.4987V5.3542C19.8395 4.6751 19.3431 4.1257 18.7306 4.1257H12.2916C11.6785 4.1257 11.1825 4.6751 11.1825 5.3542V16.3364L0.407206 26.0905C-0.0675041 26.5195 -0.136917 27.2935 0.250446 27.8193C0.470079 28.1166 0.788662 28.2699 1.11041 28.2699C1.35663 28.2699 1.60495 28.1794 1.81108 27.9932L7.40338 22.9296ZM13.4005 6.58246H17.6215V10.5065L13.4005 14.3278V6.58246ZM9.62165 20.9215L29.6595 2.78176L51.8284 21.0903V52.5423H9.62165V20.9215Z\" fill=\"currentColor\" />\n<path d=\"M40.1909 37.0629L26.6614 22.0793C26.7964 20.1787 26.1888 18.341 24.9643 16.9846C23.857 15.7571 22.3835 15.0817 20.8166 15.0817C20.2317 15.0817 19.6524 15.1773 19.0939 15.3678C18.8462 15.4521 18.6563 15.6741 18.5935 15.9522C18.5306 16.2303 18.6046 16.5264 18.7876 16.7295L21.3561 19.5748L18.9998 22.1847L16.4305 19.3398C16.2463 19.1369 15.9811 19.0542 15.7289 19.1248C15.4766 19.1944 15.2762 19.4047 15.2013 19.6798C14.5631 21.987 15.1236 24.4781 16.6619 26.1807C17.8746 27.5226 19.5389 28.2075 21.2615 28.0603L34.7884 43.0455C34.6549 44.9473 35.2627 46.7833 36.486 48.138C37.5949 49.3647 39.0678 50.0414 40.6346 50.0414C41.2194 50.0414 41.7985 49.9456 42.3557 49.7568C42.6043 49.672 42.7942 49.4511 42.8568 49.1721C42.9197 48.8931 42.8461 48.5986 42.6627 48.3956L39.8288 45.2574L42.1855 42.6457L45.0179 45.7853C45.2013 45.9883 45.4686 46.0701 45.7203 46.0005C45.9724 45.9309 46.173 45.7208 46.2482 45.4455C46.8843 43.1359 46.3254 40.6448 44.7875 38.9431C43.5771 37.601 41.9108 36.9205 40.1909 37.0629ZM42.7108 40.9082C42.5716 40.7537 42.3838 40.6682 42.1874 40.6682C41.991 40.6682 41.8028 40.7537 41.6646 40.9082L38.261 44.6787C38.1224 44.8323 38.0445 45.0403 38.0445 45.2578C38.0445 45.474 38.1224 45.6834 38.261 45.8371L40.5786 48.4026C39.4277 48.3867 38.3469 47.8828 37.531 46.9808C36.5506 45.8939 36.0993 44.3904 36.2936 42.8574C36.3252 42.6029 36.2489 42.3461 36.0843 42.1647L22.0569 26.6259C21.9171 26.4707 21.7284 26.3859 21.5341 26.3859C21.4999 26.3859 21.4651 26.3882 21.4305 26.3939C20.0627 26.6119 18.68 26.1008 17.7071 25.0223C16.883 24.1107 16.4349 22.8955 16.4216 21.646L18.4768 23.9224C18.766 24.2428 19.2331 24.2428 19.5224 23.9224L22.9243 20.1544C23.2135 19.8354 23.2135 19.3166 22.9243 18.9965L20.8706 16.7208C22.0221 16.7365 23.1034 17.2398 23.9189 18.144C24.9003 19.2316 25.3518 20.7351 25.1556 22.2674C25.1231 22.5221 25.2008 22.7792 25.3647 22.9612L39.3942 38.4989C39.5581 38.6812 39.7915 38.7646 40.0195 38.7307C41.3869 38.5164 42.7697 39.0251 43.743 40.1006C44.566 41.0122 45.0135 42.2271 45.0274 43.4778L42.7108 40.9082Z\" fill=\"currentColor\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/icon-next.svg":
/*!*******************************!*\
  !*** ./img/svg/icon-next.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-next",
  "use": "icon-next-usage",
  "viewBox": "0 0 19 29",
  "content": "<symbol viewBox=\"0 0 19 29\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-next\">\n<line y1=\"-0.5\" x2=\"22.5676\" y2=\"-0.5\" transform=\"matrix(0.815327 0.579 0.187737 -0.982219 0.400116 0.400391)\" stroke=\"currentColor\" />\n<line y1=\"-0.5\" x2=\"22.5676\" y2=\"-0.5\" transform=\"matrix(0.815327 -0.579 0.187737 0.982219 0.400116 28.4004)\" stroke=\"currentColor\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/icon-prew.svg":
/*!*******************************!*\
  !*** ./img/svg/icon-prew.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-prew",
  "use": "icon-prew-usage",
  "viewBox": "0 0 19 28",
  "content": "<symbol viewBox=\"0 0 19 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-prew\">\n<line y1=\"-0.5\" x2=\"22.5676\" y2=\"-0.5\" transform=\"matrix(-0.815327 0.579 -0.187737 -0.982219 18.6 0)\" stroke=\"currentColor\" />\n<line y1=\"-0.5\" x2=\"22.5676\" y2=\"-0.5\" transform=\"matrix(-0.815327 -0.579 -0.187737 0.982219 18.6 28)\" stroke=\"currentColor\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/mail.svg":
/*!**************************!*\
  !*** ./img/svg/mail.svg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "mail",
  "use": "mail-usage",
  "viewBox": "0 0 34 28",
  "content": "<symbol viewBox=\"0 0 34 28\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"mail\">\n<path d=\"M30.6 0H3.4C1.53 0 0.017 1.53 0.017 3.4L0 23.8C0 25.67 1.53 27.2 3.4 27.2H30.6C32.47 27.2 34 25.67 34 23.8V3.4C34 1.53 32.47 0 30.6 0ZM30.6 6.8L17 15.3L3.4 6.8V3.4L17 11.9L30.6 3.4V6.8Z\" fill=\"currentColor\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/map.svg":
/*!*************************!*\
  !*** ./img/svg/map.svg ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "map",
  "use": "map-usage",
  "viewBox": "0 0 24 35",
  "content": "<symbol viewBox=\"0 0 24 35\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"map\">\n<path d=\"M12 0C5.36571 0 0 5.4707 0 12.2348C0 21.4109 12 34.9565 12 34.9565C12 34.9565 24 21.4109 24 12.2348C24 5.4707 18.6343 0 12 0ZM12 16.6043C9.63429 16.6043 7.71429 14.6468 7.71429 12.2348C7.71429 9.82278 9.63429 7.86522 12 7.86522C14.3657 7.86522 16.2857 9.82278 16.2857 12.2348C16.2857 14.6468 14.3657 16.6043 12 16.6043Z\" fill=\"currentColor\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/phone.svg":
/*!***************************!*\
  !*** ./img/svg/phone.svg ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "phone",
  "use": "phone-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"phone\">\n<path d=\"M6.83778 14.7144C9.55778 20.06 13.94 24.4233 19.2856 27.1622L23.4411 23.0067C23.9511 22.4967 24.7067 22.3267 25.3678 22.5533C27.4833 23.2522 29.7689 23.63 32.1111 23.63C33.15 23.63 34 24.48 34 25.5189V32.1111C34 33.15 33.15 34 32.1111 34C14.3744 34 0 19.6256 0 1.88889C0 0.85 0.85 0 1.88889 0H8.5C9.53889 0 10.3889 0.85 10.3889 1.88889C10.3889 4.25 10.7667 6.51667 11.4656 8.63222C11.6733 9.29333 11.5222 10.03 10.9933 10.5589L6.83778 14.7144Z\" fill=\"currentColor\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/quality.svg":
/*!*****************************!*\
  !*** ./img/svg/quality.svg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "quality",
  "use": "quality-usage",
  "viewBox": "0 0 60 60",
  "content": "<symbol viewBox=\"0 0 60 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"quality\">\n<g clip-path=\"url(#quality_clip0_16:278)\">\n<path d=\"M45.9758 26.4927C45.9758 24.5932 44.4306 23.0481 42.5311 23.0481H36.2004C37.7385 21.3192 38.7437 19.3506 38.9379 17.5844C39.0565 16.5057 38.7232 15.435 38.0233 14.6467C37.3835 13.9261 36.5087 13.5245 35.56 13.5157C35.549 13.5156 35.538 13.5156 35.5271 13.5156C34.6094 13.5156 33.748 13.869 33.098 14.5131C32.4478 15.1572 32.0881 16.0154 32.0839 16.9312C32.0505 17.1317 31.6977 17.823 30.8346 18.6438C30.128 19.316 28.9074 20.24 27.1051 20.8251C26.3985 21.0546 25.7527 21.4771 25.1857 22.0808C24.8882 22.3974 24.4426 22.8348 23.891 23.2738C23.6203 23.1303 23.3125 23.0483 22.9854 23.0483H16.9729C15.9022 23.0483 15.0313 23.9192 15.0313 24.9899V41.0232C15.0313 42.0939 15.9022 42.9648 16.9729 42.9648H22.9854C23.7153 42.9648 24.3517 42.5596 24.6833 41.9627H40.0259C41.649 41.9627 42.9695 40.6423 42.9695 39.0191C42.9695 38.4734 42.8203 37.9619 42.5604 37.5232C43.4062 37.0055 43.9716 36.0729 43.9716 35.0107C43.9716 34.465 43.8224 33.9535 43.5625 33.5148C44.4082 32.9971 44.9737 32.0645 44.9737 31.0023C44.9737 30.388 44.7845 29.8171 44.4614 29.3446C45.3747 28.7243 45.9758 27.6773 45.9758 26.4927ZM42.5311 28.0584H42.03C41.5112 28.0584 41.0905 28.479 41.0905 28.9979C41.0905 29.5167 41.5111 29.9374 42.03 29.9374C42.6171 29.9374 43.0948 30.4151 43.0948 31.0022C43.0948 31.5893 42.6171 32.0669 42.03 32.0669H41.028C40.5092 32.0669 40.0885 32.4875 40.0885 33.0064C40.0885 33.5252 40.509 33.9459 41.028 33.9459C41.6151 33.9459 42.0927 34.4236 42.0927 35.0107C42.0927 35.5978 41.6151 36.0755 41.028 36.0755H40.0259C39.5071 36.0755 39.0864 36.496 39.0864 37.015C39.0864 37.5337 39.507 37.9544 40.0259 37.9544C40.613 37.9544 41.0906 38.4321 41.0906 39.0192C41.0906 39.6063 40.613 40.084 40.0259 40.084H24.927V31.0025C24.927 30.4837 24.5064 30.063 23.9875 30.063C23.4686 30.063 23.048 30.4836 23.048 31.0025V41.0234C23.048 41.0579 23.02 41.0859 22.9854 41.0859H16.9729C16.9383 41.0859 16.9103 41.0579 16.9103 41.0234V24.9895C16.9103 24.9549 16.9383 24.9269 16.9729 24.9269H22.9854C23.02 24.9269 23.048 24.9549 23.048 24.9895V26.9938C23.048 27.5126 23.4686 27.9333 23.9875 27.9333C24.5064 27.9333 24.927 27.5127 24.927 26.9938V24.9895C24.927 24.9439 24.9232 24.8993 24.9201 24.8545C25.6245 24.3092 26.1878 23.758 26.5553 23.3668C26.903 22.9964 27.2831 22.7426 27.6852 22.6121C29.8965 21.8942 31.3847 20.7383 32.2436 19.895C33.3201 18.8381 33.9626 17.7363 33.9626 16.9475C33.9626 16.5308 34.1251 16.1402 34.4203 15.8477C34.7192 15.5516 35.1149 15.3951 35.5425 15.3945C36.0692 15.3995 36.4179 15.6689 36.618 15.8941C36.9608 16.2803 37.1296 16.8355 37.0699 17.3791C36.8647 19.2458 35.3719 21.5532 33.2667 23.2574C32.9575 23.5078 32.8395 23.9259 32.9722 24.301C33.105 24.6762 33.4599 24.9269 33.8578 24.9269H42.5309C43.3943 24.9269 44.0966 25.6292 44.0966 26.4927C44.0966 27.3561 43.3944 28.0584 42.5311 28.0584Z\" fill=\"currentColor\" />\n<path d=\"M19.9792 37.0671C19.4604 37.0671 19.0348 37.4927 19.0348 38.0115C19.0348 38.5303 19.4604 38.9559 19.9792 38.9559C20.498 38.9559 20.9236 38.5303 20.9236 38.0115C20.9238 37.4928 20.4981 37.0671 19.9792 37.0671Z\" fill=\"currentColor\" />\n<path d=\"M58.3251 30.0003L59.939 25.7297C60.0566 25.419 60.0011 25.0694 59.7934 24.8101L56.9388 21.2471L57.154 16.6868C57.1697 16.3551 57.0089 16.0395 56.7314 15.8573L52.9155 13.3508L51.7111 8.94712C51.6234 8.62673 51.3731 8.37641 51.0528 8.28888L46.6492 7.08442L44.1426 3.26868C43.9603 2.99106 43.6448 2.83099 43.3132 2.8461L38.7528 3.06126L35.1899 0.20669C34.9306 -0.000966679 34.5811 -0.0563964 34.2703 0.0610255L29.9996 1.67493L25.7292 0.0611427C25.4183 -0.0563964 25.0688 -0.000966693 24.8096 0.206807L21.2466 3.06138L16.6863 2.84622C16.353 2.83052 16.0391 2.9913 15.8568 3.2688L13.3504 7.08466L8.94676 8.28911C8.62637 8.37677 8.37606 8.62708 8.28852 8.94735L7.08407 13.351L3.26821 15.8574C2.99059 16.0398 2.82993 16.3552 2.84563 16.6869L3.06079 21.2472L0.206215 24.8102C-0.00144125 25.0694 -0.0568709 25.419 0.060551 25.7298L1.67434 30.0003L0.0604338 34.2709C-0.0571053 34.5815 -0.00167562 34.9311 0.206098 35.1904L3.06067 38.7534L2.84551 43.3138C2.82981 43.6454 2.99059 43.961 3.26809 44.1432L7.08395 46.6497L8.2884 51.0534C8.37606 51.3738 8.62637 51.6241 8.94665 51.7116L13.3503 52.9161L15.8567 56.732C16.0391 57.0096 16.3551 57.1692 16.6862 57.1545L21.2465 56.9394L24.8095 59.7939C25.0687 60.0017 25.4184 60.0572 25.7291 59.9396L29.9997 58.3257L34.2704 59.9396C34.3782 59.9803 34.4906 60.0002 34.6024 60.0002C34.8129 60.0002 35.0206 59.9295 35.1899 59.7939L38.7528 56.9394L43.3132 57.1545C43.6459 57.1693 43.9603 57.0095 44.1426 56.732L46.6492 52.9161L51.0528 51.7116C51.3732 51.624 51.6235 51.3737 51.7111 51.0534L52.9155 46.6497L56.7314 44.1432C57.009 43.9609 57.1697 43.6454 57.154 43.3138L56.9388 38.7534L59.7934 35.1904C60.001 34.9312 60.0565 34.5816 59.939 34.2709L58.3251 30.0003ZM56.442 30.3324L57.992 34.4339L55.2505 37.8556C55.1074 38.0341 55.0344 38.2588 55.0452 38.4873L55.2519 42.8669L51.5873 45.2741C51.3962 45.3996 51.2572 45.5907 51.1968 45.8115L50.0401 50.0407L45.8109 51.1974C45.5902 51.2578 45.3992 51.3966 45.2735 51.5879L42.8663 55.2525L38.4867 55.0457C38.2581 55.0352 38.0335 55.108 37.855 55.2511L34.4333 57.9925L30.3318 56.4426C30.2249 56.4022 30.1122 56.382 29.9997 56.382C29.8872 56.382 29.7746 56.4023 29.6676 56.4426L25.5662 57.9925L22.1444 55.2511C21.9659 55.108 21.7409 55.0352 21.5128 55.0457L17.1331 55.2525L14.726 51.5879C14.6005 51.3968 14.4093 51.2578 14.1886 51.1974L9.95938 50.0407L8.80262 45.8115C8.74227 45.5908 8.6034 45.3998 8.41215 45.2741L4.74758 42.8669L4.9543 38.4873C4.96508 38.2586 4.89208 38.0341 4.74899 37.8556L2.0075 34.4339L3.55754 30.3324C3.6384 30.1184 3.6384 29.8822 3.55754 29.6682L2.0075 25.5668L4.74899 22.145C4.89208 21.9665 4.96508 21.7419 4.9543 21.5134L4.74758 17.1337L8.41215 14.7266C8.60329 14.6011 8.74227 14.4099 8.80262 14.1891L9.95938 9.95997L14.1886 8.80321C14.4092 8.74286 14.6002 8.60399 14.726 8.41274L17.1331 4.74817L21.5128 4.95489C21.7411 4.96556 21.9659 4.89267 22.1444 4.74958L25.5662 2.0081L29.6676 3.55813C29.8817 3.63899 30.1179 3.63899 30.3318 3.55813L34.4333 2.0081L37.855 4.74958C38.0335 4.89278 38.2583 4.96567 38.4867 4.95489L42.8663 4.74817L45.2735 8.41274C45.399 8.60388 45.5901 8.74286 45.8109 8.80321L50.0401 9.95997L51.1968 14.1891C51.2572 14.4098 51.3961 14.6008 51.5873 14.7266L55.2519 17.1337L55.0452 21.5134C55.0344 21.742 55.1074 21.9665 55.2505 22.145L57.992 25.5668L56.4419 29.6682C56.3612 29.8823 56.3612 30.1184 56.442 30.3324Z\" fill=\"currentColor\" />\n<path d=\"M47.6524 13.7782C47.4186 13.5237 47.1761 13.2705 46.9313 13.0259C46.6865 12.7812 46.4335 12.5386 46.179 12.3048C45.7968 11.9539 45.2026 11.9792 44.8516 12.3615C44.5008 12.7437 44.5261 13.338 44.9083 13.6889C45.1431 13.9045 45.3767 14.1284 45.6027 14.3543C45.8285 14.5801 46.0524 14.8139 46.2682 15.0487C46.4534 15.2505 46.7066 15.3528 46.9605 15.3528C47.1875 15.3528 47.4152 15.2711 47.5956 15.1055C47.9778 14.7547 48.0032 14.1603 47.6524 13.7782Z\" fill=\"currentColor\" />\n<path d=\"M42.8428 9.74127C38.3123 6.85494 32.8577 5.57221 27.4843 6.1285C22.0322 6.69334 16.8911 9.14279 13.008 13.0258C8.73454 17.2993 6.24642 22.9763 6.00196 29.0111C5.75903 35.0104 7.74607 40.8351 11.5972 45.412C11.7829 45.6328 12.0487 45.7465 12.3166 45.7465C12.5301 45.7465 12.7448 45.6741 12.9209 45.526C13.3179 45.1919 13.369 44.5993 13.035 44.2024C9.48642 39.9849 7.65548 34.617 7.87931 29.0873C8.10454 23.5253 10.3977 18.2931 14.3365 14.3545C17.9154 10.7754 22.6535 8.51783 27.6778 7.9974C32.6319 7.48412 37.6588 8.66643 41.8331 11.3259C42.2708 11.6047 42.8513 11.476 43.1301 11.0384C43.409 10.6007 43.2802 10.0201 42.8428 9.74127Z\" fill=\"currentColor\" />\n<path d=\"M50.2161 17.1144C49.9373 16.6767 49.3563 16.548 48.919 16.8268C48.4813 17.1056 48.3527 17.6864 48.6315 18.1239C51.291 22.2983 52.473 27.3254 51.96 32.2792C51.4395 37.3035 49.1819 42.0415 45.603 45.6206C41.6642 49.5593 36.432 51.8525 30.8702 52.0778C25.3414 52.3025 19.9725 50.4708 15.7551 46.9223C15.3582 46.5882 14.7656 46.6393 14.4315 47.0364C14.0974 47.4333 14.1485 48.0259 14.5455 48.36C18.8722 52.0004 24.3132 53.9753 29.9634 53.9752C30.2902 53.9752 30.6184 53.9685 30.9465 53.9552C36.9813 53.7109 42.6582 51.2228 46.9318 46.9493C50.8149 43.0662 53.2645 37.925 53.8291 32.4729C54.3855 27.0991 53.1024 21.6448 50.2161 17.1144Z\" fill=\"currentColor\" />\n</g>\n<defs>\n<clipPath id=\"quality_clip0_16:278\">\n<rect width=\"60\" height=\"60\" fill=\"white\" />\n</clipPath>\n</defs>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/star.svg":
/*!**************************!*\
  !*** ./img/svg/star.svg ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "star",
  "use": "star-usage",
  "viewBox": "0 0 130 131",
  "content": "<symbol viewBox=\"0 0 130 131\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"star\">\n<path d=\"M26.9744 61.6657L4.54272 38.3011L36.9156 39.3423L37.4674 39.36L37.4305 38.8091L35.2654 6.492L59.3951 28.0985L59.8065 28.4668L60.1323 28.0211L79.2468 1.87297L83.8429 33.9348L83.9212 34.4814L84.4573 34.3493L115.908 26.6053L98.8194 54.1204L98.5281 54.5894L99.0237 54.8329L128.094 69.1164L97.317 79.2102L96.7924 79.3822L97.0155 79.8873L110.103 109.515L80.0388 97.4644L79.5263 97.2589L79.3725 97.7893L70.354 128.898L55.0693 100.342L54.8087 99.8548L54.3501 100.162L27.4452 118.196L34.0921 86.4957L34.2054 85.9553L33.6564 85.896L1.45428 82.4164L26.9226 62.4052L27.3568 62.064L26.9744 61.6657Z\" stroke=\"currentColor\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/about_image.jpg":
/*!*****************************!*\
  !*** ./img/about_image.jpg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/about_image.jpg";

/***/ }),

/***/ "./img/advantage-bg-sm.png":
/*!*********************************!*\
  !*** ./img/advantage-bg-sm.png ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/advantage-bg-sm.png";

/***/ }),

/***/ "./img/advantage-bg.png":
/*!******************************!*\
  !*** ./img/advantage-bg.png ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/advantage-bg.png";

/***/ }),

/***/ "./img/favicon.png":
/*!*************************!*\
  !*** ./img/favicon.png ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.png";

/***/ }),

/***/ "./img/feedback-img.jpg":
/*!******************************!*\
  !*** ./img/feedback-img.jpg ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/feedback-img.jpg";

/***/ }),

/***/ "./img/gallery1.jpg":
/*!**************************!*\
  !*** ./img/gallery1.jpg ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/gallery1.jpg";

/***/ }),

/***/ "./img/gallery10.jpg":
/*!***************************!*\
  !*** ./img/gallery10.jpg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/gallery10.jpg";

/***/ }),

/***/ "./img/gallery2.jpg":
/*!**************************!*\
  !*** ./img/gallery2.jpg ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/gallery2.jpg";

/***/ }),

/***/ "./img/gallery3.jpg":
/*!**************************!*\
  !*** ./img/gallery3.jpg ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/gallery3.jpg";

/***/ }),

/***/ "./img/gallery4.jpg":
/*!**************************!*\
  !*** ./img/gallery4.jpg ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/gallery4.jpg";

/***/ }),

/***/ "./img/gallery5.jpg":
/*!**************************!*\
  !*** ./img/gallery5.jpg ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/gallery5.jpg";

/***/ }),

/***/ "./img/gallery6.jpg":
/*!**************************!*\
  !*** ./img/gallery6.jpg ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/gallery6.jpg";

/***/ }),

/***/ "./img/gallery7.jpg":
/*!**************************!*\
  !*** ./img/gallery7.jpg ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/gallery7.jpg";

/***/ }),

/***/ "./img/gallery8.jpg":
/*!**************************!*\
  !*** ./img/gallery8.jpg ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/gallery8.jpg";

/***/ }),

/***/ "./img/gallery9.jpg":
/*!**************************!*\
  !*** ./img/gallery9.jpg ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/gallery9.jpg";

/***/ }),

/***/ "./img/promo_image.jpg":
/*!*****************************!*\
  !*** ./img/promo_image.jpg ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/promo_image.jpg";

/***/ }),

/***/ "./img/review1.jpg":
/*!*************************!*\
  !*** ./img/review1.jpg ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/review1.jpg";

/***/ }),

/***/ "./img/stairs1.jpg":
/*!*************************!*\
  !*** ./img/stairs1.jpg ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/stairs1.jpg";

/***/ }),

/***/ "./img/stairs2.jpg":
/*!*************************!*\
  !*** ./img/stairs2.jpg ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/stairs2.jpg";

/***/ }),

/***/ "./img/stairs3.jpg":
/*!*************************!*\
  !*** ./img/stairs3.jpg ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/stairs3.jpg";

/***/ }),

/***/ "./img/stairs4.jpg":
/*!*************************!*\
  !*** ./img/stairs4.jpg ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/stairs4.jpg";

/***/ }),

/***/ "./img/stairs5.jpg":
/*!*************************!*\
  !*** ./img/stairs5.jpg ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/stairs5.jpg";

/***/ }),

/***/ "./img/stairs6.jpg":
/*!*************************!*\
  !*** ./img/stairs6.jpg ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/stairs6.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_baguettebox_js_dist_baguetteBox_min_js-node_modules_html-loader_dist_run-de5574"], function() { return __webpack_require__("./js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map