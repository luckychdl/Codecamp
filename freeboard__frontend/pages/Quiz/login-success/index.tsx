import { useContext, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery } from "../../../src/commons/types/generated/types";
import { GlobalContext } from "../../_app";
const LOGGED_IN_USER = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      name
    }
  }
`;

export default function LoginSuccessPage() {
  const { accessToken } = useContext(GlobalContext);
  const { data } = useQuery<Pick<IQuery, "fetchUserLoggedIn">>(LOGGED_IN_USER);
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      alert("로그인을 먼저 해주세요.");
      router.push("/quiz/login");
    }
  }, []);
  return (
    <>
      <div>{data?.fetchUserLoggedIn.name} 님 환영합니다!</div>
    </>
  );
}
