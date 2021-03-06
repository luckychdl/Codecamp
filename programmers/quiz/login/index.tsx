import { ChangeEvent, useState, useContext } from "react";
import { gql, useMutation } from "@apollo/client";
import { GlobalContext } from "../../_app";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { Modal } from "antd";
const LOGIN_USER = gql`
  mutation loginUser($password: String!, $email: String!) {
    loginUser(password: $password, email: $email) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);
  const { setAccessToken } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const onClickSignin = async () => {
    try {
      const token = await loginUser({
        variables: {
          password,
          email,
        },
      });
      setAccessToken(token.data?.loginUser.accessToken || "");
      if (localStorage.getItem("baskets")) {
        Modal.confirm({
          content: "게시물 장바구니가 존재합니다. 이동하시겠습니까?",
          onOk() {
            router.push("/quiz/basketLoggedIn");
          },
        });
      }
      router.push("/quiz/basket");
      alert("로그인 완료!");
    } catch (err) {
      alert(err.message);
    }
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail}></input>
      비밀번호 : <input type="password" onChange={onChangePassword}></input>
      <button onClick={onClickSignin}>로그인하기</button>
    </>
  );
}
