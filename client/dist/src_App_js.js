(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_App_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _components_style_GlobalStyleProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/style/GlobalStyleProvider */ "./src/components/style/GlobalStyleProvider.jsx");



var App = function App() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_style_GlobalStyleProvider__WEBPACK_IMPORTED_MODULE_1__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/style/GlobalStyleProvider.jsx":
/*!******************************************************!*\
  !*** ./src/components/style/GlobalStyleProvider.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_reset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-reset */ "./node_modules/styled-reset/lib/esm/index.js");
/* harmony import */ var _components_style_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/style/theme */ "./src/components/style/theme.js");


var _templateObject;






var GlobalStyle = (0,styled_components__WEBPACK_IMPORTED_MODULE_4__.createGlobalStyle)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n  ", "\n  html * {\n    box-sizing: border-box;\n    font-size: ", ";\n    font-family: \"Roboto\", \"Apple SD Gothic Neo\", \"Helvetica\", \"Arial\", sans-serif;\n  }\n  button {\n    background: none;\n    border: 0;\n    outline : 0;\n  }\n"])), styled_reset__WEBPACK_IMPORTED_MODULE_2__.default, _components_style_theme__WEBPACK_IMPORTED_MODULE_3__.default.fontSize.base);

var GlobalStyleProvider = function GlobalStyleProvider(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
    theme: _components_style_theme__WEBPACK_IMPORTED_MODULE_3__.default
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(GlobalStyle, null), children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GlobalStyleProvider);

/***/ }),

/***/ "./src/components/style/theme.js":
/*!***************************************!*\
  !*** ./src/components/style/theme.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var fontSize = {
  micro: "8px",
  small: "12px",
  base: "14px",
  ragular: "16px",
  large: "20px",
  xLarge: "24px",
  title: "32px"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  fontSize: fontSize
});

/***/ })

}]);
//# sourceMappingURL=src_App_js.js.map