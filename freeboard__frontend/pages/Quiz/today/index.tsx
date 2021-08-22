import { gql, useQuery } from "@apollo/client";
import { getDate } from "../../src/commons/libraries/utils";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`;

const Column = styled.span`
  padding: 0 50px;
  font-size: 30px;
`;
const Year = styled.div`
  font-size: 30px;
  padding: 0 50px;
`;
const Today = () => {
  const [date, setDate] = useState([]);
  const { data } = useQuery(FETCH_BOARDS);
  const onClickMove = (basketData) => () => {
    const dateBasket = JSON.parse(localStorage.getItem("date") || "[]");
    dateBasket.push(getDate(basketData.createdAt));
    localStorage.setItem("date", JSON.stringify(dateBasket));
    // router.push(`/detail/${data._id}`);
  };

  useEffect(() => {
    const newDate = JSON.parse(localStorage.getItem("date") || "[]");
    const getYear = `${new Date().getFullYear()}-${String(
      new Date().getMonth() + 1
    ).padStart(2, "0")}-${String(new Date().getDate()).padStart(2, "0")}`;

    if (newDate.includes(getYear)) setDate(getYear);
  }, []);
  return (
    <>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <Column onClick={onClickMove(data)}>{data.writer}</Column>
          <Column>{data.title}</Column>
          <Column>{getDate(data.createdAt)}</Column>
        </div>
      ))}
      <>
        <div>
          <Year>오늘 본 상품</Year>
          <Year>{date}</Year>
        </div>
      </>
    </>
  );
};

export default Today;
