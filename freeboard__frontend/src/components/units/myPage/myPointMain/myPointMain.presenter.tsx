import {
  MainWrapper,
  SubWrapper,
  MyWrapper,
  TotalPoint,
  PayPoint,
  BuyingPoint,
  SellingPoint,
  ContentsWrapper,
} from "./myPointMain.styles";
// import MyPointMainPage from "../myPointMain/myPointMain.container";
import MyPointTotalPage from "../myPointTotal/myPointTotal.container";
import MyPointBuyingPage from "../myPointBought/myPointBought.container";
import MyPointPayPage from "../myPointPay/myPointPay.container";
import MyPointSellingPage from "../myPointSold/myPointSold.contatiner";

const MyPointMainPageUI = (props: any) => {
  return (
    <MainWrapper>
      <SubWrapper>
        <MyWrapper>
          <TotalPoint
            onClick={props.onClickMoveToMenu}
            id={"myPointTotal"}
            myMenu={props.myMenu}
          >
            전체내역
          </TotalPoint>
          <PayPoint
            onClick={props.onClickMoveToMenu}
            id="myPointPay"
            myMenu={props.myMenu}
          >
            충전내역
          </PayPoint>
          <BuyingPoint
            onClick={props.onClickMoveToMenu}
            id={"myPointBuying"}
            myMenu={props.myMenu}
          >
            구매내역
          </BuyingPoint>
          <SellingPoint
            onClick={props.onClickMoveToMenu}
            id="myPointSelling"
            myMenu={props.myMenu}
          >
            판매내역
          </SellingPoint>
        </MyWrapper>
      </SubWrapper>
      <ContentsWrapper>
        {/* {props.myMenu === "myPointMain" && <MyPointMainPage />} */}
        {props.myMenu === "myPointTotal" && <MyPointTotalPage />}
        {props.myMenu === "myPointPay" && <MyPointPayPage />}
        {props.myMenu === "myPointBuying" && <MyPointBuyingPage />}
        {props.myMenu === "myPointSelling" && <MyPointSellingPage />}
      </ContentsWrapper>
    </MainWrapper>
  );
};

export default MyPointMainPageUI;
