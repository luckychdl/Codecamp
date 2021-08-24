import { useRouter } from "next/router";
import { ComponentType, useEffect, useContext } from "react";
import { GlobalContext } from "../../_app";

const withAuth = (Component: ComponentType) => (props: any) => {
  const { accessToken } = useContext(GlobalContext);
  const router = useRouter();

  useEffect(() => {
    if (!accessToken) {
      alert(" 로그인이 필요합니다. ");
      router.push("/quiz/login");
    }
  }, []);

  return <Component {...props} />;
};

export default withAuth;
