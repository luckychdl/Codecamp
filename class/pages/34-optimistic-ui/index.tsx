import { gql, useMutation, useQuery } from "@apollo/client";
const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
    }
  }
`;
const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

const OptimisticUIPage = () => {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "611dc42a2d1aa300298e6e8b" },
  });
  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickLike = (likeCount) => () => {
    likeBoard({
      variables: { boardId: "611dc42a2d1aa300298e6e8b" },
      optimisticResponse: {
        likeBoard: likeCount + 1,
      },
      update(cache, { data }) {
        cache.writeQuery({
          query: FETCH_BOARD,
          variables: { boardId: "611dc42a2d1aa300298e6e8b" },
          data: {
            fetchBoard: {
              _id: "611dc42a2d1aa300298e6e8b",
              __typename: "Board",

              likeCount: data.likeBoard,
            },
          },
        });
      },
    });
  };
  return (
    <>
      <div>좋아요: {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickLike(data?.fetchBoard.likeCount)}>
        좋아요 + 1
      </button>
    </>
  );
};

export default OptimisticUIPage;
