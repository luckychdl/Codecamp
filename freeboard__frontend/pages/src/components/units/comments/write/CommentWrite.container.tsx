import CommentWriteUI from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";

export const INPUTS_INIT = {
  writer: "",
  password: "",
  contents: "",
  rating: 3.1,
};
interface ICommentWriteProps {
  data: any;
  isEdit: boolean;
}

export default function CommentWrite(props: ICommentWriteProps) {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [inputs, setInputs] = useState(INPUTS_INIT);

  function onChangeInputs(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
  }

  async function onClickSubmit() {
    try {
      const result: any = await createBoardComment({
        variables: {
          boardId: String(router.query.boardId),
          createBoardCommentInput: {
            writer: inputs.writer,
            password: inputs.password,
            contents: inputs.contents,
            rating: 3.1,
          },
        },
      });
      alert("게시물이 성공적으로 등록되었습니다");

      console.log(inputs);
      console.log(result);
      router.push(`/detail/${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdate() {
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: router.query.boardId,
          updateBoardCommentInput: {
            contents: inputs.contents,
          },
        },
      });
      alert("댓글이 수정되었습니다.");
      router.push(`/detail/${router.query.boardId}`);
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <CommentWriteUI
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      isEdit={props.isEdit}
    />
  );
}
