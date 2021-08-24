import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LifeCyclePage() {
  const [isChange, setIsChange] = useState(false);
  const router = useRouter();

  useEffect(() => {
    alert("Rendered!!");
    return () => {
      alert("Bye!!");
    };
  }, []);

  useEffect(() => {
    if (isChange === true) {
      alert("Changed!!");
    }
  }, [isChange === true]);

  const onClickIsChange = () => {
    setIsChange(true);
  };

  // useEffect(() => {
  //   return () => {
  //     alert("Bye!!");
  //   };
  // }, []);

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <button onClick={onClickIsChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
