import CommentListUIItem from "./commentList.PresentItem";
import { IQuery } from "../../../../../../src/commons/types/generated/types";

interface ICommentListUIProps {
  data?: IQuery;
}

export default function CommentListUI(props: ICommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((data) => (
        <CommentListUIItem key={data._id} data={data} />
      ))}
    </>
  );
}
