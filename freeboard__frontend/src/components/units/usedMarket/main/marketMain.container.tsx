import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import MarketMainUI from "./marketMain.presenter";
import { FETCH_USED_ITEMS } from "./marketMain.queries";

const MarketMain = () => {
  const [search, setSearch] = useState();
  const [hasMore, setHasMore] = useState(true);
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const { data, refetch, fetchMore } = useQuery(FETCH_USED_ITEMS, {
    variables: router.query.useditemId,
  });
  // const { data: buyData } = useQuery(FETCH_USED_ITEMS_I_BOUGHT);
  const onClickMove = () => {
    router.push("/usedMarket/new");
  };
  const onClickMoveDetail = (el: any) => () => {
    const newBaskets = [el];
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]").filter(
      (data: any) => data._id !== el._id
    );
    localStorage.setItem("baskets", JSON.stringify(newBaskets.concat(baskets)));

    // if (isExists) {
    //   router.push(`/usedMarket/detail/${el._id}`);
    // }
    router.push(`/usedMarket/detail/${el._id}`);
  };
  const onClickSearch = () => {
    /* @ts-ignore */
    refetch({ search: search });
  };
  const onChangeSearch = (event: ChangeEvent) => {
    setSearch((event.target as any).value);
  };
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.floor(data?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        /* @ts-ignore */
        if (!fetchMoreResult.fetchUseditems.length) setHasMore(false);
        return {
          fetchUseditems: [
            /* @ts-ignore */
            ...prev.fetchUseditems,
            /* @ts-ignore */
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };
  return (
    <MarketMainUI
      onLoadMore={onLoadMore}
      onClickSearch={onClickSearch}
      onChangeSearch={onChangeSearch}
      /* @ts-ignore */
      handleSubmit={handleSubmit}
      onClickMoveDetail={onClickMoveDetail}
      onClickMove={onClickMove}
      register={register}
      hasMore={hasMore}
      data={data}
    />
  );
};
export default MarketMain;
