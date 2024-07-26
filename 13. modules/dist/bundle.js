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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./script.js\");\n/* harmony import */ var _multi_defaults_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multi_defaults.js */ \"./multi_defaults.js\");\n/* harmony import */ var _single_default_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single_default.js */ \"./single_default.js\");\n/** creating and exporting modules in ES6 */\n\n\n\n\n\nconsole.log((0,_script_js__WEBPACK_IMPORTED_MODULE_0__.add)(2, 3));\n\n//TASK 2:  Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.\n\nconsole.log('Person', _script_js__WEBPACK_IMPORTED_MODULE_0__.Person);\nconsole.log('person name', _script_js__WEBPACK_IMPORTED_MODULE_0__.Person.name);\nconsole.log('person age', _script_js__WEBPACK_IMPORTED_MODULE_0__.Person.age);\n\n//** Activity 2: Named and Default Exports */\n\n//TODO3 :  Create a module that exports multiple functions using named exports. Import and use these functions in another script.\n\nconsole.log('multiple export and import', {\n  add: (0,_multi_defaults_js__WEBPACK_IMPORTED_MODULE_1__.add)(2, 4),\n  sub: (0,_multi_defaults_js__WEBPACK_IMPORTED_MODULE_1__.sub)(4, 2),\n  mul: (0,_multi_defaults_js__WEBPACK_IMPORTED_MODULE_1__.multi)(2, 3)\n});\n\n//TODO4 : Create a module that exports a single function using default export. Import and use this function in another script.\n\nconsole.log('Single Defaults::- ', (0,_single_default_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('Software Developer'));\n\n//TODO5 : Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.\n\nconsole.log('all exports', {\n  add: _multi_defaults_js__WEBPACK_IMPORTED_MODULE_1__.add(2, 3),\n  sub: _multi_defaults_js__WEBPACK_IMPORTED_MODULE_1__.sub(2, 3),\n  mul: _multi_defaults_js__WEBPACK_IMPORTED_MODULE_1__.multi(2, 3)\n});\n\n//# sourceURL=webpack://modules/./index.js?");

/***/ }),

/***/ "./multi_defaults.js":
/*!***************************!*\
  !*** ./multi_defaults.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   add: () => (/* binding */ add),\n/* harmony export */   baseUrl: () => (/* binding */ baseUrl),\n/* harmony export */   multi: () => (/* binding */ multi),\n/* harmony export */   sub: () => (/* binding */ sub)\n/* harmony export */ });\nvar add = function add(a, b) {\n  return a + b;\n};\nvar sub = function sub(a, b) {\n  return a - b;\n};\nvar multi = function multi(a, b) {\n  return a * b;\n};\nvar baseUrl = 'http://localhost:3000';\n\n//# sourceURL=webpack://modules/./multi_defaults.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Person: () => (/* binding */ Person),\n/* harmony export */   add: () => (/* binding */ add)\n/* harmony export */ });\nfunction add(a, b) {\n  return a + b;\n}\nvar Person = {\n  name: 'Bob',\n  age: 24,\n  \"class\": '10th',\n  subject: 'Maths'\n};\n\n//# sourceURL=webpack://modules/./script.js?");

/***/ }),

/***/ "./single_default.js":
/*!***************************!*\
  !*** ./single_default.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ profession)\n/* harmony export */ });\nfunction profession(name) {\n  return \"i'm a \".concat(name);\n}\n\n//# sourceURL=webpack://modules/./single_default.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;