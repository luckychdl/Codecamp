import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { GlobalContext } from "../../../../pages/_app";
import PaymentPageUI from "../payment/payment.presenter";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./dropDown.queries";
import {
  MainWrapper,
  ProfileImg,
  NameWrapper,
  Name,
  Point,
  SubWrapper,
  PaymentImg,
  PaymentButton,
  LogoutImg,
  LogoutMenu,
  ProfileWrapper,
  LogOutWrapper,
} from "./dropDown.styles";
const DropDownPage = () => {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const client = useApolloClient();
  const onClickLogout = async () => {
    try {
      await logoutUser();
      await client.clearStore();
      if (setAccessToken) setAccessToken("");
      if (setUserInfo) setUserInfo({});
      // await client.clearStore().then(() => {
      //   client.resetStore();
      // });
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("userInfo");
      Modal.success({
        content: "로그아웃 돼었습니다.",
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  const onClickIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const onClickIsClear = () => {
    setIsOpen((prev) => !prev);
  };
  const onClickMyPage = () => {
    router.push("/myPage");
  };
  return (
    <>
      <Modal
        visible={isOpen}
        footer={null}
        style={{
          overflow: "auto",
          borderRadius: "40px",
          paddingBottom: "0px",
        }}
        bodyStyle={{
          height: "350px",
        }}
        closable={false}
        width={400}
      >
        <PaymentPageUI onClickIsClear={onClickIsClear} />
      </Modal>
      <MainWrapper>
        <ProfileWrapper>
          <ProfileImg src="/FreeBoard/profile.svg" onClick={onClickMyPage} />
          <NameWrapper>
            <Name onClick={onClickMyPage}>{data?.fetchUserLoggedIn.name}</Name>
            <Point>{data?.fetchUserLoggedIn.userPoint.amount} P</Point>
          </NameWrapper>
        </ProfileWrapper>
        <SubWrapper onClick={onClickIsOpen}>
          <PaymentImg src="/FreeBoard/savings.svg" />
          <PaymentButton>충전하기</PaymentButton>
        </SubWrapper>
        <LogOutWrapper>
          <LogoutImg src="/FreeBoard/logout.svg" />
          <LogoutMenu onClick={onClickLogout}>로그아웃</LogoutMenu>
        </LogOutWrapper>
      </MainWrapper>
    </>
  );
};

export default DropDownPage;
