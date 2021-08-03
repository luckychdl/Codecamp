import {
  MainWrapper,
  HeaderMain,
  HeaderLogo,
  ButtonWrapper,
  LoginButton,
  Border,
  ShoppingCart,
} from "./Header.styles";

export default function LayoutHeaderUI() {
  return (
    <MainWrapper>
      <HeaderMain>
        <HeaderLogo src="/FreeBoard/headerLogo.png" />
      </HeaderMain>
      <ButtonWrapper>
        <ShoppingCart></ShoppingCart>
        <LoginButton>로그인</LoginButton>
        <Border></Border>
        <LoginButton>회원가입</LoginButton>
      </ButtonWrapper>
    </MainWrapper>
  );
}
