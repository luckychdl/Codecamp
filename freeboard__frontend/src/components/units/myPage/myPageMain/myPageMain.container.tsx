import { MouseEvent, useState } from "react";
import withAuth from "../../../commons/hocs/withAuth";
import MyPageMainPageUI from "./myPageMain.presenter";

const MyPageMainPage = () => {
  const [myMenu, setMyMenu] = useState("myPointTotal");
  const [isOpen, setIsOpen] = useState(false);
  const [isPicked, setIsPicked] = useState(false);
  const [isMine, setIsMine] = useState(true);
  const [isInfo, setIsInfo] = useState(false);
  const [isMarket, setIsMarket] = useState(true);
  const onClickMoveToMenu = (event: MouseEvent<HTMLDivElement>) => {
    setMyMenu((event.target as Element).id);
    setIsOpen(true);
    setIsInfo(false);
    setIsMarket(false);
  };
  const onClickMyMarket = () => {
    setIsMarket(true);
    setIsOpen(false);
    setIsInfo(false);
  };
  const onClickMyInfo = () => {
    setIsInfo(true);
    setIsOpen(false);
    setIsMarket(false);
    console.log(isInfo, isOpen);
  };

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
      isOpen={isOpen}
      isInfo={isInfo}
      isMarket={isMarket}
      setIsMarket={setIsMarket}
      onClickMyInfo={onClickMyInfo}
      onClickMoveToMenu={onClickMoveToMenu}
      onClickMine={onClickMine}
      onClickMyMarket={onClickMyMarket}
      myMenu={myMenu}
    />
  );
};

export default withAuth(MyPageMainPage);
