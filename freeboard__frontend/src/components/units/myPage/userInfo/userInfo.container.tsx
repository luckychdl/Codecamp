import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../../commons/login/login.queries";
import UserInfoUI from "./userInfo.presenter";
const UserInfo = (props: any) => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return (
    <UserInfoUI
      data={data}
      onClickMoveToMenu={props.onClickMoveToMenu}
      onClickMyMarket={props.onClickMyMarket}
      onClickMyInfo={props.onClickMyInfo}
      isOpen={props.isOpen}
      isInfo={props.isInfo}
      isMarket={props.isMarket}
    />
  );
};
export default UserInfo;
