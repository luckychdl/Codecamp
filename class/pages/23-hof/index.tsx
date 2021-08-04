export default function HOFPage() {
  const onClickButton = (aaa) => () => {
    alert(aaa);
  };

  // onClickButton(event)
  return (
    <>
      <button onClick={onClickButton("12345")}>저를 클릭해주세요</button>
    </>
  );
}
