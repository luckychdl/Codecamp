import MyMarket from "../myMarket/myMarket.container";
import UserInfo from "../userInfo/userInfo.container";
import styled from "@emotion/styled";
import MyPicked from "../myPicked/myPicked.container";
import { MyWrapper, MyProduct, MyPick, SubWrapper } from "./myPageMain.styles";

const MainWrapper = styled.div`
  display: flex;
`;
interface IMyPageMainPageUIProps {
  onClickPicked: () => void;
  onClickMine: () => void;
  isPicked: boolean;
  isMine: boolean;
}
const MyPageMainPageUI = (props: IMyPageMainPageUIProps) => {
  console.log(props.isMine, props.isPicked);
  return (
    <MainWrapper>
      <UserInfo />
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
    </MainWrapper>
  );
};
export default MyPageMainPageUI;
