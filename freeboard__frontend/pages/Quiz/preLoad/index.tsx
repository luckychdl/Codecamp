import { useRef, useEffect, useState } from "react";

export default function PreLoadPage() {
  const divRef = useRef<HTMLDivElement>(null);
  const [image, setImage] = useState("");
  useEffect(() => {
    const img = new Image();
    img.src = "/secondPage.webp";
    img.onload = () => {
      setImage(img);
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
