import LayoutHeaderUI from "./Header.presenter";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function LayoutHeader() {
  const [token, setToken] = useState("");
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
      onClickMoveToMyPage={onClickMoveToMyPage}
      onClickMoveToSingin={onClickMoveToSingin}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToHome={onClickMoveToHome}
    />
  );
}
