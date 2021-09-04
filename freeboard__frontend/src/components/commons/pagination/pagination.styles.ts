import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  width: 1200px;
  justify-content: center;
  margin: 30px;
`;
export const Page = styled.button`
  margin: 0px 10px;
  cursor: pointer;
  background-color: white;
  border: none;
  :active {
    position: relative;
    top: 4px;
    border-radius: 10px;
  }
  :hover {
    color: blue;
  }
`;
export const Next = styled.button`
  margin: 0px 10px;
  cursor: pointer;
  background-color: white;
  border: none;
  text-align: center;
  color: ${(props: { nextActive: boolean }) =>
    props.nextActive ? "black" : "#e6e6e6"};
  :active {
    position: relative;
    top: 4px;
  }
  :hover {
    color: ${(props: { nextActive: boolean }) =>
      props.nextActive ? "#512771" : "none"};
  }
`;
export const Prev = styled.button`
  margin: 0px 10px;
  cursor: pointer;
  background-color: white;
  border: none;
  text-align: center;
  color: ${(props: { prevActive: boolean }) =>
    props.prevActive ? "black" : "#e6e6e6"};
  :active {
    position: relative;
    top: 4px;
  }
  :hover {
    color: ${(props: { prevActive: boolean }) =>
      props.prevActive ? "#512771" : "none"};
  }
`;
