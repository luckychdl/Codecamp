import { Select } from "antd";
import Head from "next/head";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
    }
  }
`;
const PaymentLoading = () => {
  const { Option } = Select;
  const [amount, setAmount] = useState(0);
  const router = useRouter();

  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const onClickPayment = () => {
    console.log(typeof amount);
    IMP.init("imp49910675");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: amount,
        buyer_email: "luckysksk@naver.com",
        buyer_name: "신동원",
        buyer_tel: "010-4112-2653",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "/quiz/payment/complete",
      },
      async (rsp) => {
        console.log("asd", rsp);
        // callback
        if (rsp.success) {
          await createPointTransactionOfLoading({
            variables: { impUid: rsp.imp_uid },
          });
          alert("결제 성공 !!");
          router.push("/quiz/payment/complete");
        } else {
          alert("결제 실패 !!");
        }
      }
    );
  };

  const handleChange = (value) => {
    console.log(`${value}`);
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

      <Select
        defaultValue="충전금액"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="500">500원</Option>
        <Option value="1000">1000원</Option>
        <Option value="2000">2000원</Option>
        <Option value="5000">5000원</Option>
      </Select>
      <br />
      <button onClick={onClickPayment}>충전하기</button>
    </>
  );
};
export default PaymentLoading;
