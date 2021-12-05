exports.id = 298;
exports.ids = [298];
exports.modules = {

/***/ 9298:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fK": function() { return /* binding */ schema; },
/* harmony export */   "wq": function() { return /* binding */ schemaSign; },
/* harmony export */   "cy": function() { return /* binding */ schemaWrite; }
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9440);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const schema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_0__.string().email("이메일 형식이 올바르지 않습니다.").required("이메일을 입력해주세요."),
  password: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(8, "비밀번호는 8자 이상으로 입력해주세요.").max(16, "비밀번호는 16자 이하로 입력해주세요.").required("비밀번호를 입력해주세요.")
});
const schemaSign = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_0__.string().email("이메일 형식이 올바르지 않습니다.").required("이메일을 입력해주세요."),
  password: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(8, "비밀번호는 8자 이상으로 입력해주세요.").max(16, "비밀번호는 16자 이하로 입력해주세요.").required("비밀번호를 입력해주세요."),
  confirmPassword: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(8, "비밀번호는 8자 이상으로 입력해주세요.").max(16, "비밀번호는 16자 이하로 입력해주세요.").required("비밀번호를 입력해주세요."),
  name: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(2, "닉네임은 2자 이상으로 입력해주세요.").max(15, "닉네임은 15자 이하로 입력해주세요.").required("닉네임을 입력해주세요.")
});
const schemaWrite = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
  name: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("상품명을 입력해주세요."),
  remarks: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("상품 요약을 입력해주세요."),
  contents: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("내용을 입력해주세요."),
  price: yup__WEBPACK_IMPORTED_MODULE_0__.string().min(0).required("판매 가격을 입력해주세요."),
  tags: yup__WEBPACK_IMPORTED_MODULE_0__.string().required("태그를 입력해주세요.")
});

/***/ })

};
;