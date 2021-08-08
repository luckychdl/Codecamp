import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketCommentListUIItem from "./marketCommentList.presenter";
import { FETCH_USEDITEM_QUESTIONS } from "./marketCommentList.queries";
const MarketCommentList = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM_QUESTIONS, {
    variables: { useditemId: router.query.useditemId },
  });

  const onClick = () => {
    console.log(router.query.useditemId);
    console.log(data);
  };
  return (
    <>
      <MarketCommentListUIItem data={data} />
      <button onClick={onClick}>asd</button>
    </>
  );
};
export default MarketCommentList;
