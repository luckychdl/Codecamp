import { gql, useQuery } from "@apollo/client";
import { useState, MouseEvent, ChangeEvent } from "react";
import { IQuery } from "../../../src/commons/types/generated/types";
import styled from "@emotion/styled";
import { getDate } from "../../src/commons/libraries/utils";
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
const List = styled.div`
  padding: 0 50px;
  font-size: 20px;
  width: 300px;
`;
const Page = styled.span`
  padding: 0 5px;
  cursor: pointer;
  text-align: center;
`;
const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default function SearchPage() {
  const { data, refetch } = useQuery<IQuery>(FETCH_BOARDS);
  const [search, setSearch] = useState();
  const onChangeSearch = (event: ChangeEvent) => {
    setSearch(event.target.value);
  };
  const onClickSearch = () => {
    refetch({ search: search });
  };
  const onClickPage = (event: MouseEvent) => {
    refetch({ search: search, page: Number((event.target as Element).id) });
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input type="text" onChange={onChangeSearch} />
        <button onClick={onClickSearch} style={{ margin: "30px 0" }}>
          검색하기
        </button>
        {data?.fetchBoards.map((data) => (
          <ListWrapper key={data._id}>
            <List>{data.writer}</List>
            <List>{data.title}</List>
            <List>{getDate(data.createdAt)}</List>
          </ListWrapper>
        ))}
        {new Array(10).fill(1).map((_, index) => (
          <Page key={index} id={String(index + 1)} onClick={onClickPage}>
            {index + 1}
          </Page>
        ))}
      </div>
    </>
  );
}
