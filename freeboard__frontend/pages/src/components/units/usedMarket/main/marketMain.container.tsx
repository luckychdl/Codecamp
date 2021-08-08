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
  return (
    <MarketMainUI
      handleSubmit={handleSubmit}
      onClickMove={onClickMove}
      register={register}
      data={data}
    />
  );
};
export default MarketMain;
