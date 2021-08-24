import { useQuery } from "@apollo/client";
import MyPointSellingPageUI from "./myPointSold.presenter";
import { FETCH_POINT_TRANSACTIONS_OF_SELLING } from "./myPointSold.queries";
const MyPointSellingPage = () => {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_SELLING);
  return <MyPointSellingPageUI data={data} />;
};
export default MyPointSellingPage;
