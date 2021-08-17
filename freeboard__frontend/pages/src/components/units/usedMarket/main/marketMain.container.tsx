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
  const onClickMoveDetail = (el: any) => () => {
    const newBaskets = [el];
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]").filter(
      (data) => data._id !== el._id
    );
    localStorage.setItem("baskets", JSON.stringify(newBaskets.concat(baskets)));

    // if (isExists) {
    //   router.push(`/usedMarket/detail/${el._id}`);
    // }
    router.push(`/usedMarket/detail/${el._id}`);
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
