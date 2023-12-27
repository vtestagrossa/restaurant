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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_json5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json5 */ \"./src/data.json5\");\n\n/**\n * TODO: need to add a function to handle building the menu using createMenuItem\n * and the data.json5 to build all menu items in a loop.\n * \n * dynamic image loading from json needs work.\n * @returns loadMenu\n */\nfunction createMenuContainer(){\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-container');\n\n    return menuContainer;\n}\nfunction createMenuItem(title, description, url){\n    const menuItem = document.createElement('div');\n    const menuHeader = document.createElement('span');\n    const menuTitle = document.createElement('h1');\n    const menuImage = document.createElement('img');\n    const menuDescription = document.createElement('p');\n\n    menuTitle.textContent = title;\n    menuDescription.textContent = description;\n\n    menuItem.classList.add('menu-item');\n    menuHeader.classList.add('menu-item-header');\n    menuTitle.classList.add('menu-title');\n    menuImage.setAttribute('src', \"../src/images/\" + url);\n    menuImage.classList.add('menu-image');\n    menuDescription.classList.add('menu-description');\n\n    menuItem.appendChild(menuImage);\n    menuItem.appendChild(menuHeader);\n    menuHeader.appendChild(menuTitle);\n    menuHeader.appendChild(menuDescription);\n\n\n    return menuItem;\n}\nfunction createMenuHeader(headingTitle){\n    const headingContainer = document.createElement('div');\n    headingContainer.classList.add('menu-item');\n    headingContainer.classList.add('col-2');\n    headingContainer.classList.add('transparent');\n    headingContainer.classList.add('large-font');\n    const heading = document.createElement('h1');\n    heading.textContent = headingTitle;\n    heading.classList.add('menu-title');\n    headingContainer.appendChild(heading);\n\n    return headingContainer;\n}\nfunction loadMenu(sliderClass){\n    const container = document.getElementById('hero-frame');\n    container.textContent = \"\";\n    const menuContainer = createMenuContainer();\n    menuContainer.classList.add(sliderClass);\n\n    const entreeHeading = createMenuHeader(\"Entrees\");\n    const sidesHeading = createMenuHeader(\"Sides\");\n    const drinksHeading = createMenuHeader(\"Drinks\");\n\n    menuContainer.appendChild(entreeHeading);\n    _data_json5__WEBPACK_IMPORTED_MODULE_0__.menu.forEach((entree) => {\n        menuContainer.appendChild(createMenuItem(entree.name, entree.description, entree.img_url));\n    });\n    menuContainer.appendChild(sidesHeading);\n    _data_json5__WEBPACK_IMPORTED_MODULE_0__.sides.forEach((side) => {\n        menuContainer.appendChild(createMenuItem(side.name, side.description, side.img_url));\n    });\n    menuContainer.appendChild(drinksHeading);\n    _data_json5__WEBPACK_IMPORTED_MODULE_0__.drinks.forEach((drink) => {\n        menuContainer.appendChild(createMenuItem(drink.name, drink.description, drink.img_url));\n    });\n\n    container.appendChild(menuContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/data.json5":
/*!************************!*\
  !*** ./src/data.json5 ***!
  \************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"menu\":[{\"name\":\"BBQ Brisket\",\"description\":\"A delicious, slow-cooked brisket             smothered in our signature BBQ sauced, served with             a choice of two sides.\",\"img_url\":\"brisket.webp\"},{\"name\":\"Pulled Pork Sandwich\",\"description\":\"Our famous pulled pork sandwich             with coleslaw, served with a choice of two sides.\",\"img_url\":\"pPork.jpg\"},{\"name\":\"Ribs\",\"description\":\"Wood smoked BBQ ribs, dry rubbed with our             signature seasonings and topped with BBQ sauce from our selection             of in-house sauces, served with a choice of two sides.\",\"img_url\":\"ribs.jpg\"},{\"name\":\"Tri-tip\",\"description\":\"Slow-smoked tri-tip cooked all day and smoked using             applewood. Comes with a choice of two sides.\",\"img_url\":\"steak.jpg\"}],\"sides\":[{\"name\":\"Loaded Mashed Stuffed Potatoes\",\"description\":\"Gourmet loaded mashed, stuffed potatoes, twice             baked and topped with bacon, chive, and sour cream(optional).\",\"img_url\":\"mashed.jpeg\"},{\"name\":\"Fried Asparagus\",\"description\":\"Beer battered, deep fried asparagus with             our special dipping sauce.\",\"img_url\":\"asparagus.jpg\"},{\"name\":\"Steamed Vegetables\",\"description\":\"Seasoned and steamed cauliflower, broccoli, asparagus             potatoes, and beets.\",\"img_url\":\"steamed.jpg\"},{\"name\":\"Rice Pilaf\",\"description\":\"Our in-house rice pilaf with chives, peas, and our             special blend of seasonings.\",\"img_url\":\"pilaf.jpg\"}],\"drinks\":[{\"name\":\"Stone Arrogant Bastard Ale\",\"description\":\"\",\"img_url\":\"bastard.jpeg\"},{\"name\":\"Stone Grapefruit Slam IPA\",\"description\":\"\",\"img_url\":\"grapefruit.jpg\"},{\"name\":\"Belching Beaver Peanut Butter Milk Stout\",\"description\":\"\",\"img_url\":\"beaver.webp\"},{\"name\":\"Belching Beaver Tropical Terps IPA\",\"description\":\"\",\"img_url\":\"beaver_terps.png\"}]}');\n\n//# sourceURL=webpack://restaurant/./src/data.json5?");

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