import withAuth from "../withAuth";
const HOCPage = () => {
  return (
    <>
      <div>성공적으로 로그인 되었습니다.</div>
    </>
  );
};

export default withAuth(HOCPage);
