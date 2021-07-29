import { useEffect, useRef, useState } from "react";

export default function ImagePreLoad() {
  const divRef = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = "https://codebootcamp.co.kr/images/main/homeImage1.webp";
    img.onload = () => {
      setImage(img); // img값에는 <img src="https://codebootcamp.co.kr/images/main/homeImage1.webp" /> 태그를 img state에 담음
    };
  }, []);
  const onClickButton = () => {
    divRef.current?.appendChild(image);
  };
  return (
    <>
      <div ref={divRef}></div>
      <button onClick={onClickButton}>이미지 보여주기</button>
    </>
  );
}
