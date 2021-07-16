import { useQuery, useMutation, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { getDate } from "../../src/commons/libraries/utils";
import {MouseEvent} from 'react'

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($aaa: ID!) {
    deleteBoard(boardId: $aaa)
  }
`;

const Row = styled.div`
  height: 40px;
  border-bottom: 1px solid gray;
  line-height: 40px;
  display: flex;
`;

const Column = styled.div`
  width: 20%;
`;


export default function Map3Page() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  async function onClickDelete(event: MouseEvent<HTMLButtonElement, MouseEvent>) {
    alert("해당 글을 삭제합니다");

    try {
      await deleteBoard({
        variables: { aaa: event.target.id },
        refetchQueries: [{ query: FETCH_BOARDS }],
      });
      alert("삭제가 완료되었습니다!");
    } catch (error) {
      alert(error.message);
      location.reload();
    }
  }

  return (
    <div>
      <Row>
        <Column>
          <input type="checkbox" />
        </Column>
        <Column>번호</Column>
        <Column>작성자</Column>
        <Column>제목</Column>
        <Column>작성일</Column>
        <Column></Column>
      </Row>
      {data?.fetchBoards.map((data:any, index) => (
        <Row key={data._id}>
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{index + 1}</Column>
          <Column>{data.writer}</Column>
          <Column>{data.title}</Column>
          <Column>{getDate(data.createdAt)}</Column>
          <Column>
            <button id={data._id} onClick={onClickDelete}>
              삭제하기
            </button>
          </Column>
        </Row>
      ))}
    </div>
  );
}
