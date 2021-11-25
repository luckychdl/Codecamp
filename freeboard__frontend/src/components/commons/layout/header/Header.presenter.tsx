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
import { GlobalContext } from "../../../../../pages/_app";

interface ILayouHeaderProps {
  onClickMoveToSingin: () => void;
  onClickMoveToLogin: () => void;
  onClickMoveToHome: () => void;
  onClickMoveToMyPage: () => void;
  onClickIsMore: () => void;
  token: any;
}

export default function LayoutHeaderUI(props: ILayouHeaderProps) {
  const [isMore, setIsMore] = useState(false);
  const { userInfo, accessToken } = useContext(GlobalContext);
  const onClickIsMore = () => {
    setIsMore((prev) => !prev);
  };
  const menu = (
    <Menu style={{ borderRadius: "30px" }} onClick={onClickIsMore}>
      {/* @ts-ignore */}
      <DropDownPage onClick={onClickIsMore} />
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
          {!accessToken ? (
            <LoginButton onClick={props.onClickMoveToLogin}>로그인</LoginButton>
          ) : (
            <Wrapper>
              <UserName>{userInfo.name} 님</UserName>

              <Dropdown
                overlay={menu}
                placement="bottomCenter"
                trigger={["click"]}
                onVisibleChange={onClickIsMore}
                arrow
              >
                <Button style={{ border: "none", padding: "0" }}>
                  <ProfileImg src="/FreeBoard/profile.svg" />
                  <TooltipImg src="/FreeBoard/more.svg" isMore={isMore} />
                </Button>
              </Dropdown>
              {/* <MyPageButton onClick={props.onClickMoveToMyPage}>
                마이페이지
              </MyPageButton> */}
            </Wrapper>
          )}

          {!accessToken ? (
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
