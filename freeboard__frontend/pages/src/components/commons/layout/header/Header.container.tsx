import LayoutHeaderUI from "./Header.presenter";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FETCH_USER_LOGGED_IN } from "./Header.queries";
import { useQuery } from "@apollo/client";

export default function LayoutHeader() {
  const [token, setToken] = useState("");
  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  const router = useRouter();
  useEffect(() => {
    setToken(localStorage.getItem("refreshToken"));
  }, []);

  const onClickMoveToSingin = () => {
    router.push("../boards/signup");
  };

  const onClickMoveToLogin = () => {
    router.push("/boards/login");
  };
  const onClickMoveToHome = () => {
    router.push("/usedMarket");
  };
  const onClickMoveToMyPage = () => {
    router.push("/myPage");
  };

  return (
    <LayoutHeaderUI
      token={token}
      data={data}
      onClickMoveToMyPage={onClickMoveToMyPage}
      onClickMoveToSingin={onClickMoveToSingin}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToHome={onClickMoveToHome}
    />
  );
}
