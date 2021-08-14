import { useRouter } from "next/router";

const KakaoMap2Page = () => {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/29-kakaomap");
  };
  return (
    <>
      <button onClick={onClickMove}>카카오 화면으로 이동하기</button>
      <button>asd</button>
    </>
  );
};

export default KakaoMap2Page;
