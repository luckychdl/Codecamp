import { memo } from "react";
const Presenter = () => {
  console.log("프리젠터(자식)가 렌더링 시작됩니다.");
  return (
    <>
      <div>================== 프리젠터 ===================</div>
      <div>저는 프리젠터 입니다.</div>
      <div>============================================</div>
    </>
  );
};

export default memo(Presenter);
