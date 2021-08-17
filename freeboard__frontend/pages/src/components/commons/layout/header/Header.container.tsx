import LayoutHeaderUI from "./Header.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function LayoutHeader() {
  const [token, setToken] = useState();
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
  return (
    <LayoutHeaderUI
      token={token}
      onClickMoveToSingin={onClickMoveToSingin}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToHome={onClickMoveToHome}
    />
  );
}
