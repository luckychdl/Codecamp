import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`;
export const MainTitle = styled.div`
  font-weight: bold;
  font-size: 36px;
  margin-top: 100px;
  margin-bottom: 40px;
`;
export const BestWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1050px;
  cursor: pointer;
`;
export const Best = styled.img`
  width: 210px;
  height: 210px;
`;
export const Name = styled.div`
  font-size: 30px;
  width: 180px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
`;
export const Remarks = styled.div`
  font-size: 20px;
`;
export const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
export const Tags = styled.div`
  font-size: 18px;
`;
export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  background-color: #ffffff;
  justify-content: flex-start;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  /* box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease; */
  :hover {
    background-color: #ede7f6;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  :active {
    top: 4px;
    position: relative;
  }
  /* background-color: black; */
`;
export const Heart = styled.img``;
export const HeartCount = styled.div``;
export const HeartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
export const ColumnSubWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
