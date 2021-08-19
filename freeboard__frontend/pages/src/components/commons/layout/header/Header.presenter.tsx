import {
  MainWrapper,
  HeaderMain,
  HeaderLogo,
  ButtonWrapper,
  LoginButton,
  ProfileImg,
  Wrapper,
  TooltipImg,
  UserName,
} from "./Header.styles";
import { Menu, Dropdown, Button } from "antd";
import DropDownPage from "../../dropDown/dropDown";

interface ILayouHeaderProps {
  onClickMoveToSingin: () => void;
  onClickMoveToLogin: () => void;
  onClickMoveToHome: () => void;
  onClickMoveToMyPage: () => void;
}

export default function LayoutHeaderUI(props: ILayouHeaderProps) {
  console.log(props.data?.fetchUserLoggedIn);
  const menu = (
    <Menu style={{ borderRadius: "30px" }}>
      <DropDownPage />
    </Menu>
  );

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
            <Wrapper>
              <UserName>
                {props.data?.fetchUserLoggedIn.name} 님 환영합니다.
              </UserName>

              <Dropdown
                overlay={menu}
                placement="bottomCenter"
                trigger={["click"]}
                arrow
              >
                <Button style={{ border: "none", width: "5px;" }}>
                  <ProfileImg src="/FreeBoard/profile.svg" />
                  <TooltipImg src="/FreeBoard/more.svg" />
                </Button>
              </Dropdown>
              {/* <MyPageButton onClick={props.onClickMoveToMyPage}>
                마이페이지
              </MyPageButton> */}
            </Wrapper>
          )}

          {!props.token ? (
            <LoginButton onClick={props.onClickMoveToSingin}>
              회원가입
            </LoginButton>
          ) : (
            <></>
          )}
        </ButtonWrapper>
      </HeaderMain>
    </MainWrapper>
  );
}
