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
} from "./userInfo.styles";
const UserInfoUI = () => {
  return (
    <MainWrapper>
      <Title>MY PAGE</Title>
      <ProfileImg src="/FreeBoard/mainProfile.svg" />
      <UserName>NAME</UserName>
      <MyPageWrapper>
        <PointImg src="/FreeBoard/savings.svg" />
        <PointAmount>100,000</PointAmount>
      </MyPageWrapper>
      <MyMarketWrapper>
        <MoveMyMarketImg src="/FreeBoard/cart.svg" />
        <MoveMyMarketPage>내 장터</MoveMyMarketPage>
      </MyMarketWrapper>
      <MyPointWrapper>
        <MyPointImg src="/FreeBoard/savingsBDBDBD.svg" />
        <MoveMyPointPage>내 포인트</MoveMyPointPage>
      </MyPointWrapper>
      <MyProfileWrapper>
        <MyProfileImg src="/FreeBoard/profile.svg" />
        <MoveMyProfilePage>내 프로필</MoveMyProfilePage>
      </MyProfileWrapper>
    </MainWrapper>
  );
};
export default UserInfoUI;
