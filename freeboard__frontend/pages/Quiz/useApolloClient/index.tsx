import { gql, useMutation, useApolloClient } from "@apollo/client";
import { Modal } from "antd";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../_app";
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
const ApolloClientPage = () => {
  const [loginUser] = useMutation(LOGIN_USER);
  const { register, handleSubmit } = useForm();
  const client = useApolloClient();
  const { userInfo, setUserInfo, setAccessToken } = useContext(GlobalContext);
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

      Modal.success({
        content: "로그인 성공!",
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
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
};

export default ApolloClientPage;
