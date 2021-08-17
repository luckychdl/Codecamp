import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import CommentAnswerUI from "./commentAnswer.presenter";
import {
  CREATE_USED_ITEM_QUESTION_ANSWER,
  UPDATE_USEDITEM_QUESTION,
} from "./commentAnswer.queries";
import { Modal } from "antd";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../commentAnswerList/commentAnswerList.queries";
import { useRouter } from "next/router";
import { FETCH_USEDITEM_QUESTIONS } from "../list/marketCommentList.queries";
const CommentAnswer = (props) => {
  const router = useRouter();
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const { register, handleSubmit } = useForm();
  const onClickSubmit = async (el) => {
    try {
      await createUseditemQuestionAnswer({
        variables: {
          createUseditemQuestionAnswerInput: { ...el },
          useditemQuestionId: props.data._id,
        },

        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTION_ANSWERS,
            variables: {
              useditemQuestionId: props.data._id,
            },
          },
        ],
      });
      props.setIsAnswer(false);
      Modal.success({
        content: "댓글이 등록되었습니다.",
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  const onClickUpdateComment = async (data) => {
    // console.log("qrqr", el.contents);
    try {
      const result = await updateUseditemQuestion({
        variables: {
          useditemQuestionId: props.data._id,
          updateUseditemQuestionInput: { ...data },
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      console.log(result);
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
    <CommentAnswerUI
      isEdit={props.isEdit}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickUpdateComment={onClickUpdateComment}
    />
  );
};

export default CommentAnswer;
