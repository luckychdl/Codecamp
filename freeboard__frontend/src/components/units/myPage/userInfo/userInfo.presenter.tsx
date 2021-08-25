import {
  MainWrapper,
  Title,
  ProfileImg,
  UserName,
  MyPageWrapper,
  PointImg,
  PointAmount,
  MoveMyMarketImg,
  MoveMyMarketPage,
  MyPointImg,
  MoveMyPointPage,
  MyProfileImg,
  MoveMyProfilePage,
  MyMarketWrapper,
  MyPointWrapper,
  MyProfileWrapper,
  SubWrapper,
} from "./userInfo.styles";
interface IUserInfoUIProps {
  onClickMyMarket: () => void;
  onClickMoveToMenu: () => void;
  onClickMyInfo: () => void;
  isMarket: boolean;
  isInfo: boolean;
  isOpen: boolean;
  data?: any;
}
const UserInfoUI = (props: IUserInfoUIProps) => {
  return (
    <MainWrapper>
      <SubWrapper>
        <Title>MY PAGE</Title>
        <ProfileImg src="/FreeBoard/mainProfile.svg" />
        <UserName>{props.data?.fetchUserLoggedIn.name}</UserName>
        <MyPageWrapper>
          {props.data?.fetchUserLoggedIn.name ? (
            <PointImg src="/FreeBoard/savings.svg" />
          ) : (
            <></>
          )}

          <PointAmount>
            {props.data?.fetchUserLoggedIn.userPoint?.amount}
          </PointAmount>
        </MyPageWrapper>
        <MyMarketWrapper>
          {props.isMarket ? (
            <MoveMyMarketImg src="/FreeBoard/cart.svg" />
          ) : (
            <MoveMyMarketImg src="/FreeBoard/cartBDBDBD.svg" />
          )}

          <MoveMyMarketPage
            onClick={props.onClickMyMarket}
            isMarket={props.isMarket}
          >
            내 장터
          </MoveMyMarketPage>
        </MyMarketWrapper>
        <MyPointWrapper>
          {props.isOpen ? (
            <MyPointImg src="/FreeBoard/savings.svg" />
          ) : (
            <MyPointImg src="/FreeBoard/savingsBDBDBD.svg" />
          )}

          <MoveMyPointPage
            onClick={props.onClickMoveToMenu}
            id="myPointTotal"
            isOpen={props.isOpen}
          >
            내 포인트
          </MoveMyPointPage>
        </MyPointWrapper>
        <MyProfileWrapper>
          {props.isInfo ? (
            <MyProfileImg src="/FreeBoard/profile.svg" />
          ) : (
            <MyProfileImg src="/FreeBoard/profileBDBDBD.svg" />
          )}

          <MoveMyProfilePage
            onClick={props.onClickMyInfo}
            isInfo={props.isInfo}
          >
            내 프로필
          </MoveMyProfilePage>
        </MyProfileWrapper>
      </SubWrapper>
    </MainWrapper>
  );
};
export default UserInfoUI;
