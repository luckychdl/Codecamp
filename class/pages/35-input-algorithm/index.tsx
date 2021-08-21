import { useState } from "react";

export default function InputAlgorithm() {
  const [value, setValue] = useState("");

  const onChangeInput = (event) => {
    const dottedValue = [];
    const nextValue = event.target.value; // 19900522
    if (nextValue.length > value.length) {
      const nextPureValue = nextValue.replaceAll(".", "").split(""); // ["1","9","9","0","0","5","2","2"]
      nextPureValue.forEach((data: string, index: number) => {
        dottedValue.push(data);
        if (index + 1 === 4 || index + 1 === 6) dottedValue.push("."); // 4번째 글자와 6번째 글자 뒤에 "." 푸쉬해서 스테이트 값에 저장
      });
      setValue(dottedValue.join(""));
    } else {
      const nextPureValue = nextValue.replaceAll(".", "").split("");
      nextPureValue.forEach((data: string, index: number) => {
        dottedValue.push(data);
        if (nextPureValue.length > 6 && (index + 1 === 4 || index + 1 === 6)) {
          // 점 삭제가 아닌 2개 찍혀있던 점을 1개만 찍는걸로 새로 스테이트값 설정
          dottedValue.push(".");
        } else if (nextPureValue.length > 4 && index + 1 === 4) {
          dottedValue.push(".");
        }
      });
      setValue(dottedValue.join(""));
    }
  };

  return (
    <input
      type="text"
      maxLength="10"
      value={value}
      placeholder="YYYY.MM.DD"
      onChange={onChangeInput}
    />
  );
}
