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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/PermanentMarker-Regular.ttf */ \"./src/PermanentMarker-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ \"./src/images/background.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@keyframes slideInLeft {\n    from {\n        margin-left: 99%;\n    }\n    to {\n        margin-left: 0%;\n    }\n}@keyframes slideInRight {\n    from {\n        margin-left: -50%;\n    }\n    to {\n        margin-left: 0%;\n    }\n}\n@font-face{\n    font-family: \"Marker\";\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___})\n}\n.slideInLeft{\n    animation: 0.20s slideInLeft;\n}\n.slideInRight{\n    animation: 0.20s slideInRight;\n}\n*{\n    box-sizing: border-box;\n}\nbody{\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n}\n.content{\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n.navbar{\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    width: 100%;\n    height: 10%;\n    min-height: 5em;\n    background-color: rgb(34, 151, 81);\n    font-size: 1em;\n    color: white;\n    position: fixed;\n    top: 0;\n}\n.logo{\n    font-family: \"Marker\";\n    text-shadow: 0.125em 0.125em black;\n}\n.navigation{\n    display: flex;\n    justify-content: space-between;\n    width: 22%;\n    max-width: 16em;\n    z-index: 1;\n}\n.navigation-button{\n    color: white;\n    background-color: rgb(34, 151, 81);\n    border-style: solid;\n    border-color: white;\n    border-radius: .75em;\n    padding: 2.5%;\n    font-family: \"Marker\";\n    font-size: 1.5em;\n}\n.navigation button:hover{\n    border-color: black;\n}\n.navigation button:active{\n    background-color:rgb(25, 119, 62);\n}\n.navigation-active{\n    background-color:rgb(14, 67, 35);\n}\n.hero-frame{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin-top: 10em;\n    margin-bottom: 3em;\n    min-height: 87%;\n    width: 100%;\n}\n.hero-top{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    min-width: 50%;\n    min-height: 30%;\n}\n.hero-logo{\n    font-size: 1em;\n    font-family: \"Marker\";\n    color: white;\n    text-shadow: 0.125em 0.125em black;\n}\n.hero-bottom{\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    min-width: 40%;\n    min-height: 20%;\n    background-color: black;\n    opacity: 70%;\n    color: white;\n    border-style: solid;\n    padding: 1em;\n}\n.hero-bottom h2{\n    font-size: 1.5em;\n    margin:2%;\n    margin-left: 15%;\n}\n.hero-bottom p{\n    margin:0;\n    font-size: 1em;\n    margin-left: 20%;\n    margin-right: 10%;\n    color: white;\n}\n.hero-bottom a{\n    font-size: 1em;\n    margin-left: 20%;\n    margin-right: 10%;\n    color: white;\n}\n.hero-bottom a:visited{\n    color: white;\n}\n.menu-container{\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 47.5%);\n    grid-auto-rows: minmax(350px, 33%);\n    gap: 5%;\n    width: 90%;\n    max-width: 106em;\n    height: 100%;\n}\n.link{\n    color: white;\n}\n.link:visited{\n    color: white;\n}\n.col-2{\n    grid-column: 1/3;\n}\n.transparent{\n    opacity: 75%;\n}\n.medium-font{\n    font-size: 1.5em;\n}\n.large-font{\n    font-size: 3em;\n}\n.menu-item{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2em;\n    width: 100%;\n    min-height: 100%;\n    font-family: \"Marker\";\n    color: white;\n    text-shadow: 0.125em 0.125em black;\n    background-color: black;\n    z-index: -1;\n}\n.menu-item:hover{\n    border-color: white;\n    border-style: solid;\n}\n.menu-title{\n    font-size: 1.5em;\n    margin:0;\n}\n.menu-item-header{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n    height: 50%;\n    margin-left: 1em;\n}\n.menu-image{\n    max-width: 50%;\n    max-height: 50%;\n}\n.menu-description{\n    margin-top: 0;\n    font-size: 1em;\n}\n.contact-container{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 1em;\n    font-family: \"Marker\";\n    width: 60%;\n    height: 40%;\n    background-color: black;\n    color: white;\n}\n.footer{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 5%;\n    width: 100%;\n    position: fixed;\n    bottom: 0;\n    background-color: rgb(34, 151, 81);\n    color: white;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact(){\n    //TODO: Create a contact page with fake phone number,\n    //email address.\n    const contact = document.createElement('div');\n    const title = document.createElement('h1');\n    const phone = document.createElement('p');\n    const email = document.createElement('a');\n\n    title.textContent = \"Contact us!\"\n    phone.textContent = \"Phone: 865-000-0000\";\n    email.textContent = \"support@meatomallys.com\"\n    email.setAttribute('href', \"mailto:support@meatomallys.com\");\n    email.classList.add(\"link\");\n    contact.classList.add('contact-container');\n    contact.classList.add('transparent');\n    contact.classList.add('medium-font');\n    contact.appendChild(title);\n    contact.appendChild(phone);\n    contact.appendChild(email);\n\n    return contact;\n}\nfunction loadContact(sliderClass){\n    const container = document.getElementById('hero-frame');\n    container.textContent = \"\";\n    const contact = createContact();\n    contact.classList.add(sliderClass);\n    container.appendChild(contact);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createTop() {\n    const top = document.createElement('div');\n    top.classList.add('hero-top');\n    const heroLogo = document.createElement('div');\n    heroLogo.classList.add('hero-logo');\n    const heading = document.createElement('h1');\n    heading.textContent = \"Come Eat, Drink Your Fill!\";\n    const subHeading = document.createElement('p');\n    subHeading.textContent = \"Try our signature gastropub fare and our selection of draft beers.\";\n\n    top.appendChild(heroLogo);\n    heroLogo.appendChild(heading);\n    heroLogo.appendChild(subHeading);\n\n    return top;\n}\n\nfunction createBottom(){\n    const bottom = document.createElement('div');\n    bottom.classList.add('hero-bottom');\n    const locationHeading = document.createElement('h2');\n    locationHeading.textContent = \"Location:\";\n    const location = document.createElement('a');\n    location.href = \"https://maps.app.goo.gl/y4Ns8J3LVqgQwarS9\";\n    location.textContent = \"1101 N Central St, Knoxville TN 37917\";\n    const hoursHeading = document.createElement('h2');\n    hoursHeading.textContent = \"Hours:\";\n    const hours = document.createElement('p');\n    hours.textContent = \"Sun-Thu: 1100-2200, Fri-Sat: 1000-2300\";\n\n    bottom.appendChild(locationHeading);\n    bottom.appendChild(location);\n    bottom.appendChild(hoursHeading);\n    bottom.appendChild(hours);\n    \n    return bottom;\n}\n\nfunction loadHome(sliderClass) {\n    const container = document.getElementById('hero-frame');\n    container.textContent = \"\";\n    const top = createTop();\n    const bottom = createBottom();\n    top.classList.add(sliderClass);\n    bottom.classList.add(sliderClass);\n\n    container.appendChild(top);\n    container.appendChild(bottom);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_json5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json5 */ \"./src/data.json5\");\n\n/**\n * TODO: need to add a function to handle building the menu using createMenuItem\n * and the data.json5 to build all menu items in a loop.\n * \n * dynamic image loading from json needs work.\n * @returns loadMenu\n */\nfunction createMenuContainer(){\n    const menuContainer = document.createElement('div');\n    menuContainer.classList.add('menu-container');\n\n    return menuContainer;\n}\nfunction createMenuItem(title, description, url){\n    const menuItem = document.createElement('div');\n    const menuHeader = document.createElement('span');\n    const menuTitle = document.createElement('h1');\n    const menuImage = document.createElement('img');\n    const menuDescription = document.createElement('p');\n\n    menuTitle.textContent = title;\n    menuDescription.textContent = description;\n\n    menuItem.classList.add('menu-item');\n    menuHeader.classList.add('menu-item-header');\n    menuTitle.classList.add('menu-title');\n    menuImage.setAttribute('src', \"./images/\" + url);\n    menuImage.classList.add('menu-image');\n    menuDescription.classList.add('menu-description');\n\n    menuItem.appendChild(menuImage);\n    menuItem.appendChild(menuHeader);\n    menuHeader.appendChild(menuTitle);\n    menuHeader.appendChild(menuDescription);\n\n\n    return menuItem;\n}\nfunction createMenuHeader(headingTitle){\n    const headingContainer = document.createElement('div');\n    headingContainer.classList.add('menu-item');\n    headingContainer.classList.add('col-2');\n    headingContainer.classList.add('transparent');\n    headingContainer.classList.add('large-font');\n    const heading = document.createElement('h1');\n    heading.textContent = headingTitle;\n    heading.classList.add('menu-title');\n    headingContainer.appendChild(heading);\n\n    return headingContainer;\n}\nfunction loadMenu(sliderClass){\n    const container = document.getElementById('hero-frame');\n    container.textContent = \"\";\n    const menuContainer = createMenuContainer();\n    menuContainer.classList.add(sliderClass);\n\n    const entreeHeading = createMenuHeader(\"Entrees\");\n    const sidesHeading = createMenuHeader(\"Sides\");\n    const drinksHeading = createMenuHeader(\"Drinks\");\n\n    menuContainer.appendChild(entreeHeading);\n    _data_json5__WEBPACK_IMPORTED_MODULE_0__.menu.forEach((entree) => {\n        menuContainer.appendChild(createMenuItem(entree.name, entree.description, entree.img_url));\n    });\n    menuContainer.appendChild(sidesHeading);\n    _data_json5__WEBPACK_IMPORTED_MODULE_0__.sides.forEach((side) => {\n        menuContainer.appendChild(createMenuItem(side.name, side.description, side.img_url));\n    });\n    menuContainer.appendChild(drinksHeading);\n    _data_json5__WEBPACK_IMPORTED_MODULE_0__.drinks.forEach((drink) => {\n        menuContainer.appendChild(createMenuItem(drink.name, drink.description, drink.img_url));\n    });\n\n    container.appendChild(menuContainer);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nfunction createNav() {\n    const navbar = document.createElement('div');\n    navbar.classList.add('navbar');\n\n    const logoContainer = document.createElement('div');\n    logoContainer.classList.add('logo');\n    const logo = document.createElement('h1');\n    logo.textContent = \"Meat O'Malley's\";\n\n    const navigation = document.createElement('div');\n    navigation.classList.add('navigation');\n    const homeBtn = document.createElement('button');\n    homeBtn.classList.add('navigation-button');\n    homeBtn.setAttribute('id', 'homeBtn');\n    homeBtn.textContent = \"Home\";\n    homeBtn.addEventListener(('click'), (e) => {\n        if (e.target.classList.contains(\"navigation-active\")) return;\n        const sliderClass = getSliderDirection(homeBtn);\n        setActiveButton(homeBtn);\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sliderClass);\n    });\n\n    const menuBtn = document.createElement('button');\n    menuBtn.classList.add('navigation-button');\n    menuBtn.setAttribute('id', 'menuBtn');\n    menuBtn.textContent = \"Menu\";\n    menuBtn.addEventListener(('click'), (e) => {\n        if (e.target.classList.contains(\"navigation-active\")) return;\n        const sliderClass = getSliderDirection(menuBtn);\n        setActiveButton(menuBtn);\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(sliderClass);\n    });\n\n    const contactBtn = document.createElement('button');\n    contactBtn.classList.add('navigation-button');\n    contactBtn.setAttribute('id', 'contactBtn');\n    contactBtn.textContent = \"Contact\";\n    contactBtn.addEventListener(('click'), (e) => {\n        if (e.target.classList.contains(\"navigation-active\")) return;\n        const sliderClass = getSliderDirection(contactBtn);\n        setActiveButton(contactBtn);\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(sliderClass);\n    });\n\n    navigation.appendChild(homeBtn);\n    navigation.appendChild(menuBtn);\n    navigation.appendChild(contactBtn);\n\n    logoContainer.appendChild(logo);\n\n    navbar.appendChild(logoContainer);\n    navbar.appendChild(navigation);\n\n    return navbar;\n}\nfunction getSliderDirection(button){\n    if (button === document.getElementById('homeBtn')){\n        return \"slideInRight\";\n    }\n    else if (button === document.getElementById('contactBtn')){\n        return \"slideInLeft\";\n    }\n    else {\n        const activeBtn = document.querySelector('.navigation-active');\n        if (activeBtn === document.getElementById('homeBtn')){\n            return \"slideInLeft\";\n        }\n        else {\n            return \"slideInRight\";\n        }\n    }\n}\nfunction setActiveButton(button) {\n    const buttons = document.querySelectorAll('.navigation-button');\n    buttons.forEach((button) => {\n        if (button !== this) {\n            button.classList.remove('navigation-active');\n        }\n    });\n    button.classList.add('navigation-active');\n}\n\nfunction createHeroFrame(){\n    const heroFrame = document.createElement('div');\n    heroFrame.classList.add('hero-frame');\n    heroFrame.setAttribute('id', 'hero-frame');\n\n    return heroFrame;\n}\n\nfunction createFooter(){\n\n    const date = new Date().getFullYear();\n    const footer = document.createElement('div');\n    const footInner = document.createElement('footer');\n    footer.textContent = `Copyright \\u00A9 ${date} Vincent Testagrossa`;\n    footer.classList.add('footer');\n    footer.appendChild(footInner);\n\n    return footer;\n}\n\nfunction renderPage() {\n    const content = document.createElement('div');\n    content.classList.add('content');\n    document.body.appendChild(content);\n\n    const nav = createNav();\n    const heroFrame = createHeroFrame();\n    const footer = createFooter();\n\n    content.appendChild(nav);\n    content.appendChild(heroFrame);\n    document.body.appendChild(footer);\n\n    setActiveButton(document.querySelector(\".navigation-button\"));\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage);\n\n//# sourceURL=webpack://restaurant/./src/website.js?");

/***/ }),

/***/ "./src/PermanentMarker-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/PermanentMarker-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"109a10dca0508e41aa12.ttf\";\n\n//# sourceURL=webpack://restaurant/./src/PermanentMarker-Regular.ttf?");

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fb4420b40ffbceb7184d.jpg\";\n\n//# sourceURL=webpack://restaurant/./src/images/background.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"website": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/website.js");
/******/ 	
/******/ })()
;