import MarketDetail from "../../../../src/components/units/usedMarket/detail/marketDetail.container";
import MarketCommentWrite from "../../../../src/components/units/marketComment/write/marketCommentWrite.container";
import MarketCommentList from "../../../../src/components/units/marketComment/list/marketCommentList.container";
const MarketDetailPage = () => {
  return (
    <>
      <MarketDetail />
      <MarketCommentWrite />
      <MarketCommentList />
    </>
  );
};

export default MarketDetailPage;
