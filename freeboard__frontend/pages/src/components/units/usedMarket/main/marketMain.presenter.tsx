interface IMarketMainUIProps {
  onClickMove: () => void;
}
const MarketMainUI = (props: IMarketMainUIProps) => {
  return (
    <>
      <button onClick={props.onClickMove}>상품등록</button>
    </>
  );
};

export default MarketMainUI;
