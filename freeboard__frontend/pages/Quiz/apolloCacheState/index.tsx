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
const ApolloCachePage = () => {
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
                const newPrev = prev.filter((prevData) => {
                  return prevData.__ref !== `Board:${data.deleteBoard}`;
                });
                return [...newPrev];
              },
            },
          });
        },
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el?._id}>
          <span style={{ padding: "30px" }}>{el.writer}</span>
          <span style={{ padding: "30px" }}>{el.title}</span>
          <span style={{ padding: "30px" }}>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제</button>
        </div>
      ))}
    </>
  );
};

export default ApolloCachePage;
