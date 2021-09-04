import MyPointMainPage from "../../../src/components/units/myPage/myPointMain/myPointMain.container";

const MyPoint = (props: any) => {
  return (
    <MyPointMainPage
      myMenu={props.myMenu}
      onClickMoveToMenu={props.onClickMoveToMenu}
    />
  );
};

export default MyPoint;
