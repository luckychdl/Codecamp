import {
  MainWrapper,
  PaymentImg,
  Message,
  ButtonWrapper,
  ClearImg,
  ClearWrapper,
  SubWrapper,
} from "./payment.styles";
import { Select, Modal } from "antd";
import Head from "next/head";
import { SetStateAction, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./payment.queries";
import Button01 from "../buttons/button01";

declare const window: typeof globalThis & {
  IMP: any;
  setAmount: (value: SetStateAction<number>) => void;
};
const PaymentPageUI = (props: any) => {
  const { Option } = Select;
  const [amount, setAmount] = useState(0);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const onClickPayment = () => {
    window.IMP.init("imp49910675");
    window.IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트충전",
        amount: amount,
        buyer_email: data.fetchUserLoggedIn.email,
        buyer_name: data.fetchUserLoggedIn.userPoint.name,
        // buyer_tel: "010-4112-2653",
        // buyer_addr: "서울특별시 강남구 신사동",
        // buyer_postcode: "01181",
        m_redirect_url: "/quiz/payment/complete",
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
          });
          Modal.success({
            content: "결제가 완료되었습니다.",
            onOk() {
              props.onClickIsClear();
            },
          });
        } else {
          Modal.error({
            content: "결제가 실패되었습니다.",
          });
        }
      }
    );
  };

  const handleChange = (value: any) => {
    setAmount(`${value}`);
  };
  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js"
        ></script>
      </Head>
      <MainWrapper>
        <ClearWrapper>
          <ClearImg src="/FreeBoard/clear.svg" onClick={props.onClickIsClear} />
        </ClearWrapper>
        <SubWrapper>
          <PaymentImg src="/FreeBoard/payment.svg" />
          <Message>충전하실 금액을 선택해주세요!</Message>
          <Select
            defaultValue="충전금액"
            style={{ width: "120px", fontSize: "20px" }}
            onChange={handleChange}
          >
            <Option value="500" style={{ width: "100px", fontSize: "20px" }}>
              500 P
            </Option>
            <Option value="1000" style={{ width: "100px", fontSize: "20px" }}>
              1,000 P
            </Option>
            <Option value="2000" style={{ width: "100px", fontSize: "20px" }}>
              2,000 P
            </Option>
            <Option value="5000" style={{ width: "100px", fontSize: "20px" }}>
              5,000 P
            </Option>
          </Select>
          <ButtonWrapper>
            <Button01 buttonName="충전하기" onClick={onClickPayment}></Button01>
          </ButtonWrapper>
        </SubWrapper>
      </MainWrapper>
    </>
  );
};

export default PaymentPageUI;
