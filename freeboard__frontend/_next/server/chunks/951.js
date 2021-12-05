exports.id = 951;
exports.ids = [951];
exports.modules = {

/***/ 6951:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Upload01_container; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/commons/uploads/Upload01.styles.ts

const PhotoSubWrapper = (styled_default()).div`
  box-sizing: border-box;
  /* border: 1px solid #bdbdbd; */
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    width: 55px;
    height: 55px;
    margin-right: 0;
  }
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
  top: 0;
  left: 0;
  @media (max-width: 767px) {
    width: 80px;
    height: 60px;
  }
`;
;// CONCATENATED MODULE: ./src/components/commons/uploads/Upload01.presenter.tsx




function Upload01UI(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [props.imgUrl || props.newImages ? /*#__PURE__*/jsx_runtime_.jsx(Img, {
      src: props.imgUrl || `https://storage.googleapis.com/${props.newImages}`,
      onClick: props.onClickBox
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(PhotoSubWrapper, {
      onClick: props.onClickBox,
      children: [/*#__PURE__*/jsx_runtime_.jsx(Plus, {
        children: "+"
      }), /*#__PURE__*/jsx_runtime_.jsx(Upload, {
        children: "Upload"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("input", {
      ref: props.fileRef,
      type: "file",
      onChange: props.onChangeFile,
      style: {
        display: "none"
      }
    })]
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/commons/libraries/validations.ts
function checkValidationFile(file) {
  if (!(file !== null && file !== void 0 && file.size)) {
    alert("파일이 없습니다.");
    return false;
  }

  if (file.size > 5 * 1024 * 1024) {
    alert("파일 사이즈가 너무 큽니다. (제한: 5MB)");
    return false;
  }

  if (!(file !== null && file !== void 0 && file.type.includes("png")) && !(file !== null && file !== void 0 && file.type.includes("jpeg"))) {
    alert("png 또는 jpeg 파일만 업로드 가능합니다.");
    return false;
  }

  return true;
}
;// CONCATENATED MODULE: ./src/components/commons/uploads/Upload01.container.tsx




 // import { useForm } from "react-hook-form";

function Upload01(props) {
  const fileRef = (0,external_react_.useRef)(null);
  const {
    0: imgUrl,
    1: setImgUrl
  } = (0,external_react_.useState)("");

  async function onChangeFile(event) {
    var _event$target$files;

    const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : _event$target$files[0];
    if (!checkValidationFile(file)) return;
    console.log(file, "aa");
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = data => {
      var _data$target;

      setImgUrl((_data$target = data.target) === null || _data$target === void 0 ? void 0 : _data$target.result);
      props.onChangeFiles(file, props.index);
    };
  }

  const onClickBox = () => {
    var _fileRef$current;

    (_fileRef$current = fileRef.current) === null || _fileRef$current === void 0 ? void 0 : _fileRef$current.click();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Upload01UI, {
      onChangeFile: onChangeFile,
      onClickBox: onClickBox,
      newImages: props.newImages,
      imgUrl: imgUrl,
      fileRef: fileRef
    })
  });
}

/* harmony default export */ var Upload01_container = (Upload01);

/***/ })

};
;