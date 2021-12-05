exports.id = 679;
exports.ids = [679];
exports.modules = {

/***/ 6035:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6177);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);


const Button02 = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().button)`
  width: 91px;
  height: 52px;
  background: #512771;
  color: white;
  cursor: pointer;
  border: none;
  @media (max-width: 767px) {
    width: 60px;
    height: 35px;
    font-size: 12px;
  }
`;

const SubmitButton02 = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button02, {
    type: props.buttonType,
    onClick: props.onClick,
    children: props.buttonName
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (SubmitButton02);

/***/ }),

/***/ 8455:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6177);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const TextArea01 = (_emotion_styled__WEBPACK_IMPORTED_MODULE_1___default().textarea)`
  width: 1000px;
  height: 161px;
  resize: none;
  font-size: 14px;
  line-height: 24px;
  padding: 20px;
  border: 1px solid #bdbdbd;
  color: #757575;
  outline-color: #512771;
  ::placeholder {
    color: #bdbdbd;
  }
  @media (max-width: 767px) {
    width: 100%;
    height: 100px;
  }
`;

const TextAreaComment = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TextArea01, _objectSpread(_objectSpread({}, props.register), {}, {
    placeholder: props.textareaName,
    defaultValue: props.defaultValue
  }));
};

/* harmony default export */ __webpack_exports__["Z"] = (TextAreaComment);

/***/ }),

/***/ 5654:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ marketCommentList_container; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/units/marketComment/list/marketCommentList.styles.ts

const MainWrapper = (styled_default()).div`
  width: 1000px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const ProfileWrapper = (styled_default()).div`
  display: flex;
  justify-content: flex-start;
`;
const Profile = (styled_default()).img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
const InfoWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  width: 100px;
  /* height: 120px; */
`;
const Name = (styled_default()).div`
  width: 100px;
  height: 24px;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;
const Contents = (styled_default()).div`
  font-size: 16px;
  margin-bottom: 10px;
  width: 800px;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  color: #757575;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const CreatedAt = (styled_default()).div`
  margin-bottom: 10px;
`;
const SubWrapper = (styled_default()).div`
  width: 950px;
  display: flex;
  justify-content: space-between;
  /* height: 80px; */
  @media (max-width: 767px) {
    width: 280px;
  }
`;
const NameWrapper = (styled_default()).div``;
const Icon = (styled_default()).img`
  margin-left: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const IconWrapper = (styled_default()).div``;
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswer/commentAnswer.styles.ts

const commentAnswer_styles_MainWrapper = (styled_default()).div`
  border-top: 1px solid #bdbdbd;
`;
const TitleWrapper = (styled_default()).div`
  height: 30px;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const Image = (styled_default()).img`
  margin-right: 10px;
  margin-bottom: 20px;
`;
const Text = (styled_default()).div`
  color: #bdbdbd;
  margin-left: 20px;
`;
const ButtonWrapper = (styled_default()).div`
  width: 966px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 34px;
  margin-bottom: 20px;
  border-left: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;

  @media (max-width: 767px) {
    width: 90%;
  }
`;
const commentAnswer_styles_ProfileWrapper = (styled_default()).div``;
const commentAnswer_styles_Profile = (styled_default()).div``;
const TextWrapper = (styled_default()).div`
  display: flex;
  margin-top: 20px;
`;
// EXTERNAL MODULE: ./src/components/commons/buttons/button02_Submit.tsx
var button02_Submit = __webpack_require__(6035);
// EXTERNAL MODULE: ./src/components/commons/textAreas/textAreaComment01.tsx
var textAreaComment01 = __webpack_require__(8455);
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswer/commentAnswer.presenter.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CommentAnswerUI = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(commentAnswer_styles_MainWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: props.handleSubmit(props.onClickSubmit),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TextWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(TitleWrapper, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Image, {
            src: "/FreeBoard/subdirectoryArrow.svg"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(textAreaComment01/* default */.Z, {
          register: _objectSpread({}, props.register("contents")),
          textareaName: "답글을 등록해주세요."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text, {
          children: "0/200"
        }), /*#__PURE__*/jsx_runtime_.jsx(button02_Submit/* default */.Z, {
          buttonName: "등록하기"
        })]
      })]
    })
  });
};

/* harmony default export */ var commentAnswer_presenter = (CommentAnswerUI);
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswer/commentAnswer.queries.ts

const CREATE_USED_ITEM_QUESTION_ANSWER = client_.gql`
  mutation createUseditemQuestionAnswer(
    $createUseditemQuestionAnswerInput: CreateUseditemQuestionAnswerInput!
    $useditemQuestionId: ID!
  ) {
    createUseditemQuestionAnswer(
      createUseditemQuestionAnswerInput: $createUseditemQuestionAnswerInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
    }
  }
`;
const UPDATE_USEDITEM_QUESTION_ANSWER = client_.gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
    }
  }
`;
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswerList/commentAnswerList.queries.ts

const FETCH_USED_ITEM_QUESTION_ANSWERS = client_.gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        _id
        name
        email
      }
    }
  }
`;
const DELETE_USED_ITEM_QUESTION_ANSWER = client_.gql`
  mutation deleteUseditemQuestionAnswer($useditemQuestionAnswerId: ID!) {
    deleteUseditemQuestionAnswer(
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    )
  }
`;
const FETCH_USER_LOGGED_IN = client_.gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
    }
  }
`;
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswer/commentAnswer.container.tsx


function commentAnswer_container_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function commentAnswer_container_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { commentAnswer_container_ownKeys(Object(source), true).forEach(function (key) { commentAnswer_container_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { commentAnswer_container_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function commentAnswer_container_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const CommentAnswer = props => {
  const [createUseditemQuestionAnswer] = (0,client_.useMutation)(CREATE_USED_ITEM_QUESTION_ANSWER);
  const {
    register,
    handleSubmit
  } = (0,external_react_hook_form_.useForm)();

  const onClickSubmit = async el => {
    try {
      await createUseditemQuestionAnswer({
        // 대댓글 등록
        variables: {
          createUseditemQuestionAnswerInput: commentAnswer_container_objectSpread({}, el),
          useditemQuestionId: props.data._id
        },
        refetchQueries: [{
          query: FETCH_USED_ITEM_QUESTION_ANSWERS,
          variables: {
            useditemQuestionId: props.data._id
          }
        }]
      });
      props.setIsComment(prev => !prev);
      external_antd_.Modal.success({
        content: "댓글이 등록되었습니다."
      });
    } catch (err) {
      external_antd_.Modal.error({
        content: err.message
      });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(commentAnswer_presenter, {
    isEdit: props.isEdit,
    isComment: props.isComment,
    register: register,
    handleSubmit: handleSubmit,
    onClickSubmit: onClickSubmit,
    onClickUpdateComment: props.onClickUpdateComment
  });
};

/* harmony default export */ var commentAnswer_container = (CommentAnswer);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswer/commentAnswerEdit/commentAnswerEdit.styles.ts

const commentAnswerEdit_styles_MainWrapper = (styled_default()).div`
  border-top: 1px solid #bdbdbd;
`;
const commentAnswerEdit_styles_TitleWrapper = (styled_default()).div`
  height: 30px;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const commentAnswerEdit_styles_Image = (styled_default()).img`
  margin-right: 10px;
  margin-bottom: 20px;
`;
const commentAnswerEdit_styles_Text = (styled_default()).div`
  color: #bdbdbd;
  margin-left: 20px;
`;
const commentAnswerEdit_styles_ButtonWrapper = (styled_default()).div`
  width: 966px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 34px;
  margin-bottom: 20px;
  border-left: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const commentAnswerEdit_styles_ProfileWrapper = (styled_default()).div``;
const commentAnswerEdit_styles_Profile = (styled_default()).div``;
const commentAnswerEdit_styles_TextWrapper = (styled_default()).div`
  display: flex;
  margin-top: 20px;
`;
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswer/commentAnswerEdit/commentAnswerEdit.presenter.tsx



function commentAnswerEdit_presenter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function commentAnswerEdit_presenter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { commentAnswerEdit_presenter_ownKeys(Object(source), true).forEach(function (key) { commentAnswerEdit_presenter_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { commentAnswerEdit_presenter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function commentAnswerEdit_presenter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const CommentAnswerEditUI = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(commentAnswerEdit_styles_MainWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: props.handleSubmit(props.onClickUpdateCommentAnswer),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(commentAnswerEdit_styles_TextWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(commentAnswerEdit_styles_TitleWrapper, {
          children: /*#__PURE__*/jsx_runtime_.jsx(commentAnswerEdit_styles_Image, {
            src: "/FreeBoard/subdirectoryArrow.svg"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(textAreaComment01/* default */.Z, {
          register: commentAnswerEdit_presenter_objectSpread({}, props.register("contents")),
          textareaName: props.data.contents
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(commentAnswerEdit_styles_ButtonWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(commentAnswerEdit_styles_Text, {
          children: "0/200"
        }), /*#__PURE__*/jsx_runtime_.jsx(button02_Submit/* default */.Z, {
          buttonName: "수정하기"
        })]
      })]
    })
  });
};

/* harmony default export */ var commentAnswerEdit_presenter = (CommentAnswerEditUI);
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswer/commentAnswerEdit/commentAnswerEdit.queries.ts

const commentAnswerEdit_queries_UPDATE_USEDITEM_QUESTION_ANSWER = client_.gql`
  mutation updateUseditemQuestionAnswer(
    $updateUseditemQuestionAnswerInput: UpdateUseditemQuestionAnswerInput!
    $useditemQuestionAnswerId: ID!
  ) {
    updateUseditemQuestionAnswer(
      updateUseditemQuestionAnswerInput: $updateUseditemQuestionAnswerInput
      useditemQuestionAnswerId: $useditemQuestionAnswerId
    ) {
      _id
    }
  }
`;
const commentAnswerEdit_queries_FETCH_USED_ITEM_QUESTION_ANSWERS = client_.gql`
  query fetchUseditemQuestionAnswers($page: Int, $useditemQuestionId: ID!) {
    fetchUseditemQuestionAnswers(
      page: $page
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        _id
        name
        email
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswer/commentAnswerEdit/commentAnswerEdit.container.tsx







const CommentAnswerEdit = props => {
  const [updateUseditemQuestionAnswer] = (0,client_.useMutation)(commentAnswerEdit_queries_UPDATE_USEDITEM_QUESTION_ANSWER);
  const {
    register,
    handleSubmit
  } = (0,external_react_hook_form_.useForm)();

  const onClickUpdateCommentAnswer = async data => {
    // 대댓글 수정
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: {
            contents: data.contents
          },
          useditemQuestionAnswerId: props.data._id
        },
        refetchQueries: [{
          query: commentAnswerEdit_queries_FETCH_USED_ITEM_QUESTION_ANSWERS,
          variables: {
            useditemQuestionId: props.dataId._id
          }
        }]
      });
      props.setIsEdit(prev => !prev);
      external_antd_.Modal.success({
        content: "댓글이 수정되었습니다."
      });
    } catch (err) {
      external_antd_.Modal.error({
        content: err.message
      });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(commentAnswerEdit_presenter, {
    data: props.data,
    register: register,
    handleSubmit: handleSubmit,
    onClickUpdateCommentAnswer: onClickUpdateCommentAnswer
  });
};

/* harmony default export */ var commentAnswerEdit_container = (CommentAnswerEdit);
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswerList/commentAnswerList.styles.ts

const commentAnswerList_styles_MainWrapper = (styled_default()).div`
  width: 100%;
  /* border-bottom: 1px solid #bdbdbd; */
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
`;
const commentAnswerList_styles_ProfileWrapper = (styled_default()).div`
  display: flex;
  justify-content: flex-start;
`;
const commentAnswerList_styles_Profile = (styled_default()).img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
const commentAnswerList_styles_InfoWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  width: 500px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const commentAnswerList_styles_Name = (styled_default()).div`
  width: 500px;
  height: 24px;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const commentAnswerList_styles_Contents = (styled_default()).div`
  font-size: 16px;
  margin-bottom: 10px;
  width: 500px;
  overflow: hidden;
  word-break: normal;
  white-space: nowrap;
  color: #757575;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const commentAnswerList_styles_CreatedAt = (styled_default()).div`
  margin-bottom: 10px;
`;
const commentAnswerList_styles_SubWrapper = (styled_default()).div`
  width: 1050px;
  display: flex;
  justify-content: space-between;
  /* height: 80px; */
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const commentAnswerList_styles_NameWrapper = (styled_default()).div``;
const commentAnswerList_styles_Icon = (styled_default()).img`
  margin-left: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
const commentAnswerList_styles_IconWrapper = (styled_default()).div`
  display: flex;
`;
const Arrow = (styled_default()).img``;
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswerList/commentAnswerList.presenterItem.tsx







const CommentAnswerListUIItem = props => {
  var _props$userData, _props$data;

  const {
    0: isEdit,
    1: setIsEdit
  } = (0,external_react_.useState)(false);

  const onClickIsEdit = () => {
    setIsEdit(prev => !prev);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(commentAnswerList_styles_MainWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(commentAnswerList_styles_ProfileWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Arrow, {
          src: "/FreeBoard/subdirectoryArrow.svg"
        }), /*#__PURE__*/jsx_runtime_.jsx(commentAnswerList_styles_Profile, {
          src: "/FreeBoard/Profile.png"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(commentAnswerList_styles_SubWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(commentAnswerList_styles_NameWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(commentAnswerList_styles_Name, {
            children: props.data.user.name
          }), /*#__PURE__*/jsx_runtime_.jsx(commentAnswerList_styles_Contents, {
            children: props.data.contents
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(commentAnswerList_styles_IconWrapper, {
          children: ((_props$userData = props.userData) === null || _props$userData === void 0 ? void 0 : _props$userData.fetchUserLoggedIn._id) === ((_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.user._id) ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(commentAnswerList_styles_Icon, {
              src: "/FreeBoard/mode.svg",
              id: props.data._id,
              onClick: onClickIsEdit
            }), /*#__PURE__*/jsx_runtime_.jsx(commentAnswerList_styles_Icon, {
              src: "/FreeBoard/clear.svg",
              id: props.data._id,
              onClick: props.onClickDeleteAnswer
            })]
          }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})
        })]
      })]
    }), isEdit ? /*#__PURE__*/jsx_runtime_.jsx(commentAnswerEdit_container, {
      data: props.data,
      dataId: props.dataId,
      setIsEdit: setIsEdit
    }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})]
  });
};

/* harmony default export */ var commentAnswerList_presenterItem = (CommentAnswerListUIItem);
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswerList/commentAnswerList.presenter.tsx




const CommentAnswerListUI = props => {
  var _props$data;

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.fetchUseditemQuestionAnswers.map(data => /*#__PURE__*/jsx_runtime_.jsx(commentAnswerList_presenterItem, {
      dataId: props.dataId,
      data: data,
      onClickDeleteAnswer: props.onClickDeleteAnswer,
      onClickUpdateCommentAnswer: props.onClickUpdateCommentAnswer,
      userData: props.userData,
      onClickOpenUpdateAnswer: props.onClickOpenUpdateAnswer,
      isComment: props.isComment,
      setIsComment: props.setIsComment
    }, data._id))
  });
};

/* harmony default export */ var commentAnswerList_presenter = (CommentAnswerListUI);
;// CONCATENATED MODULE: ./src/components/units/marketComment/commentAnswerList/commentAnswerList.container.tsx


 // import CommentAnswerListUIItem from "./commentAnswerList.presenter";




const CommentAnswerList = props => {
  const [deleteUseditemQuestionAnswer] = (0,client_.useMutation)(DELETE_USED_ITEM_QUESTION_ANSWER);
  const {
    data,
    refetch
  } = (0,client_.useQuery)(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: {
      useditemQuestionId: props.data._id
    }
  });
  const {
    data: userData
  } = (0,client_.useQuery)(FETCH_USER_LOGGED_IN);

  const onClickDeleteAnswer = async event => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.target.id
        }
      });
      refetch();
      external_antd_.Modal.success({
        content: "댓글이 삭제되었습니다."
      });
    } catch (err) {
      external_antd_.Modal.error({
        content: err.message
      });
    }
  };

  const onClickOpenUpdateAnswer = () => {
    props.setIsComment(prev => !prev);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(commentAnswerList_presenter, {
    data: data,
    dataId: props.data,
    userData: userData,
    isComment: props.isComment,
    setIsComment: props.setIsComment,
    onClickDeleteAnswer: onClickDeleteAnswer,
    onClickOpenUpdateAnswer: onClickOpenUpdateAnswer
  });
};

/* harmony default export */ var commentAnswerList_container = (CommentAnswerList);
// EXTERNAL MODULE: ./src/commons/libraries/utils.js
var utils = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/components/units/marketComment/write/marketCommentWriteEdit/marketCommentWriteEdit.styles.ts

const marketCommentWriteEdit_styles_MainWrapper = (styled_default()).div`
  /* border-top: 1px solid #bdbdbd; */
  margin: 0px 0px 40px 0;
`;
const marketCommentWriteEdit_styles_TitleWrapper = (styled_default()).div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const marketCommentWriteEdit_styles_Image = (styled_default()).img`
  margin-right: 10px;
  margin-bottom: 20px;
`;
const marketCommentWriteEdit_styles_Text = (styled_default()).div`
  color: #bdbdbd;
  padding-left: 20px;
`;
const marketCommentWriteEdit_styles_ButtonWrapper = (styled_default()).div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const marketCommentWriteEdit_styles_TextWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
`;
const ClearBtn = (styled_default()).img``;
const ClearWrapper = (styled_default()).div``;
const marketCommentWriteEdit_styles_SubWrapper = (styled_default()).div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`; // export const Text = styled.div``
// export const Text = styled.div``
// export const Text = styled.div``
// EXTERNAL MODULE: ./src/components/commons/titles/title02.marketWrite.tsx
var title02_marketWrite = __webpack_require__(5779);
;// CONCATENATED MODULE: ./src/components/units/marketComment/write/marketCommentWriteEdit/marketCommentWriteEdit.presenter.tsx



function marketCommentWriteEdit_presenter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function marketCommentWriteEdit_presenter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { marketCommentWriteEdit_presenter_ownKeys(Object(source), true).forEach(function (key) { marketCommentWriteEdit_presenter_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { marketCommentWriteEdit_presenter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function marketCommentWriteEdit_presenter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MarketCommentWriteEditUI = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(marketCommentWriteEdit_styles_MainWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: props.handleSubmit(props.onClickUpdateComment),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(marketCommentWriteEdit_styles_TextWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(marketCommentWriteEdit_styles_SubWrapper, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(marketCommentWriteEdit_styles_TitleWrapper, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(marketCommentWriteEdit_styles_Image, {
              src: "/FreeBoard/review.svg"
            }), /*#__PURE__*/jsx_runtime_.jsx(title02_marketWrite/* default */.Z, {
              divName: "문의하기"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(ClearWrapper, {
            children: /*#__PURE__*/jsx_runtime_.jsx(ClearBtn, {
              src: "/FreeBoard/clearBtn.svg",
              onClick: props.onClickClear
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(textAreaComment01/* default */.Z, {
          register: marketCommentWriteEdit_presenter_objectSpread({}, props.register("contents")),
          textareaName: props.data.contents
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(marketCommentWriteEdit_styles_ButtonWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(marketCommentWriteEdit_styles_Text, {
          children: "0/200"
        }), /*#__PURE__*/jsx_runtime_.jsx(button02_Submit/* default */.Z, {
          buttonName: "수정하기"
        })]
      })]
    })
  });
};

/* harmony default export */ var marketCommentWriteEdit_presenter = (MarketCommentWriteEditUI);
;// CONCATENATED MODULE: ./src/components/units/marketComment/write/marketCommentWriteEdit/marketCommentWriteEdit.queries.ts

const UPDATE_USEDITEM_QUESTION = client_.gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`;
;// CONCATENATED MODULE: ./src/components/units/marketComment/write/marketCommentWriteEdit/marketCommentWriteEdit.container.tsx







const MarketCommentWriteEdit = props => {
  const [updateUseditemQuestion] = (0,client_.useMutation)(UPDATE_USEDITEM_QUESTION);
  const {
    register,
    handleSubmit
  } = (0,external_react_hook_form_.useForm)();

  const onClickUpdateComment = async data => {
    // 댓글 수정
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: data.contents
          },
          useditemQuestionId: props.data._id
        }
      });
      props.setIsAnswer(false);
      external_antd_.Modal.success({
        content: "댓글이 수정되었습니다."
      });
    } catch (err) {
      external_antd_.Modal.error({
        content: err.message
      });
    }
  };

  const onClickClear = () => {
    props.setIsAnswer(prev => !prev);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(marketCommentWriteEdit_presenter, {
    isAnswer: props.isAnswer,
    data: props.data,
    register: register,
    handleSubmit: handleSubmit,
    onClickClear: onClickClear,
    onClickUpdateComment: onClickUpdateComment
  });
};

/* harmony default export */ var marketCommentWriteEdit_container = (MarketCommentWriteEdit);
;// CONCATENATED MODULE: ./src/components/units/marketComment/list/marketCommentList.presenterItem.tsx










const MarketCommentListUIItem = props => {
  var _props$userData, _props$data;

  const {
    0: isAnswer,
    1: setIsAnswer
  } = (0,external_react_.useState)(false);
  const {
    0: isComment,
    1: setIsComment
  } = (0,external_react_.useState)(false);

  const onClickAnswer = () => {
    setIsAnswer(prev => !prev);
  };

  const onClickComment = () => {
    setIsComment(prev => !prev);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(MainWrapper, {
      children: !isAnswer ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ProfileWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Profile, {
            src: "/FreeBoard/Profile.png"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoWrapper, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(SubWrapper, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(NameWrapper, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(Name, {
                  children: props.data.user.name
                }), /*#__PURE__*/jsx_runtime_.jsx(Contents, {
                  children: props.data.contents
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(IconWrapper, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
                  src: "/FreeBoard/question.svg",
                  onClick: onClickComment
                }), ((_props$userData = props.userData) === null || _props$userData === void 0 ? void 0 : _props$userData.fetchUserLoggedIn._id) !== ((_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.user._id) ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {}) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(Icon, {
                    src: "/FreeBoard/mode.svg",
                    onClick: onClickAnswer
                  }), /*#__PURE__*/jsx_runtime_.jsx(Icon, {
                    src: "/FreeBoard/clear.svg",
                    id: props.data._id,
                    onClick: props.onClickDelete
                  })]
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(CreatedAt, {
              children: (0,utils/* getDate */._)(props.data.updatedAt)
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(commentAnswerList_container, {
          data: props.data,
          setIsComment: setIsComment,
          isComment: isComment
        }), isComment ? /*#__PURE__*/jsx_runtime_.jsx(commentAnswer_container, {
          data: props.data,
          setIsComment: setIsComment
        }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})]
      }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx(marketCommentWriteEdit_container, {
          data: props.data,
          setIsAnswer: setIsAnswer
        })
      })
    })
  });
};

/* harmony default export */ var marketCommentList_presenterItem = (MarketCommentListUIItem);
;// CONCATENATED MODULE: ./src/components/units/marketComment/list/marketCommentList.presenter.tsx




const MarketCommentListUI = props => {
  var _props$data;

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.fetchUseditemQuestions.map(data => /*#__PURE__*/jsx_runtime_.jsx(marketCommentList_presenterItem, {
      data: data // @ts-ignore
      ,
      onClickDelete: props.onClickDelete // @ts-ignore
      ,
      userData: props.userData
    }, data._id))
  });
};

/* harmony default export */ var marketCommentList_presenter = (MarketCommentListUI);
// EXTERNAL MODULE: ./src/components/units/marketComment/list/marketCommentList.queries.ts
var marketCommentList_queries = __webpack_require__(4104);
;// CONCATENATED MODULE: ./src/components/units/marketComment/list/marketCommentList.container.tsx








const MarketCommentList = () => {
  const router = (0,router_.useRouter)();
  const [deleteUseditemQuestion] = (0,client_.useMutation)(marketCommentList_queries/* DELETE_USED_ITEM_QUESTION */.nd);
  const {
    data,
    refetch
  } = (0,client_.useQuery)(marketCommentList_queries/* FETCH_USEDITEM_QUESTIONS */.qV, {
    variables: {
      useditemId: router.query.useditemId
    }
  });
  const {
    data: userData
  } = (0,client_.useQuery)(marketCommentList_queries/* FETCH_USER_LOGGED_IN */.lA);

  const onClickDelete = async event => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: event.target.id
        }
      });
      refetch();
      external_antd_.Modal.success({
        content: "댓글이 삭제되었습니다."
      });
    } catch (err) {
      external_antd_.Modal.error({
        content: err.message
      });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(marketCommentList_presenter, {
      data: data
      /* @ts-ignore */
      ,
      onClickDelete: onClickDelete,
      userData: userData
    })
  });
};

/* harmony default export */ var marketCommentList_container = (MarketCommentList);

/***/ }),

/***/ 4104:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qV": function() { return /* binding */ FETCH_USEDITEM_QUESTIONS; },
/* harmony export */   "nd": function() { return /* binding */ DELETE_USED_ITEM_QUESTION; },
/* harmony export */   "lA": function() { return /* binding */ FETCH_USER_LOGGED_IN; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8074);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FETCH_USEDITEM_QUESTIONS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query fetchUseditemQuestions($page: Int, $useditemId: ID!) {
    fetchUseditemQuestions(page: $page, useditemId: $useditemId) {
      contents
      _id
      user {
        _id
        name
        email
      }
      createdAt
      updatedAt
    }
  }
`;
const DELETE_USED_ITEM_QUESTION = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation deleteUseditemQuestion($useditemQuestionId: ID!) {
    deleteUseditemQuestion(useditemQuestionId: $useditemQuestionId)
  }
`;
const FETCH_USER_LOGGED_IN = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
    }
  }
`;

/***/ }),

/***/ 8209:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ marketCommentWrite_container; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/units/marketComment/write/marketCommentWrite.styles.ts

const MainWrapper = (styled_default()).div`
  /* border-top: 1px solid #bdbdbd; */
  margin: 0px 0px 40px 0;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const TitleWrapper = (styled_default()).div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const Image = (styled_default()).img`
  margin-right: 10px;
  margin-bottom: 20px;
`;
const Text = (styled_default()).div`
  color: #bdbdbd;
  padding-left: 20px;
`;
const ButtonWrapper = (styled_default()).div`
  width: 1000px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-left: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const TextWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
`;
const ClearWrapper = (styled_default()).div``; // export const Text = styled.div``
// export const Text = styled.div``
// export const Text = styled.div``
// EXTERNAL MODULE: ./src/components/commons/buttons/button02_Submit.tsx
var button02_Submit = __webpack_require__(6035);
// EXTERNAL MODULE: ./src/components/commons/titles/title02.marketWrite.tsx
var title02_marketWrite = __webpack_require__(5779);
// EXTERNAL MODULE: ./src/components/commons/textAreas/textAreaComment01.tsx
var textAreaComment01 = __webpack_require__(8455);
;// CONCATENATED MODULE: ./src/components/units/marketComment/write/marketCommentWrite.persenter.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MarketCommentWriteUI = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(MainWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: props.handleSubmit(props.onClickSubmitComment),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TextWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(TitleWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Image, {
            src: "/FreeBoard/review.svg"
          }), /*#__PURE__*/jsx_runtime_.jsx(title02_marketWrite/* default */.Z, {
            divName: "문의하기"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(textAreaComment01/* default */.Z, {
          register: _objectSpread({}, props.register("contents")),
          textareaName: "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Text, {
          children: "0/200"
        }), /*#__PURE__*/jsx_runtime_.jsx(button02_Submit/* default */.Z, {
          buttonName: "등록하기"
        })]
      })]
    })
  });
};

/* harmony default export */ var marketCommentWrite_persenter = (MarketCommentWriteUI);
;// CONCATENATED MODULE: ./src/components/units/marketComment/write/marketCommentWrite.queries.ts

const CREATE_USEDITEM_QUESTION = client_.gql`
  mutation createUseditemQuestion(
    $createUseditemQuestionInput: CreateUseditemQuestionInput!
    $useditemId: ID!
  ) {
    createUseditemQuestion(
      createUseditemQuestionInput: $createUseditemQuestionInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;
const UPDATE_USEDITEM_QUESTION = client_.gql`
  mutation updateUseditemQuestion(
    $updateUseditemQuestionInput: UpdateUseditemQuestionInput!
    $useditemQuestionId: ID!
  ) {
    updateUseditemQuestion(
      updateUseditemQuestionInput: $updateUseditemQuestionInput
      useditemQuestionId: $useditemQuestionId
    ) {
      _id
      contents
      user {
        name
      }
      createdAt
    }
  }
`;
// EXTERNAL MODULE: ./src/components/units/marketComment/list/marketCommentList.queries.ts
var marketCommentList_queries = __webpack_require__(4104);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/components/units/marketComment/write/marketCommentWrite.container.tsx









const MarketCommentWrite = props => {
  const [createUseditemQuestion] = (0,client_.useMutation)(CREATE_USEDITEM_QUESTION);
  const {
    register,
    handleSubmit
  } = (0,external_react_hook_form_.useForm)();

  const onClickSubmitComment = async data => {
    try {
      await createUseditemQuestion({
        // 댓글 등록
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
            user: data.seller
          },
          useditemId: (router_default()).query.useditemId
        },
        refetchQueries: [{
          query: marketCommentList_queries/* FETCH_USEDITEM_QUESTIONS */.qV,
          variables: {
            useditemId: (router_default()).query.useditemId
          }
        }]
      });
      external_antd_.Modal.confirm({
        content: "댓글이 등록되었습니다."
      });
    } catch (err) {
      external_antd_.Modal.error({
        content: err.message
      });
    }
  };

  const onClickClear = () => {
    props.setIsAnswer(prev => !prev);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(marketCommentWrite_persenter, {
    isAnswer: props.isAnswer,
    onClickSubmitComment: onClickSubmitComment,
    register: register,
    handleSubmit: handleSubmit,
    onClickClear: onClickClear
  });
};

/* harmony default export */ var marketCommentWrite_container = (MarketCommentWrite);

/***/ }),

/***/ 79:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ marketDetail_container; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/detail/marketDetail.styles.ts

const MainWrapper = (styled_default()).div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 0;
  padding-bottom: 50px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  @media (max-width: 767px) {
    width: 100%;
    box-shadow: none;
    margin: 0 0;
  }
`;
const SubWrapper = (styled_default()).div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 792px;
  margin-top: 100px;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const ProfileWrapper = (styled_default()).div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
  }
`;
const ProfileImg = (styled_default()).img`
  margin-right: 10px;
`;
const SellerWrapper = (styled_default()).div``;
const SellerName = (styled_default()).div``;
const SellDate = (styled_default()).div``;
const LocationWrapper = (styled_default()).div`
  width: 80px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Link = (styled_default()).img``;
const Location = (styled_default()).img``;
const MainNameWrapper = (styled_default()).div`
  display: flex;
  justify-content: space-between;
  width: 792px;
  margin-top: 20px;
  @media (max-width: 767px) {
    width: 90%;
    margin: 10px;
  }
`;
const NameWrapper = (styled_default()).div`
  margin-bottom: 80px;
  @media (max-width: 767px) {
    width: 100px;
    margin: 10px;
  }
`;
const Remarks = (styled_default()).div`
  /* width: 200px; */
  height: 27px;
  font-size: 18px;
  color: #bdbdbd;
  margin-bottom: 5px;
`;
const Name = (styled_default()).div`
  width: 500px;
  height: 36px;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  color: #4f4f4f;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const LikeWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    margin: 10px;
  }
`;
const Like = (styled_default()).img`
  margin-bottom: 5px;
`;
const LikeScore = (styled_default()).img``;
const Price = (styled_default()).div`
  width: 200px;
  height: 53px;
  font-weight: bold;
  font-size: 36px;
`;
const Contents = (styled_default()).div`
  font-size: 18px;
  margin-bottom: 40px;
`;
const Tags = (styled_default()).div`
  font-size: 16px;
  color: #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 40px;
`;
const ContentsWrapper = (styled_default()).div`
  margin-top: 100px;
  width: 792px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const MapBox = (styled_default()).div`
  max-width: 792px;
  height: 360px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const ButtonWrapper = (styled_default()).div`
  display: flex;
  justify-content: space-between;
`; // export const Button = styled.button`
//   width: 170px;
//   height: 60px;
//   font-size: 18px;
//   font-weight: bold;
//   background-color: #35c5f0;
//   color: white;
//   border: none;
//   border-radius: 10px;
//   margin-top: 30px;
//   margin-right: 24px;
//   cursor: pointer;
//   :active {
//     position: relative;
//     top: 2px;
//   }
// `;

const ImgWrapper = (styled_default()).div`
  width: 600px;
  height: 300px;
  display: flex;
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 30px;
  }
`;
const Picture = (styled_default()).img`
  margin-bottom: 100px;
  margin: auto;
`;
const SliderUl = (styled_default()).ul`
  width: 600px;
  > li {
    width: 100px;
    height: 100px;
    margin: 10px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const Button = (styled_default()).button`
  width: 170px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  background-color: #512771;
  color: white;
  border: none;
  border-radius: 10px;
  margin-top: 40px;
  margin-bottom: 40px;
  /* margin-right: 24px; */
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
`;
// EXTERNAL MODULE: ./src/components/commons/buttons/button01.tsx
var button01 = __webpack_require__(4490);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./pages/_app.tsx + 22 modules
var _app = __webpack_require__(4037);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./src/commons/libraries/utils.js
var utils = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/detail/marketDetail.presenter.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const MarketDetailUI = props => {
  var _props$data2, _props$data2$fetchUse, _props$data3, _props$data3$fetchUse, _props$data4, _props$data4$fetchUse, _props$data5, _props$data6, _props$data7, _props$data8, _props$data8$fetchUse, _props$data9, _props$data10, _props$data11, _props$data11$fetchUs, _props$data12, _props$data13, _props$data14, _props$data15;

  const {
    userInfo
  } = (0,external_react_.useContext)(_app.GlobalContext);
  const settings = {
    customPaging: function (i) {
      var _props$data;

      return /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          style: {
            minWidth: "50px",
            minHeight: "50px",
            maxWidth: "100px",
            maxHeight: "100px"
          } // @ts-ignore
          ,
          src: `https://storage.googleapis.com/${(_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.fetchUseditem.images[i]}`
        })
      });
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => /*#__PURE__*/(0,jsx_runtime_.jsxs)(SliderUl, {
      children: [" ", dots, " "]
    })
  };

  const menu = /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Menu, {
    style: {
      backgroundColor: "#512771",
      padding: "10px"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
      children: (_props$data2 = props.data) !== null && _props$data2 !== void 0 && (_props$data2$fetchUse = _props$data2.fetchUseditem.useditemAddress) !== null && _props$data2$fetchUse !== void 0 && _props$data2$fetchUse.address ? /*#__PURE__*/jsx_runtime_.jsx("a", {
        style: {
          color: "#FFFFFF",
          fontSize: "16px"
        },
        children: (_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : (_props$data3$fetchUse = _props$data3.fetchUseditem.useditemAddress) === null || _props$data3$fetchUse === void 0 ? void 0 : _props$data3$fetchUse.address
      }) : /*#__PURE__*/jsx_runtime_.jsx("a", {
        style: {
          color: "#FFFFFF",
          fontSize: "16px"
        },
        children: "\uC8FC\uC18C\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu.Item, {
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        style: {
          color: "#FFFFFF",
          fontSize: "16px"
        },
        children: (_props$data4 = props.data) === null || _props$data4 === void 0 ? void 0 : (_props$data4$fetchUse = _props$data4.fetchUseditem.useditemAddress) === null || _props$data4$fetchUse === void 0 ? void 0 : _props$data4$fetchUse.addressDetail
      })
    })]
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainWrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(SubWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ProfileWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ProfileImg, {
          src: "/FreeBoard/Profile.png"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SellerWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(SellerName, {
            children: (_props$data5 = props.data) === null || _props$data5 === void 0 ? void 0 : _props$data5.fetchUseditem.seller.name
          }), /*#__PURE__*/jsx_runtime_.jsx(SellDate, {
            children: (_props$data6 = props.data) === null || _props$data6 === void 0 ? void 0 : _props$data6.fetchUseditem.createdAt
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LocationWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Link, {
          src: "/FreeBoard/link.svg"
        }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Dropdown, {
          overlay: menu,
          placement: "topRight",
          overlayStyle: {
            backgroundColor: "#512771"
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(Location, {
            src: "/FreeBoard/location.svg"
          })
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainNameWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(NameWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Remarks, {
          children: (_props$data7 = props.data) === null || _props$data7 === void 0 ? void 0 : _props$data7.fetchUseditem.remarks
        }), /*#__PURE__*/jsx_runtime_.jsx(Name, {
          children: (_props$data8 = props.data) === null || _props$data8 === void 0 ? void 0 : (_props$data8$fetchUse = _props$data8.fetchUseditem) === null || _props$data8$fetchUse === void 0 ? void 0 : _props$data8$fetchUse.name
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Price, {
          children: [(0,utils/* getComma */.H)((_props$data9 = props.data) === null || _props$data9 === void 0 ? void 0 : _props$data9.fetchUseditem.price), "\uC6D0"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LikeWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Like, {
          src: "/FreeBoard/heart.svg",
          onClick: props.onClickToggle
        }), /*#__PURE__*/jsx_runtime_.jsx(LikeScore, {}), (_props$data10 = props.data) === null || _props$data10 === void 0 ? void 0 : _props$data10.fetchUseditem.pickedCount]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(ImgWrapper, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          maxWidth: "600px",
          minWidth: "300px",
          minHeight: "300px",
          maxHeight: "600px",
          margin: "auto"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
          children: (_props$data11 = props.data) === null || _props$data11 === void 0 ? void 0 : (_props$data11$fetchUs = _props$data11.fetchUseditem.images) === null || _props$data11$fetchUs === void 0 ? void 0 : _props$data11$fetchUs.map((data, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              style: {
                maxWidth: "200px",
                minWidth: "200px",
                minHeight: "200px",
                maxHeight: "200px",
                margin: "auto",
                marginBottom: "100px"
              },
              src: `https://storage.googleapis.com/${data}`
            })
          }, index))
        }))
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentsWrapper, {
      children: [ false ? /*#__PURE__*/0 : /*#__PURE__*/jsx_runtime_.jsx("div", {}), /*#__PURE__*/jsx_runtime_.jsx(Tags, {
        children: (_props$data13 = props.data) === null || _props$data13 === void 0 ? void 0 : _props$data13.fetchUseditem.tags
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(MapBox, {
      id: "map"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(button01/* default */.Z, {
        buttonName: "목록으로",
        onClick: props.onClickMove,
        buttonType: "button"
      }), ((_props$data14 = props.data) === null || _props$data14 === void 0 ? void 0 : _props$data14.fetchUseditem.seller._id) !== userInfo._id ? /*#__PURE__*/jsx_runtime_.jsx(button01/* default */.Z, {
        buttonName: "구매하기",
        onClick: props.onClickBuying
      }) : /*#__PURE__*/jsx_runtime_.jsx(button01/* default */.Z, {
        buttonName: "수정하기",
        onClick: props.onClickEdit
      }), ((_props$data15 = props.data) === null || _props$data15 === void 0 ? void 0 : _props$data15.fetchUseditem.seller._id) === userInfo._id ? /*#__PURE__*/jsx_runtime_.jsx(button01/* default */.Z, {
        buttonName: "삭제하기",
        onClick: props.onClickDelete
      }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})]
    })]
  });
};

/* harmony default export */ var marketDetail_presenter = (MarketDetailUI);
// EXTERNAL MODULE: ./src/components/units/usedMarket/detail/marketDetail.queries.ts
var marketDetail_queries = __webpack_require__(6770);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/detail/marketDetail.container.tsx









const MarketDetail = () => {
  const router = (0,router_.useRouter)();
  const [deleteUseditem] = (0,client_.useMutation)(marketDetail_queries/* DELETE_USED_ITEM */.Sp);
  const {
    data,
    refetch
  } = (0,client_.useQuery)(marketDetail_queries/* FETCH_USED_ITEM */.o7, {
    variables: {
      useditemId: router.query.useditemId
    },
    skip: !router.query.useditemId
  });
  const [toggleUseditemPick] = (0,client_.useMutation)(marketDetail_queries/* TOGGLE_USED_ITEM_PICK */.DV);
  const [createPointTransactionOfBuyingAndSelling] = (0,client_.useMutation)(marketDetail_queries/* CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING */.bY);

  const onClickToggle = async () => {
    try {
      await toggleUseditemPick({
        variables: {
          useditemId: router.query.useditemId
        }
      });
      refetch();
    } catch (err) {
      external_antd_.Modal.error({
        content: err.message
      });
    }
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: {
          useditemId: router.query.useditemId
        }
      });
      external_antd_.Modal.success({
        content: "삭제가 완료되었습니다.",

        onOk() {
          router.push("/usedMarket");
        }

      });
    } catch (err) {
      external_antd_.Modal.error({
        content: err.message
      });
    }
  };

  const onClickBuying = async () => {
    if (localStorage.getItem("refreshToken")) {
      try {
        await createPointTransactionOfBuyingAndSelling({
          variables: {
            useritemId: router.query.useditemId
          }
        });
        external_antd_.Modal.success({
          content: "구매가 완료되었습니다.",

          onOk() {
            router.push("/usedMarket");
          }

        });
      } catch (err) {
        external_antd_.Modal.error({
          content: err.message
        });
      }
    } else {
      external_antd_.Modal.confirm({
        content: "로그인이 필요합니다.",

        onOk() {
          router.push("/boards/login");
        }

      });
    }
  };

  const onClickMoveToLogin = () => {
    external_antd_.Modal.confirm({
      content: "로그인이 필요합니다.",

      onOk() {
        router.push("/boards/login");
      }

    });
  };

  const onClickMove = () => {
    router.push("/usedMarket");
  };

  const onClickEdit = () => {
    router.push(`/usedMarket/detail/${router.query.useditemId}/edit`);
  };

  (0,external_react_.useEffect)(() => {
    if (!data) return;
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=f7c32ed029b0a9345341d56c3631807f&libraries=services,clusterer,drawing&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        var _data$fetchUseditem$u, _data$fetchUseditem$u2, _data$fetchUseditem$u3;

        const mapContainer = document.getElementById("map"); // 지도를 표시할 div

        const mapOption = {
          center: new window.kakao.maps.LatLng(data === null || data === void 0 ? void 0 : (_data$fetchUseditem$u = data.fetchUseditem.useditemAddress) === null || _data$fetchUseditem$u === void 0 ? void 0 : _data$fetchUseditem$u.lat, data === null || data === void 0 ? void 0 : (_data$fetchUseditem$u2 = data.fetchUseditem.useditemAddress) === null || _data$fetchUseditem$u2 === void 0 ? void 0 : _data$fetchUseditem$u2.lng),
          // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨

        }; // 지도를 생성합니다

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 주소-좌표 변환 객체를 생성합니다

        const geocoder = new window.kakao.maps.services.Geocoder(); // 주소로 좌표를 검색합니다

        geocoder.addressSearch(data === null || data === void 0 ? void 0 : (_data$fetchUseditem$u3 = data.fetchUseditem.useditemAddress) === null || _data$fetchUseditem$u3 === void 0 ? void 0 : _data$fetchUseditem$u3.address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x); // 결과값으로 받은 위치를 마커로 표시합니다

            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords
            }); // // 인포윈도우로 장소에 대한 설명을 표시합니다
            // const infowindow = new window.kakao.maps.InfoWindow({
            //   // content: `${addressDetail}`,
            // });
            // infowindow.open(map, marker);

            marker.setMap(map);
            map.setCenter(coords);
          }
        });
      });
    };
  }, [data]);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(marketDetail_presenter, {
      data: data,
      onClickMoveToLogin: onClickMoveToLogin,
      onClickBuying: onClickBuying,
      onClickMove: onClickMove,
      onClickEdit: onClickEdit,
      onClickToggle: onClickToggle,
      onClickDelete: onClickDelete
    })
  });
};

/* harmony default export */ var marketDetail_container = (MarketDetail);

/***/ })

};
;