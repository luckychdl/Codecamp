import { MouseEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardComment } from "../../../../../../src/commons/types/generated/types";
import CommentWrite from "../write/CommentWrite.container";
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
} from "./CommentList.styles";

interface ICommentListUIItemProps {
  data: IBoardComment;
}

export default function CommentListUIItem(props: ICommentListUIItemProps) {
  const router = useRouter();
  const [isEdit, setIsEdit] = useState(false);
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT);

  function onClickUpdate() {
    setIsEdit(true);
  }

  function onClickDelete(event: MouseEvent<HTMLImageElement>) {
    const password = prompt("비밀번호를 입력해 주세요.");
    deleteBoardComment({
      variables: { password, boardCommentId: (event.target as Element).id },
      refetchQueries: [
        {
          query: FETCH_BOARD_COMMENTS,
          variables: { boardId: router.query.boardId },
        },
      ],
    });
  }

  return (
    <>
      {!isEdit && (
        <ListWrapper>
          <ListSubWrapper>
            <FooterMainWrapper>
              <FooterWrapper>
                <ReviewProfile src="/FreeBoard/ReviewProfile.png" />
                <ContentsWrapper>
                  <FooterSubWrapper>
                    <ReviewName>{props.data.writer}</ReviewName>
                  </FooterSubWrapper>
                  <ReviewContents>{props.data.contents}</ReviewContents>
                </ContentsWrapper>
              </FooterWrapper>
              <FooterImg>
                <Mode onClick={onClickUpdate} src="/FreeBoard/Mode.png" />
                <Clear
                  id={props.data._id}
                  onClick={onClickDelete}
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
