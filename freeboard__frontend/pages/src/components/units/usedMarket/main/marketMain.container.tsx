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
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");
    let isExists = false;
    baskets.forEach((data) => {
      if (data._id === el._id) isExists = true;
    });

    // if (isExists) router.push(`/usedMarket/detail/${el._id}`);
    baskets.push(el);
    if (JSON.parse(localStorage.getItem("baskets")) > 3) {
      const remove = localStorage.removeItem("baskets");
      const newRemove = remove.pop();
      console.log(newRemove);
    }
    localStorage.setItem("baskets", JSON.stringify(baskets));
    // router.push(`/usedMarket/detail/${el._id}`);
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
