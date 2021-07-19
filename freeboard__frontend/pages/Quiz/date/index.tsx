import { DatePicker } from "antd";
import { useState } from "react";
export default function Date() {
  const [date, setDate] = useState();
  const [month, setMonth] = useState();
  function onChange(date: any, dateString: any) {
    setDate(dateString);

    const arr = dateString.split("-");
    const changeMonth = arr[1];
    setMonth(changeMonth);
  }

  return (
    <>
      <DatePicker onChange={onChange} />
      <div>{date}</div>
      <div>{month}</div>
    </>
  );
}
