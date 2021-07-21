import { MouseEvent, useState, ChangeEvent } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardComment } from "../../../../../../src/commons/types/generated/types";
import CommentWrite from "../write/CommentWrite.container";
import { Modal } from "antd";
import {
  DELETE_BOARD_COMMENT,
  FETCH_BOARD_COMMENTS,
} from "./CommentList.queries";
import {
  ListWrapper,
  FooterMainWrapper,
  ReviewProfile,
  FooterWrapper,
  FooterSubWrapper,
  ReviewName,
  ReviewContents,
  FooterImg,
  Mode,
  Clear,
  ReviewDate,
  ContentsWrapper,
  FooterBorder,
  ListSubWrapper,
  Star,
  PasswordInput,
} from "./CommentList.styles";

interface ICommentListUIItemProps {
  data: IBoardComment;
}

export default function CommentListUIItem(props: ICommentListUIItemProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [password, setPassword] = useState("");
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }
  function onClickOpenDeleteModal() {
    setIsOpenDeleteModal(true);
  }
  function onChangeDeletePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }
  function onClickDelete() {
    deleteBoardComment({
      variables: { password, boardCommentId: props.data?._id },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
    Modal.confirm({
      content: "댓글이 삭제되었습니다.",
    });
  }

  return (
    <>
      {isOpenDeleteModal && (
        <Modal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <PasswordInput type="password" onChange={onChangeDeletePassword} />
        </Modal>
      )}
      {!isEdit && (
        <ListWrapper>
          <ListSubWrapper>
            <FooterMainWrapper>
              <FooterWrapper>
                <ReviewProfile src="/FreeBoard/ReviewProfile.png" />
                <ContentsWrapper>
                  <FooterSubWrapper>
                    <ReviewName>{props.data.writer}</ReviewName>
                    <Star value={props.data.rating} disabled />
                  </FooterSubWrapper>
                  <ReviewContents>{props.data.contents}</ReviewContents>
                </ContentsWrapper>
              </FooterWrapper>
              <FooterImg>
                <Mode onClick={onClickUpdate} src="/FreeBoard/Mode.png" />
                <Clear
                  onClick={onClickOpenDeleteModal}
                  src="/FreeBoard/Clear.png"
                />
              </FooterImg>
            </FooterMainWrapper>
            <ReviewDate>{getDate(props.data.createdAt)}</ReviewDate>
            <FooterBorder></FooterBorder>
          </ListSubWrapper>
        </ListWrapper>
      )}
      {isEdit && (
        <CommentWrite isEdit={isEdit} setIsEdit={setIsEdit} data={props.data} />
      )}
    </>
  );
}
