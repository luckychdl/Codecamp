import { useQuery } from "@apollo/client";
import MyPointPayPageUI from "./myPointPay.presenter";
import { FETCH_POINT_TRANSACTIONS_OF_LOADING } from "./myPointPay.queries";
const MyPointPayPage = () => {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS_OF_LOADING);
  return <MyPointPayPageUI data={data} />;
};

export default MyPointPayPage;
