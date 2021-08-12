import { useQuery } from "@apollo/client";
import { FETCH_USEDITEM_BEST } from "./bestItem.queries";
import BestItemUI from "./bestItem.presenter";
import { useRouter } from "next/router";
const BestItem = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_USEDITEM_BEST, {
    variables: router.query.useditemId,
  });

  const onClickMove = (id) => () => {
    router.push(`/usedMarket/detail/${id}`);
  };
  return <BestItemUI data={data} onClickMove={onClickMove} />;
};

export default BestItem;
