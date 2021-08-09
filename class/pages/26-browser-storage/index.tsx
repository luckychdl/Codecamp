const BrowserStorage = () => {
  const onSaveCookie = () => {
    document.cookie = "aaa=철수";
    document.cookie = "bbb=훈이";
    document.cookie = "ccc=맹구";
  };
  const onSaveLocalStorage = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onSaveSessionStorage = () => {
    sessionStorage.setItem("ccc", "훈이");
  };
  const onLoadCookie = () => {
    let zxc;
    console.log(document.cookie);
    document.cookie.split("; ").forEach((data) => {
      if (data.startsWith("aaa=")) zxc = data;
    });
    console.log(zxc.split("=")[1]);
  };
  const onLoadLocalStorage = () => {
    const asd = localStorage.getItem("bbb");
    console.log("asd", asd);
    // sessionStorage.setItem("ccc", "훈이");
  };
  const onLoadSessionStorage = () => {
    const qwe = sessionStorage.getItem("ccc");
    console.log("qwe", qwe);
    // sessionStorage.setItem("ccc", "훈이");
  };
  return (
    <>
      <button onClick={onSaveCookie}>쿠키에 저장하기</button>
      <br />
      <button onClick={onSaveLocalStorage}>로컬 스토리지에 저장하기</button>
      <br />
      <button onClick={onSaveSessionStorage}>세션 스토리지에 저장하기</button>
      ========================================================================
      <br />
      <button onClick={onLoadCookie}>쿠키 불러오기</button>
      <br />
      <button onClick={onLoadLocalStorage}>로컬 스토리지 불러오기</button>
      <br />
      <button onClick={onLoadSessionStorage}>세션 스토리지 불러오기</button>
    </>
  );
};

export default BrowserStorage;
