/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTop() {\n    const top = document.createElement('div');\n    top.classList.add('hero-top');\n    const heroLogo = document.createElement('div');\n    heroLogo.classList.add('hero-logo');\n    const heading = document.createElement('h1');\n    heading.textContent = \"Come Eat, Drink Your Fill!\";\n    const subHeading = document.createElement('p');\n    subHeading.textContent = \"Try our signature gastropub fare and our selection of draft beers.\";\n\n    top.appendChild(heroLogo);\n    heroLogo.appendChild(heading);\n    heroLogo.appendChild(subHeading);\n\n    return top;\n}\n\nfunction createBottom(){\n    const bottom = document.createElement('div');\n    bottom.classList.add('hero-bottom');\n    const locationHeading = document.createElement('h2');\n    locationHeading.textContent = \"Location:\";\n    const location = document.createElement('a');\n    location.href = \"https://maps.app.goo.gl/y4Ns8J3LVqgQwarS9\";\n    location.textContent = \"1101 N Central St, Knoxville TN 37917\";\n    const hoursHeading = document.createElement('h2');\n    hoursHeading.textContent = \"Hours:\";\n    const hours = document.createElement('p');\n    hours.textContent = \"Sun-Thu: 1100-2200, Fri-Sat: 1000-2300\";\n\n    bottom.appendChild(locationHeading);\n    bottom.appendChild(location);\n    bottom.appendChild(hoursHeading);\n    bottom.appendChild(hours);\n    \n    return bottom;\n}\n\nfunction loadHome(sliderClass) {\n    const container = document.getElementById('hero-frame');\n    container.textContent = \"\";\n    const top = createTop();\n    const bottom = createBottom();\n    top.classList.add(sliderClass);\n    bottom.classList.add(sliderClass);\n\n    container.appendChild(top);\n    container.appendChild(bottom);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/home.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;