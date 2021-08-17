import {
  MainWrapper,
  HeaderMain,
  HeaderLogo,
  ButtonWrapper,
  LoginButton,
  Border,
  MyPageButton,
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
          src="/FreeBoard/marketLogo.webp"
          onClick={props.onClickMoveToHome}
        />

        <ButtonWrapper>
          {!props.token ? (
            <LoginButton onClick={props.onClickMoveToLogin}>로그인</LoginButton>
          ) : (
            <MyPageButton onClick={props.onClickMoveToLogin}>
              마이페이지
            </MyPageButton>
          )}

          <Border></Border>
          <LoginButton onClick={props.onClickMoveToSingin}>
            회원가입
          </LoginButton>
        </ButtonWrapper>
      </HeaderMain>
    </MainWrapper>
  );
}
