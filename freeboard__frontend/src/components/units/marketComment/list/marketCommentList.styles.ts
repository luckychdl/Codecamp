import styled from "@emotion/styled";
export const MainWrapper = styled.div`
  width: 1000px;
  border-bottom: 1px solid #bdbdbd;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    width: 90%;
  }
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
  width: 100px;
  /* height: 120px; */
`;
export const Name = styled.div`
  width: 100px;
  height: 24px;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 20px;
`;
export const Contents = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
  width: 800px;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  color: #757575;
  @media (max-width: 767px) {
    width: 90%;
  }
`;
export const CreatedAt = styled.div`
  margin-bottom: 10px;
`;
export const SubWrapper = styled.div`
  width: 950px;
  display: flex;
  justify-content: space-between;
  /* height: 80px; */
  @media (max-width: 767px) {
    width: 280px;
  }
`;
export const NameWrapper = styled.div``;
export const Icon = styled.img`
  margin-left: 10px;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;
export const IconWrapper = styled.div``;
