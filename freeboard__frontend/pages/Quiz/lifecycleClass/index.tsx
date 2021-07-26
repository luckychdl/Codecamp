import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";

export default function MyComponent() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    console.log("컴포넌트가 마운트됐습니다.");
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    console.log("컴포넌트가 변경됐습니다.");
  }, [count]);

  useEffect(() => {
    return () => {
      alert("컴포넌트가 제거됩니다.");
    };
  }, []);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <input type="password" ref={inputRef} />
      <div>카운트: {count}</div>
      <button onClick={onClickCounter}>카운트(+1)</button>
      <button onClick={onClickMove}>이동하기</button>
    </>
  );
}
