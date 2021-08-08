import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import MarketMainUI from "./marketMain.presenter";

const MarketMain = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const onClickMove = () => {
    router.push("/usedMarket/new");
  };
  return (
    <MarketMainUI
      handleSubmit={handleSubmit}
      onClickMove={onClickMove}
      register={register}
    />
  );
};
export default MarketMain;
