exports.id = 770;
exports.ids = [770];
exports.modules = {

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

/***/ }),

/***/ 7019:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ marketWrite_container; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/write/marketWrite.queries.ts

const CREATE_USED_ITEM = client_.gql`
  mutation createUseditem($createUseditemInput: CreateUseditemInput!) {
    createUseditem(createUseditemInput: $createUseditemInput) {
      _id
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
const UPDATE_USED_ITEM = client_.gql`
  mutation updateUseditem(
    $updateUseditemInput: UpdateUseditemInput!
    $useditemId: ID!
  ) {
    updateUseditem(
      updateUseditemInput: $updateUseditemInput
      useditemId: $useditemId
    ) {
      _id
    }
  }
`;
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/write/marketWrite.styles.ts

const MainWrapper = (styled_default()).div`
  width: 1000px;
  /* height: 2000px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  padding-bottom: 50px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  @media (max-width: 767px) {
    width: 100%;
    box-shadow: none;
    margin-top: 0;
    padding: 0;
  }
`;
const Title = (styled_default()).h1`
  font-weight: bold;
  font-size: 36px;
  color: #616161;
  margin: 80px 0 50px 0;
  @media (max-width: 767px) {
    margin: 40px 0 0 0;
  }
`;
const MenuWrapper = (styled_default()).div`
  width: 850px;
  margin: 20px 0;
  @media (max-width: 767px) {
    /* margin: 0; */
    max-width: 300px;
  }
`;
const ContentsName = (styled_default()).div`
  font-weight: 500;
  font-size: 16px;
  color: #757575;
  margin-bottom: 20px;
`;
const ContentsInput = (styled_default()).input`
  width: 996px;
  height: 52px;
  border-radius: 5px;
  padding-left: 15px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  outline-color: #757575;
  ::placeholder {
    color: #bdbdbd;
  }
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const ContentsDetail = (styled_default()).div`
  margin-bottom: 20px;
  font-weight: 500;
  color: #757575;
  font-size: 16px;
`;
const ContentsDetailInput = (styled_default()).textarea`
  width: 996px;
  height: 320px;
  resize: none;
  border-radius: 5px;
  padding: 15px 0 0 15px;
  font-size: 17px;
  border: 1px solid #bdbdbd;
  outline-color: #757575;
  ::placeholder {
    color: #bdbdbd;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const RowWrapper = (styled_default()).div`
  display: flex;
  width: 850px;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const LocationWrapper = (styled_default()).div`
  margin-top: 20px;
  /* width: 850px; */
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const Location = (styled_default()).input`
  width: 108px;
  height: 52px;
  font-size: 18px;
  padding: auto 0;
  margin-right: 10px;
  text-align: center;
  border: 1px solid #bdbdbd;
  outline-color: #757575;
  ::placeholder {
    color: #212121;
  }
`;
const LocationImg = (styled_default()).img`
  margin-right: 10px;
`;
const AddressWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;
const AddressInput = (styled_default()).input`
  width: 588px;
  height: 52px;
  margin-bottom: 15px;
  border: 1px solid #bdbdbd;
  outline-color: #757575;
  border-radius: 5px;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const LocationMap = (styled_default()).div`
  background-color: skyblue;
  width: 384px;
  height: 252px;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const SubWrapper = (styled_default()).div`
  display: flex;
  margin-bottom: 36px;
`;
const Upload = (styled_default()).div`
  background-color: lightcyan;
  width: 180px;
  height: 180px;
  margin-right: 24px;
  margin-bottom: 40px;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
`;
const UploadWrapper = (styled_default()).div`
  display: flex;

  margin-bottom: 30px;
  @media (max-width: 767px) {
    width: 300px;
    justify-content: space-between;
  }
`;
const Button = (styled_default()).button`
  width: 179px;
  height: 65px;
  border: none;
  color: white;
  background-color: #35c5f0;
  font-size: 18px;
  border-radius: 5px;
  margin-bottom: 50px;
  cursor: pointer;
  :active {
    position: relative;
    top: 4px;
  }
`;
const Error = (styled_default()).div`
  color: red;
`;
// EXTERNAL MODULE: ./src/components/commons/uploads/Upload01.container.tsx + 3 modules
var Upload01_container = __webpack_require__(6951);
// EXTERNAL MODULE: ./src/components/commons/titles/title02.marketWrite.tsx
var title02_marketWrite = __webpack_require__(5779);
;// CONCATENATED MODULE: ./src/components/commons/inputs/input03.marketWrite.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Input03 = (styled_default()).input`
  width: 850px;
  height: 60px;
  border-radius: 5px;
  padding-left: 15px;
  font-size: 16px;
  border: 1px solid #bdbdbd;
  outline-color: #512771;
  ::placeholder {
    color: #bdbdbd;
  }
  @media (max-width: 767px) {
    width: 300px;
  }
`;
const ErrorMessage = (styled_default()).div`
  color: red;
`;

const InputMarket = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Input03, _objectSpread(_objectSpread({
      type: props.type
    }, props.register), {}, {
      placeholder: props.inputName,
      defaultValue: props.defaultValue
    })), /*#__PURE__*/jsx_runtime_.jsx(ErrorMessage, {
      style: {
        paddingTop: "5px"
      },
      children: props.errorMessage
    })]
  });
};

/* harmony default export */ var input03_marketWrite = (InputMarket);
// EXTERNAL MODULE: ./src/components/commons/buttons/button01.tsx
var button01 = __webpack_require__(4490);
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__(9639);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/commons/kakaoMap/kakaoMap.styles.ts

const kakaoMap_styles_MainWrapper = (styled_default()).div`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const kakaoMap_styles_LocationWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  height: 340px;
`;
const kakaoMap_styles_LocationMap = (styled_default()).div`
  width: 384px;
  height: 252px;
  margin-bottom: 40px;
  margin-right: 30px;
  @media (max-width: 767px) {
    width: 300px;
    margin-right: 0;
  }
`;
const kakaoMap_styles_AddressWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  height: 340px;
  @media (max-width: 767px) {
    width: 300px;
  }
`;
const kakaoMap_styles_SubWrapper = (styled_default()).div`
  display: flex;
  margin-bottom: 36px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const kakaoMap_styles_Location = (styled_default()).input`
  width: 108px;
  height: 52px;
  font-size: 18px;
  padding: auto 0;
  /* margin-right: 10px; */
  text-align: center;
  border: 1px solid #bdbdbd;
  border-radius: 7px;
  outline-color: #512771;
  ::placeholder {
    color: #bdbdbd;
  }
  @media (max-width: 767px) {
    width: 123px;
  }
`;
const kakaoMap_styles_LocationImg = (styled_default()).img`
  margin: 0 10px;
`;
const kakaoMap_styles_AddressInput = (styled_default()).input`
  width: 440px;
  height: 52px;
  margin-bottom: 15px;
  padding-left: 10px;
  border: 1px solid #bdbdbd;
  outline-color: #512771;
  border-radius: 7px;
  @media (max-width: 767px) {
    width: 100%;
  }
`; // export const Location = styled.div``;
// EXTERNAL MODULE: external "react-daum-postcode"
var external_react_daum_postcode_ = __webpack_require__(3903);
var external_react_daum_postcode_default = /*#__PURE__*/__webpack_require__.n(external_react_daum_postcode_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./src/components/commons/kakaoMap/kakaoMap.presenter.tsx







const KakaoMapPage = props => {
  var _props$data, _props$data2, _props$data3, _props$data4;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(kakaoMap_styles_MainWrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(kakaoMap_styles_LocationWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(title02_marketWrite/* default */.Z, {
        divName: "거래위치"
      }), /*#__PURE__*/jsx_runtime_.jsx(kakaoMap_styles_LocationMap, {
        id: "map"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(kakaoMap_styles_AddressWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(title02_marketWrite/* default */.Z, {
        divName: "GPS"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(kakaoMap_styles_SubWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(kakaoMap_styles_Location, {
          placeholder: props.lat,
          readOnly: true,
          defaultValue: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.fetchUseditem.useditemAddress.lat
        }), /*#__PURE__*/jsx_runtime_.jsx(kakaoMap_styles_LocationImg, {
          src: "/FreeBoard/location.svg"
        }), /*#__PURE__*/jsx_runtime_.jsx(kakaoMap_styles_Location, {
          placeholder: props.lng,
          readOnly: true,
          defaultValue: (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.fetchUseditem.useditemAddress.lng
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(title02_marketWrite/* default */.Z, {
        divName: "주소"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        type: "text",
        ref: props.addressRef,
        onClick: props.onClickOpenModal,
        style: {
          display: "none"
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(kakaoMap_styles_AddressInput, {
        onClick: props.onClickBox,
        value: props.data ? (_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : _props$data3.fetchUseditem.useditemAddress.address : props.address
      }), props.isOpen && /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Modal, {
        title: "\uC8FC\uC18C \uAC80\uC0C9\uD558\uAE30",
        visible: props.isOpen,
        onOk: props.handleCancel,
        onCancel: props.handleCancel,
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_daum_postcode_default()), {
          onComplete: props.onComplete
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(kakaoMap_styles_AddressInput, {
        type: "text",
        onChange: props.onChangeAddressDetail,
        defaultValue: (_props$data4 = props.data) === null || _props$data4 === void 0 ? void 0 : _props$data4.fetchUseditem.useditemAddress.addressDetail
      })]
    })]
  });
};

/* harmony default export */ var kakaoMap_presenter = (KakaoMapPage);
;// CONCATENATED MODULE: ./src/components/commons/kakaoMap/kakaoMap.container.tsx




const KakaoMap = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    0: address,
    1: setAddress
  } = (0,external_react_.useState)();
  const addressRef = (0,external_react_.useRef)(null);
  const {
    0: lng,
    1: setLng
  } = (0,external_react_.useState)();
  const {
    0: lat,
    1: setLat
  } = (0,external_react_.useState)();
  const {
    0: addressDetail
  } = (0,external_react_.useState)(); // const [createUsedItem] = useMutation(CREATE_USED_ITEM);

  const onClickOpenModal = () => {
    setIsOpen(true);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  const onClickAddressDetail = () => {
    setIsOpen(false);
  };

  const onComplete = data => {
    setAddress(data.address);
    setIsOpen(false);
  };

  const onChangeAddressDetail = event => {
    props.setAddressDetail(event.target.value);
  };

  (0,external_react_.useEffect)(() => {
    const script = document.createElement("script");
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=f7c32ed029b0a9345341d56c3631807f&libraries=services,clusterer,drawing&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div

        const mapOption = {
          center: new window.kakao.maps.LatLng(37.485298, 126.900966),
          // 지도의 중심좌표
          level: 3 // 지도의 확대 레벨

        }; // 지도를 생성합니다

        const map = new window.kakao.maps.Map(mapContainer, mapOption); // 주소-좌표 변환 객체를 생성합니다

        const geocoder = new window.kakao.maps.services.Geocoder(); // 주소로 좌표를 검색합니다

        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            var _props$data, _props$data2, _props$data3;

            const coords = new window.kakao.maps.LatLng(props.data ? (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.fetchUseditem.useditemAddress.lat : result[0].y, props.data ? (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.fetchUseditem.useditemAddress.lng : result[0].x); // 결과값으로 받은 위치를 마커로 표시합니다

            const marker = new window.kakao.maps.Marker({
              map: map,
              position: coords
            }); // // 인포윈도우로 장소에 대한 설명을 표시합니다
            // const infowindow = new window.kakao.maps.InfoWindow({
            //   // content: `${addressDetail}`,
            // });
            // infowindow.open(map, marker);
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다

            console.log((_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : _props$data3.fetchUseditem.useditemAddress.lng, "aaa");
            marker.setMap(map);
            map.setCenter(coords);
            setLng(coords.La);
            setLat(coords.Ma);
            props.setAddress(address);
            props.setAddressDetail(addressDetail);
            props.setLng(coords.La);
            props.setLat(coords.Ma);
          }
        });
      });
    };
  }, [address, props.setLng]);

  const onClickBox = () => {
    var _addressRef$current;

    (_addressRef$current = addressRef.current) === null || _addressRef$current === void 0 ? void 0 : _addressRef$current.click();
  };

  return /*#__PURE__*/jsx_runtime_.jsx(kakaoMap_presenter, {
    isOpen: isOpen,
    address: address,
    addressDetail: addressDetail,
    lng: lng,
    lat: lat,
    data: props.data,
    defaultAddress: props.defaultAddress,
    addressRef: addressRef,
    onClickBox: onClickBox,
    onComplete: onComplete,
    handleCancel: handleCancel,
    onClickAddressDetail: onClickAddressDetail,
    onClickOpenModal: onClickOpenModal,
    onChangeAddressDetail: onChangeAddressDetail
  });
};

/* harmony default export */ var kakaoMap_container = (KakaoMap);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/write/marketWrite.presenter.tsx



function marketWrite_presenter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function marketWrite_presenter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { marketWrite_presenter_ownKeys(Object(source), true).forEach(function (key) { marketWrite_presenter_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { marketWrite_presenter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function marketWrite_presenter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const ReactQuill = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 5038, 23)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5038)],
    modules: ["../src/components/units/usedMarket/write/marketWrite.presenter.tsx -> " + "react-quill"]
  }
});

const MarketWriteUI = props => {
  var _props$data, _props$errors$name, _props$data2, _props$errors$remarks, _props$errors$content, _props$data3, _props$errors$price, _props$data4, _props$errors$tags;

  return /*#__PURE__*/jsx_runtime_.jsx("form", {
    onSubmit: props.handleSubmit(!props.isEditWrite ? props.onClickItem : props.onClickUpdate),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(MainWrapper, {
      children: [props.isEditWrite ? /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: "\uAC8C\uC2DC\uBB3C \uC218\uC815"
      }) : /*#__PURE__*/jsx_runtime_.jsx(Title, {
        children: "\uAC8C\uC2DC\uBB3C \uB4F1\uB85D"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MenuWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(title02_marketWrite/* default */.Z, {
          divName: "상품명"
        }), /*#__PURE__*/jsx_runtime_.jsx(input03_marketWrite, {
          type: "text",
          inputName: "상품명을 작성해주세요",
          defaultValue: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.fetchUseditem.name,
          register: marketWrite_presenter_objectSpread({}, props.register("name")),
          errorMessage: (_props$errors$name = props.errors.name) === null || _props$errors$name === void 0 ? void 0 : _props$errors$name.message
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MenuWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(title02_marketWrite/* default */.Z, {
          divName: "한줄요약"
        }), /*#__PURE__*/jsx_runtime_.jsx(input03_marketWrite, {
          type: "text",
          inputName: "상품요약을 작성해주세요",
          register: marketWrite_presenter_objectSpread({}, props.register("remarks")),
          defaultValue: (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.fetchUseditem.remarks,
          errorMessage: (_props$errors$remarks = props.errors.remarks) === null || _props$errors$remarks === void 0 ? void 0 : _props$errors$remarks.message
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MenuWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(title02_marketWrite/* default */.Z, {
          divName: "상품 설명"
        }), /*#__PURE__*/jsx_runtime_.jsx(ReactQuill, {
          placeholder: "\uC0C1\uD488\uC744 \uC124\uBA85\uD574\uC8FC\uC138\uC694",
          onChange: props.onChangeValue,
          style: {
            maxWidth: "100%",
            height: "330px",
            borderRadius: "10px",
            fontSize: "16px",
            marginBottom: "20px",
            paddingBottom: "30px",
            outlineColor: "#35c5f0" // ::placeholder {
            //   color: "#bdbdbd"

          }
        }), /*#__PURE__*/jsx_runtime_.jsx(Error, {
          style: {
            paddingTop: "5px"
          },
          children: (_props$errors$content = props.errors.contents) === null || _props$errors$content === void 0 ? void 0 : _props$errors$content.message
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MenuWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(title02_marketWrite/* default */.Z, {
          divName: "판매 가격"
        }), /*#__PURE__*/jsx_runtime_.jsx(input03_marketWrite, {
          type: "text",
          inputName: "판매가격을 입력해주세요",
          defaultValue: (_props$data3 = props.data) === null || _props$data3 === void 0 ? void 0 : _props$data3.fetchUseditem.price,
          register: marketWrite_presenter_objectSpread({}, props.register("price")),
          errorMessage: (_props$errors$price = props.errors.price) === null || _props$errors$price === void 0 ? void 0 : _props$errors$price.message
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(MenuWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(title02_marketWrite/* default */.Z, {
          divName: "태그 입력"
        }), /*#__PURE__*/jsx_runtime_.jsx(input03_marketWrite, {
          type: "text",
          inputName: "#태그 #태그 #태그",
          register: marketWrite_presenter_objectSpread({}, props.register("tags")),
          defaultValue: (_props$data4 = props.data) === null || _props$data4 === void 0 ? void 0 : _props$data4.fetchUseditem.tags,
          errorMessage: (_props$errors$tags = props.errors.tags) === null || _props$errors$tags === void 0 ? void 0 : _props$errors$tags.message
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(RowWrapper, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(LocationWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(kakaoMap_container, {
            setLng: props.setLng,
            setLat: props.setLat,
            setAddress: props.setAddress,
            setAddressDetail: props.setAddressDetail,
            isEditWrite: props.isEditWrite,
            defaultAddress: props.defaultAddress,
            data: props.data
          }), /*#__PURE__*/jsx_runtime_.jsx(title02_marketWrite/* default */.Z, {
            divName: "사진 첨부"
          }), /*#__PURE__*/jsx_runtime_.jsx(UploadWrapper, {
            children: new Array(4).fill(1).map((url, index) => {
              var _props$data5;

              return /*#__PURE__*/jsx_runtime_.jsx(Upload01_container/* default */.Z, {
                index: index,
                newImages: (_props$data5 = props.data) === null || _props$data5 === void 0 ? void 0 : _props$data5.fetchUseditem.images[index],
                data: props.data,
                onChangeFiles: props.onChangeFiles
              }, `${url}_${index}`);
            })
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(button01/* default */.Z, {
        buttonName: props.isEditWrite ? "수정하기" : "등록하기",
        isActive: props.isActive
      })]
    })
  });
};

/* harmony default export */ var marketWrite_presenter = (MarketWriteUI);
// EXTERNAL MODULE: ./src/components/commons/hocs/withAuth.tsx
var withAuth = __webpack_require__(2657);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2166);
// EXTERNAL MODULE: ./src/commons/libraries/yup.validation.ts
var yup_validation = __webpack_require__(9298);
// EXTERNAL MODULE: ./src/components/units/usedMarket/detail/marketDetail.queries.ts
var marketDetail_queries = __webpack_require__(6770);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/write/marketWrite.container.tsx














const MarketWrite = props => {
  const {
    0: files,
    1: setFiles
  } = (0,external_react_.useState)([null, null, null, null]); // const [fileUrl, setFileUrl] = useState([]);

  const {
    0: address,
    1: setAddress
  } = (0,external_react_.useState)(0);
  const {
    0: defaultAddress,
    1: setDefaultAddress
  } = (0,external_react_.useState)("");
  const {
    0: lng,
    1: setLng
  } = (0,external_react_.useState)();
  const {
    0: lat,
    1: setLat
  } = (0,external_react_.useState)();
  const {
    0: addressDetail,
    1: setAddressDetail
  } = (0,external_react_.useState)(0);
  const {
    register,
    handleSubmit,
    setValue,
    formState
  } = (0,external_react_hook_form_.useForm)({
    mode: "onChange",
    resolver: (0,yup_.yupResolver)(yup_validation/* schemaWrite */.cy)
  });
  const router = (0,router_.useRouter)();
  const [createUseditem] = (0,client_.useMutation)(CREATE_USED_ITEM);
  const [updateUseditem] = (0,client_.useMutation)(UPDATE_USED_ITEM);
  const [uploadFile] = (0,client_.useMutation)(UPLOAD_FILE);
  const {
    data
  } = (0,client_.useQuery)(marketDetail_queries/* FETCH_USED_ITEM */.o7, {
    variables: {
      useditemId: router.query.useditemId
    }
  });
  (0,external_react_.useEffect)(() => {
    var _data$fetchUseditem;

    if (!data) return;
    setFiles(data === null || data === void 0 ? void 0 : (_data$fetchUseditem = data.fetchUseditem) === null || _data$fetchUseditem === void 0 ? void 0 : _data$fetchUseditem.images);
    setDefaultAddress(data === null || data === void 0 ? void 0 : data.fetchUseditem.useditemAddress.address);
  }, [data]);

  function onChangeFiles(file, index) {
    const newFiles = [...files];
    newFiles[index] = file;
    setFiles(newFiles);
  }

  const onClickItem = async data => {
    try {
      const uploadFiles = files.filter(data => data).map(data => uploadFile({
        variables: {
          file: data
        }
      }));
      const results = await Promise.all(uploadFiles);
      const images = results.map(data => {
        var _data$data;

        return (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.uploadFile.url;
      });
      const result = await createUseditem({
        variables: {
          createUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: images,
            useditemAddress: {
              address: address,
              addressDetail: addressDetail,
              lat: lat,
              lng: lng
            }
          }
        }
      });
      external_antd_.Modal.success({
        content: "상품이 등록되었습니다!",

        onOk() {
          var _result$data;

          router.push(`/usedMarket/detail/${(_result$data = result.data) === null || _result$data === void 0 ? void 0 : _result$data.createUseditem._id}`);
        }

      });
    } catch (err) {
      external_antd_.Modal.error({
        content: err.message
      });
    }
  };

  const onClickUpdate = async data => {
    const uploadFiles = await Promise.all(files.map(data => typeof data !== "string" ? uploadFile({
      variables: {
        file: data
      }
    }) : data));
    const images = uploadFiles.filter(data => data).map(el => {
      var _el$data, _el$data2;

      return (_el$data = el.data) !== null && _el$data !== void 0 && _el$data.uploadFile.url ? (_el$data2 = el.data) === null || _el$data2 === void 0 ? void 0 : _el$data2.uploadFile.url : el;
    });

    try {
      const result = await updateUseditem({
        variables: {
          updateUseditemInput: {
            name: data.name,
            remarks: data.remarks,
            contents: data.contents,
            price: Number(data.price),
            tags: data.tags,
            images: images,
            useditemAddress: {
              address: address,
              addressDetail: addressDetail,
              lat: lat,
              lng: lng
            }
          },
          useditemId: router.query.useditemId
        }
      });
      console.log(data.name);
      external_antd_.Modal.success({
        content: "수정이 완료되었습니다.",

        onOk() {
          var _result$data2;

          router.push(`/usedMarket/detail/${(_result$data2 = result.data) === null || _result$data2 === void 0 ? void 0 : _result$data2.updateUseditem._id}`);
        }

      });
    } catch (err) {
      external_antd_.Modal.error({
        content: err.message
      });
    }
  }; // const onChangeFileUrl = (imgUrl: string, index: number) => {
  //   const newFileUrl = [...imgUrl];
  //   newFileUrl[index] = imgUrl;
  //   setFileUrl(newFileUrl);
  // };


  const onChangeValue = val => {
    setValue("contents", val);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(marketWrite_presenter, {
      isActive: formState.isValid,
      errors: formState.errors,
      data: data,
      files: files,
      defaultAddress: defaultAddress,
      isEditWrite: props.isEditWrite,
      onClickUpdate: onClickUpdate,
      setLng: setLng,
      setLat: setLat,
      setAddress: setAddress,
      setAddressDetail: setAddressDetail,
      onChangeValue: onChangeValue,
      register: register,
      handleSubmit: handleSubmit,
      onChangeFiles: onChangeFiles // onChangeFileUrl={onChangeFileUrl}
      ,
      onClickItem: onClickItem
    })
  });
};

/* harmony default export */ var marketWrite_container = ((0,withAuth/* default */.Z)(MarketWrite));

/***/ })

};
;