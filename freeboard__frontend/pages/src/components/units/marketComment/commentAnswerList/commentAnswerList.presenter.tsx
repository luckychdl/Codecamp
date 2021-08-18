import CommentAnswerListUIItem from "./commentAnswerList.presenterItem";
const CommentAnswerListUI = (props: any) => {
  return (
    <>
      {props.data?.fetchUseditemQuestionAnswers.map((data: any) => (
        <CommentAnswerListUIItem
          key={data._id}
          dataId={props.dataId}
          data={data}
          onClickDeleteAnswer={props.onClickDeleteAnswer}
          onClickUpdateCommentAnswer={props.onClickUpdateCommentAnswer}
          userData={props.userData}
          onClickOpenUpdateAnswer={props.onClickOpenUpdateAnswer}
          isComment={props.isComment}
          setIsComment={props.setIsComment}
        />
      ))}
    </>
  );
};
export default CommentAnswerListUI;
