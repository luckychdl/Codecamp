exports.id = 146;
exports.ids = [146];
exports.modules = {

/***/ 7146:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ marketMain_container; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(8074);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./src/components/commons/buttons/button01.tsx
var button01 = __webpack_require__(4490);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(6177);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./src/components/commons/toTop/toTop.tsx


const Top = (styled_default()).img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 9999;
  margin: 50px;
`;
const Wrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: sticky;
  bottom: 0px;
`;

const ToTop = () => {
  const onClickTop = () => {
    window.scrollTo(0, 0);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Wrapper, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Top, {
      onClick: onClickTop,
      src: "/FreeBoard/topArrow.svg"
    })
  });
};

/* harmony default export */ var toTop = (ToTop);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/main/marketMain.styles.ts

const TotalWrapper = (styled_default()).div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1090px;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
const MainWrapper = (styled_default()).div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 80px;
  padding-bottom: 50px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  @media (max-width: 767px) {
    width: 100%;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
`;
const BestWrapper = (styled_default()).div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1090px;
`;
const Best = (styled_default()).div`
  width: 250px;
  margin: 20px 20px 80px 20px;
  height: 330px;
  background-color: skyblue;
`;
const MenuWrapper = (styled_default()).div`
  max-width: 1050px;
  border-bottom: 1px solid #bdbdbd;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const SubWrapper = (styled_default()).div`
  display: flex;
  width: 100%;
  max-width: 1050px;
  justify-content: flex-start;
  margin-bottom: 50px;
  @media (max-width: 767px) {
    width: 100%;
    /* max-width: 100vw; */
    margin: 0;
  }
`;
const SellWrapper = (styled_default()).div`
  margin-left: 30px;
  display: flex;
  max-width: 1050px;
  justify-content: flex-start;
  @media (max-width: 767px) {
    width: 100%;
    margin: 0;
  }
`;
const SellOn = (styled_default()).div`
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  color: ${props => props.isSelling ? "#512771" : "#757575"};
  border-bottom: ${props => props.isSelling ? "3px solid #512771;" : "none"};
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
const SoldOut = (styled_default()).div`
  margin: 10px;
  font-size: 16px;
  cursor: pointer;
  color: ${props => props.isSold ? "#512771" : "#757575"};
  border-bottom: ${props => props.isSold ? "3px solid #512771;" : "none"};
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
const Search = (styled_default()).input`
  margin-right: 10px;
  width: 210px;
  height: 45px;
  border: 1px solid #bdbdbd;
  padding-left: 40px;
  outline-color: #512771;
  background-image: url("/FreeBoard/search.svg");
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 10px;
  @media (max-width: 767px) {
    width: 130px;
    height: 30px;
  }
`;
const SearchImg = (styled_default()).img`
  position: fixed;
  z-index: 2;
`;
const marketMain_styles_Date = (styled_default()).div`
  margin-right: 10px;
`;
const SearchBtn = (styled_default()).button`
  margin-right: 10px;
  width: 78px;
  height: 45px;
  border-radius: 5px;
  cursor: pointer;
  background-color: #512771;
  color: white;
  border: none;
  @media (max-width: 767px) {
    width: 50px;
    height: 30px;
    font-size: 12px;
  }
`;
const SearchWrapper = (styled_default()).div`
  display: flex;
  width: 950px;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const ListWrapper = (styled_default()).div`
  max-width: 950px;
  display: flex;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;
const Img = (styled_default()).img`
  width: 160px;
  height: 160px;
  margin-right: 40px;
  margin-left: 10px;
  @media (max-width: 767px) {
    width: 80px;
    height: 80px;
    margin: 0 10px 0 10px;
  }
`;
const InfoWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 170px;
  }
`;
const Name = (styled_default()).div`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 5px;
  @media (max-width: 767px) {
    font-size: 12px;
    overflow: auto;
  }
`;
const Remarks = (styled_default()).div`
  font-size: 16px;
  @media (max-width: 767px) {
    font-size: 10px;
    height: 10px;
    overflow: hidden;
  }
`;
const Tags = (styled_default()).div`
  @media (max-width: 767px) {
    font-size: 8px;
    overflow: hidden;
  }
`;
const InfoSecondWrapper = (styled_default()).div`
  display: flex;
  align-items: center;
`;
const Seller = (styled_default()).div`
  margin-right: 20px;
  @media (max-width: 767px) {
    font-size: 10px;
  }
`;
const HeartImage = (styled_default()).img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  @media (max-width: 767px) {
    width: 10px;
    height: 10px;
  }
`;
const HeartScore = (styled_default()).div`
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 10px;
  }
`;
const ListSecondWrapper = (styled_default()).div``;
const PriceWrapper = (styled_default()).div`
  display: flex;
  align-items: center;
  width: 150px;
  @media (max-width: 767px) {
    width: 70px;
    justify-content: flex-end;
    padding-right: 20px;
  }
`;
const PriceImg = (styled_default()).img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  @media (max-width: 767px) {
    width: 10px;
    height: 10px;
  }
`;
const Price = (styled_default()).div`
  font-weight: bold;
  font-size: 24px;
  @media (max-width: 767px) {
    font-size: 12px;
    /* width: 90px; */
  }
`;
const ListMainWrapper = (styled_default()).div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 950px;
  padding-top: 10px;
  border-bottom: 1px solid #bdbdbd;
  :hover {
    background-color: #ede7f6;

    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const NameWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  @media (max-width: 767px) {
    height: 60px;
    width: 80%;
  }
`;
const NameSubWrapper = (styled_default()).div``;
const TodayWrapper = (styled_default()).div``;
const TopWrapper = (styled_default()).div`
  display: flex;
  width: 50px;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 767px) {
    display: none;
  }
`;
// EXTERNAL MODULE: ./src/commons/libraries/utils.js
var utils = __webpack_require__(2750);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/today/today.styles.ts

const TodayProductWrapper = (styled_default()).div`
  width: 100%;
  max-width: 210px;
  height: 855.33px;
  margin-left: 20px;
  margin-top: 80px;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  top: 0px;
  /* right: 3%; */
  position: sticky;
  background-color: white;
  z-index: 10;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
const TodayTitle = (styled_default()).div`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #bdbdbd;
`;
const today_styles_TodayWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  width: 130px;

  padding: 20px;
`;
const TodayImg = (styled_default()).img`
  width: 120px;
  height: 120px;
  margin: 10px;
`;
const TodayName = (styled_default()).div`
  font-weight: 500;
  font-size: 16px;
`;
const TodayRemarks = (styled_default()).div`
  font-size: 14px;
`;
const TodayPrice = (styled_default()).div`
  font-weight: bold;
  font-size: 16px;
`;
const TodayTags = (styled_default()).div`
  color: #bdbdbd;
  font-size: 10px;
`;
const today_styles_Wrapper = (styled_default()).div`
  /* border: 1px solid #757575; */
  display: flex;
  width: 190px;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  :hover {
    background-color: #ede7f6;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  :active {
    top: 4px;
    position: relative;
  }
`;
;// CONCATENATED MODULE: ./src/components/units/usedMarket/today/today.presenter.tsx





const TodayUI = props => {
  var _props$basketData;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(TodayProductWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(TodayTitle, {
      children: "\uC624\uB298 \uBCF8 \uC0C1\uD488"
    }), (_props$basketData = props.basketData) === null || _props$basketData === void 0 ? void 0 : _props$basketData.map(data => /*#__PURE__*/(0,jsx_runtime_.jsxs)(today_styles_Wrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(TodayImg, {
        src: `https://storage.googleapis.com/${data.images[0]}`,
        onClick: props.onClickMove(data)
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(today_styles_TodayWrapper, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(TodayName, {
          children: data.name
        }), /*#__PURE__*/jsx_runtime_.jsx(TodayRemarks, {
          children: data.remarks
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(TodayPrice, {
          children: [(0,utils/* getComma */.H)(data.price), "\uC6D0"]
        }), /*#__PURE__*/jsx_runtime_.jsx(TodayTags, {
          children: data.tags
        })]
      })]
    }, data._id))]
  });
};

/* harmony default export */ var today_presenter = (TodayUI);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/today/today.container.tsx





const Today = () => {
  const {
    0: basketData,
    1: setBasketData
  } = (0,external_react_.useState)([]);
  const router = (0,router_.useRouter)();
  (0,external_react_.useEffect)(() => {
    /* @ts-ignore */
    const basket = JSON.parse(localStorage.getItem("baskets"));
    setBasketData(basket);
  }, []);

  const onClickMove = el => () => {
    router.push(`/usedMarket/detail/${el._id}`);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(today_presenter, {
    basketData: basketData,
    onClickMove: onClickMove
  });
};

/* harmony default export */ var today_container = (Today);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/bestItem/bestItem.queries.ts

const FETCH_USEDITEM_BEST = client_.gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
    }
  }
`;
;// CONCATENATED MODULE: ./src/components/units/usedMarket/bestItem/bestItem.styles.ts

const bestItem_styles_MainWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const MainTitle = (styled_default()).div`
  font-weight: bold;
  font-size: 36px;
  margin-top: 100px;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;
const bestItem_styles_BestWrapper = (styled_default()).div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
const bestItem_styles_Best = (styled_default()).img`
  width: 210px;
  height: 210px;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;
const bestItem_styles_Name = (styled_default()).div`
  font-size: 30px;
  width: 180px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 767px) {
    font-size: 12px;
    width: 100%;
  }
`;
const bestItem_styles_Remarks = (styled_default()).div`
  font-size: 20px;
  @media (max-width: 767px) {
    font-size: 12px;
    width: 100%;
  }
`;
const bestItem_styles_Price = (styled_default()).div`
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 12px;
    width: 100%;
  }
`;
const bestItem_styles_Tags = (styled_default()).div`
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 12px;
    width: 100%;
  }
`;
const ColumnWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  background-color: #ffffff;
  justify-content: flex-start;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  :hover {
    background-color: #ede7f6;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    bottom: 4px;
    position: relative;
  }
  :active {
    top: 4px;
    position: relative;
  }
  @media (max-width: 767px) {
    width: 25%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-grow: 1;
  }
`;
const Heart = (styled_default()).img`
  @media (max-width: 767px) {
    width: 25%;
  }
`;
const HeartCount = (styled_default()).div`
  @media (max-width: 767px) {
    font-size: 10px;
    width: 100%;
  }
`;
const HeartWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const ColumnSubWrapper = (styled_default()).div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 80px;
  }
`;
const ContentsWrapper = (styled_default()).div`
  display: flex;
  justify-content: space-between;
`;
;// CONCATENATED MODULE: ./src/components/units/usedMarket/bestItem/bestItem.presenter.tsx






const BestItemUI = props => {
  var _props$data;

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(bestItem_styles_MainWrapper, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(MainTitle, {
      children: "\uBCA0\uC2A4\uD2B8\uC0C1\uD488"
    }), /*#__PURE__*/jsx_runtime_.jsx(bestItem_styles_BestWrapper, {
      children: (_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.fetchUseditemsOfTheBest.map((el, index) => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ColumnWrapper, {
          onClick: props.onClickMove(el._id),
          children: [/*#__PURE__*/jsx_runtime_.jsx(bestItem_styles_Best, {
            src: `https://storage.googleapis.com/${el.images[0]}`
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentsWrapper, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ColumnSubWrapper, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(bestItem_styles_Name, {
                children: el.name
              }), /*#__PURE__*/jsx_runtime_.jsx(bestItem_styles_Remarks, {
                children: el.remarks
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(bestItem_styles_Price, {
                children: [(0,utils/* getComma */.H)(el.price), "\uC6D0"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(bestItem_styles_Tags, {
                children: ["#", el.tags]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeartWrapper, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Heart, {
                src: "/FreeBoard/heart.svg"
              }), /*#__PURE__*/jsx_runtime_.jsx(HeartCount, {
                children: el.pickedCount
              })]
            })]
          })]
        }, `${el}_${index}`)
      }))
    })]
  });
};

/* harmony default export */ var bestItem_presenter = (BestItemUI);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/bestItem/bestItem.container.tsx






const BestItem = () => {
  const router = (0,router_.useRouter)();
  const {
    data
  } = (0,client_.useQuery)(FETCH_USEDITEM_BEST, {
    variables: router.query.useditemId
  });

  const onClickMove = id => () => {
    router.push(`/usedMarket/detail/${id}`);
  };

  return /*#__PURE__*/jsx_runtime_.jsx(bestItem_presenter, {
    data: data,
    onClickMove: onClickMove
  });
};

/* harmony default export */ var bestItem_container = (BestItem);
// EXTERNAL MODULE: external "react-infinite-scroller"
var external_react_infinite_scroller_ = __webpack_require__(436);
var external_react_infinite_scroller_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroller_);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/main/marketMain.presenter.tsx



// import { getDate } from "../../../../commons/libraries/utils";








const MarketMainUI = props => {
  var _props$data, _props$data2;

  console.log((_props$data = props.data) === null || _props$data === void 0 ? void 0 : _props$data.fetchUseditems);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(TotalWrapper, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(MainWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(bestItem_container, {}), /*#__PURE__*/jsx_runtime_.jsx(MenuWrapper, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(SubWrapper, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(SellWrapper, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(SellOn, {
              onClick: props.onClickSelling,
              isSelling: props.isSelling,
              children: "\uD310\uB9E4\uC911\uC0C1\uD488"
            }), /*#__PURE__*/jsx_runtime_.jsx(SoldOut, {
              onClick: props.onClickSoldout,
              isSold: props.isSold,
              children: "\uD310\uB9E4\uB41C\uC0C1\uD488"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(SearchWrapper, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(Search, {
              onChange: props.onChangeSearch
            }), /*#__PURE__*/jsx_runtime_.jsx(SearchBtn, {
              onClick: props.onClickSearch,
              children: "\uAC80\uC0C9"
            })]
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          overflow: "auto",
          height: "1000px"
        },
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_infinite_scroller_default()), {
          pageStart: 0,
          loadMore: props.onLoadMore,
          hasMore: props.hasMore,
          useWindow: false,
          children: (_props$data2 = props.data) === null || _props$data2 === void 0 ? void 0 : _props$data2.fetchUseditems.map(data => {
            var _data$seller;

            return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ListMainWrapper, {
                onClick: props.onClickMoveDetail(data),
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ListWrapper, {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(Img, {
                    src: `https://storage.googleapis.com/${data.images[0]}`
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoWrapper, {
                    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(NameWrapper, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx(Name, {
                        children: data.name
                      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(NameSubWrapper, {
                        children: [/*#__PURE__*/jsx_runtime_.jsx(Remarks, {
                          children: data.remarks
                        }), /*#__PURE__*/jsx_runtime_.jsx(Tags, {
                          children: data.tags
                        })]
                      })]
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(InfoSecondWrapper, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx(HeartImage, {
                        src: "/FreeBoard/profileMain.png"
                      }), /*#__PURE__*/jsx_runtime_.jsx(Seller, {
                        children: (_data$seller = data.seller) === null || _data$seller === void 0 ? void 0 : _data$seller.name
                      }), /*#__PURE__*/jsx_runtime_.jsx(HeartImage, {
                        src: "/FreeBoard/heart.svg"
                      }), /*#__PURE__*/jsx_runtime_.jsx(HeartScore, {
                        children: data.pickedCount
                      })]
                    })]
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx(ListSecondWrapper, {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(PriceWrapper, {
                    children: [/*#__PURE__*/jsx_runtime_.jsx(PriceImg, {
                      src: "/FreeBoard/money.svg"
                    }), /*#__PURE__*/jsx_runtime_.jsx(Price, {
                      children: (0,utils/* getComma */.H)(data.price)
                    })]
                  })
                })]
              }, data._id)
            });
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("form", {
        onSubmit: props.handleSubmit(props.onClickMove),
        children: /*#__PURE__*/jsx_runtime_.jsx(button01/* default */.Z, {
          buttonName: "상품 등록하기"
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(TodayWrapper, {
      children: /*#__PURE__*/jsx_runtime_.jsx(today_container, {})
    }), /*#__PURE__*/jsx_runtime_.jsx(TopWrapper, {
      children: /*#__PURE__*/jsx_runtime_.jsx(toTop, {})
    })]
  });
};

/* harmony default export */ var marketMain_presenter = (MarketMainUI);
;// CONCATENATED MODULE: ./src/components/units/usedMarket/main/marketMain.queries.ts

const FETCH_USED_ITEMS = client_.gql`
  query fetchUseditems($search: String, $page: Int, $isSoldout: Boolean) {
    fetchUseditems(search: $search, page: $page, isSoldout: $isSoldout) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      createdAt
      pickedCount
      seller {
        _id
        name
        email
      }
      buyer {
        name
      }
    }
  }
`;
;// CONCATENATED MODULE: ./src/components/units/usedMarket/main/marketMain.container.tsx








const MarketMain = () => {
  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)();
  const {
    0: hasMore,
    1: setHasMore
  } = (0,external_react_.useState)(true);
  const {
    0: isSold,
    1: setIsSold
  } = (0,external_react_.useState)(false);
  const {
    0: isSelling,
    1: setIsSelling
  } = (0,external_react_.useState)(true);
  const router = (0,router_.useRouter)();
  const {
    register,
    handleSubmit
  } = (0,external_react_hook_form_.useForm)();
  const {
    data,
    refetch,
    fetchMore
  } = (0,client_.useQuery)(FETCH_USED_ITEMS, {
    variables: {
      isSoldout: false
    }
  });

  const onClickMove = () => {
    router.push("/usedMarket/new");
  };

  const onClickMoveDetail = el => () => {
    const newBaskets = [el];
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]").filter(data => data._id !== el._id);
    localStorage.setItem("baskets", JSON.stringify(newBaskets.concat(baskets)));
    router.push(`/usedMarket/detail/${el._id}`);
  };

  const onClickSearch = () => {
    /* @ts-ignore */
    refetch({
      search: search
    });
  };

  const onChangeSearch = event => {
    setSearch(event.target.value);
  };

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.floor((data === null || data === void 0 ? void 0 : data.fetchUseditems.length) / 10) + 1
      },
      // @ts-ignore
      updateQuery: (prev, {
        fetchMoreResult
      }) => {
        /* @ts-ignore */
        if (!fetchMoreResult.fetchUseditems.length) setHasMore(false);
        return {
          fetchUseditems: [
          /* @ts-ignore */
          ...prev.fetchUseditems,
          /* @ts-ignore */
          ...fetchMoreResult.fetchUseditems]
        };
      }
    });
  };

  const onClickSoldout = () => {
    setIsSold(true);
    setIsSelling(false);
    refetch({
      isSoldout: true
    });
  };

  const onClickSelling = () => {
    setIsSelling(true);
    setIsSold(false);
    refetch({
      isSoldout: false
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx(marketMain_presenter, {
    onLoadMore: onLoadMore,
    onClickSearch: onClickSearch,
    onChangeSearch: onChangeSearch
    /* @ts-ignore */
    ,
    handleSubmit: handleSubmit,
    onClickMoveDetail: onClickMoveDetail,
    onClickMove: onClickMove,
    register: register,
    onClickSoldout: onClickSoldout,
    onClickSelling: onClickSelling,
    isSold: isSold,
    isSelling: isSelling,
    hasMore: hasMore,
    data: data
  });
};

/* harmony default export */ var marketMain_container = (MarketMain);

/***/ })

};
;