(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/child.js":
/*!**********************!*\
  !*** ./src/child.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/counter */ \"./src/modules/counter.js\");\nconsole.log('child')\n\n\n\nconsole.log('child', Object(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"getCount\"])())\nObject(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"addCount\"])()\nObject(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"addCount\"])()\nObject(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"addCount\"])()\nconsole.log('child', Object(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"getCount\"])())\n\n//# sourceURL=webpack:///./src/child.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/counter */ \"./src/modules/counter.js\");\n/* harmony import */ var _child__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./child */ \"./src/child.js\");\nconsole.log('index')\n\n\n\n\nconsole.log('index', Object(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"getCount\"])())\nObject(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"addCount\"])()\nObject(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"addCount\"])()\nObject(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"addCount\"])()\nconsole.log('index', Object(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"getCount\"])())\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/*! exports provided: default, addCount, getCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCount\", function() { return addCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCount\", function() { return getCount; });\n\nlet count = 0\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  count\n});\n\nconst addCount = () => count++\nconst getCount = () => count\n\n\n\n//# sourceURL=webpack:///./src/modules/counter.js?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

},[[0,"runtime"]]]);