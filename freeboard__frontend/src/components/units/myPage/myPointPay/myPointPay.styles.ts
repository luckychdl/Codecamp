import styled from "@emotion/styled";
export const PageWrapper = styled.div``;
export const MainWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  width: 100%;
  line-height: 40px;
  display: flex;
  justify-content: space-between;
`;
export const ListColumn = styled.div`
  width: 25%;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
export const Sold = styled.div`
  width: 25%;
  text-align: center;
  font-size: 16px;
  border-top: 1px solid #e0e0e0;
  color: #512771;
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
