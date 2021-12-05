exports.id = 790;
exports.ids = [790];
exports.modules = {

/***/ 5779:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6177);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);


const Title02 = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().div)`
  font-weight: 500;
  font-size: 16px;
  color: #757575;
  margin-bottom: 20px;
`;

const TitleMarketWrite = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title02, {
    defaultValue: props.defaultValue,
    children: props.divName
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (TitleMarketWrite);

/***/ }),

/***/ 6770:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o7": function() { return /* binding */ FETCH_USED_ITEM; },
/* harmony export */   "DV": function() { return /* binding */ TOGGLE_USED_ITEM_PICK; },
/* harmony export */   "bY": function() { return /* binding */ CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING; },
/* harmony export */   "Sp": function() { return /* binding */ DELETE_USED_ITEM; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8074);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FETCH_USED_ITEM = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      name
      seller {
        _id
        name
        email
      }
      remarks
      contents
      price
      tags
      images
      pickedCount
      useditemAddress {
        _id
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;
const TOGGLE_USED_ITEM_PICK = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation toggleUseditemPick($useditemId: ID!) {
    toggleUseditemPick(useditemId: $useditemId)
  }
`;
const CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation createPointTransactionOfBuyingAndSelling($useritemId: ID!) {
    createPointTransactionOfBuyingAndSelling(useritemId: $useritemId) {
      _id
    }
  }
`;
const DELETE_USED_ITEM = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation deleteUseditem($useditemId: ID!) {
    deleteUseditem(useditemId: $useditemId)
  }
`;

/***/ })

};
;