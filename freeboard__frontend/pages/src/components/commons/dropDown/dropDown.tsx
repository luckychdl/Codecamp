import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import PaymentPageUI from "../payment/payment.presenter";
import { FETCH_USER_LOGGED_IN } from "./dropDown.queries";
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
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const onClickIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  const onClickIsClear = () => {
    setIsOpen((prev) => !prev);
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
          <ProfileImg src="/FreeBoard/profile.svg" />
          <NameWrapper>
            <Name>{data?.fetchUserLoggedIn.name}</Name>
            <Point>{data?.fetchUserLoggedIn.userPoint.amount} P</Point>
          </NameWrapper>
        </ProfileWrapper>
        <SubWrapper onClick={onClickIsOpen}>
          <PaymentImg src="/FreeBoard/savings.svg" />
          <PaymentButton>충전하기</PaymentButton>
        </SubWrapper>
        <LogOutWrapper>
          <LogoutImg src="/FreeBoard/logout.svg" />
          <LogoutMenu>로그아웃</LogoutMenu>
        </LogOutWrapper>
      </MainWrapper>
    </>
  );
};

export default DropDownPage;
