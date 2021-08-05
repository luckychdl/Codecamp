import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./marketDetail.presenter";
import { FETCH_USED_ITEM } from "./marketDetail.queries";
const MarketDetail = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  return <MarketDetailUI data={data} />;
};

export default MarketDetail;
