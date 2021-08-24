import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
    }
  }
`;

const Column = styled.span`
  padding: 0 50px 0 50px;
`;
const BasketPage = () => {
  const onClickBasket = (basketData) => () => {
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    let isExists = false;
    baskets.forEach((data) => {
      if (data._id === basketData._id) isExists = true;
    });
    if (isExists) return;
    baskets.push(basketData);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDeleteBasket = (basketData) => () => {
    const basket = JSON.parse(localStorage.getItem("baskets") || "[]");

    const remove = basket.filter((data) => data._id !== basketData._id);
    localStorage.setItem("baskets", JSON.stringify(remove));
  };
  return (
    <>
      {data?.fetchBoards.map((data, index) => (
        <div key={data._id}>
          <Column>{index + 1}</Column>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
          <button onClick={onClickBasket(data)}>게시물 담기</button>
          <button onClick={onClickDeleteBasket(data)}>담기 취소</button>

          {/* <button onClick={onClickBasket(data)}>게시물 담기</button> */}
        </div>
      ))}
    </>
  );
};

export default BasketPage;
// baskets = baskets.filter((data) => data._id !== basketData._id);
// baskets.push(basketData);
