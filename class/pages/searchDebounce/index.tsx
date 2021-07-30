import { useQuery, gql } from "@apollo/client";
import { ChangeEvent, useState, MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import _ from "lodash";

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      createdAt
    }
  }
`;
const Page = styled.span`
  padding: 0 10px;
  cursor: pointer;
`;
const List = styled.span`
  padding: 0 50px;
`;
export default function SearchPage() {
  const [search, setSearch] = useState("");
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const getDebounce = _.debounce((data) => {
    refetch({ search: data });
    setSearch(data);
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    // setSearch(event.target.value);
    getDebounce(event.target.value);
  };
  // const onClickSearch = () => {
  //   refetch({ search: search });
  // };
  const onClickPage = (event: MouseEvent<HTMLSpanElement>) => {
    refetch({ search: search, page: Number((event.target as Element).id) });
  };
  return (
    <>
      <input type="text" onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((data) => (
        <div key={data._id}>
          <List>{data.writer}</List>
          <List>{data.title}</List>
          <List>{data.createdAt}</List>
        </div>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <Page key={index} id={String(index + 1)} onClick={onClickPage}>
          {index + 1}
        </Page>
      ))}
    </>
  );
}
