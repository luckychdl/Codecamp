import CommentAnswerListUIItem from "./commentAnswerList.presenterItem";
const CommentAnswerListUI = (props: any) => {
  return (
    <>
      {props.data?.fetchUseditemQuestionAnswers.map((data: any) => (
        <CommentAnswerListUIItem
          key={data._id}
          data={data}
          onClickDeleteAnswer={props.onClickDeleteAnswer}
          userData={props.userData}
        />
      ))}
    </>
  );
};
export default CommentAnswerListUI;
