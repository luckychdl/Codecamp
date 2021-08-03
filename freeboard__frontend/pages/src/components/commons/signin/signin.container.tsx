import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import SigninPageUI from "./signin.presenter";
import { CREATE_USER } from "./signin.queries";
import { Modal } from "antd";
import router from "next/router";

export default function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [createUser] = useMutation(CREATE_USER);
  const [check, setCheck] = useState(false);
  // const [selectEmail, setSelectEmail] = useState("");
  // const [newEmail, setNewEmail] = useState("");

  const onClickSignin = async () => {
    try {
      const result = await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });
      console.log(result);
      Modal.confirm({
        content: "회원가입을 축하합니다!",
      });
      router.push("/boards");
    } catch (err) {
      alert(err.message);
    }
  };
  // const onChangeSelectEmail = (value) => {
  //   setSelectEmail(value);
  //   setNewEmail(`${email}@${selectEmail}`);
  //   console.log(newEmail);
  // };
  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClickMoveToLogin = () => {
    router.push("/boards/login");
  };

  const onClickCheck = () => {
    setCheck((prev) => !prev);
  };

  return (
    <SigninPageUI
      check={check}
      // onChangeSelectEmail={onChangeSelectEmail}
      onClickCheck={onClickCheck}
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onChangeName={onChangeName}
      onClickSignin={onClickSignin}
      onClickMoveToLogin={onClickMoveToLogin}
    />
  );
}
