exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 2750:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ getDate; },
/* harmony export */   "H": function() { return /* binding */ getComma; }
/* harmony export */ });
function getDate(date) {
  const yyyy = new Date(date).getFullYear();
  const mm = String(new Date(date).getMonth() + 1).padStart(2, "0");
  const dd = new Date(date).getDate();
  return `${yyyy}-${mm}-${dd}`;
}
function getComma(x) {
  return x === null || x === void 0 ? void 0 : x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/***/ }),

/***/ 4490:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6177);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);


const Button01 = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().button)`
  width: 170px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  background-color: #512771;
  color: white;
  border: none;
  border-radius: 5px;
  margin-right: 30px;
  margin-top: 40px;
  margin-bottom: 40px;
  /* margin-right: 24px; */
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
  @media (max-width: 767px) {
    width: 130px;
    margin: 30px 0 0 0;
  }
`;

const ButtonWrite = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button01, {
    type: props.buttonType,
    onClick: props.onClick,
    children: props.buttonName
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (ButtonWrite);

/***/ })

};
;