import { useQuery } from "@apollo/client";
import MyPointBuyingtPageUI from "./myPointBought.presenter";
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from "./myPointBought.queries";
const MyPointBuyingPage = () => {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);
  console.log("123123", data);
  return <MyPointBuyingtPageUI data={data} />;
};

export default MyPointBuyingPage;
