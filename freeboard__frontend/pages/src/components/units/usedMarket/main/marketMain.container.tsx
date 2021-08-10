import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import MarketMainUI from "./marketMain.presenter";
import { FETCH_USED_ITEMS } from "./marketMain.queries";

const MarketMain = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { data } = useQuery(FETCH_USED_ITEMS, {
    variables: router.query.useditemId,
  });

  const onClickMove = () => {
    router.push("/usedMarket/new");
  };
  const onClickMoveDetail = (el) => () => {
    console.log(el);
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    baskets.push(el);
    localStorage.setItem("baskets", JSON.stringify(baskets));
    // router.push(`/usedMarket/detail/${id}`);
  };
  return (
    <MarketMainUI
      handleSubmit={handleSubmit}
      onClickMoveDetail={onClickMoveDetail}
      onClickMove={onClickMove}
      register={register}
      data={data}
    />
  );
};
export default MarketMain;
