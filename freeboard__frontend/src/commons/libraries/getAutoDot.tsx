import { ChangeEvent, useState } from "react";

// 마지막 날짜 구하기
const getLastDate = (yyyy: string, mm: string) => {
  if (Number(mm) === 11) return new Date(Number(yyyy) + 1, 1, 0).getDate();
  return new Date(Number(yyyy), Number(mm), 0).getDate();
};

// 검증된 날짜 구하기
const getValidDate = (dottedValue: any) => {
  let [yyyy, mm, dd] = dottedValue
    .join("")
    .split(".")
    .filter((data: any) => data !== "")
    .map((data: any) => data);
  mm = Number(mm) > 12 ? 12 : mm;
  dd = Number(dd) > getLastDate(yyyy, mm) ? getLastDate(yyyy, mm) : dd;
  return yyyy + (mm ? `.${String(mm)}` : "") + (dd ? `.${String(dd)}` : "");
};

export default function InputAlgorithm() {
  const [value, setValue] = useState("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const dottedValue: any = [];
    const nextValue = (event.target as any).value;
    if (nextValue.length > value.length) {
      const nextPureValue = nextValue.replaceAll(".", "").split("");
      nextPureValue.forEach((data: string, index: number) => {
        dottedValue.push(data);
        if (index + 1 === 4 || index + 1 === 6) dottedValue.push(".");
      });
      setValue(getValidDate(dottedValue));
    } else {
      const nextPureValue = nextValue.replaceAll(".", "").split("");
      nextPureValue.forEach((data: string, index: number) => {
        dottedValue.push(data);
        if (nextPureValue.length > 6 && (index + 1 === 4 || index + 1 === 6)) {
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
      value={value}
      placeholder="YYYY.MM.DD"
      maxLength={10}
      onChange={onChangeInput}
    />
  );
}
