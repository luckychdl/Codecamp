import { useMutation, useQuery } from "@apollo/client";
import CommentAnswerListUI from "./commentAnswerList.presenter";
// import CommentAnswerListUIItem from "./commentAnswerList.presenter";
import {
  FETCH_USED_ITEM_QUESTION_ANSWERS,
  DELETE_USED_ITEM_QUESTION_ANSWER,
  FETCH_USER_LOGGED_IN,
} from "./commentAnswerList.queries";
import { Modal } from "antd";

const CommentAnswerList = (props) => {
  const [deleteUseditemQuestionAnswer] = useMutation(
    DELETE_USED_ITEM_QUESTION_ANSWER
  );
  const { data, refetch } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.data._id },
  });
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const onClickDeleteAnswer = async (event) => {
    console.log(data);
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId: event.target.id,
        },
      });
      refetch();
      console.log("asd", data, userData);
      Modal.success({
        content: "댓글이 삭제되었습니다.",
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  return (
    <CommentAnswerListUI
      data={data}
      userData={userData}
      onClickDeleteAnswer={onClickDeleteAnswer}
    />
  );
};

export default CommentAnswerList;
