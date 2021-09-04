import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_POINT_TRANSACTIONS_OF_BUYING } from "../myPointBought/myPointBought.queries";
import { FETCH_POINT_TRANSACTIONS_OF_LOADING } from "../myPointPay/myPointPay.queries";
import { FETCH_POINT_TRANSACTIONS_OF_SELLING } from "../myPointSold/myPointSold.queries";
import { FETCH_POINT_TRANSACTIONS } from "../myPointTotal/myPointTotal.queries";
import MyPointMainPageUI from "./myPointMain.presenter";

const MyPointMainPage = (props: any) => {
  const { data: totalData, refetch: refetchTotal } = useQuery(
    FETCH_POINT_TRANSACTIONS
  );
  const { data: buyingData, refetch: refetchBuying } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_BUYING
  );
  const { data: loadingData, refetch: refetchLoading } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_LOADING
  );
  const { data: sellingData, refetch: refetchSelling } = useQuery(
    FETCH_POINT_TRANSACTIONS_OF_SELLING
  );
  const [search, setSearch] = useState();

  const onChangeSearch = (event: any) => {
    setSearch(event.target.value);
  };
  const onClickSearch = () => {
    console.log(search);
    console.log("asd");

    props.myMenu === "myPointTotal" && refetchTotal({ search: search });

    props.myMenu === "myPointPay" && refetchLoading({ search: search });

    props.myMenu === "myPointBuying" && refetchBuying({ search: search });

    props.myMenu === "myPointSelling" && refetchSelling({ search: search });
  };
  return (
    <MyPointMainPageUI
      myMenu={props.myMenu}
      totalData={totalData}
      buyingData={buyingData}
      loadingData={loadingData}
      sellingData={sellingData}
      onClickMoveToMenu={props.onClickMoveToMenu}
      onChangeSearch={onChangeSearch}
      onClickSearch={onClickSearch}
    />
  );
};
export default MyPointMainPage;
