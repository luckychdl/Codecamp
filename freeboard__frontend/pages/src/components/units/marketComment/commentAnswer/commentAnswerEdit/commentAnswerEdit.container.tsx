import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import CommentAnswerEditUI from "./commentAnswerEdit.presenter";
import {
  UPDATE_USEDITEM_QUESTION_ANSWER,
  FETCH_USED_ITEM_QUESTION_ANSWERS,
} from "./commentAnswerEdit.queries";

import { Modal } from "antd";
const CommentAnswerEdit = (props) => {
  const [updateUseditemQuestionAnswer] = useMutation(
    UPDATE_USEDITEM_QUESTION_ANSWER
  );
  const { register, handleSubmit } = useForm();
  const onClickUpdateCommentAnswer = async (data) => {
    // 대댓글 수정
    try {
      await updateUseditemQuestionAnswer({
        variables: {
          updateUseditemQuestionAnswerInput: { contents: data.contents },
          useditemQuestionAnswerId: props.data._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.dataId._id,
            },
          },
        ],
      });
      props.setIsEdit((prev) => !prev);
      Modal.success({
        content: "댓글이 수정되었습니다.",
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  return (
    <CommentAnswerEditUI
      register={register}
      handleSubmit={handleSubmit}
      onClickUpdateCommentAnswer={onClickUpdateCommentAnswer}
    />
  );
};

export default CommentAnswerEdit;
