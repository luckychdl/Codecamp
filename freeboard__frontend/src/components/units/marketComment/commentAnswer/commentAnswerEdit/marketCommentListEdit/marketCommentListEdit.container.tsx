import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketCommentListUI from "./marketCommentListEdit.presenter";
import {
  FETCH_USEDITEM_QUESTIONS,
  DELETE_USED_ITEM_QUESTION,
  FETCH_USER_LOGGED_IN,
} from "./marketCommentListEdit.queries";
import { Modal } from "antd";
import { IQuery } from "../../../../../../commons/types/generated/types";
const MarketCommentListEdit = () => {
  const router = useRouter();
  const [deleteUseditemQuestion] = useMutation(DELETE_USED_ITEM_QUESTION);
  const { data, refetch } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });
  const { data: userData } = useQuery<IQuery>(FETCH_USER_LOGGED_IN);
  const onClickDelete = async (event: any) => {
    try {
      await deleteUseditemQuestion({
        variables: { useditemQuestionId: (event.target as Element).id },
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
  return (
    <>
      <MarketCommentListUI
        data={data}
        // @ts-ignore
        onClickDelete={onClickDelete}
        userData={userData}
      />
    </>
  );
};
export default MarketCommentListEdit;
