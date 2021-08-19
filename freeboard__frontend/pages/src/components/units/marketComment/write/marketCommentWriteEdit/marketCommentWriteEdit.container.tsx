import { useMutation } from "@apollo/client";
import MarketCommentWriteUI from "./marketCommentWriteEdit.presenter";
import { UPDATE_USEDITEM_QUESTION } from "./marketCommentWriteEdit.queries";
import { Modal } from "antd";
import { useForm } from "react-hook-form";
const MarketCommentWriteEdit = (props) => {
  const [updateUseditemQuestion] = useMutation(UPDATE_USEDITEM_QUESTION);
  const { register, handleSubmit } = useForm();

  const onClickUpdateComment = async (data) => {
    // 댓글 수정
    console.log("ddd", data);
    try {
      await updateUseditemQuestion({
        variables: {
          updateUseditemQuestionInput: {
            contents: data.contents,
          },
          useditemQuestionId: props.data._id,
        },
      });
      props.setIsAnswer(false);
      Modal.success({
        content: "댓글이 수정되었습니다.",
      });
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };

  const onClickClear = () => {
    props.setIsAnswer((prev) => !prev);
  };

  return (
    <MarketCommentWriteUI
      isAnswer={props.isAnswer}
      data={props.data}
      register={register}
      handleSubmit={handleSubmit}
      onClickClear={onClickClear}
      onClickUpdateComment={onClickUpdateComment}
    />
  );
};

export default MarketCommentWriteEdit;
