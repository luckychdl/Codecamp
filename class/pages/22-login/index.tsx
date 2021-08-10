import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken } = useContext(GlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    try {
      const token = await loginUser({
        variables: {
          email,
          password,
        },
      });

      setAccessToken(token.data?.loginUser.accessToken || "");
      localStorage.setItem("token", token.data?.loginUser.accessToken || "");
      // router.push("/22-login-success");
      router.push("/23-hoc");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail}></input>
      <br />
      비밀번호 : <input type="password" onChange={onChangePassword}></input>
      <br />
      <button onClick={onClickLogin}>로그인</button>
    </>
  );
}
