import { useContext } from "react";
import { GlobalContext } from "../../../../../_app";
import {
  MainWrapper,
  HeaderMain,
  HeaderLogo,
  ButtonWrapper,
  LoginButton,
  Border,
  ShoppingCart,
  MyPageButton,
} from "./Header.styles";

interface ILayouHeaderProps {
  onClickMoveToSingin: () => void;
  onClickMoveToLogin: () => void;
  onClickMoveToHome: () => void;
}

export default function LayoutHeaderUI(props: ILayouHeaderProps) {
  const { accessToken } = useContext(GlobalContext);
  return (
    <MainWrapper>
      <HeaderMain>
        <HeaderLogo
          src="/FreeBoard/simbol.png"
          onClick={props.onClickMoveToHome}
        />
      </HeaderMain>
      <ButtonWrapper>
        {/* <ShoppingCart></ShoppingCart> */}
        {!accessToken ? (
          <LoginButton onClick={props.onClickMoveToLogin}>로그인</LoginButton>
        ) : (
          <MyPageButton onClick={props.onClickMoveToLogin}>
            마이페이지
          </MyPageButton>
        )}

        <Border></Border>
        <LoginButton onClick={props.onClickMoveToSingin}>회원가입</LoginButton>
      </ButtonWrapper>
    </MainWrapper>
  );
}
