import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketCommentListUI from "./marketCommentListEdit.presenter";
import {
  FETCH_USEDITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
  FETCH_USER_LOGGED_IN,
} from "./marketCommentListEdit.queries";
import { Modal } from "antd";
const MarketCommentListEdit = () => {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const { data, refetch } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  const onClickDelete = async (event) => {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: event.target.id },
      });
      refetch();
      Modal.success({
        content: "댓글이 삭제되었습니다.",
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  console.log(data?.fetchUseditemQuestions._id);
  return (
    <>
      <MarketCommentListUI
        data={data}
        onClickDelete={onClickDelete}
        userData={userData}
      />
    </>
  );
};
export default MarketCommentListEdit;
