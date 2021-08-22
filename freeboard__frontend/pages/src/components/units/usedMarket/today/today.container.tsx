import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TodayUI from "./today.presenter";
const Today = () => {
  const [basketData, setBasketData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("baskets"));
    setBasketData(basket);
  }, []);
  const onClickMove = (el: any) => () => {
    router.push(`/usedMarket/detail/${el._id}`);
  };
  return <TodayUI basketData={basketData} onClickMove={onClickMove} />;
};
export default Today;
