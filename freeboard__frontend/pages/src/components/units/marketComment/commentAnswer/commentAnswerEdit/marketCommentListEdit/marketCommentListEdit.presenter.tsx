import { IQuery } from "../../../../../../../../src/commons/types/generated/types";
import MarketCommentListEditUIItem from "./marketCommentListEdit.presenterItem";
interface IMarketCommentListUIProps {
  data?: IQuery;
  onClickDelete: () => void;
  userData?: any;
}

const MarketCommentListEditUI = (props: IMarketCommentListUIProps) => {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((data) => (
        <MarketCommentListEditUIItem
          key={data._id}
          data={data}
          onClickDelete={props.onClickDelete}
          userData={props.userData}
        />
      ))}
    </>
  );
};
export default MarketCommentListEditUI;
