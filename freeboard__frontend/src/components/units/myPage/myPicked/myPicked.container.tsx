import { useQuery } from "@apollo/client";
import MyPickedUI from "./myPicked.presenter";
import { FETCH_USED_ITEMS_I_PICKED } from "./myPicked.queries";

const MyPicked = () => {
  const { data } = useQuery(FETCH_USED_ITEMS_I_PICKED);
  return <MyPickedUI data={data} />;
};

export default MyPicked;
