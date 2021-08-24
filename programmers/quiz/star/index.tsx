import { Rate } from "antd";
import styled from "@emotion/styled";
import { useState } from "react";

const StarScore = styled(Rate)`
  width: 200px;
`;

export default function Star() {
  const [score, setScore] = useState("");

  function ChangeScore(value: any) {
    setScore(value);
  }
  return (
    <>
      <StarScore onChange={ChangeScore} />
      <div>{score}</div>
    </>
  );
}
