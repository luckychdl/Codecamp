import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const MainTitle = styled.div`
  font-weight: bold;
  font-size: 36px;
  margin-top: 100px;
  margin-bottom: 40px;
  @media (max-width: 767px) {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;
export const BestWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  cursor: pointer;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
export const Best = styled.img`
  width: 210px;
  height: 210px;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;
export const Name = styled.div`
  font-size: 30px;
  width: 180px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  @media (max-width: 767px) {
    font-size: 12px;
    width: 100%;
  }
`;
export const Remarks = styled.div`
  font-size: 20px;
  @media (max-width: 767px) {
    font-size: 12px;
    width: 100%;
  }
`;
export const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  @media (max-width: 767px) {
    font-size: 12px;
    width: 100%;
  }
`;
export const Tags = styled.div`
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 12px;
    width: 100%;
  }
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  background-color: #ffffff;
  justify-content: flex-start;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  :hover {
    background-color: #ede7f6;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    bottom: 4px;
    position: relative;
  }
  :active {
    top: 4px;
    position: relative;
  }
  @media (max-width: 767px) {
    width: 25%;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    flex-grow: 1;
  }
`;
export const Heart = styled.img`
  @media (max-width: 767px) {
    width: 25%;
  }
`;
export const HeartCount = styled.div`
  @media (max-width: 767px) {
    font-size: 10px;
    width: 100%;
  }
`;
export const HeartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const ColumnSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    width: 80px;
  }
`;
export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
