import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  border-right: 1px solid #eceff1;
  width: 300px;
  margin-top: 60px;
  height: 100vh;
`;
export const Title = styled.div`
  font-size: 42px;
  font-weight: bold;
  margin-bottom: 40px;
`;
export const ProfileImg = styled.img`
  margin-bottom: 10px;
`;
export const UserName = styled.div`
  font-size: 28px;
  width: 100px;
  text-align: center;
  font-weight: bold;
`;
export const MyPageWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 105px;
  font-size: 20px;
  margin-bottom: 75px;
`;
export const MyMarketWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  margin-bottom: 20px;
  width: 105px;
  cursor: pointer;
`;
export const MyPointWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
  width: 105px;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const MyProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 105px;
  font-size: 20px;
  cursor: pointer;
`;
export const PointImg = styled.img`
  margin-right: 20px;
`;
export const PointAmount = styled.div`
  font-size: 24px;
`;
export const MoveMyMarketImg = styled.img`
  margin-right: 10px;
`;
interface IProps {
  isMarket: boolean;
  isOpen: boolean;
  isInfo: boolean;
}
export const MoveMyMarketPage = styled.div`
  color: ${(props: IProps) => (props.isMarket ? "#512771" : "#BDBDBD")};
`;
export const MyPointImg = styled.img`
  margin-right: 10px;
`;
export const MoveMyPointPage = styled.div`
  color: ${(props: IProps) => (props.isOpen ? "#512771" : "#BDBDBD")};
`;
export const MyProfileImg = styled.img`
  margin-right: 10px;
`;
export const MoveMyProfilePage = styled.div`
  color: ${(props: IProps) => (props.isInfo ? "#512771" : "#BDBDBD")};
`;
export const SubWrapper = styled.div``;
