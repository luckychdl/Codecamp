exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 873:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ BoardWrite; }
});

// UNUSED EXPORTS: INPUTS_INIT

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-daum-postcode"
var external_react_daum_postcode_ = __webpack_require__(3903);
var external_react_daum_postcode_default = /*#__PURE__*/__webpack_require__.n(external_react_daum_postcode_);
// EXTERNAL MODULE: ./src/components/commons/uploads/Upload01.container.tsx + 3 modules
var Upload01_container = __webpack_require__(6951);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/units/board/write/BoardWrite.styles.ts

const MainWrapper = (styled_default()).div`
  width: 1200px;
  padding: 80px 100px 102px 102px;
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
`;
const Title = (styled_default()).h1`
  font-size: 36px;
  color: #757575;
`;
const Name = (styled_default()).div`
  font-size: 16px;
  width: 489px;
  margin: 16px 0px 10px 0px;
`;
const SubWrapper = (styled_default()).div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Wrapper = (styled_default()).div`
  width: 486px;
  display: flex;
  flex-direction: column;
`;
const Box = (styled_default()).input`
  width: 486px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 10px;
  outline-color: #512771;
`;
const TitleWrapper = (styled_default()).div`
  width: 996px;
  display: flex;
  flex-direction: column;
`;
const TitleBox = (styled_default()).input`
  width: 996px;
  height: 52px;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 10px;
  outline-color: #512771;
`;
const TitleName = (styled_default()).div`
  font-size: 16px;
  width: 996px;
  margin: 16px 0 16px 0;
`;
const ContentWrapper = (styled_default()).div`
  width: 996px;
`;
const ContentName = (styled_default()).div`
  margin: 16px 0px;
`;
const ContentBox = (styled_default()).textarea`
  width: 996px;
  height: 480px;
  padding: 10px;
  resize: none;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  margin-bottom: 10px;
  outline-color: #512771;
`;
const Adress = (styled_default()).div`
  text-align: start;
  font-size: 16px;
  border-radius: 7px;
  margin: 16px 0;
`;
const AdressBox = (styled_default()).input`
  width: 77px;
  height: 52px;
  text-align: center;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  margin-right: 15px;
  outline-color: #512771;
`;
const AdressWrapper = (styled_default()).div`
  text-align: center;
`;
const AdressSubWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  width: 498px;
`;
const Search = (styled_default()).span`
  width: 110px;
  height: 52px;
  background-color: #512771;
  color: white;
  border-radius: 7px;
  padding: 14px 16px;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
`;
const AdressSubBox = (styled_default()).input`
  width: 996px;
  height: 52px;
  margin: 10px 0px 12px 0px;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  outline-color: #512771;
`;
const AdressBoxWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 12px;
  margin-top: 16px;
`;
const YoutubeWrapper = (styled_default()).div``;
const YoutubeSubWrapper = (styled_default()).div``;
const YoutubeName = (styled_default()).div`
  margin: 36px 0 16px 0;
`;
const YoutubeBox = (styled_default()).input`
  width: 996px;
  height: 45.78px;
  margin-bottom: 36px;
  padding: 10px;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  outline-color: #512771;
`;
const PhotoWarpper = (styled_default()).div``;
const Photo = (styled_default()).div`
  font-size: 16px;
  margin: 16px 0;
`;
const PhotoSubWrapper = (styled_default()).button`
  box-sizing: border-box;
  /* border: 1px solid #bdbdbd; */
  border: none;
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 20px;
  cursor: pointer;
  position: relative;
`;
const PhotoMainWrapper = (styled_default()).div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
`;
const Plus = (styled_default()).div``;
const Upload = (styled_default()).div``;
const Img = (styled_default()).img`
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  width: 78px;
  height: 78px;
  /* background-color: #bdbdbd; */
  margin-right: 20px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
`;
const Set = (styled_default()).div`
  margin-top: 36px;
`;
const RadioWrapper = (styled_default()).div`
  display: flex;
  width: 996px;
  flex-direction: column;
  align-items: flex-start;
`;
const RadioSubWrapper = (styled_default()).div`
  display: flex;
  flex-direction: row;
  margin: 20px 16px 20px 0;
`;
const Radio = (styled_default()).input`
  margin-right: 12px;
  outline-color: #35c5f0;
`;
const Word = (styled_default()).div`
  margin-right: 16px;
`;
const Button = (styled_default()).button`
  width: 150px;
  height: 52px;
  font-weight: bold;
  background-color: ${props => props.active ? "#512771" : ""};
  color: ${props => props.active ? "white" : ""};
  border: 0px;
  border-radius: 7px;
  margin-top: 30px;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
`;
const ErrorMessage = (styled_default()).div`
  margin-bottom: 35px;
  color: red;
`;
const Cancle = (styled_default()).button`
  width: 150px;
  height: 52px;
  font-weight: bold;
  font-size: 16px;
  background-color: #512771;
  border: 0px;
  border-radius: 7px;
  margin-top: 30px;
  margin-left: 20px;
  color: white;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
`;
const ButtonWrapper = (styled_default()).div``;
;// CONCATENATED MODULE: ./src/components/units/board/write/BoardWrite.presenter.tsx






function BoardWriteUI(props) {
  var _props$data, _props$data2;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Title, {
      children: props.isEdit ? "게시물 수정" : "게시물 등록"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SubWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Name, {
          children: "\uC791\uC131\uC790"
        }), /*#__PURE__*/jsx_runtime_.jsx(Box, {
          name: "writer",
          type: "text",
          placeholder: "\uC774\uB984\uC744 \uC801\uC5B4\uC8FC\uC138\uC694.",
          onChange: props.onChangeInputs
        }), /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage, {
          children: props.inputsErrors.writer
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Name, {
          children: "\uBE44\uBC00\uBC88\uD638"
        }), /*#__PURE__*/jsx_runtime_.jsx(Box, {
          name: "password",
          type: "password",
          placeholder: "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",
          onChange: props.onChangeInputs
        }), /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage, {
          children: props.inputsErrors.password
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TitleWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TitleName, {
        children: "\uC81C\uBAA9"
      }), /*#__PURE__*/jsx_runtime_.jsx(TitleBox, {
        name: "title",
        type: "text",
        placeholder: "\uC81C\uBAA9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694.",
        onChange: props.onChangeInputs,
        defaultValue: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.fetchBoard.title
      }), /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage, {
        children: props.inputsErrors.title
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ContentName, {
        children: "\uB0B4\uC6A9"
      }), /*#__PURE__*/jsx_runtime_.jsx(ContentBox, {
        name: "contents",
        placeholder: "\uB0B4\uC6A9\uC744 \uC791\uC131\uD574\uC8FC\uC138\uC694.",
        onChange: props.onChangeInputs,
        defaultValue: (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.fetchBoard.contents
      }), /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage, {
        children: props.inputsErrors.contents
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(AdressWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Adress, {
        children: "\uC8FC\uC18C"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(AdressSubWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(AdressBox, {
          type: "text",
          value: props.zipcode
        }), /*#__PURE__*/jsx_runtime_.jsx(Search, {
          onClick: props.onCompleteDetail,
          children: "\uC6B0\uD3B8\uBC88\uD638 \uAC80\uC0C9"
        }), props.isOpenDetail && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Modal, {
          title: "\uC8FC\uC18C \uAC80\uC0C9\uD558\uAE30",
          visible: props.isOpenDetail,
          onOk: props.handleOkDetail,
          onCancel: props.handleCancelDetail,
          children: /*#__PURE__*/jsx_runtime_.jsx((external_react_daum_postcode_default()), {
            onComplete: props.onClickAddressDetail
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(AdressBoxWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(AdressSubBox, {
          type: "text",
          value: props.address
        }), /*#__PURE__*/jsx_runtime_.jsx(AdressSubBox, {
          name: "addressDetail",
          type: "text",
          onChange: props.onChangeInputsDetail
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(YoutubeWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(YoutubeName, {
        children: "\uC720\uD29C\uBE0C"
      }), /*#__PURE__*/jsx_runtime_.jsx(YoutubeSubWrapper, {
        children: /*#__PURE__*/jsx_runtime_.jsx(YoutubeBox, {
          name: "youtubeUrl",
          type: "text",
          onChange: props.onChangeInputs,
          placeholder: "\uB9C1\uD06C\uB97C \uBCF5\uC0AC\uD574\uC8FC\uC138\uC694."
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(PhotoWarpper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Photo, {
        children: "\uC0AC\uC9C4 \uCCA8\uBD80"
      }), /*#__PURE__*/jsx_runtime_.jsx(PhotoMainWrapper, {
        children: new Array(3).fill(1).map((data, index) => /*#__PURE__*/jsx_runtime_.jsx(Upload01_container/* default */.Z, {
          index: index // @ts-ignore
          ,
          imgUrl: data,
          onChangeFileUrl: props.onChangeFileUrl
        }, `${data}_${index}`))
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(RadioWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Set, {
        children: "\uBA54\uC778\uC124\uC815"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(RadioSubWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Radio, {
          type: "radio"
        }), /*#__PURE__*/jsx_runtime_.jsx(Word, {
          children: "\uC720\uD29C\uBE0C"
        }), /*#__PURE__*/jsx_runtime_.jsx(Radio, {
          type: "radio"
        }), /*#__PURE__*/jsx_runtime_.jsx(Word, {
          children: "\uC0AC\uC9C4"
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Button, {
        active: props === null || props === void 0 ? void 0 : props.active,
        onClick: props.isEdit ? props.onClickUpdate : props.onClickSubmit,
        children: props.isEdit ? "수정하기" : "등록하기"
      }), /*#__PURE__*/jsx_runtime_.jsx(Cancle, {
        children: "\uCDE8\uC18C"
      })]
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/units/board/write/BoardWrite.queries.ts

const CREATE_BOARD = client_.gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
const UPDATE_BOARD = client_.gql`
  mutation updateBoard(
    $boardId: ID!
    $password: String
    $updateBoardInput: UpdateBoardInput!
  ) {
    updateBoard(
      boardId: $boardId
      password: $password
      updateBoardInput: $updateBoardInput
    ) {
      _id
      title
      contents
    }
  }
`;
const UPLOAD_FILE = client_.gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
;// CONCATENATED MODULE: ./src/components/units/board/write/BoardWrite.container.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const INPUTS_INIT = {
  writer: "",
  password: "",
  title: "",
  contents: "",
  youtubeUrl: ""
};
function BoardWrite(props) {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: inputs,
    1: setInputs
  } = (0,external_react_.useState)(INPUTS_INIT);
  const {
    0: inputsErrors,
    1: setInputsErrors
  } = (0,external_react_.useState)(INPUTS_INIT);
  const {
    0: active,
    1: setActive
  } = (0,external_react_.useState)(false);
  const {
    0: resultId,
    1: setResultId
  } = (0,external_react_.useState)();
  const {
    0: zipcode,
    1: setZipCode
  } = (0,external_react_.useState)("");
  const {
    0: address,
    1: setAddress
  } = (0,external_react_.useState)("");
  const {
    0: addressDetail,
    1: setAddressDetail
  } = (0,external_react_.useState)("");
  const {
    0: isOpenDetail,
    1: setIsOpenDetail
  } = (0,external_react_.useState)(false); // const [imgUrls, setImgUrls] = useState(["", "", ""]);

  const {
    0: files,
    1: setFiles
  } = (0,external_react_.useState)([]);

  function handleCancelDetail() {
    setIsOpenDetail(false);
  }

  function handleOkDetail() {
    setIsOpenDetail(false);
  }

  function onClickAddressDetail(data) {
    setZipCode(data.zonecode);
    setAddress(data.address);
    setAddressDetail(data.addressDetail);
    setIsOpenDetail(false);
  }

  const router = (0,router_.useRouter)();
  const [createBoard] = (0,client_.useMutation)(CREATE_BOARD);
  const [uploadFile] = (0,client_.useMutation)(UPLOAD_FILE);
  const [updateBoard] = (0,client_.useMutation)(UPDATE_BOARD);

  function onChangeInputs(event) {
    const newInputs = _objectSpread(_objectSpread({}, inputs), {}, {
      [event.target.name]: event.target.value
    });

    setInputs(newInputs);
    Object.values(newInputs).every(data => data) ? setActive(true) : setActive(false);
    setInputsErrors(_objectSpread(_objectSpread({}, inputsErrors), {}, {
      [event.target.name]: ""
    }));
  }

  async function onChangeInputsDetail(event) {
    setAddressDetail(event.target.value);
  }

  function handleOK() {
    setIsOpen(false);
    router.push(`/detail/${resultId}`);
  }

  function handleCancel() {
    setIsOpen(false);
  }

  async function onClickSubmit() {
    setInputsErrors({
      writer: inputs.writer ? "" : "작성자를 입력해주세요",
      password: inputs.password ? "" : "비밀번호를 입력해주세요",
      title: inputs.title ? "" : "제목을 입력해주세요",
      contents: inputs.contents ? "" : "내용을 입력해주세요",
      youtubeUrl: ""
    });

    if (Object.values(inputs).every(data => data)) {
      try {
        const resultFiles = await Promise.all(files.map(data => uploadFile({
          variables: {
            file: data
          }
        })));
        const newImages = resultFiles.map(el => el.data.uploadFile.url);
        const result = await createBoard({
          variables: {
            createBoardInput: _objectSpread(_objectSpread({}, inputs), {}, {
              boardAddress: {
                zipcode,
                address,
                addressDetail
              },
              images: newImages
            })
          }
        });
        setIsOpen(true);
        setResultId(result.data.createBoard._id);
      } catch (error) {
        alert(error.message);
      }
    }
  }

  async function onClickUpdate() {
    const newInputs = {};
    if (inputs.title) newInputs.title = inputs.title;
    if (inputs.contents) newInputs.contents = inputs.contents;
    setInputsErrors({
      writer: inputs.writer ? "" : "작성자를 입력해주세요",
      password: inputs.password ? "" : "비밀번호를 입력해주세요",
      title: newInputs.title ? "" : "제목을 입력해주세요",
      contents: newInputs.contents ? "" : "내용을 입력해주세요",
      youtubeUrl: ""
    });

    if (Object.values(inputs).every(data => data)) {
      try {
        const result = await updateBoard({
          variables: {
            boardId: String(router.query.boardId),
            password: inputs.password,
            updateBoardInput: _objectSpread({}, newInputs)
          }
        });
        setIsOpen(true);
        setResultId(result.data.updateBoard._id);
      } catch (error) {
        alert(error.message);
      }
    }
  }

  function onClickAddress(data) {
    setZipCode(data.zonecode);
    setAddress(data.address);
    setAddressDetail(data.addressDetail);
    setIsOpen(false);
  }

  function onCompleteDetail() {
    setIsOpenDetail(true);
  }

  const onChangeFileUrl = (file, index) => {
    const newFileUrl = [...files]; // @ts-ignore

    newFileUrl[index] = file;
    setFiles(newFileUrl);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [!props.isEdit && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Modal, {
      title: "\uAC8C\uC2DC\uBB3C \uB4F1\uB85D",
      visible: isOpen,
      onOk: handleOK,
      onCancel: handleCancel,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: "\uAC8C\uC2DC\uBB3C\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uB4F1\uB85D\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
      })
    }), props.isEdit && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Modal, {
      title: "\uAC8C\uC2DC\uBB3C \uC218\uC815",
      visible: isOpen,
      onOk: handleOK,
      onCancel: handleCancel,
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: "\uAC8C\uC2DC\uBB3C\uC774 \uC131\uACF5\uC801\uC73C\uB85C \uC218\uC815\uB418\uC5C8\uC2B5\uB2C8\uB2E4."
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(BoardWriteUI, {
      onClickUpdate: onClickUpdate,
      zipcode: zipcode,
      address: address // imgUrls={imgUrls}
      ,
      handleOkDetail: handleOkDetail // @ts-ignore
      ,
      onChangeFileUrl: onChangeFileUrl,
      handleCancelDetail: handleCancelDetail,
      onClickAddress: onClickAddress // @ts-ignore
      ,
      onClickAddressDetail: onClickAddressDetail,
      onCompleteDetail: onCompleteDetail,
      onClickSubmit: onClickSubmit,
      onChangeInputs: onChangeInputs,
      inputsErrors: inputsErrors,
      active: active,
      isOpen: isOpen,
      isOpenDetail: isOpenDetail,
      isEdit: props.isEdit,
      data: props.data,
      onChangeInputsDetail: onChangeInputsDetail
    })]
  });
}

/***/ })

};
;