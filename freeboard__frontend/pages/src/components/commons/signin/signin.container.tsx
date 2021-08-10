import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import SigninPageUI from "./signin.presenter";
import { CREATE_USER } from "./signin.queries";
import { Modal } from "antd";
import router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSign } from "../../../commons/libraries/yup.validation";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [createUser] = useMutation(CREATE_USER);
  const [check, setCheck] = useState(false);
  const [newEmail, setNewEmail] = useState("");

  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schemaSign),
  });
  const onClickSignin = async (data) => {
    console.log(data);
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email: newEmail,
            password: data.password,
            name: data.name,
          },
        },
      });
      console.log(result);
      Modal.confirm({
        content: "회원가입을 축하합니다!",
      });
      router.push("/usedMarket/main");
    } catch (err) {
      console.log("ASDASasdfasdfsadfD");
      Modal.error({
        content: "asdasdasd",
      });
    }
  };
  const onChangeSelectEmail = (value) => {
    setNewEmail(`${email}@${value}`);
    // let newVale = `${email}@${value}`;
    // console.log(newVale);
    // setState 는 함수가 종료된 후 값이 저장되기 때문에 함수안에서 console.log찍으면 한박자 늦게나옴
  };
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  // const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
  //   setPassword(event.target.value);
  // };
  // const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
  //   setName(event.target.value);
  // };

  const onClickMoveToLogin = () => {
    router.push("/boards/login");
  };

  const onClickCheck = () => {
    setCheck((prev) => !prev);
  };

  return (
    <SigninPageUI
      check={check}
      isActive={formState.isValid}
      errors={formState.errors}
      onChangeSelectEmail={onChangeSelectEmail}
      onClickCheck={onClickCheck}
      onChangeEmail={onChangeEmail}
      register={register}
      handleSubmit={handleSubmit}
      onClickSignin={onClickSignin}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
