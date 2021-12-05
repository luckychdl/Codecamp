exports.id = 37;
exports.ids = [37];
exports.modules = {

/***/ 4037:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "GlobalContext": function() { return /* binding */ GlobalContext; },
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/commons/layout/banner/Banner.styles.ts

const BannerWrapper = (styled_default()).div`
  height: 400px;
  @media (max-width: 767px) {
    width: 100%;
    height: 150px;
  }
`;
const Banner = (styled_default()).div`
  height: 400px;
  width: 100%;
  background-color: white;
`;
const ImgWrapper = (styled_default()).div`
  width: 100%;
  height: 400px;
  text-align: center;
  @media (max-width: 767px) {
    width: 100%;
    height: 150px;
  }
`;
const LogoImg = (styled_default()).img`
  height: 100%;
  background-color: #35c5f0;
  text-align: center;
  width: 100%;
  display: block;
`;
const Img = (styled_default()).img`
  height: 100%;
  background-position: center;
  /* object-fit: cover; */
  width: 100%;
  display: block;
`;
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
;// CONCATENATED MODULE: ./src/components/commons/layout/banner/Banner.presenter.tsx



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function LayoutBannerUI() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    pauseOnHover: false
  };
  return /*#__PURE__*/jsx_runtime_.jsx(BannerWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Banner, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ImgWrapper, {
          children: /*#__PURE__*/jsx_runtime_.jsx(LogoImg, {
            src: "/FreeBoard/marketBanner1.webp"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ImgWrapper, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Img, {
            src: "/FreeBoard/marketBanner2.webp"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ImgWrapper, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Img, {
            src: "/FreeBoard/marketBanner3.webp"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(ImgWrapper, {
          children: /*#__PURE__*/jsx_runtime_.jsx(Img, {
            src: "/FreeBoard/marketBanner4.webp"
          })
        })]
      }))
    })
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/banner/Banner.container.tsx


function LayoutBanner() {
  return /*#__PURE__*/jsx_runtime_.jsx(LayoutBannerUI, {});
}
;// CONCATENATED MODULE: ./src/components/commons/layout/header/Header.styles.ts

const MainWrapper = (styled_default()).div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 100vw;
  height: 158px;
  background-color: #ffffff;
  /* text-align: center; */
  @media (max-width: 767px) {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
  }
`;
const HeaderMain = (styled_default()).div`
  height: 158px;
  width: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  @media (max-width: 767px) {
    width: 100%;
    height: 10%;
    padding: 10px;
    align-items: flex-end;
  }
`;
const HeaderLogo = (styled_default()).img`
  width: 200px;
  height: 150px;
  text-align: center;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 130px;
    height: 100px;
    margin-left: 30px;
  }
`;
const ButtonWrapper = (styled_default()).div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 20px;
  @media (max-width: 767px) {
    width: 115px;
    margin: 0 0 10px 0;
  }
`;
const LoginButton = (styled_default()).button`
  width: 100px;
  /* height: 50px; */
  color: #616161;
  border: none;
  cursor: pointer;
  font-size: 20px;
  /* border-right: 1px solid #bdbdbd; */
  background-color: #ffffff;
  :active {
    position: relative;
    top: 2px;
    border-radius: 10px;
  }
  :hover {
    color: #512771;
  }
  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
  }
`; // export const MyPageButton = styled.button`
//   width: 120px;
//   height: 50px;
//   color: #616161;
//   border: none;
//   cursor: pointer;
//   font-size: 20px;
//   background-color: #ffffff;
//   :active {
//     position: relative;
//     top: 2px;
//     border-radius: 10px;
//   }
//   :hover {
//     color: #512771;
//   }
// `;

const ProfileImg = (styled_default()).img`
  width: 30px;
  height: 30px;
`;
const TooltipImg = (styled_default()).img`
  width: 20px;
  transform: ${props => props.isMore ? "rotate(0.5turn)" : ""};
`;
const Wrapper = (styled_default()).div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const UserName = (styled_default()).div`
  font-size: 20px;
  margin-right: 10px;
  @media (max-width: 767px) {
    font-size: 12px;
    width: 100px;
    margin-right: 5px;
    text-align: end;
  }
`;
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/commons/libraries/utils.js
var utils = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/components/commons/payment/payment.styles.ts

const payment_styles_MainWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 400px;
  height: 350px;
  border-radius: 40px;
  position: absolute;
  left: 0px;
  top: 0px;
`;
const ClearImg = (styled_default()).img`
  top: 30px;
  position: absolute;
  cursor: pointer;
`;
const PaymentImg = (styled_default()).img`
  margin-top: 40px;
`;
const Message = (styled_default()).div`
  font-size: 20px;
  margin: 20px 0;
`;
const payment_styles_ButtonWrapper = (styled_default()).div``;
const SubWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ClearWrapper = (styled_default()).div`
  display: flex;
  width: 340px;
  height: 320px;
  justify-content: flex-end;
  align-items: center;
`;
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/commons/payment/payment.queries.ts

const CREATE_POINT_TRANSACTION_OF_LOADING = client_.gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;
const FETCH_USER_LOGGED_IN = client_.gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
      userPoint {
        _id
        amount
      }
    }
  }
`;
// EXTERNAL MODULE: ./src/components/commons/buttons/button01.tsx
var button01 = __webpack_require__(4490);
;// CONCATENATED MODULE: ./src/components/commons/payment/payment.presenter.tsx











const PaymentPageUI = props => {
  const {
    Option
  } = external_antd_.Select;
  const {
    0: amount,
    1: setAmount
  } = (0,external_react_.useState)(0);
  const {
    data
  } = (0,client_.useQuery)(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = (0,client_.useMutation)(CREATE_POINT_TRANSACTION_OF_LOADING);

  const onClickPayment = () => {
    window.IMP.init("imp49910675");
    window.IMP.request_pay({
      // param
      pg: "html5_inicis",
      pay_method: "card",
      name: "포인트충전",
      amount: amount,
      buyer_email: data.fetchUserLoggedIn.email,
      buyer_name: data.fetchUserLoggedIn.userPoint.name,
      // buyer_tel: "010-4112-2653",
      // buyer_addr: "서울특별시 강남구 신사동",
      // buyer_postcode: "01181",
      m_redirect_url: "/quiz/payment/complete"
    }, async rsp => {
      // callback
      if (rsp.success) {
        await createPointTransactionOfLoading({
          variables: {
            impUid: rsp.imp_uid
          }
        });
        external_antd_.Modal.success({
          content: "결제가 완료되었습니다.",

          onOk() {
            props.onClickIsClear();
          }

        });
      } else {
        external_antd_.Modal.error({
          content: "결제가 실패되었습니다."
        });
      }
    });
  }; // @ts-ignore


  const handleChange = value => {
    // @ts-ignore
    setAmount(`${value}`);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("script", {
        type: "text/javascript",
        src: "https://code.jquery.com/jquery-1.12.4.min.js"
      }), /*#__PURE__*/jsx_runtime_.jsx("script", {
        type: "text/javascript",
        src: "https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(payment_styles_MainWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(ClearWrapper, {
        children: /*#__PURE__*/jsx_runtime_.jsx(ClearImg, {
          src: "/FreeBoard/clear.svg",
          onClick: props.onClickIsClear
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SubWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(PaymentImg, {
          src: "/FreeBoard/payment.svg"
        }), /*#__PURE__*/jsx_runtime_.jsx(Message, {
          children: "\uCDA9\uC804\uD558\uC2E4 \uAE08\uC561\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694!"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Select, {
          defaultValue: "\uCDA9\uC804\uAE08\uC561",
          style: {
            width: "120px",
            fontSize: "20px"
          },
          onChange: handleChange,
          children: [/*#__PURE__*/jsx_runtime_.jsx(Option, {
            value: "500",
            style: {
              width: "100px",
              fontSize: "20px"
            },
            children: "500 P"
          }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
            value: "1000",
            style: {
              width: "100px",
              fontSize: "20px"
            },
            children: "1,000 P"
          }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
            value: "2000",
            style: {
              width: "100px",
              fontSize: "20px"
            },
            children: "2,000 P"
          }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
            value: "5000",
            style: {
              width: "100px",
              fontSize: "20px"
            },
            children: "5,000 P"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(payment_styles_ButtonWrapper, {
          children: /*#__PURE__*/jsx_runtime_.jsx(button01/* default */.Z, {
            buttonName: "\uCDA9\uC804\uD558\uAE30",
            onClick: onClickPayment
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var payment_presenter = (PaymentPageUI);
;// CONCATENATED MODULE: ./src/components/commons/dropDown/dropDown.queries.ts

const dropDown_queries_FETCH_USER_LOGGED_IN = client_.gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
      userPoint {
        _id
        amount
      }
    }
  }
`;
const LOGOUT_USER = client_.gql`
  mutation logoutUser {
    logoutUser
  }
`;
;// CONCATENATED MODULE: ./src/components/commons/dropDown/dropDown.styles.ts

const dropDown_styles_MainWrapper = (styled_default()).div`
  width: 300px;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;
const dropDown_styles_ProfileImg = (styled_default()).img`
  width: 70px;
  margin-right: 30px;
  cursor: pointer;
`;
const ProfileWrapper = (styled_default()).div`
  display: flex;
  justify-content: center;
  width: 270px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #bdbdbd;
`;
const NameWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
`;
const Name = (styled_default()).div`
  font-size: 22px;
  cursor: pointer;
`;
const Point = (styled_default()).div`
  font-size: 22px;
`;
const dropDown_styles_SubWrapper = (styled_default()).div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const LogOutWrapper = (styled_default()).div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
`;
const dropDown_styles_PaymentImg = (styled_default()).img`
  width: 50px;
  margin-right: 30px;
  cursor: pointer;
`;
const PaymentButton = (styled_default()).div`
  font-size: 22px;
  cursor: pointer;
`;
const LogoutImg = (styled_default()).img`
  width: 50px;
  margin-right: 30px;
  cursor: pointer;
`;
const LogoutMenu = (styled_default()).div`
  font-size: 22px;
  cursor: pointer;
`;
;// CONCATENATED MODULE: ./src/components/commons/dropDown/dropDown.tsx













const DropDownPage = () => {
  const {
    setAccessToken,
    setUserInfo
  } = (0,external_react_.useContext)(GlobalContext);
  const router = (0,router_.useRouter)();
  const {
    0: isOpen,
    1: setIsOpen
  } = (0,external_react_.useState)(false);
  const {
    data
  } = (0,client_.useQuery)(dropDown_queries_FETCH_USER_LOGGED_IN);
  const [logoutUser] = (0,client_.useMutation)(LOGOUT_USER);
  const client = (0,client_.useApolloClient)();

  const onClickLogout = async () => {
    try {
      await logoutUser();
      await client.clearStore();
      if (setAccessToken) setAccessToken("");
      if (setUserInfo) setUserInfo({}); // await client.clearStore().then(() => {
      //   client.resetStore();
      // });

      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userInfo");
      external_antd_.Modal.success({
        content: "로그아웃 되었습니다."
      });
    } catch (err) {
      external_antd_.Modal.error({
        content: err.message
      });
    }
  };

  const onClickIsOpen = () => {
    setIsOpen(prev => !prev);
  };

  const onClickIsClear = () => {
    setIsOpen(prev => !prev);
  };

  const onClickMyPage = () => {
    router.push("/myPage");
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Modal, {
      visible: isOpen,
      footer: null,
      style: {
        overflow: "auto",
        borderRadius: "40px",
        paddingBottom: "0px"
      },
      bodyStyle: {
        height: "350px"
      },
      closable: false,
      width: 400,
      children: /*#__PURE__*/jsx_runtime_.jsx(payment_presenter, {
        onClickIsClear: onClickIsClear
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(dropDown_styles_MainWrapper, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ProfileWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(dropDown_styles_ProfileImg, {
          src: "/FreeBoard/profile.svg",
          onClick: onClickMyPage
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NameWrapper, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(Name, {
            onClick: onClickMyPage,
            children: data === null || data === void 0 ? void 0 : data.fetchUserLoggedIn.name
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Point, {
            children: [(0,utils/* getComma */.H)(data === null || data === void 0 ? void 0 : data.fetchUserLoggedIn.userPoint.amount), " P"]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(dropDown_styles_SubWrapper, {
        onClick: onClickIsOpen,
        children: [/*#__PURE__*/jsx_runtime_.jsx(dropDown_styles_PaymentImg, {
          src: "/FreeBoard/savings.svg"
        }), /*#__PURE__*/jsx_runtime_.jsx(PaymentButton, {
          children: "\uCDA9\uC804\uD558\uAE30"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(LogOutWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(LogoutImg, {
          src: "/FreeBoard/logout.svg"
        }), /*#__PURE__*/jsx_runtime_.jsx(LogoutMenu, {
          onClick: onClickLogout,
          children: "\uB85C\uADF8\uC544\uC6C3"
        })]
      })]
    })]
  });
};

/* harmony default export */ var dropDown = (DropDownPage);
;// CONCATENATED MODULE: ./src/components/commons/layout/header/Header.presenter.tsx








function LayoutHeaderUI(props) {
  const {
    0: isMore,
    1: setIsMore
  } = (0,external_react_.useState)(false);
  const {
    userInfo,
    accessToken
  } = (0,external_react_.useContext)(GlobalContext);

  const onClickIsMore = () => {
    setIsMore(prev => !prev);
  };

  const menu = /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Menu, {
    style: {
      borderRadius: "30px"
    },
    onClick: onClickIsMore,
    children: /*#__PURE__*/jsx_runtime_.jsx(dropDown, {
      onClick: onClickIsMore
    })
  });

  return /*#__PURE__*/jsx_runtime_.jsx(MainWrapper, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderMain, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(HeaderLogo, {
        src: "/FreeBoard/marketLogo.webp",
        onClick: props.onClickMoveToHome
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonWrapper, {
        children: [!accessToken ? /*#__PURE__*/jsx_runtime_.jsx(LoginButton, {
          onClick: props.onClickMoveToLogin,
          children: "\uB85C\uADF8\uC778"
        }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(UserName, {
            children: [userInfo.name, " \uB2D8"]
          }), /*#__PURE__*/jsx_runtime_.jsx(external_antd_.Dropdown, {
            overlay: menu,
            placement: "bottomCenter",
            trigger: ["click"],
            onVisibleChange: onClickIsMore,
            arrow: true,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_antd_.Button, {
              style: {
                border: "none",
                padding: "0"
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(ProfileImg, {
                src: "/FreeBoard/profile.svg"
              }), /*#__PURE__*/jsx_runtime_.jsx(TooltipImg, {
                src: "/FreeBoard/more.svg",
                isMore: isMore
              })]
            })
          })]
        }), !accessToken ? /*#__PURE__*/jsx_runtime_.jsx(LoginButton, {
          onClick: props.onClickMoveToSingin,
          children: "\uD68C\uC6D0\uAC00\uC785"
        }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {})]
      })]
    })
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/header/Header.queries.ts

const Header_queries_FETCH_USER_LOGGED_IN = client_.gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      name
      email
      userPoint {
        _id
        amount
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/components/commons/layout/header/Header.container.tsx






function LayoutHeader() {
  const {
    0: token,
    1: setToken
  } = (0,external_react_.useState)("");
  const {
    data
  } = (0,client_.useQuery)(Header_queries_FETCH_USER_LOGGED_IN);
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    // @ts-ignore
    setToken(localStorage.getItem("refreshToken"));
  }, []);

  const onClickMoveToSingin = () => {
    router.push("../boards/signup");
  };

  const onClickMoveToLogin = () => {
    router.push("/boards/login");
  };

  const onClickMoveToHome = () => {
    router.push("/usedMarket");
  };

  const onClickMoveToMyPage = () => {
    router.push("/myPage");
  };

  return /*#__PURE__*/jsx_runtime_.jsx(LayoutHeaderUI, {
    token: token // @ts-ignore
    ,
    data: data,
    onClickMoveToMyPage: onClickMoveToMyPage,
    onClickMoveToSingin: onClickMoveToSingin,
    onClickMoveToLogin: onClickMoveToLogin,
    onClickMoveToHome: onClickMoveToHome
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/navigation/Navigation.styles.ts

const Navigation_styles_Wrapper = (styled_default()).div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: #512771;
  @media (max-width: 767px) {
    width: 100%;
    height: 40px;
  }
`;
const FreeBoard = (styled_default()).div`
  font-size: 18px;
  width: 83px;
  color: #ffffff;
  text-align: center;
  margin: 0 40px;
  cursor: pointer;
  :hover {
    color: #616161;
  }
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    font-size: 10px;
    margin: 0 10px;
  }
`;
const Market = (styled_default()).div`
  font-size: 18px;
  width: 83px;
  text-align: center;
  margin: 0 40px;
  color: #ffffff;
  cursor: pointer;
  :hover {
    color: #616161;
  }
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    font-size: 10px;
    margin: 0 10px;
  }
`;
const MyPage = (styled_default()).div`
  margin: 0 40px;
  text-align: center;
  font-size: 18px;
  width: 83px;
  color: #ffffff;
  cursor: pointer;
  :hover {
    color: #616161;
  }
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    font-size: 10px;
    margin: 0 10px;
  }
`;
const Line = (styled_default()).div`
  color: #ffffff;
  /* border: 1px solid #ffffff;
  height: 20px; */
`;
const Gallery = (styled_default()).div`
  margin: 0 40px;
  text-align: center;
  font-size: 18px;
  width: 83px;
  color: #ffffff;
  cursor: pointer;
  :hover {
    color: #616161;
  }
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    font-size: 10px;
    margin: 0 10px;
  }
`;
;// CONCATENATED MODULE: ./src/components/commons/layout/navigation/Navigation.presenter.tsx



function LayoutNavigationUI(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Navigation_styles_Wrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Gallery, {
      children: "\uAC24\uB7EC\uB9AC"
    }), /*#__PURE__*/jsx_runtime_.jsx(Line, {
      children: "|"
    }), /*#__PURE__*/jsx_runtime_.jsx(FreeBoard, {
      onClick: props.onClickMoveToBoard,
      children: "\uC790\uC720\uAC8C\uC2DC\uD310"
    }), /*#__PURE__*/jsx_runtime_.jsx(Line, {
      children: "|"
    }), /*#__PURE__*/jsx_runtime_.jsx(Market, {
      onClick: props.onClickMoveToMarket,
      children: "\uC911\uACE0\uB9C8\uCF13"
    }), /*#__PURE__*/jsx_runtime_.jsx(Line, {
      children: "|"
    }), /*#__PURE__*/jsx_runtime_.jsx(MyPage, {
      onClick: props.onClickMoveToMypage,
      children: "\uB9C8\uC774\uD398\uC774\uC9C0"
    })]
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/navigation/Navigation.container.tsx



function LayoutNavigation() {
  const router = (0,router_.useRouter)();

  const onClickMoveToBoard = () => {
    router.push("../../../../../boards");
  };

  const onClickMoveToMarket = () => {
    router.push("../../../../../usedMarket");
  };

  const onClickMoveToMypage = () => {
    router.push("../../../../../myPage");
  };

  return /*#__PURE__*/jsx_runtime_.jsx(LayoutNavigationUI, {
    onClickMoveToBoard: onClickMoveToBoard,
    onClickMoveToMarket: onClickMoveToMarket,
    onClickMoveToMypage: onClickMoveToMypage
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/footer/Footer.styles.ts

const Footer_styles_MainWrapper = (styled_default()).div`
  margin-top: 100px;
  width: 100%;
  background-color: #512771;
  @media (max-width: 767px) {
    margin-top: 50px;
  }
`;
const Footer = (styled_default()).img`
  width: 330px;
  height: 300px;
  @media (max-width: 767px) {
    width: 150px;
    height: 150px;
  }
`;
;// CONCATENATED MODULE: ./src/components/commons/layout/footer/Footer.presenter.tsx


function LayoutFooterUI() {
  return /*#__PURE__*/jsx_runtime_.jsx(Footer_styles_MainWrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Footer, {
      src: "/FreeBoard/img.jpeg"
    })
  });
}
;// CONCATENATED MODULE: ./src/components/commons/layout/footer/Footer.container.tsx


function LayoutFooter() {
  return /*#__PURE__*/jsx_runtime_.jsx(LayoutFooterUI, {});
}
;// CONCATENATED MODULE: ./src/components/commons/index.tsx








const Body = (styled_default()).div`
  /* height: 500px; */
  width: 100%;
  min-height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
function Layout(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(LayoutHeader, {}), /*#__PURE__*/jsx_runtime_.jsx(LayoutBanner, {}), /*#__PURE__*/jsx_runtime_.jsx(LayoutNavigation, {}), /*#__PURE__*/jsx_runtime_.jsx(Body, {
      children: props.children
    }), /*#__PURE__*/jsx_runtime_.jsx(LayoutFooter, {})]
  });
}
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(7381);
// EXTERNAL MODULE: external "@apollo/client/link/error"
var error_ = __webpack_require__(3245);
;// CONCATENATED MODULE: ./src/commons/styles/globalStyles.ts

const globalStyles = react_.css`
  * {
    margin: 0px;
    /* color: #616161; */
    /* box-sizing: border-box;*/
    font-family: "Poor Story", "Arial", sans-serif;
  }

  @font-face {
    font-family: "Poor Story", "Arial", sans-serif;
    src: url("https://fonts.googleapis.com/css2?family=Poor+Story&display=swap");
  }
`;
// EXTERNAL MODULE: external "apollo-upload-client"
var external_apollo_upload_client_ = __webpack_require__(3483);
// EXTERNAL MODULE: external "graphql-request"
var external_graphql_request_ = __webpack_require__(7435);
;// CONCATENATED MODULE: ./src/commons/libraries/getAccessToken.ts


const RESTORE_ACCESS_TOKEN = client_.gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`; // 1. refreshToken으로 새로운 accessToken 발급 받기

const getAccessToken = async setAccessToken => {
  try {
    const graphQLClient = new external_graphql_request_.GraphQLClient("https://backend02.codebootcamp.co.kr/graphql07", {
      credentials: "include"
    });
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (err) {
    console.log(err.message);
  }
};
;// CONCATENATED MODULE: ./pages/_app.tsx



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const GlobalContext = /*#__PURE__*/(0,external_react_.createContext)({});

function MyApp({
  Component,
  pageProps
}) {
  const {
    0: accessToken,
    1: setAccessToken
  } = (0,external_react_.useState)("");
  const {
    0: userInfo,
    1: setUserInfo
  } = (0,external_react_.useState)({});
  const value = {
    accessToken: accessToken,
    setAccessToken: setAccessToken,
    userInfo: userInfo,
    setUserInfo: setUserInfo
  };
  (0,external_react_.useEffect)(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
    if (localStorage.getItem("userInfo")) setUserInfo(JSON.parse(localStorage.getItem("userInfo") || "{}"));
  }, []);
  const errorLink = (0,error_.onError)(({
    graphQLErrors,
    operation,
    forward
  }) => {
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        var _err$extensions;

        if (((_err$extensions = err.extensions) === null || _err$extensions === void 0 ? void 0 : _err$extensions.code) === "UNAUTHENTICATED") {
          operation.setContext({
            headers: _app_objectSpread(_app_objectSpread({}, operation.getContext().headers), {}, {
              authorization: `Bearer ${getAccessToken(setAccessToken)}`
            })
          });
          return forward(operation);
        }
      }
    }
  });
  const uploadLink = (0,external_apollo_upload_client_.createUploadLink)({
    uri: "https://backend02.codebootcamp.co.kr/graphql07",
    headers: {
      authorization: `Bearer ${accessToken}`
    },
    credentials: "include"
  });
  const client = new client_.ApolloClient({
    uri: "http://backend02.codebootcamp.co.kr/graphql07",
    link: client_.ApolloLink.from([errorLink, uploadLink]),
    cache: new client_.InMemoryCache()
  });
  return /*#__PURE__*/jsx_runtime_.jsx(GlobalContext.Provider, {
    value: value,
    children: /*#__PURE__*/jsx_runtime_.jsx(client_.ApolloProvider, {
      client: client,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Global, {
          styles: globalStyles
        }), /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))]
      })
    })
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 4722:
/***/ (function() {



/***/ })

};
;