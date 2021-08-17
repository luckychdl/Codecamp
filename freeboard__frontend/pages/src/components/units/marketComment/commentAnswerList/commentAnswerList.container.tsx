import { useQuery } from "@apollo/client";
import CommentAnswerListUI from "./commentAnswerList.presenter";
// import CommentAnswerListUIItem from "./commentAnswerList.presenter";
import { FETCH_USED_ITEM_QUESTION_ANSWERS } from "./commentAnswerList.queries";

const CommentAnswerList = (props) => {
  const { data } = useQuery(FETCH_USED_ITEM_QUESTION_ANSWERS, {
    variables: { useditemQuestionId: props.data._id },
  });
  return <CommentAnswerListUI data={data} />;
};

export default CommentAnswerList;
