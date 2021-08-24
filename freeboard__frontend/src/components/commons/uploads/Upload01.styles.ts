import styled from "@emotion/styled";
export const PhotoSubWrapper = styled.div`
  box-sizing: border-box;
  /* border: 1px solid #bdbdbd; */
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  background-color: #bdbdbd;
  margin-right: 20px;
  margin-bottom: 30px;
  cursor: pointer;
  :active {
    position: relative;
    top: 2px;
  }
`;
export const PhotoMainWrapper = styled.div`
  width: 996px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
`;
export const Plus = styled.div``;
export const Upload = styled.div``;
export const Img = styled.img`
  box-sizing: border-box;
  border: 1px solid #bdbdbd;
  width: 78px;
  height: 78px;
  /* background-color: #bdbdbd; */
  margin-right: 20px;

  cursor: pointer;
  top: 0;
  left: 0;
`;
