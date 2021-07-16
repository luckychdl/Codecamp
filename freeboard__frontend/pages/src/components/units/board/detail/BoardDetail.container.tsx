import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  function onClickList() {
    router.push("/boards");
  }
  function onClickEdit() {
    router.push(`/detail/${router.query.boardId}/edit`);
  }

  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query.boardId } });
      alert("삭제가 완료되었습니다!");
      router.push("/boards");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <BoardDetailUI
      data={data}
      onClickList={onClickList}
      onClickDelete={onClickDelete}
      onClickEdit={onClickEdit}
    />
  );
}
