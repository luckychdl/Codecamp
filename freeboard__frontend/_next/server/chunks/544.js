exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 3544:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ BoardDetail; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./src/components/units/board/detail/BoardDetail.queries.ts

const FETCH_BOARD = client_.gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      youtubeUrl
      images
      createdAt
      title
      contents
      likeCount
      dislikeCount
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;
const DELETE_BOARD = client_.gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
const LIKE_BOARD = client_.gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;
const DISLIKE_BOARD = client_.gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;
// EXTERNAL MODULE: external "react-player"
var external_react_player_ = __webpack_require__(6311);
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/units/board/detail/BoardDetail.styles.ts

const Main = (styled_default()).div`
  margin-bottom: 100px;
`;
const MainWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  /* height: 1602px; */
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
const BoardDetail_styles_Date = (styled_default()).div`
  width: 300px;
  font-size: 16px;
  color: #828282;
`;
const LinkWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 34px;
`;
const Address = (styled_default()).div`
  width: 376px;
  height: 64px;
  background-color: gray;
  padding: 5px 10px 10px 0;
  text-align: end;
`;
const Location = (styled_default()).img`
  width: 32px;
  height: 32px;
`;
const Detail = (styled_default()).div`
  font-size: 18px;
  padding-bottom: 10px;
`;
const SubDetail = (styled_default()).span`
  font-size: 18px;
  padding-top: 10px;
`;
const LinkSubWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Link = (styled_default()).img`
  margin-right: 25px;
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
`; // export const ReactPlayer = styled.div`
//   width: 486px;
//   height: 240px;
//   background-color: red;
// `;

const LikeMainWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 120px;
  margin-top: 50px;
`;
const LikeWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Score = (styled_default()).div`
  font-size: 18px;
  color: #ffd600;
`;
const HateScore = (styled_default()).div`
  font-size: 18px;
  color: #828282;
`;
const Like = (styled_default()).img`
  width: 28px;
  height: 22px;
  margin: 20px;
  color: #828282;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
    border-radius: 10px;
  }
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
  color: #616161;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  margin-right: 24px;
  background-color: white;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
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
const Star = (styled_default()).img`
  width: 20px;
  height: 20px;
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
;// CONCATENATED MODULE: ./src/components/units/board/detail/BoardDetail.presenter.tsx





function BoardDetailUI(props) {
  var _props$data, _props$data2, _props$data3, _props$data3$fetchBoa, _props$data4, _props$data4$fetchBoa, _props$data5, _props$data6, _props$data6$fetchBoa, _props$data7, _props$data8, _props$data9, _props$data10;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Main, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(MainWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(HeadWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(NameWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Profile, {
            src: "/FreeBoard/Profile.png"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SubWrapper, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Name, {
              children: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.fetchBoard.writer
            }), /*#__PURE__*/jsx_runtime_.jsx(BoardDetail_styles_Date, {
              children: (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.fetchBoard.createdAt
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LinkWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Link, {
            src: "/FreeBoard/Link.png"
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Tooltip, {
            placement: "topRight",
            title: `${(_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : (_props$data3$fetchBoa = _props$data3.fetchBoard.boardAddress) === null || _props$data3$fetchBoa === void 0 ? void 0 : _props$data3$fetchBoa.address} ${(_props$data4 = props.data) === null || _props$data4 === void 0 ? void 0 : (_props$data4$fetchBoa = _props$data4.fetchBoard.boardAddress) === null || _props$data4$fetchBoa === void 0 ? void 0 : _props$data4$fetchBoa.addressDetail}`,
            children: /*#__PURE__*/jsx_runtime_.jsx(Location, {
              src: "/FreeBoard/Location.png"
            })
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(Border, {}), /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: (_props$data5 = props.data) === null || _props$data5 === void 0 ? void 0 : _props$data5.fetchBoard.title
      }), (_props$data6 = props.data) === null || _props$data6 === void 0 ? void 0 : (_props$data6$fetchBoa = _props$data6.fetchBoard.images) === null || _props$data6$fetchBoa === void 0 ? void 0 : _props$data6$fetchBoa.map(data => /*#__PURE__*/jsx_runtime_.jsx(Image, {
        src: `https://storage.googleapis.com/${data}`
      }, data)), /*#__PURE__*/jsx_runtime_.jsx(Content, {
        children: (_props$data7 = props.data) === null || _props$data7 === void 0 ? void 0 : _props$data7.fetchBoard.contents
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_player_default()), {
        url: (_props$data8 = props.data) === null || _props$data8 === void 0 ? void 0 : _props$data8.fetchBoard.youtubeUrl,
        width: "600px",
        height: "300px",
        controls: true,
        muted: true
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LikeMainWrapper, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(LikeWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Like, {
            src: "/FreeBoard/Like.png",
            onClick: props.onClickLike
          }), /*#__PURE__*/jsx_runtime_.jsx(Score, {
            children: (_props$data9 = props.data) === null || _props$data9 === void 0 ? void 0 : _props$data9.fetchBoard.likeCount
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LikeWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Like, {
            src: "/FreeBoard/DisLike.png",
            onClick: props.onClickDisLike
          }), /*#__PURE__*/jsx_runtime_.jsx(HateScore, {
            children: (_props$data10 = props.data) === null || _props$data10 === void 0 ? void 0 : _props$data10.fetchBoard.dislikeCount
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Button, {
        onClick: props.onClickList,
        children: "\uBAA9\uB85D\uC73C\uB85C"
      }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
        onClick: props.onClickEdit,
        children: "\uC218\uC815\uD558\uAE30"
      }), /*#__PURE__*/jsx_runtime_.jsx(Button, {
        onClick: props.onClickDelete,
        children: "\uC0AD\uC81C\uD558\uAE30"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/units/board/detail/BoardDetail.container.tsx









function BoardDetail() {
  const router = (0,router_.useRouter)();
  const [deleteBoard] = (0,client_.useMutation)(DELETE_BOARD);
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const [likeBoard] = (0,client_.useMutation)(LIKE_BOARD);
  const [dislikeBoard] = (0,client_.useMutation)(DISLIKE_BOARD);
  const {
    data
  } = (0,client_.useQuery)(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId
    }
  });

  function onClickLike() {
    likeBoard({
      variables: {
        boardId: router.query.boardId
      },
      refetchQueries: [{
        query: FETCH_BOARD,
        variables: {
          boardId: router.query.boardId
        }
      }]
    });
  }

  function onClickDisLike() {
    dislikeBoard({
      variables: {
        boardId: router.query.boardId
      },
      refetchQueries: [{
        query: FETCH_BOARD,
        variables: {
          boardId: router.query.boardId
        }
      }]
    });
  }

  function onClickList() {
    router.push("/boards");
  }

  function onClickEdit() {
    router.push(`/detail/${router.query.boardId}/edit`);
  }

  async function onClickDelete() {
    try {
      await deleteBoard({
        variables: {
          boardId: router.query.boardId
        }
      });
      setIsOpen(true);
    } catch (error) {
      alert(error.message);
    }
  }

  function handleOK() {
    setIsOpen(false);
    router.push("/boards");
  }

  function handleCancel() {
    setIsOpen(false);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Modal, {
      title: "\uAC8C\uC2DC\uBB3C \uC0AD\uC81C",
      visible: isOpen,
      onOk: handleOK,
      onCancel: handleCancel,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: "\uAC8C\uC2DC\uBB3C\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(BoardDetailUI, {
      data: data,
      onClickLike: onClickLike,
      onClickDisLike: onClickDisLike,
      onClickList: onClickList,
      onClickDelete: onClickDelete,
      onClickEdit: onClickEdit
    })]
  });
}

/***/ })

};
;