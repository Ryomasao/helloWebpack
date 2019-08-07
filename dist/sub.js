(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sub"],{

/***/ "./src/modules/counter.js":
/*!********************************!*\
  !*** ./src/modules/counter.js ***!
  \********************************/
/*! exports provided: default, addCount, getCount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCount\", function() { return addCount; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCount\", function() { return getCount; });\n\nlet count = 0\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  count\n});\n\nconst addCount = () => count++\nconst getCount = () => count\n\n\n\n//# sourceURL=webpack:///./src/modules/counter.js?");

/***/ }),

/***/ "./src/other.js":
/*!**********************!*\
  !*** ./src/other.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_counter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/counter */ \"./src/modules/counter.js\");\nconsole.log('other')\n\n\n\nconsole.log('other', Object(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"getCount\"])())\nObject(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"addCount\"])()\nObject(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"addCount\"])()\nObject(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"addCount\"])()\nconsole.log('other', Object(_modules_counter__WEBPACK_IMPORTED_MODULE_0__[\"getCount\"])())\n\n//# sourceURL=webpack:///./src/other.js?");

/***/ }),

/***/ 1:
/*!****************************!*\
  !*** multi ./src/other.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/other.js */\"./src/other.js\");\n\n\n//# sourceURL=webpack:///multi_./src/other.js?");

/***/ })

},[[1,"runtime"]]]);