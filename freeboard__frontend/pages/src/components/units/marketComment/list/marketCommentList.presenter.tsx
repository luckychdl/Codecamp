import { IQuery } from "../../../../../../src/commons/types/generated/types";
import MarketCommentListUIItem from "./marketCommentList.presenterItem";
interface IMarketCommentListUIProps {
  data?: IQuery;
}
const MarketCommentListUI = (props: IMarketCommentListUIProps) => {
  return (
    <>
      {props.data?.fetchUseditemQuestions.map((data) => (
        <MarketCommentListUIItem key={data._id} data={data} />
      ))}
    </>
  );
};
export default MarketCommentListUI;
