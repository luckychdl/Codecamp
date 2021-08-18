import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import CommentAnswerUI from "./commentAnswer.presenter";
import { CREATE_USED_ITEM_QUESTION_ANSWER } from "./commentAnswer.queries";
import { Modal } from "antd";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "../commentAnswerList/commentAnswerList.queries";
import { useRouter } from "next/router";
const CommentAnswer = (props) => {
  const router = useRouter();
  const [createUseditemQuestionAnswer] = useMutation(
    CREATE_USED_ITEM_QUESTION_ANSWER
  );
  const { register, handleSubmit } = useForm();
  const onClickSubmit = async (el) => {
    console.log(props.data);
    try {
      await createUseditemQuestionAnswer({
        // 대댓글 등록
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
      Modal.success({
        content: "댓글이 등록되었습니다.",
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
      isComment={props.isComment}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onClickUpdateComment={props.onClickUpdateComment}
    />
  );
};

export default CommentAnswer;
