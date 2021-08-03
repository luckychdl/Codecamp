import { useMutation } from "@apollo/client";
import { ChangeEvent, useState, useContext } from "react";
import { GlobalContext } from "../../../../_app";
import LoginPageUI from "./login.presenter";
import { LOGGED_IN_USER } from "./login.queries";
import { Modal } from "antd";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../../src/commons/types/generated/types";
import { useRouter } from "next/router";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const { setAccessToken } = useContext(GlobalContext);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGGED_IN_USER);
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
      Modal.confirm({
        content: "환영합니다!",
      });
      router.push("/boards");
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <LoginPageUI
      onClickLogin={onClickLogin}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
    />
  );
}
