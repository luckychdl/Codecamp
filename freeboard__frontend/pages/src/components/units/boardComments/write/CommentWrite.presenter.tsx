import { ChangeEvent, MouseEvent } from "react";
import { IBoardComment } from "../../../../../../src/commons/types/generated/types";
import { INPUTS_INIT } from "./CommentWrite.container";
import {
  ReviewWrapper,
  ReviewImg,
  Review,
  ReviewWriter,
  ReviewPassword,
  Star,
  ReviewWrite,
  ReviewBorder,
  WriterWrapper,
  ReviewSubWrapper,
  ReviewButton,
  Text,
  TextWrapper,
  CommentWrapper,
} from "./CommentWrite.styles";
interface ICommentWriteUIProps {
  onChangeInputs: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onClickSubmit: () => void;
  isEdit?: boolean;
  onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void;
  inputs: typeof INPUTS_INIT;
  data?: IBoardComment;
  onChangeStar: (value: number) => void;
}

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <CommentWrapper>
      <ReviewBorder></ReviewBorder>
      <ReviewSubWrapper>
        <ReviewWrapper>
          <ReviewImg src="/FreeBoard/Review.png" />
          <Review>댓글</Review>
        </ReviewWrapper>
        <WriterWrapper>
          <ReviewWriter
            name="writer"
            type="text"
            value={props.inputs.writer || props.data?.writer || ""}
            placeholder="작성자"
            onChange={props.onChangeInputs}
          />
          <ReviewPassword
            name="password"
            type="password"
            placeholder="비밀번호"
            value={props.inputs.password}
            onChange={props.onChangeInputs}
          />
          <Star onChange={props.onChangeStar} />
        </WriterWrapper>
      </ReviewSubWrapper>
      <TextWrapper>
        <ReviewWrite
          name="contents"
          onChange={props.onChangeInputs}
          value={props.inputs.contents || props.data?.contents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <ReviewButton
          id={props.data?._id}
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </ReviewButton>
        <Text>0/200</Text>
      </TextWrapper>
    </CommentWrapper>
  );
}
