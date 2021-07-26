import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function LifeCycleFunctionpage() {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickCount = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    console.log("컴포넌트 변경됨");
  });

  useEffect(() => {
    console.log("마운트 완료!!");
    inputRef.current?.focus();
    return () => {
      alert("잘가요~");
    };
  }, []);

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <div>카운트 : {count} </div>
      <input type="text" ref={inputRef} />
      <br />
      <button onClick={onClickCount}>카운트 + 1</button>
      <div>함수형 컴포넌트 입니다</div>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
