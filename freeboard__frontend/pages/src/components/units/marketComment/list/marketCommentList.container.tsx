import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketCommentListUI from "./marketCommentList.presenter";
import { USEDITEM_QUESTIONS } from "./marketCommentList.queries";
const MarketCommentList = () => {
  const router = useRouter();
  const { data } = useQuery(USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });
  return <MarketCommentListUI data={data} />;
};
export default MarketCommentList;
