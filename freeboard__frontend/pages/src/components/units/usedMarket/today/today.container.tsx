import { useEffect, useState } from "react";
import TodayUI from "./today.presenter";
const Today = () => {
  const [basketData, setBasketData] = useState([]);
  useEffect(() => {
    const basket = JSON.parse(localStorage.getItem("baskets"));
    setBasketData(basket);
  }, []);
  return <TodayUI basketData={basketData} />;
};
export default Today;
