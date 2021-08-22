import { useMutation } from "@apollo/client";
import MarketCommentWriteUI from "./marketCommentWrite.persenter";
import { CREATE_USEDITEM_QUESTION } from "./marketCommentWrite.queries";
import { FETCH_USEDITEM_QUESTIONS } from "../list/marketCommentList.queries";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import router from "next/router";
const MarketCommentWrite = (props: any) => {
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const { register, handleSubmit } = useForm();

  const onClickSubmitComment = async (data: any) => {
    try {
      await createUseditemQuestion({
        // 댓글 등록
        variables: {
          createUseditemQuestionInput: {
            contents: data.contents,
            user: data.seller,
          },
          useditemId: router.query.useditemId,
        },
        refetchQueries: [
          {
            query: FETCH_USEDITEM_QUESTIONS,
            variables: { useditemId: router.query.useditemId },
          },
        ],
      });
      Modal.confirm({
        content: "댓글이 등록되었습니다.",
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };

  const onClickClear = () => {
    props.setIsAnswer((prev: any) => !prev);
  };

  return (
    <MarketCommentWriteUI
      isAnswer={props.isAnswer}
      onClickSubmitComment={onClickSubmitComment}
      register={register}
      handleSubmit={handleSubmit}
      onClickClear={onClickClear}
    />
  );
};

export default MarketCommentWrite;
