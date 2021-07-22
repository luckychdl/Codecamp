import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { MouseEvent, useState } from "react";
const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
    }
  }
`;

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const Column = styled.span`
  margin: 0px 50px;
`;

const Page = styled.span`
  margin: 0px 10px;
  cursor: pointer;
`;

export default function PaginationPage() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery<IQuery>(FETCH_BOARDS, {
    variables: { page: startPage },
  });
  const { data: count } = useQuery<IQuery>(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(Number(count?.fetchBoardsCount) / 10);

  function onClickPage(event: MouseEvent<HTMLSpanElement>) {
    refetch({ page: Number((event.target as Element).id) });
  }
  function onClickNextPage() {
    if (startPage + 10 > lastPage) return;
    setStartPage((prev) => prev + 10);
  }
  function onClickPrevPage() {
    if (startPage <= 1) return;
    setStartPage((prev) => prev - 10);
  }
  return (
    <div>
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
        </div>
      ))}
      <Page onClick={onClickPrevPage}>이전</Page>
      {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
        (data, index) =>
          startPage + index <= lastPage && (
            <Page
              key={startPage + index}
              onClick={onClickPage}
              id={String(startPage + index)}
            >
              {startPage + index}
            </Page>
          )
      )}
      <Page onClick={onClickNextPage}>다음</Page>
    </div>
  );
}
