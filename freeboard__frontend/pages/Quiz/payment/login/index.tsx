import { gql, useMutation } from "@apollo/client";
import { Modal } from "antd";
import router from "next/router";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { GlobalContext } from "../../../_app";
const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

const PaymentLogin = () => {
  const [loginUser] = useMutation(LOGIN_USER);
  const { register, handleSubmit } = useForm();
  const { setAccessToken } = useContext(GlobalContext);

  const onClickLogin = async (data) => {
    try {
      const token = await loginUser({
        variables: { ...data },
      });
      localStorage.setItem("token", token.data?.loginUser.accessToken || "");
      setAccessToken(token.data?.loginUser.accessToken || "");
      Modal.success({
        content: "로그인 성공 !!",
      });
      router.push("/quiz/payment/loading");
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onClickLogin)}>
        이메일: <input type="text" {...register("email")} />
        비밀번호: <input type="password" {...register("password")} />
        <button>로그인하기</button>
      </form>
    </>
  );
};
export default PaymentLogin;
