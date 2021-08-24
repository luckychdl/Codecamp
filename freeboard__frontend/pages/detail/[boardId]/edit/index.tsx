import BoardWrite from "../../../../src/components/units/board/write/BoardWrite.container";
import CommentWrite from "../../../../src/components/units/boardComments/write/CommentWrite.container";
import CommentList from "../../../../src/components/units/boardComments/list/CommentList.container";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { IQuery } from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      writer
      title
      contents
    }
  }
`;

export default function EditPage() {
  const router = useRouter();
  const { data } = useQuery<IQuery>(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  return (
    <>
      <BoardWrite isEdit={true} data={data} />
      <CommentWrite />
      <CommentList />
    </>
  );
}
