const HOFPage = () => {
  const onClickButton = (aaa: any) => () => {
    alert(aaa);
  };

  return (
    <>
      <button onClick={onClickButton("123")}>클릭클릭</button>
    </>
  );
};

export default HOFPage;
