import { useMutation } from "@apollo/client";
import MarketCommentWriteUI from "./marketCommentWrite.persenter";
import { CREATE_USEDITEM_QUESTION } from "./marketCommentWrite.queries";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
import router from "next/router";
const MarketCommentWrite = () => {
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
      });
      console.log(result.data.createUseditemQuestion);
      Modal.confirm({
        content: "댓글이 등록되었습니다.",
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };

  return (
    <MarketCommentWriteUI
      onClickSubmitComment={onClickSubmitComment}
      register={register}
      handleSubmit={handleSubmit}
    />
  );
};

export default MarketCommentWrite;
