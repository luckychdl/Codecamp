import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../../commons/login/login.queries";
import UserInfoUI from "./userInfo.presenter";
const UserInfo = () => {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return <UserInfoUI data={data} />;
};
export default UserInfo;
