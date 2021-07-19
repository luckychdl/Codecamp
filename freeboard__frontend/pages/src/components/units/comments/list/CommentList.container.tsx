import CommentListUI from "./CommentList.presenter";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentList.queries";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { MouseEvent } from "react";

export default function CommentList() {
  const router = useRouter();
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: router.query.boardId },
  });

  function onClickMoveEdit() {
    router.push(`/detail/${router.query.boardId}/commentEdit`);
  }

  async function onClickDelete(
    event: MouseEvent<HTMLImageElement, MouseEvent>
  ) {
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: event.target.id,
        },
      });
      alert("댓글이 삭제되었습니다.");
      router.push(`/detail/${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <CommentListUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveEdit={onClickMoveEdit}
    />
  );
}
