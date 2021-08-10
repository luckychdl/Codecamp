import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
// import { GlobalContext } from "../../../../_app";
import { Modal } from "antd";

const withAuth = (Component: ComponentType) => (props: any) => {
  // const { accessToken } = useContext(GlobalContext);
  const router = useRouter();
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("token") || "")) {
      Modal.confirm({
        content: "로그인이 필요합니다!",
      });
      router.push("/boards/login");
    }
  }, []);
  if (!JSON.parse(localStorage.getItem("token") || "")) return <></>;
  return <Component {...props} />;
};

export default withAuth;
