import CommentWriteUI from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD_COMMENT } from "./CommentWrite.queries";
import { useRouter } from "next/router";
import { useState, ChangeEvent } from "react";

const INPUTS_INIT = {
  writer: "",
  password: "",
  contents: "",
  rating: 3.1,
};
interface ICommentWriteProps {
  data?: any;
}

export default function CommentWrite(props: ICommentWriteProps) {
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [inputs, setInputs] = useState(INPUTS_INIT);
  const router = useRouter();

  function onChangeInputs(
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) {
    const newInputs = { ...inputs, [event.target.name]: event.target.value };
    setInputs(newInputs);
  }

  async function onClickSubmit() {
    try {
      const result = await createBoardComment({
        variables: {
          boardId: router.query.boardId,
          createBoardCommentInput: {
            writer: inputs.writer,
            password: inputs.password,
            contents: inputs.contents,
            rating: 3.1,
          },
        },
      });
      console.log(result);
      alert("게시물이 성공적으로 등록되었습니다");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <CommentWriteUI
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
    />
  );
}
