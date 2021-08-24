import { useQuery } from "@apollo/client";
import MyPointTotalPageUI from "./myPointTotal.presenter";
import { FETCH_POINT_TRANSACTIONS } from "./myPointTotal.queries";
const MyPointTotalPage = () => {
  const { data } = useQuery(FETCH_POINT_TRANSACTIONS);
  return <MyPointTotalPageUI data={data} />;
};
export default MyPointTotalPage;
