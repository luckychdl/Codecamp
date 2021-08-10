import LayoutHeaderUI from "./Header.presenter";
import { useRouter } from "next/router";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickMoveToSingin = () => {
    router.push("../boards/signup");
  };

  const onClickMoveToLogin = () => {
    router.push("../boards/login");
  };
  const onClickMoveToHome = () => {
    router.push("../boards");
  };
  return (
    <LayoutHeaderUI
      onClickMoveToSingin={onClickMoveToSingin}
      onClickMoveToLogin={onClickMoveToLogin}
      onClickMoveToHome={onClickMoveToHome}
    />
  );
}
