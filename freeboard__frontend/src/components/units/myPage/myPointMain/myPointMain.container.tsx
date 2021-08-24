import MyPointMainPageUI from "./myPointMain.presenter";
const MyPointMainPage = (props: any) => {
  return (
    <MyPointMainPageUI
      myMenu={props.myMenu}
      onClickMoveToMenu={props.onClickMoveToMenu}
    />
  );
};

export default MyPointMainPage;
