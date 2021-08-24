import { useRef, useEffect } from "react";

export default function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <input type="password" ref={inputRef} />
    </>
  );
}
