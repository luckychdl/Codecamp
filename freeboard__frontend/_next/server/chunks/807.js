exports.id = 807;
exports.ids = [807];
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

/***/ 2807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CommentList; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: ./src/commons/libraries/utils.js
var utils = __webpack_require__(2750);
// EXTERNAL MODULE: ./src/components/units/boardComments/write/CommentWrite.container.tsx + 3 modules
var CommentWrite_container = __webpack_require__(1400);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: ./src/components/units/boardComments/list/CommentList.queries.ts
var CommentList_queries = __webpack_require__(5029);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/units/boardComments/list/CommentList.styles.ts


const Main = (styled_default()).div`
  margin-bottom: 100px;
`;
const MainWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 1602px;
  padding: 84px 102px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin: 100px 100px 80px 100px;
`;
const HeadWrapper = (styled_default()).div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Star = styled_default()(external_antd_.Rate)`
  padding-left: 20px;
`;
const SubWrapper = (styled_default()).div``;
const Profile = (styled_default()).img`
  width: 46.67px;
  height: 46.67px;
  margin: 0 16.67px 24.67px 0;
`;
const NameWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  width: 126px;
`;
const Name = (styled_default()).div`
  font-size: 24px;
`;
const CommentList_styles_Date = (styled_default()).div`
  width: 300px;
  font-size: 16px;
  color: #828282;
`;
const LinkWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Link = (styled_default()).img`
  margin-right: 35.33px;
  width: 32px;
  height: 32px;
`;
const Location = (styled_default()).img`
  width: 32px;
  height: 32px;
`;
const Border = (styled_default()).div`
  width: 996px;
  border: 1px solid #bdbdbd;
  margin-bottom: 80px;
`;
const Title = (styled_default()).div`
  width: 100%;
  font-weight: bold;
  font-size: 36px;
`;
const Image = (styled_default()).img`
  width: 996px;
  height: 480px;
  margin: 40px 0 40px 0;
`;
const Content = (styled_default()).div`
  text-align: center;
  width: 996px;
  height: 96px;
  margin-bottom: 120px;
  font-size: 16px;
`;
const Youtube = (styled_default()).div`
  width: 486px;
  height: 240px;
  background-color: red;
`;
const LikeMainWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 120px;
`;
const Like = (styled_default()).img`
  margin: 20px;
  color: #828282;
`;
const ButtonWrapper = (styled_default()).div`
  width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Button = (styled_default()).button`
  border: 1px solid #bdbdbd;
  width: 179px;
  height: 45px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  margin-right: 24px;
  background-color: white;
  cursor: pointer;
`;
const ReviewImg = (styled_default()).img`
  width: 20px;
  height: 20px;
  margin-right: 14px;
`;
const Review = (styled_default()).div`
  font-size: 18px;
`;
const ReviewWrapper = (styled_default()).div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
`;
const ReviewWriter = (styled_default()).input`
  width: 180px;
  height: 52px;
  margin-right: 40px;
  border: 1px solid #bdbdbd;
  color: #828282;
`;
const ReviewPassword = (styled_default()).input`
  width: 180px;
  height: 52px;
  color: #828282;
  border: 1px solid #bdbdbd;
  margin-right: 26px;
`;
const ReviewWrite = (styled_default()).textarea`
  width: 1200px;
  height: 161px;
  resize: none;
  position: relative;
  margin: 0px 100px 0px 100px;
  font-size: 14px;
  line-height: 24px;
  padding: 20px;
  border: 1px solid #bdbdbd;
`;
const ReviewBorder = (styled_default()).div`
  width: 1199px;
  border: 1px solid #bdbdbd;
  margin: 87px 100px 40px 100px;
`;
const WriterWrapper = (styled_default()).div``;
const ReviewSubWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1200px;
  margin: 0px 100px 20px 100px;
`;
const ReviewButton = (styled_default()).button`
  position: absolute;
  left: 1209px;
  top: 108px;
  width: 91px;
  height: 52px;
  background: #000000;
  color: white;
  cursor: pointer;
`;
const Text = (styled_default()).div`
  position: absolute;
  width: 43px;
  height: 24px;
  color: #bdbdbd;
  font-size: 14px;
  line-height: 24px;
  right: 1035px;
  top: 115px;
`;
const TextWrapper = (styled_default()).div`
  position: relative;
  width: 1200px;
`;
const FooterMainWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  margin-left: 100px;
`;
const ReviewProfile = (styled_default()).img`
  width: 40px;
  height: 40px;
  margin: 46px 16px 20px 0;
`;
const FooterWrapper = (styled_default()).div`
  display: flex;
`;
const FooterSubWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  margin-top: 46px;
`;
const ReviewName = (styled_default()).div`
  margin-right: 10px;
`;
const YellowStar = (styled_default()).img`
  width: 20px;
  height: 20px;
`;
const ReviewContents = (styled_default()).div`
  margin-top: 6px;
  color: #4f4f4f;
  font-size: 16px;
  line-height: 24px;
`;
const FooterImg = (styled_default()).div`
  margin-top: 46px;
`;
const Mode = (styled_default()).img`
  cursor: pointer;
`;
const Clear = (styled_default()).img`
  cursor: pointer;
`;
const ReviewDate = (styled_default()).div`
  margin-left: 156px;
  height: 38px;
  color: lightgray;
  font-size: 12px;
  line-height: 18px;
`;
const ContentsWrapper = (styled_default()).div``;
const FooterBorder = (styled_default()).div`
  border: 1px solid #bdbdbd;
  width: 1200px;
  margin-left: 100px;
  margin-top: 20px;
`;
const CommentWrapper = (styled_default()).div``;
const ListWrapper = (styled_default()).div``;
const ListSubWrapper = (styled_default()).div``;
const PasswordInput = (styled_default()).input`
  width: 100%;
  margin-top: 10px;
`;
;// CONCATENATED MODULE: ./src/components/units/boardComments/list/commentList.PresentItem.tsx











function CommentListUIItem(props) {
  const router = (0,router_.useRouter)();
  const {
    0: isEdit,
    1: setIsEdit
  } = (0,external_react_.useState)(false);
  const {
    0: isOpenDeleteModal,
    1: setIsOpenDeleteModal
  } = (0,external_react_.useState)(false);
  const {
    0: password,
    1: setPassword
  } = (0,external_react_.useState)("");
  const [deleteBoardComment] = (0,client_.useMutation)(CommentList_queries/* DELETE_BOARD_COMMENT */.b);

  function onClickUpdate() {
    setIsEdit(true);
  }

  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }

  function onChangeDeletePassword(event) {
    setPassword(event.target.value);
  }

  function onClickDelete() {
    var _props$data;

    deleteBoardComment({
      variables: {
        password,
        boardCommentId: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data._id
      },
      refetchQueries: [{
        query: CommentList_queries/* FETCH_BOARD_COMMENTS */.M,
        variables: {
          boardId: router.query.boardId
        }
      }]
    });
    external_antd_.Modal.confirm({
      content: "댓글이 삭제되었습니다."
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [isOpenDeleteModal && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Modal, {
      visible: true,
      onOk: onClickDelete,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: "\uBE44\uBC00\uBC88\uD638 \uC785\uB825: "
      }), /*#__PURE__*/jsx_runtime_.jsx(PasswordInput, {
        type: "password",
        onChange: onChangeDeletePassword
      })]
    }), !isEdit && /*#__PURE__*/jsx_runtime_.jsx(ListWrapper, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListSubWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterMainWrapper, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterWrapper, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(ReviewProfile, {
              src: "/FreeBoard/ReviewProfile.png"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentsWrapper, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterSubWrapper, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(ReviewName, {
                  children: props.data.writer
                }), /*#__PURE__*/jsx_runtime_.jsx(Star, {
                  value: props.data.rating,
                  disabled: true
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(ReviewContents, {
                children: props.data.contents
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(FooterImg, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Mode, {
              onClick: onClickUpdate,
              src: "/FreeBoard/Mode.png"
            }), /*#__PURE__*/jsx_runtime_.jsx(Clear, {
              onClick: onClickOpenDeleteModal,
              src: "/FreeBoard/Clear.png"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(ReviewDate, {
          children: (0,utils/* getDate */._)(props.data.createdAt)
        }), /*#__PURE__*/jsx_runtime_.jsx(FooterBorder, {})]
      })
    }), isEdit && /*#__PURE__*/jsx_runtime_.jsx(CommentWrite_container/* default */.Z, {
      isEdit: isEdit,
      setIsEdit: setIsEdit,
      data: props.data
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/units/boardComments/list/CommentList.presenter.tsx



function CommentListUI(props) {
  var _props$data;

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.fetchBoardComments.map(data => /*#__PURE__*/jsx_runtime_.jsx(CommentListUIItem, {
      data: data
    }, data._id))
  });
}
;// CONCATENATED MODULE: ./src/components/units/boardComments/list/CommentList.container.tsx





function CommentList() {
  const router = (0,router_.useRouter)();
  const {
    data
  } = (0,client_.useQuery)(CommentList_queries/* FETCH_BOARD_COMMENTS */.M, {
    variables: {
      boardId: router.query.boardId
    }
  });
  return /*#__PURE__*/jsx_runtime_.jsx(CommentListUI, {
    data: data
  });
}

/***/ }),

/***/ 5029:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": function() { return /* binding */ FETCH_BOARD_COMMENTS; },
/* harmony export */   "b": function() { return /* binding */ DELETE_BOARD_COMMENT; }
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8074);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const FETCH_BOARD_COMMENTS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      rating
      createdAt
      updatedAt
    }
  }
`;
const DELETE_BOARD_COMMENT = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;

/***/ }),

/***/ 1400:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ CommentWrite; }
});

// UNUSED EXPORTS: INPUTS_INIT

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./src/components/units/boardComments/write/CommentWrite.styles.ts


const Main = (styled_default()).div`
  margin-bottom: 100px;
`;
const MainWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  height: 1602px;
  padding: 84px 102px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  margin: 100px 100px 80px 100px;
`;
const HeadWrapper = (styled_default()).div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const SubWrapper = (styled_default()).div``;
const Profile = (styled_default()).img`
  width: 46.67px;
  height: 46.67px;
  margin: 0 16.67px 24.67px 0;
`;
const NameWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  width: 126px;
`;
const Name = (styled_default()).div`
  font-size: 24px;
`;
const CommentWrite_styles_Date = (styled_default()).div`
  width: 300px;
  font-size: 16px;
  color: #828282;
`;
const LinkWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Link = (styled_default()).img`
  margin-right: 35.33px;
  width: 32px;
  height: 32px;
`;
const Location = (styled_default()).img`
  width: 32px;
  height: 32px;
`;
const Border = (styled_default()).div`
  width: 996px;
  border: 1px solid #bdbdbd;
  margin-bottom: 80px;
`;
const Title = (styled_default()).div`
  width: 100%;
  font-weight: bold;
  font-size: 36px;
`;
const Image = (styled_default()).img`
  width: 996px;
  height: 480px;
  margin: 40px 0 40px 0;
`;
const Content = (styled_default()).div`
  text-align: center;
  width: 996px;
  height: 96px;
  margin-bottom: 120px;
  font-size: 16px;
`;
const Youtube = (styled_default()).div`
  width: 486px;
  height: 240px;
  background-color: red;
`;
const LikeMainWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 120px;
`;
const Like = (styled_default()).img`
  margin: 20px;
  color: #828282;
`;
const ButtonWrapper = (styled_default()).div`
  width: 1400px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const Button = (styled_default()).button`
  border: 1px solid #bdbdbd;
  width: 179px;
  height: 45px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  margin-right: 24px;
  background-color: white;
  cursor: pointer;
`;
const ReviewImg = (styled_default()).img`
  width: 20px;
  height: 20px;
  margin-right: 14px;
`;
const Review = (styled_default()).div`
  font-size: 18px;
`;
const ReviewWrapper = (styled_default()).div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
`;
const ReviewWriter = (styled_default()).input`
  width: 180px;
  height: 52px;
  margin-right: 40px;
  border: 1px solid #bdbdbd;
  color: #828282;
  outline-color: #35c5f0;
`;
const ReviewPassword = (styled_default()).input`
  width: 180px;
  height: 52px;
  color: #828282;
  border: 1px solid #bdbdbd;
  margin-right: 26px;
  outline-color: #35c5f0;
`;
const Star = styled_default()(external_antd_.Rate)``;
const ReviewWrite = (styled_default()).textarea`
  width: 1200px;
  height: 161px;
  resize: none;
  position: relative;
  margin: 0px 100px 0px 100px;
  font-size: 14px;
  line-height: 24px;
  padding: 20px;
  border: 1px solid #bdbdbd;
  outline-color: #35c5f0;
`;
const ReviewBorder = (styled_default()).div`
  width: 1199px;
  border: 1px solid #bdbdbd;
  margin: 87px 100px 40px 100px;
`;
const WriterWrapper = (styled_default()).div``;
const ReviewSubWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1200px;
  margin: 0px 100px 20px 100px;
`;
const ReviewButton = (styled_default()).button`
  position: absolute;
  left: 1209px;
  top: 108px;
  width: 91px;
  height: 52px;
  background: #512771;
  color: white;
  cursor: pointer;
  border: none;
`;
const Text = (styled_default()).div`
  position: absolute;
  width: 43px;
  height: 24px;
  color: #bdbdbd;
  font-size: 14px;
  line-height: 24px;
  right: 1035px;
  top: 115px;
`;
const TextWrapper = (styled_default()).div`
  position: relative;
  width: 1200px;
`;
const FooterMainWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1200px;
  margin-left: 100px;
`;
const ReviewProfile = (styled_default()).img`
  width: 40px;
  height: 40px;
  margin: 46px 16px 20px 0;
`;
const FooterWrapper = (styled_default()).div`
  display: flex;
`;
const FooterSubWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  margin-top: 46px;
`;
const ReviewName = (styled_default()).div`
  margin-right: 10px;
`;
const YellowStar = (styled_default()).img`
  width: 20px;
  height: 20px;
`;
const ReviewContents = (styled_default()).div`
  margin-top: 6px;
  color: #4f4f4f;
  font-size: 16px;
  line-height: 24px;
`;
const FooterImg = (styled_default()).div`
  margin-top: 46px;
`;
const Mode = (styled_default()).img`
  cursor: pointer;
`;
const Clear = (styled_default()).img`
  cursor: pointer;
`;
const ReviewDate = (styled_default()).div`
  margin-left: 156px;
  height: 38px;
  color: lightgray;
  font-size: 12px;
  line-height: 18px;
`;
const ContentsWrapper = (styled_default()).div``;
const FooterBorder = (styled_default()).div`
  border: 1px solid #bdbdbd;
  width: 1200px;
  margin-left: 100px;
  margin-top: 20px;
`;
const CommentWrapper = (styled_default()).div``;
;// CONCATENATED MODULE: ./src/components/units/boardComments/write/CommentWrite.presenter.tsx



function CommentWriteUI(props) {
  var _props$data, _props$data2, _props$data3;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(CommentWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ReviewBorder, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ReviewSubWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ReviewWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ReviewImg, {
          src: "/FreeBoard/Review.png"
        }), /*#__PURE__*/jsx_runtime_.jsx(Review, {
          children: "\uB313\uAE00"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(WriterWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ReviewWriter, {
          name: "writer",
          type: "text",
          value: props.inputs.writer || ((_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.writer) || "",
          placeholder: "\uC791\uC131\uC790",
          onChange: props.onChangeInputs
        }), /*#__PURE__*/jsx_runtime_.jsx(ReviewPassword, {
          name: "password",
          type: "password",
          placeholder: "\uBE44\uBC00\uBC88\uD638",
          value: props.inputs.password,
          onChange: props.onChangeInputs
        }), /*#__PURE__*/jsx_runtime_.jsx(Star, {
          onChange: props.onChangeStar
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TextWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ReviewWrite, {
        name: "contents",
        onChange: props.onChangeInputs,
        value: props.inputs.contents || ((_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.contents),
        placeholder: "\uAC1C\uC778\uC815\uBCF4\uB97C \uACF5\uC720 \uBC0F \uC694\uCCAD\uD558\uAC70\uB098, \uBA85\uC608 \uD6FC\uC190, \uBB34\uB2E8 \uAD11\uACE0, \uBD88\uBC95 \uC815\uBCF4 \uC720\uD3EC\uC2DC \uBAA8\uB2C8\uD130\uB9C1 \uD6C4 \uC0AD\uC81C\uB420 \uC218 \uC788\uC73C\uBA70, \uC774\uC5D0 \uB300\uD55C \uBBFC\uD615\uC0AC\uC0C1 \uCC45\uC784\uC740 \uAC8C\uC2DC\uC790\uC5D0\uAC8C \uC788\uC2B5\uB2C8\uB2E4."
      }), /*#__PURE__*/jsx_runtime_.jsx(ReviewButton, {
        id: (_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : _props$data3._id,
        onClick: props.isEdit ? props.onClickUpdate : props.onClickSubmit,
        children: props.isEdit ? "수정하기" : "등록하기"
      }), /*#__PURE__*/jsx_runtime_.jsx(Text, {
        children: "0/100"
      })]
    })]
  });
}
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
;// CONCATENATED MODULE: ./src/components/units/boardComments/write/CommentWrite.queries.ts

const CREATE_BOARD_COMMENT = client_.gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput!
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput: $createBoardCommentInput
      boardId: $boardId
    ) {
      _id
    }
  }
`;
const UPDATE_BOARD_COMMENT = client_.gql`
  mutation updateBoardComment(
    $updateBoardCommentInput: UpdateBoardCommentInput!
    $password: String
    $boardCommentId: ID!
  ) {
    updateBoardComment(
      updateBoardCommentInput: $updateBoardCommentInput
      password: $password
      boardCommentId: $boardCommentId
    ) {
      _id
    }
  }
`;
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/units/boardComments/list/CommentList.queries.ts
var CommentList_queries = __webpack_require__(5029);
;// CONCATENATED MODULE: ./src/components/units/boardComments/write/CommentWrite.container.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const INPUTS_INIT = {
  writer: "",
  password: "",
  contents: "",
  rating: 0
};
function CommentWrite(props) {
  const router = (0,router_.useRouter)();
  const [createBoardComment] = (0,client_.useMutation)(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = (0,client_.useMutation)(UPDATE_BOARD_COMMENT);
  const {
    0: inputs,
    1: setInputs
  } = (0,external_react_.useState)(INPUTS_INIT);

  function onChangeInputs(event) {
    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [event.target.name]: event.target.value
    }));
  }

  function onChangeStar(value) {
    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      rating: value
    }));
  }

  async function onClickSubmit() {
    try {
      await createBoardComment({
        variables: {
          createBoardCommentInput: _objectSpread({}, inputs),
          boardId: router.query.boardId
        },
        refetchQueries: [{
          query: CommentList_queries/* FETCH_BOARD_COMMENTS */.M,
          variables: {
            boardId: router.query.boardId
          }
        }]
      });
      external_antd_.Modal.confirm({
        content: "댓글이 등록되었습니다."
      });
      setInputs(INPUTS_INIT);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdate(event) {
    try {
      var _props$setIsEdit;

      await updateBoardComment({
        variables: {
          updateBoardCommentInput: {
            contents: inputs.contents
          },
          password: inputs.password,
          boardCommentId: event.target.id
        },
        refetchQueries: [{
          query: CommentList_queries/* FETCH_BOARD_COMMENTS */.M,
          variables: {
            boardId: router.query.boardId
          }
        }]
      });
      external_antd_.Modal.confirm({
        content: "댓글이 수정되었습니다."
      });
      setInputs(INPUTS_INIT);
      (_props$setIsEdit = props.setIsEdit) === null || _props$setIsEdit === void 0 ? void 0 : _props$setIsEdit.call(props, false);
    } catch (error) {
      alert(error.message);
    }
  }

  return /*#__PURE__*/jsx_runtime_.jsx(CommentWriteUI, {
    onChangeInputs: onChangeInputs,
    onClickSubmit: onClickSubmit,
    onClickUpdate: onClickUpdate,
    onChangeStar: onChangeStar,
    isEdit: props.isEdit,
    inputs: inputs,
    data: props.data
  });
}

/***/ })

};
;