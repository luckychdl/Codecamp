import styled from "@emotion/styled";
export const PageWrapper = styled.div``;
export const MainWrapper = styled.div`
  width: 1200px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const SubWrapper = styled.div`
  display: flex;
  width: 1200px;
  justify-content: space-evenly;
  align-items: flex-start;
`;
export const Wrapper = styled.div`
  border-top: 2px solid #424242;
  border-bottom: 2px solid #424242;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;
export const Row = styled.div`
  height: 40px;
  line-height: 40px;
  display: flex;
`;
export const ListColumn = styled.div`
  width: 25%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export const Column = styled.div`
  width: 25%;
  text-align: center;
  font-size: 18px;
  border-top: 1px solid #e0e0e0;
  /* cursor: pointer; */
`;
export const Title = styled.div`
  width: 25%;
  text-align: center;
  font-size: 18px;
  border-top: 1px solid #e0e0e0;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
`;

export const MyProduct = styled.div`
  border-right: 1px solid #bdbdbd;
  margin-right: 10px;
  padding-right: 10px;
  cursor: pointer;
`;
export const MyPick = styled.div`
  cursor: pointer;
`;
export const MyWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
