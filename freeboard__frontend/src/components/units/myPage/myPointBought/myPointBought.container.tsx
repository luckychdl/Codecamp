import { useQuery } from "@apollo/client";
import MyPointBoughtPageUI from "./myPointBought.presenter";
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from "./myPointBought.queries";
const MyPointBoughtPage = () => {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING);
  return <MyPointBoughtPageUI data={data} />;
};

export default MyPointBoughtPage;
