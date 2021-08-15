import { useMutation } from "@apollo/client";
import MarketCommentWriteUI from "./marketCommentWrite.persenter";
import { CREATE_USEDITEM_QUESTION } from "./marketCommentWrite.queries";
import { FETCH_USEDITEM_QUESTIONS } from "../list/marketCommentList.queries";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import router from "next/router";
import { useState } from "react";
const MarketCommentWrite = () => {
  const [isComment, setIsComment] = useState(false);
  const [createUseditemQuestion] = useMutation(CREATE_USEDITEM_QUESTION);
  const { register, handleSubmit } = useForm();
  const onClickSubmitComment = async (data: any) => {
    console.log(data);
    try {
      const result = await createUseditemQuestion({
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
      console.log("asdasdqqqq", result.data.createUseditemQuestion);
      Modal.confirm({
        content: "댓글이 등록되었습니다.",
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };

  const onClickIsComment = () => {
    setIsComment(true);
  };

  return (
    <MarketCommentWriteUI
      isComment={isComment}
      onClickSubmitComment={onClickSubmitComment}
      register={register}
      handleSubmit={handleSubmit}
      onClickIsComment={onClickIsComment}
    />
  );
};

export default MarketCommentWrite;
