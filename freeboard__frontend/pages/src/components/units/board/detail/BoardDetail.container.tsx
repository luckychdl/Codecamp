import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { Modal } from "antd";
import {
  FETCH_BOARD,
  DELETE_BOARD,
  LIKE_BOARD,
  DISLIKE_BOARD,
} from "./BoardDetail.queries";
import BoardDetailUI from "./BoardDetail.presenter";

export default function BoardDetail() {
  const router = useRouter();
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [isOpen, setIsOpen] = useState(false);
  const [likeBoard] = useMutation(LIKE_BOARD);
  const [dislikeBoard] = useMutation(DISLIKE_BOARD);

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });
  function onClickLike() {
    likeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  }

  function onClickDisLike() {
    dislikeBoard({
      variables: { boardId: router.query.boardId },
      refetchQueries: [
        { query: FETCH_BOARD, variables: { boardId: router.query.boardId } },
      ],
    });
  }
  function onClickList() {
    router.push("/boards");
  }
  function onClickEdit() {
    router.push(`/detail/${router.query.boardId}/edit`);
  }

  async function onClickDelete() {
    try {
      await deleteBoard({ variables: { boardId: router.query.boardId } });
      setIsOpen(true);
    } catch (error) {
      alert(error.message);
    }
  }
  function handleOK() {
    setIsOpen(false);
    router.push("/boards");
  }
  function handleCancel() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        title="게시물 삭제"
        visible={isOpen}
        onOk={handleOK}
        onCancel={handleCancel}
      >
        <div>게시물이 성공적으로 삭제되었습니다.</div>
      </Modal>
      <BoardDetailUI
        data={data}
        onClickLike={onClickLike}
        onClickDisLike={onClickDisLike}
        onClickList={onClickList}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
      />
    </>
  );
}
