import CommentWriteUI from "./CommentWrite.presenter";
import { useMutation } from "@apollo/client";
import {
  CREATE_BOARD_COMMENT,
  UPDATE_BOARD_COMMENT,
} from "./CommentWrite.queries";
import { useRouter } from "next/router";
import { useState, ChangeEvent, MouseEvent } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/CommentList.queries";
import { IBoardComment } from "../../../../../../src/commons/types/generated/types";

export const INPUTS_INIT = {
  writer: "",
  password: "",
  contents: "",
  rating: 3.1,
};
interface ICommentWriteProps {
  data?: IBoardComment;
  isEdit: boolean;
  setIsEdit?: (value: boolean) => void;
}

export default function CommentWrite(props: ICommentWriteProps) {
  const router = useRouter();
  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);
  const [inputs, setInputs] = useState(INPUTS_INIT);

  function onChangeInputs(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  }

  async function onClickSubmit() {
    try {
      await createBoardComment({
        variables: {
          boardId: router.query.boardId,
          createBoardCommentInput: { ...inputs },
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setInputs(INPUTS_INIT);
    } catch (error) {
      alert(error.message);
    }
  }

  async function onClickUpdate(event: MouseEvent<HTMLButtonElement>) {
    try {
      await updateBoardComment({
        variables: {
          updateBoardCommentInput: { contents: inputs.contents },
          password: inputs.password,
          boardCommentId: (event.target as Element).id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
      setInputs(INPUTS_INIT);
      props.setIsEdit?.(false);
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
      inputs={inputs}
    />
  );
}
