import { IQuery } from "../../../../commons/types/generated/types";
import MarketCommentListUIItem from "./marketCommentList.presenterItem";
interface IMarketCommentListUIProps {
  data?: IQuery;
  userDate?: IQuery;
  onClickDelete: () => void;
}

const MarketCommentListUI = (props: IMarketCommentListUIProps) => {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((data) => (
        <MarketCommentListUIItem
          key={data._id}
          data={data}
          // @ts-ignore
          onClickDelete={props.onClickDelete}
          // @ts-ignore
          userData={props.userData}
        />
      ))}
    </>
  );
};
export default MarketCommentListUI;
