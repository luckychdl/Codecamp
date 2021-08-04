import { useRouter } from "next/router";
import MarketMainUI from "./marketMain.presenter";

const MarketMain = () => {
  const router = useRouter();
  const onClickMove = () => {
    router.push("/usedMarket/new");
  };
  return <MarketMainUI onClickMove={onClickMove} />;
};

export default MarketMain;
