import { useRouter } from "next/router";
import LayoutNavigationUI from "./Navigation.presenter";
export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMoveToBoard = () => {
    router.push("../../../../../boards");
  };
  const onClickMoveToMarket = () => {
    router.push("../../../../../usedMarket");
  };
  const onClickMoveToMypage = () => {
    router.push("../../../../../myPage");
  };
  return (
    <LayoutNavigationUI
      onClickMoveToBoard={onClickMoveToBoard}
      onClickMoveToMarket={onClickMoveToMarket}
      onClickMoveToMypage={onClickMoveToMypage}
    />
  );
}
