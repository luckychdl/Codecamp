import styled from "@emotion/styled";
export const MainWrapper = styled.div`
  width: 100%;
  /* border-bottom: 1px solid #bdbdbd; */
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
`;
export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const Profile = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Name = styled.div`
  width: 500px;
  height: 24px;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Contents = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  width: 500px;
  overflow: hidden;
  word-break: normal;
  white-space: nowrap;
  color: #757575;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const CreatedAt = styled.div`
  margin-bottom: 10px;
`;
export const SubWrapper = styled.div`
  width: 1050px;
  display: flex;
  justify-content: space-between;
  /* height: 80px; */
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const NameWrapper = styled.div``;
export const Icon = styled.img`
  margin-left: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
export const IconWrapper = styled.div`
  display: flex;
`;
export const Arrow = styled.img``;
