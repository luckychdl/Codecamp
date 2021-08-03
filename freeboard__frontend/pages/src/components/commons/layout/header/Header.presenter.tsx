import {
  MainWrapper,
  HeaderMain,
  HeaderLogo,
  ButtonWrapper,
  LoginButton,
  Border,
  ShoppingCart,
} from "./Header.styles";

interface ILayouHeaderProps {
  onClickMoveToSingin: () => void;
  onClickMoveToLogin: () => void;
  onClickMoveToHome: () => void;
}

export default function LayoutHeaderUI(props: ILayouHeaderProps) {
  return (
    <MainWrapper>
      <HeaderMain>
        <HeaderLogo
          src="/FreeBoard/headerLogo.png"
          onClick={props.onClickMoveToHome}
        />
      </HeaderMain>
      <ButtonWrapper>
        <ShoppingCart></ShoppingCart>
        <LoginButton onClick={props.onClickMoveToLogin}>로그인</LoginButton>
        <Border></Border>
        <LoginButton onClick={props.onClickMoveToSingin}>회원가입</LoginButton>
      </ButtonWrapper>
    </MainWrapper>
  );
}
