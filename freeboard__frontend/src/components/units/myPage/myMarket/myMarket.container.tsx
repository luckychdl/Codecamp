import { useQuery } from "@apollo/client";
import MyMarketUI from "./myMarket.presenter";
import { FETCH_USED_ITEM_I_SOLD } from "./myMarket.queries";
const MyMarket = (props: any) => {
  const { data } = useQuery(FETCH_USED_ITEM_I_SOLD, {
    variables: { startPage: 1 },
  });
  return <MyMarketUI data={data} />;
};
export default MyMarket;
