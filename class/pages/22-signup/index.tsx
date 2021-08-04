import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationCreateUserArgs,
} from "../../src/commons/types/generated/types";
import withAuth from "../../src/components/commons/hocs/withAuth";
const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      _id
    }
  }
`;

function SingUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [createUser] = useMutation<
    Pick<IMutation, "createUser">,
    IMutationCreateUserArgs
  >(CREATE_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClickSignup = async () => {
    try {
      await createUser({
        variables: {
          createUserInput: {
            email,
            password,
            name,
          },
        },
      });
      alert("가입이 완료되었습니다!");
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
      이름 : <input type="text" onChange={onChangeName}></input>
      <br />
      <button onClick={onClickSignup}>가입하기</button>
    </>
  );
}

export default withAuth(SingUpPage);
