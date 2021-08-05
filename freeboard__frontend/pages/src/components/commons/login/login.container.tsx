import { useMutation } from "@apollo/client";
import { useContext } from "react";
import { GlobalContext } from "../../../../_app";
import LoginPageUI from "./login.presenter";
import { LOGGED_IN_USER } from "./login.queries";
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
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGGED_IN_USER);

  const onClickLogin = async (data) => {
    console.log(data);
    try {
      const token = await loginUser({
        variables: {
          email: data.email,
          password: String(data.password),
        },
      });
      console.log(token.data?.loginUser.accessToken);
      setAccessToken(token.data?.loginUser.accessToken || "");

      Modal.confirm({
        content: "환영합니다!",
      });
      router.push("/boards");
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };

  const onClickMoveToSignin = () => {
    router.push("/boards/signin");
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
