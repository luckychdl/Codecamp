import MyMarket from "../myMarket/myMarket.container";
import UserInfo from "../userInfo/userInfo.container";
import styled from "@emotion/styled";
import MyPicked from "../myPicked/myPicked.container";
import { MyWrapper, MyProduct, MyPick, SubWrapper } from "./myPageMain.styles";
import MyPointMainPage from "../myPointMain/myPointMain.container";
import { MouseEvent } from "react";
import MyProfile from "../../../../../pages/myPage/myProfile";
// import MyPointMainPage from "../myPointMain/myPointMain.container";
// import MyPointTotalPage from "../myPointTotal/myPointTotal.container";
// import MyPointBuyingPage from "../myPointBought/myPointBought.container";
// import MyPointPayPage from "../myPointPay/myPointPay.container";
// import MyPointSellingPage from "../myPointSold/myPointSold.contatiner";

const MainWrapper = styled.div`
  display: flex;
`;
interface IMyPageMainPageUIProps {
  onClickPicked: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMine: () => void;
  onClickMyMarket: () => void;
  onClickMoveToMenu: (event: MouseEvent<HTMLDivElement>) => void;
  onClickMyInfo: () => void;
  isPicked: boolean;
  isMine: boolean;
  myMenu: string;
  isOpen: boolean;
  isInfo: boolean;
  isMarket: boolean;
}
const MyPageMainPageUI = (props: IMyPageMainPageUIProps) => {
  return (
    <MainWrapper>
      <UserInfo
        onClickMoveToMenu={props.onClickMoveToMenu}
        onClickMyMarket={props.onClickMyMarket}
        onClickMyInfo={props.onClickMyInfo}
        myMenu={props.myMenu}
        isOpen={props.isOpen}
        isInfo={props.isInfo}
        isMarket={props.isMarket}
      />
      {props.isInfo && <MyProfile />}
      {props.isOpen && (
        <MyPointMainPage
          myMenu={props.myMenu}
          onClickMoveToMenu={props.onClickMoveToMenu}
        />
      )}
      {props.isMarket && (
        <SubWrapper>
          <MyWrapper>
            {/* @ts-ignore */}
            <MyProduct onClick={props.onClickMine} isMine={props.isMine}>
              나의 상품
            </MyProduct>{" "}
            |{/* @ts-ignore */}
            <MyPick onClick={props.onClickPicked} isPicked={props.isPicked}>
              마이찜
            </MyPick>
          </MyWrapper>

          {!props.isPicked ? <MyMarket /> : <MyPicked />}
        </SubWrapper>
      )}
    </MainWrapper>
  );
};
export default MyPageMainPageUI;
