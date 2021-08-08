import { gql, useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

export default function ApolloCacheStatePage() {
  const { data } = useQuery(FETCH_BOARDS);
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = (boardId: string) => async () => {
    try {
      await deleteBoard({
        variables: { boardId: boardId },
        // refetchQueries: [{ query: FETCH_BOARDS }],
        update(cache, { data }) {
          cache.modify({
            fields: {
              fetchBoards: (prev) => {
                console.log(data);
                console.log(prev);

                const newPrev = prev.filter((prevData) => {
                  return prevData.__ref !== `Board:${data.deleteBoard}`;
                });

                return [...newPrev];
              },
            },
          });
        },
      });
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {data?.fetchBoards.map((data: any) => (
        <div key={data?._id}>
          <span style={{ padding: "30px" }}>{data.writer}</span>
          <span style={{ padding: "30px" }}>{data.title}</span>
          <span style={{ padding: "30px" }}>{data.contents}</span>
          <button onClick={onClickDelete(data._id)}>삭제하기</button>
        </div>
      ))}
    </>
  );
}
