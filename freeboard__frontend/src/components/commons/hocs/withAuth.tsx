import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";
// import { GlobalContext } from "../../../../_app";
import { Modal } from "antd";

const withAuth = (Component: ComponentType) => (props: any) => {
  // const { accessToken } = useContext(GlobalContext);
  const router = useRouter();
  useEffect(() => {
    if (!(localStorage.getItem("refreshToken") || "")) {
      Modal.confirm({
        content: "로그인이 필요합니다!",
        onOk() {
          router.push("/boards/login");
        },
      });
    }
  }, []);
  // if (!localStorage.getItem("refreshToken") || "") return <></>;
  return <Component {...props} />;
};

export default withAuth;
