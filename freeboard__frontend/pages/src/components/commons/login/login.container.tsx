import { useApolloClient, useMutation } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../../../../_app";
import LoginPageUI from "./login.presenter";
import { FETCH_USER_LOGGED_IN, LOGGED_IN_USER } from "./login.queries";
import { Modal } from "antd";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../../src/commons/types/generated/types";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { schema } from "../../../commons/libraries/yup.validation";
import { yupResolver } from "@hookform/resolvers/yup";

export default function LoginPage() {
  const { setAccessToken, setUserInfo } = useContext(GlobalContext);
  const router = useRouter();
  const client = useApolloClient();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGGED_IN_USER);

  const onClickLogin = async (data: any) => {
    try {
      const token = await loginUser({
        variables: {
          email: data.email,
          password: String(data.password),
        },
      });
      const resultUser = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `Bearer ${token.data?.loginUser.accessToken}`,
          },
        },
      });
      setUserInfo(resultUser.data.fetchUserLoggedIn);
      localStorage.setItem(
        "userInfo",
        JSON.stringify(resultUser.data.fetchUserLoggedIn)
      );
      setAccessToken(token.data?.loginUser.accessToken || "");
      localStorage.setItem("refreshToken", "true");
      // localStorage.setItem(
      //   "refreshToken",
      //   token.data?.loginUser.accessToken || ""
      // );
      Modal.confirm({
        content: "환영합니다!",
        onOk() {
          router.push("/usedMarket");
        },
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };

  const onClickMoveToSignin = () => {
    router.push("/boards/signup");
  };
  return (
    <LoginPageUI
      isActive={formState.isValid}
      errors={formState.errors}
      onClickMoveToSignin={onClickMoveToSignin}
      onClickLogin={onClickLogin}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
}
