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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_json5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json5 */ \"./src/data.json5\");\n\n/**\n * TODO: need to add a function to handle building the menu using createMenuItem\n * and the data.json5 to build all menu items in a loop.\n * \n * dynamic image loading from json needs work.\n * @returns loadMenu\n */\nfunction createMenuContainer(){\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-container');\n\n    return menuContainer;\n}\nfunction createMenuItem(title, description, url){\n    //TODO: accept menu item object and build a menu item from it\n    const menuItem = document.createElement('div');\n    const menuHeader = document.createElement('span');\n    const menuTitle = document.createElement('h1');\n    const menuImage = document.createElement('img');\n    const menuDescription = document.createElement('p');\n\n    menuTitle.textContent = title;\n    menuDescription.textContent = description;\n\n    menuItem.classList.add('menu-item');\n    menuHeader.classList.add('menu-item-header');\n    menuImage.setAttribute('src', url);\n    menuImage.classList.add('menu-image');\n\n    menuItem.appendChild(menuHeader);\n    menuHeader.appendChild(menuImage);\n    menuHeader.appendChild(menuTitle);\n    menuItem.appendChild(menuDescription);\n\n\n    return menuItem;\n}\nfunction loadMenu(sliderClass){\n    const container = document.getElementById('hero-frame');\n    container.textContent = \"\";\n    const menuContainer = createMenuContainer();\n    menuContainer.classList.add(sliderClass);\n    for (let i = 0; i < 12; i++){\n        menuContainer.appendChild(createMenuItem(\"test\", \"testing the test\", \"../src/images/background.jpg\"));\n    }\n\n    container.appendChild(menuContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/data.json5":
/*!************************!*\
  !*** ./src/data.json5 ***!
  \************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"menu\":[{\"name\":\"Brisket\",\"description\":\"delicious brisket\",\"img-url\":\"./brisket.jpg\"},{\"name\":\"Pulled Pork\",\"description\":\"delicious pulled pork\",\"img_url\":\"./pPork.jpg\"},{\"name\":\"Ribs\",\"description\":\"delicious ribs\",\"img_url\":\"./ribs.jpg\"},{\"name\":\"Steak\",\"description\":\"delicious steak\",\"img_url\":\"./steak.jpg\"}]}');\n\n//# sourceURL=webpack://restaurant/./src/data.json5?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;