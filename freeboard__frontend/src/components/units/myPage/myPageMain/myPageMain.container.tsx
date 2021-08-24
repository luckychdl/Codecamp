import { useState } from "react";
import MyPageMainPageUI from "./myPageMain.presenter";

const MyPageMainPage = () => {
  const [isPicked, setIsPicked] = useState(false);
  const [isMine, setIsMine] = useState(true);

  const onClickPicked = () => {
    setIsPicked(true);
    setIsMine(false);
  };
  const onClickMine = () => {
    setIsMine(true);
    setIsPicked(false);
  };
  return (
    <MyPageMainPageUI
      onClickPicked={onClickPicked}
      isPicked={isPicked}
      isMine={isMine}
      onClickMine={onClickMine}
    />
  );
};

export default MyPageMainPage;
