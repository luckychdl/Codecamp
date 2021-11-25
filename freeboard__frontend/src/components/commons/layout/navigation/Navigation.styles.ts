import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: #512771;
  @media (max-width: 767px) {
    width: 100%;
    height: 40px;
  }
`;
export const FreeBoard = styled.div`
  font-size: 18px;
  width: 83px;
  color: #ffffff;
  text-align: center;
  margin: 0 40px;
  cursor: pointer;
  :hover {
    color: #616161;
  }
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    font-size: 10px;
    margin: 0 10px;
  }
`;
export const Market = styled.div`
  font-size: 18px;
  width: 83px;
  text-align: center;
  margin: 0 40px;
  color: #ffffff;
  cursor: pointer;
  :hover {
    color: #616161;
  }
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    font-size: 10px;
    margin: 0 10px;
  }
`;
export const MyPage = styled.div`
  margin: 0 40px;
  text-align: center;
  font-size: 18px;
  width: 83px;
  color: #ffffff;
  cursor: pointer;
  :hover {
    color: #616161;
  }
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    font-size: 10px;
    margin: 0 10px;
  }
`;
export const Line = styled.div`
  color: #ffffff;
  /* border: 1px solid #ffffff;
  height: 20px; */
`;
export const Gallery = styled.div`
  margin: 0 40px;
  text-align: center;
  font-size: 18px;
  width: 83px;
  color: #ffffff;
  cursor: pointer;
  :hover {
    color: #616161;
  }
  :active {
    position: relative;
    top: 4px;
  }
  @media (max-width: 767px) {
    font-size: 10px;
    margin: 0 10px;
  }
`;
