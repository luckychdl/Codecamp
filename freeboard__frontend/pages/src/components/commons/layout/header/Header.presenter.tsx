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
import { useState, useContext } from "react";
import { GlobalContext } from "../../../../../_app";

interface ILayouHeaderProps {
  onClickMoveToSingin: () => void;
  onClickMoveToLogin: () => void;
  onClickMoveToHome: () => void;
  onClickMoveToMyPage: () => void;
  onClickIsMore: () => void;
}

export default function LayoutHeaderUI(props: ILayouHeaderProps) {
  const [isMore, setIsMore] = useState(false);
  const { userInfo } = useContext(GlobalContext);
  const onClickIsMore = () => {
    setIsMore((prev) => !prev);
  };
  const menu = (
    <Menu style={{ borderRadius: "30px" }} onClick={onClickIsMore}>
      <DropDownPage onClick={onClickIsMore} />
    </Menu>
  );
  console.log("qweqwe", userInfo);
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
              <UserName>{userInfo.name} 님 환영합니다.</UserName>

              <Dropdown
                overlay={menu}
                placement="bottomCenter"
                trigger={["click"]}
                arrow
              >
                <Button style={{ border: "none" }} onClick={onClickIsMore}>
                  <ProfileImg src="/FreeBoard/profile.svg" />
                  <TooltipImg src="/FreeBoard/more.svg" isMore={isMore} />
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
