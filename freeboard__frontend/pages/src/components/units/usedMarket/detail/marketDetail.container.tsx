import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./marketDetail.presenter";
import { FETCH_USED_ITEM, TOGGLE_USED_ITEM_PICK } from "./marketDetail.queries";
import { Modal } from "antd";
const MarketDetail = () => {
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.useditemId },
  });
  const [toggleUseditemPick] = useMutation(TOGGLE_USED_ITEM_PICK);
  const onClickToggle = async () => {
    try {
      const result = await toggleUseditemPick({
        variables: { useditemId: router.query.useditemId },
      });
      console.log(result.data);
      console.log(data);
      refetch();
    } catch (err) {
      Modal.error({
        content: err.message,
      });
    }
  };
  const onClickMove = () => {
    router.push("/usedMarket");
  };
  return (
    <>
      <MarketDetailUI
        data={data}
        onClick={onClickMove}
        onClickToggle={onClickToggle}
      />
    </>
  );
};

export default MarketDetail;
