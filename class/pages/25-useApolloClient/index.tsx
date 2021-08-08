import { useForm } from "react-hook-form";
import { gql, useApolloClient, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useContext } from "react";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
    }
  }
`;
export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { setAccessToken, setUserInfo, userInfo } = useContext(GlobalContext);
  const client = useApolloClient();
  const [loginUser] = useMutation(LOGIN_USER);
  const onClickLogin = async (data: any) => {
    try {
      const result = await loginUser({
        variables: { ...data },
      });
      const resultUser = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            authorization: `bearer ${result.data?.loginUser.accessToken}`,
          },
        },
      });
      setUserInfo(resultUser.data.fetchUserLoggedIn);
      setAccessToken(result.data?.loginUser.accessToken);
    } catch (err) {
      Modal.error({ content: err.message });
    }
  };
  return (
    <>
      {userInfo?.email ? `${userInfo?.name}님 환영합니다!` : "로그인 해주세요."}
      <form onSubmit={handleSubmit(onClickLogin)}>
        이메일: <input type="text" {...register("email")} />
        비밀번호: <input type="password" {...register("password")} />
        <button>로그인하기</button>
      </form>
    </>
  );
}
