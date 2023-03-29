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
/* harmony import */ var _node_modules_fslightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/fslightbox */ "../node_modules/fslightbox/index.js");
/* harmony import */ var _node_modules_fslightbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fslightbox__WEBPACK_IMPORTED_MODULE_2__);


 // import '../img/sprite.svg';

var menuButton = document.querySelector('.menu__button');
var menu = document.querySelector('.menu__content');
document.addEventListener('click', function (evt) {
  if (evt.target.closest('.menu__button')) {
    menu.classList.toggle('menu__content--open');
  } else menu.classList.remove('menu__content--open');
}); // Tabs

function toggleTabs(id) {
  var tabsPanel = document.querySelector("#".concat(id, " .tabs__panel"));
  var tabs = document.querySelectorAll('.tabs__tab');
  var contents = document.querySelectorAll('.tabs__content');
  tabsPanel.addEventListener('click', function (e) {
    e.preventDefault();
    tabs.forEach(function (item, index) {
      // if (!contents[index]) {
      //   return;
      // }
      if (e.target !== item) {
        item.classList.remove('tabs__tab--active');
        contents[index].classList.remove('tabs__content--active');
        return;
      }

      item.classList.add('tabs__tab--active');

      if (contents[index]) {
        contents[index].classList.add('tabs__content--active');
      }
    });
  });
}

;
toggleTabs('priceTabs');

/***/ }),

/***/ "./js/sprite.js":
/*!**********************!*\
  !*** ./js/sprite.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_svg_comment_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/svg/comment.svg */ "./img/svg/comment.svg");
/* harmony import */ var _img_svg_download_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/svg/download.svg */ "./img/svg/download.svg");
/* harmony import */ var _img_svg_arrow_downward_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/svg/arrow-downward.svg */ "./img/svg/arrow-downward.svg");
/* harmony import */ var _img_svg_instagram_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/svg/instagram.svg */ "./img/svg/instagram.svg");
/* harmony import */ var _img_svg_phone_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/svg/phone.svg */ "./img/svg/phone.svg");
/* harmony import */ var _img_svg_telegram_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/svg/telegram.svg */ "./img/svg/telegram.svg");
/* harmony import */ var _img_svg_email_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/svg/email.svg */ "./img/svg/email.svg");
// ! Пример вставки SVG в HTML
// <svg class="icon">
//  <use xlink:href="#comment"></use>
// </svg>








/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "../node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ./img/logo.jpg */ "./img/logo.jpg");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ./img/about-img.png */ "./img/about-img.png");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ./img/product-1.jpg */ "./img/product-1.jpg");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ./img/product-2.jpg */ "./img/product-2.jpg");
var ___HTML_LOADER_IMPORT_4___ = __webpack_require__(/*! ./img/product-3.jpg */ "./img/product-3.jpg");
var ___HTML_LOADER_IMPORT_5___ = __webpack_require__(/*! ./img/product-4.jpg */ "./img/product-4.jpg");
var ___HTML_LOADER_IMPORT_6___ = __webpack_require__(/*! ./img/product-5.jpg */ "./img/product-5.jpg");
var ___HTML_LOADER_IMPORT_7___ = __webpack_require__(/*! ./img/product-6.jpg */ "./img/product-6.jpg");
var ___HTML_LOADER_IMPORT_8___ = __webpack_require__(/*! ./img/jark-pig.png */ "./img/jark-pig.png");
var ___HTML_LOADER_IMPORT_9___ = __webpack_require__(/*! ./img/jark-hen.png */ "./img/jark-hen.png");
var ___HTML_LOADER_IMPORT_10___ = __webpack_require__(/*! ./img/jark-sosage.png */ "./img/jark-sosage.png");
var ___HTML_LOADER_IMPORT_11___ = __webpack_require__(/*! ./img/jark-banana.png */ "./img/jark-banana.png");
var ___HTML_LOADER_IMPORT_12___ = __webpack_require__(/*! ./img/jark-kivi.png */ "./img/jark-kivi.png");
var ___HTML_LOADER_IMPORT_13___ = __webpack_require__(/*! ./img/jark-sugar.png */ "./img/jark-sugar.png");
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
var code = "<!DOCTYPE html>\r\n<html lang=\"uk\">\r\n\r\n<head>\r\n\t<meta http-equiv=\"x-ua-compatible\" content=\"IE=edge\">\r\n\t<meta name=\"description\" content=\"Замовлення м'ясних джерок\">\r\n\t<meta name=\"keywords\" content=\"М'ясні джерки, смаколики\">\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t<title>QUICK MEAT</title>\r\n\t<link rel=\"icon\" type=\"image/png\" href=\"img/favicon.png\" sizes=\"32x32\">\r\n\t<link rel=\"apple-touch-icon\" href=\"img/favicon.png\" sizes=\"72x72\">\r\n\t<meta name=\"msapplication-TileImage\" content=\"img/favicon.png\">\r\n\t<meta name=\"msapplication-TileColor\" content=\"#a51f1e\">\r\n\t<meta name=\"theme-color\" content=\"#a51f1e\">\r\n\t<meta property=\"og:type\" content=\"product\">\r\n\t<meta property=\"og:title\" content=\"Quick meat\">\r\n\t<meta property=\"og:description\" content=\"Найкращі м'ясні смаколики\">\r\n\t<meta property=\"og:image\" content=\"img/page-screen.jpg\">\r\n\t<meta property=\"og:site_name\" content=\"Quick meat\">\r\n\t<meta property=\"og:locale\" content=\"uk\">\r\n</head>\r\n\r\n<body>\r\n\t<header class=\"header\">\r\n\t\t<div class=\"header__container container\">\r\n\t\t\t<div class=\"header__logo logo\">\r\n\t\t\t\t<a href=\"#\" class=\"logo__link\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"logo\" class=\"logo__img\"></a>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"header__menu menu\">\r\n\t\t\t\t<nav class=\"menu__content\">\r\n\t\t\t\t\t<ul class=\"menu__list\">\r\n\t\t\t\t\t\t<li class=\"menu__item\"><a href=\"#about\" class=\"menu__link\">Про нас</a></li>\r\n\t\t\t\t\t\t<li class=\"menu__item\"><a href=\"#product\" class=\"menu__link\">Наша продукція</a></li>\r\n\t\t\t\t\t\t<li class=\"menu__item\"><a href=\"#price\" class=\"menu__link\">Ціни та набори</a></li>\r\n\t\t\t\t\t\t<li class=\"menu__item\"><a href=\"#callback\" class=\"menu__link\">Замовити смакоту</a></li>\r\n\t\t\t\t\t\t<!-- <li class=\"menu__item\"><a href=\"#\" class=\"menu__link\">Ми в соц. мережах</a></li> -->\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</nav>\r\n\t\t\t\t<button class=\"menu__button\"><span class=\"menu__burger\"></span></button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</header>\r\n\t<div class=\"promo\">\r\n\t\t<div class=\"container promo__container\">\r\n\t\t\t<div class=\"promo__wrapper\">\r\n\t\t\t\t<h1 class=\"promo__title title title--large\">Quick meat</h1>\r\n\t\t\t\t<p class=\"promo__content content content--large\">Мабуть, найкращі снеки на районі</p>\r\n\t\t\t\t<a href=\"#callback\" class=\"promo__button button\">Дізнатися більше</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"about\" id=\"about\">\r\n\t\t<div class=\"container about__container\">\r\n\t\t\t<h2 class=\"about__title title title--medium\">Про нас</h2>\r\n\t\t\t<div class=\"about__wrapper\">\r\n\t\t\t\t<div class=\"about__content content content--dark\">\r\n\t\t\t\t\t<p>Ми — команда молодих ентузіастів, яка знає що таке гарний перекус і що саме стане в нагоді для великої\r\n\t\t\t\t\t\tкомпанії друзів за кухлем пінного.</p>\r\n\t\t\t\t\t<p>Наші спеціалісти зі смаку постійно разширюють асортимент продукції під побажання клієнтів, щоб надати\r\n\t\t\t\t\t\tнайкращий продукт саме для Вас.</p>\r\n\t\t\t\t\t<p>Шляхом кропотливої праці до вас на стіл потрапляє лише найкащий, найсвіжіший та найсмачніший перекус.</p>\r\n\t\t\t\t\t<p>С кожним шматочком Ви порините у світ смаку, якиї більше не забажаете залишати.</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"about__image-container\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Джерки\" class=\"about__image\"></div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"product\" id=\"product\">\r\n\t\t<div class=\"container product__container\">\r\n\t\t\t<h2 class=\"product__title title title--medium\">Наша продукція</h2>\r\n\t\t\t<div class=\"product__gallery\">\r\n\t\t\t\t<a data-fslightbox=\"gallery\" href=\"img/product-1.jpg\" class=\"product__item\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"product-1\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a data-fslightbox=\"gallery\" href=\"img/product-2.jpg\" class=\"product__item\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"product-2\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a data-fslightbox=\"gallery\" href=\"img/product-3.jpg\" class=\"product__item\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"product-3\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a data-fslightbox=\"gallery\" href=\"img/product-4.jpg\" class=\"product__item\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_5___ + "\" alt=\"product-4\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a data-fslightbox=\"gallery\" href=\"img/product-5.jpg\" class=\"product__item\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_6___ + "\" alt=\"product-5\">\r\n\t\t\t\t</a>\r\n\t\t\t\t<a data-fslightbox=\"gallery\" href=\"img/product-6.jpg\" class=\"product__item\">\r\n\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_7___ + "\" alt=\"product-6\">\r\n\t\t\t\t</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"price\" id=\"price\">\r\n\t\t<div class=\"container price__container\">\r\n\t\t\t<h2 class=\"price__title title title--medium\">Ціни та набори</h2>\r\n\t\t\t<div class=\"price__wrapper\">\r\n\t\t\t\t<div class=\"tabs\" id=\"priceTabs\">\r\n\t\t\t\t\t<div class=\"tabs__panel\">\r\n\t\t\t\t\t\t<a class=\"tabs__tab tabs__tab--active content\" href=\"#\">М'ясні джерки</a>\r\n\t\t\t\t\t\t<a class=\"tabs__tab content\" href=\"#\">Фрукти та солодощі</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"tabs__screen\">\r\n\t\t\t\t\t\t<div class=\"tabs__content tabs__content--active\">\r\n\t\t\t\t\t\t\t<div class=\"price-list tabs__row\">\r\n\t\t\t\t\t\t\t\t<table class=\"price-list__table\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"price-list__data price-list__data--header content\">Свинина</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"price-list__data price-list__data--header content\">50 грам</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Барбекю SNACK</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">80 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Гірчиця SNACK</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">80 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Паприка SNACK</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">80 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Гриль SNACK</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">80 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">HOT PEPPER SNACK</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">85 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__image-wrapper\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_8___ + "\" alt=\"Джерка свинна\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"price-list__image\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"price-list price-list--reverse tabs__row\">\r\n\t\t\t\t\t\t\t\t<table class=\"price-list__table\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"price-list__data price-list__data--header content\">Курка</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"price-list__data price-list__data--header content\">50 грам</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Барбекю SNACK</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">70 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Паприка SNACK</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">70 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Гірчиця SNACK</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">70 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Часниковий SNACK</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">70 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Гриль SNACK</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">70 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__image-wrapper\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_9___ + "\" alt=\"Джерка куряча\" class=\"price-list__image\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"price-list tabs__row\">\r\n\t\t\t\t\t\t\t\t<table class=\"price-list__table\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"price-list__data price-list__data--header content\">Ковбаски</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"price-list__data price-list__data--header content\"></th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data price-list__data--special content\">Курячі (часник, барбекю, гірчиця)\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">55 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data price-list__data--hit content\">Свинина (часник, барбекю, паприка)</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">60 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__image-wrapper\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_10___ + "\" alt=\"Вялена ковбаска\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"price-list__image\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"tabs__content\">\r\n\t\t\t\t\t\t\t<div class=\"price-list price-list--reverse tabs__row\">\r\n\t\t\t\t\t\t\t\t<table class=\"price-list__table\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"price-list__data price-list__data--header content\">Фруктові чіпси</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"price-list__data price-list__data--header content\">100 грам</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data price-list__data--new content\">Яблуко</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">80 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Банан</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">90 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Ківі</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">85 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\" colspan=\"2\">Без цукру</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__image-wrapper\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_11___ + "\" alt=\"Джерка банан\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"price-list__image\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"price-list tabs__row\">\r\n\t\t\t\t\t\t\t\t<table class=\"price-list__table\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"price-list__data price-list__data--header content\">Набір фруктовий мікс</th>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"price-list__data price-list__data--header content\">200 грам</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\" colspan=\"2\">Склад:</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Яблуко (100 гр)</td>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\" rowspan=\"3\">165 грн</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Банан (50 гр)</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Ківі (50 гр)</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__image-wrapper\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"" + ___HTML_LOADER_REPLACEMENT_12___ + "\" alt=\"Джерка ківі\" class=\"price-list__image\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"price-list price-list--reverse tabs__row\">\r\n\t\t\t\t\t\t\t\t<table class=\"price-list__table\">\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th class=\"price-list__data price-list__data--header content\">Додотково за бажанням</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Цукор\r\n\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<td class=\"price-list__data content\">Кориця</td>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t\t<div class=\"price-list__image-wrapper\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_13___ + "\" alt=\"Цукор\"\r\n\t\t\t\t\t\t\t\t\t\tclass=\"price-list__image\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"callback\" id=\"callback\">\r\n\t\t<div class=\"callback__container container\">\r\n\t\t\t<h2 class=\"callback__title title title--medium\">Засовити смаколики можна тут\r\n\t\t\t\t<svg class=\"icon\">\r\n\t\t\t\t\t<use xlink:href=\"#arrow-downward\"></use>\r\n\t\t\t\t</svg>\r\n\t\t\t</h2>\r\n\t\t\t<ul class=\"callback__list\">\r\n\t\t\t\t<li class=\"callback__item\">\r\n\t\t\t\t\t<a href=\"https://www.instagram.com/quick_meat_snack/\" class=\"callback__link\" target=\"_blank\">\r\n\t\t\t\t\t\t<svg class=\"callback__icon\">\r\n\t\t\t\t\t\t\t<use xlink:href=\"#instagram\"></use>\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"callback__item\">\r\n\t\t\t\t\t<a href=\"tel:+3800000000\" class=\"callback__link\">\r\n\t\t\t\t\t\t<svg class=\"callback__icon\">\r\n\t\t\t\t\t\t\t<use xlink:href=\"#phone\"></use>\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"callback__item\">\r\n\t\t\t\t\t<a href=\"#\" class=\"callback__link\">\r\n\t\t\t\t\t\t<svg class=\"callback__icon\">\r\n\t\t\t\t\t\t\t<use xlink:href=\"#telegram\"></use>\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"callback__item\">\r\n\t\t\t\t\t<a href=\"#\" class=\"callback__link\">\r\n\t\t\t\t\t\t<svg class=\"callback__icon\">\r\n\t\t\t\t\t\t\t<use xlink:href=\"#email\"></use>\r\n\t\t\t\t\t\t</svg>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t<footer class=\"footer\">\r\n\t\t<p class=\"footer__copy\">Prodused by KAV &copy; 2023</p>\r\n\t</footer>\r\n\r\n</body>\r\n\r\n</html>";
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

/***/ "./img/svg/arrow-downward.svg":
/*!************************************!*\
  !*** ./img/svg/arrow-downward.svg ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "arrow-downward",
  "use": "arrow-downward-usage",
  "viewBox": "0 0 24 24",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"arrow-downward\">\n  <g>\n    <polygon points=\"12 17.586 4.707 10.293 3.293 11.707 12 20.414 20.707 11.707 19.293 10.293 12 17.586\" />\n    <polygon points=\"20.707 5.707 19.293 4.293 12 11.586 4.707 4.293 3.293 5.707 12 14.414 20.707 5.707\" />\n  </g>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/comment.svg":
/*!*****************************!*\
  !*** ./img/svg/comment.svg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "comment",
  "use": "comment-usage",
  "viewBox": "0 0 576 512",
  "content": "<symbol aria-hidden=\"true\" class=\"svg-inline--fa fa-comments fa-w-18\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 512\" id=\"comment\"><path fill=\"currentColor\" d=\"M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/download.svg":
/*!******************************!*\
  !*** ./img/svg/download.svg ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "download",
  "use": "download-usage",
  "viewBox": "0 0 14 14",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 14\" id=\"download\"><g><g><path fill=\"currentColor\" d=\"M12.25 14H1.75C.783 14 0 13.164 0 12.133v-2.8C0 8.818.392 8.4.875 8.4s.875.418.875.933V11.2c0 .515.392.933.875.933h8.75c.483 0 .875-.418.875-.933V9.333c0-.515.392-.933.875-.933s.875.418.875.933v2.8C14 13.164 13.216 14 12.25 14zM6.125.933C6.125.418 6.517 0 7 0s.875.418.875.933v6.108l1.118-1.186a.84.84 0 0 1 1.24 0 .976.976 0 0 1 0 1.32L7.754 9.806a.869.869 0 0 1-.714.459.85.85 0 0 1-.705-.269L3.74 7.182a.976.976 0 0 1 0-1.32.84.84 0 0 1 1.24 0l1.145 1.25z\" /></g></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/email.svg":
/*!***************************!*\
  !*** ./img/svg/email.svg ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "email",
  "use": "email-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"email\"><title>7-Email-Arrow up</title><g id=\"email__7-Email-Arrow_up\" data-name=\"7-Email-Arrow up\"><path d=\"M29,4H3A3,3,0,0,0,0,7V25a3,3,0,0,0,3,3H16V26H3a1,1,0,0,1-1-1V7.23l13.42,9.58a1,1,0,0,0,1.16,0L30,7.23V17h2V7A3,3,0,0,0,29,4ZM16,14.77,3.72,6H28.28Z\" /><path d=\"M24.29,18.29l-4,4,1.41,1.41L24,21.41V29h2V21.41l2.29,2.29,1.41-1.41-4-4A1,1,0,0,0,24.29,18.29Z\" /></g></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/instagram.svg":
/*!*******************************!*\
  !*** ./img/svg/instagram.svg ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "instagram",
  "use": "instagram-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"instagram\"><title>camera android app aplication phone</title><g id=\"instagram_camera_android_app_aplication_phone\" data-name=\"camera android app aplication phone\"><path d=\"M30.56,8.47a8,8,0,0,0-7-7,64.29,64.29,0,0,0-15.06,0,8,8,0,0,0-7,7,64.29,64.29,0,0,0,0,15.06,8,8,0,0,0,7,7,64.29,64.29,0,0,0,15.06,0,8,8,0,0,0,7-7A64.29,64.29,0,0,0,30.56,8.47ZM8.7,3.42a63.65,63.65,0,0,1,14.6,0A6,6,0,0,1,28.58,8.7,63,63,0,0,1,29,15h-5A8,8,0,0,0,8.07,15H3a63,63,0,0,1,.39-6.3A6,6,0,0,1,8.7,3.42ZM22,16a6,6,0,1,1-6-6A6,6,0,0,1,22,16Zm1.3,12.58a63.65,63.65,0,0,1-14.6,0A6,6,0,0,1,3.42,23.3,63,63,0,0,1,3,17h5a8,8,0,0,0,15.86,0h5a63,63,0,0,1-.39,6.3A6,6,0,0,1,23.3,28.58Z\" /><path d=\"M16,12a4,4,0,1,0,4,4A4,4,0,0,0,16,12Zm0,6a2,2,0,1,1,2-2A2,2,0,0,1,16,18Z\" /><circle cx=\"24\" cy=\"8\" r=\"1\" /></g></symbol>"
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
  "viewBox": "0 0 120 120",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\" id=\"phone\">\n  <title>_</title>\n  <g>\n    <path d=\"M85.81,120H34.19a8.39,8.39,0,0,1-8.38-8.39V8.39A8.39,8.39,0,0,1,34.19,0H85.81a8.39,8.39,0,0,1,8.38,8.39V111.61A8.39,8.39,0,0,1,85.81,120ZM34.19,3.87a4.52,4.52,0,0,0-4.51,4.52V111.61a4.52,4.52,0,0,0,4.51,4.52H85.81a4.52,4.52,0,0,0,4.51-4.52V8.39a4.52,4.52,0,0,0-4.51-4.52Z\" />\n    <polygon points=\"73.7 10.32 46.3 10.32 39.28 3.3 42.01 0.57 47.9 6.45 72.1 6.45 77.99 0.57 80.72 3.3 73.7 10.32\" />\n    <rect x=\"47.1\" y=\"103.23\" width=\"25.81\" height=\"3.87\" />\n  </g>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/svg/telegram.svg":
/*!******************************!*\
  !*** ./img/svg/telegram.svg ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/svg-baker-runtime/browser-symbol.js */ "../node_modules/svg-baker-runtime/browser-symbol.js");
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js */ "../node_modules/svg-sprite-loader/runtime/browser-sprite.build.js");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "telegram",
  "use": "telegram-usage",
  "viewBox": "0 0 64 64",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 64 64\" id=\"telegram\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" fill=\"currentColor\" d=\"M63.712,13.29L55.28,53.896C54.364,58.397,51.322,60,48.779,60\r\n\tc-1.312,0-2.674-0.393-4.052-1.171l-0.229-0.131l-0.214-0.16L26.75,45.302l-0.659,7.735c-0.344,1.807-1.988,3.105-3.859,2.951\r\n\tc-1.438-0.119-2.604-1.06-3.091-2.32l-2.926-8.785C16.081,44.613,16,44.317,16,44c0-1.105,0.895-2,2-2\r\n\tc0.873,0,1.605,0.56,1.879,1.338c0.002,0,0.005-0.002,0.007-0.005l2.402,7.215l0.352-4.129c0-0.005,0-0.005,0-0.007\r\n\tc0.218-2.645,2.538-4.613,5.183-4.396c0.873,0.07,1.666,0.381,2.335,0.847l16.535,12.482c0.77,0.434,1.47,0.654,2.086,0.654\r\n\tc1.277,0,2.184-0.95,2.581-2.901l8.448-40.682C60.498,9.596,59.249,8,57.568,8c-0.429,0-0.885,0.104-1.348,0.317L6.616,27.864\r\n\tc-3.387,1.389-3.367,3.318-0.618,4.177l8.199,2.616c0.002,0,0.01-0.005,0.012-0.003c0.562,0.175,1.195,0.114,1.733-0.223\r\n\tc0.01-0.005,0.017-0.003,0.026-0.008l21.938-13.825c1.859-1.146,4.301-0.591,5.474,1.261c0.997,1.573,0.751,3.571-0.468,4.87\r\n\tL31.414,38.226v0.002l-0.031,0.029l-0.002-0.002c-0.359,0.344-0.844,0.558-1.379,0.558c-1.105,0-2-0.895-2-2\r\n\tc0-0.536,0.213-1.021,0.558-1.38l-0.002-0.002l11.394-11.396L18.015,37.859c-1.566,0.95-3.396,1.12-5.023,0.604\r\n\tc-0.012-0.005-0.024,0-0.037-0.005l-8.15-2.599c-4.295-1.343-4.759-4.456-4.8-5.377c-0.065-1.552,0.506-4.438,5.093-6.32l0.024-0.01\r\n\tl0.026-0.01l49.515-19.51C55.61,4.213,56.587,4,57.568,4c1.959,0,3.766,0.87,4.958,2.391C63.926,8.17,64.345,10.618,63.712,13.29\r\n\tL63.712,13.29z M30,50c1.105,0,2,0.895,2,2s-0.895,2-2,2s-2-0.895-2-2S28.895,50,30,50L30,50z\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "./img/about-img.png":
/*!***************************!*\
  !*** ./img/about-img.png ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/about-img.png";

/***/ }),

/***/ "./img/favicon.png":
/*!*************************!*\
  !*** ./img/favicon.png ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.png";

/***/ }),

/***/ "./img/jark-banana.png":
/*!*****************************!*\
  !*** ./img/jark-banana.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/jark-banana.png";

/***/ }),

/***/ "./img/jark-hen.png":
/*!**************************!*\
  !*** ./img/jark-hen.png ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/jark-hen.png";

/***/ }),

/***/ "./img/jark-kivi.png":
/*!***************************!*\
  !*** ./img/jark-kivi.png ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/jark-kivi.png";

/***/ }),

/***/ "./img/jark-pig.png":
/*!**************************!*\
  !*** ./img/jark-pig.png ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/jark-pig.png";

/***/ }),

/***/ "./img/jark-sosage.png":
/*!*****************************!*\
  !*** ./img/jark-sosage.png ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/jark-sosage.png";

/***/ }),

/***/ "./img/jark-sugar.png":
/*!****************************!*\
  !*** ./img/jark-sugar.png ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/jark-sugar.png";

/***/ }),

/***/ "./img/logo.jpg":
/*!**********************!*\
  !*** ./img/logo.jpg ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/logo.jpg";

/***/ }),

/***/ "./img/product-1.jpg":
/*!***************************!*\
  !*** ./img/product-1.jpg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/product-1.jpg";

/***/ }),

/***/ "./img/product-2.jpg":
/*!***************************!*\
  !*** ./img/product-2.jpg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/product-2.jpg";

/***/ }),

/***/ "./img/product-3.jpg":
/*!***************************!*\
  !*** ./img/product-3.jpg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/product-3.jpg";

/***/ }),

/***/ "./img/product-4.jpg":
/*!***************************!*\
  !*** ./img/product-4.jpg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/product-4.jpg";

/***/ }),

/***/ "./img/product-5.jpg":
/*!***************************!*\
  !*** ./img/product-5.jpg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/product-5.jpg";

/***/ }),

/***/ "./img/product-6.jpg":
/*!***************************!*\
  !*** ./img/product-6.jpg ***!
  \***************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "img/product-6.jpg";

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fslightbox_index_js-node_modules_html-loader_dist_runtime_getUrl_js-node-ffa842"], function() { return __webpack_require__("./js/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map