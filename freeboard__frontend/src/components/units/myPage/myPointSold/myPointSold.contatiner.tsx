import { useQuery } from "@apollo/client";
import MyPointSoldPageUI from "./myPointSold.presenter";
import { FETCH_POINT_TRANSACTIONS_OF_SELLING } from "./myPointSold.queries";
const MyPointSoldPage = () => {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING);
  return <MyPointSoldPageUI data={data} />;
};
export default MyPointSoldPage;
