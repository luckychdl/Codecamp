import styled from "@emotion/styled";

export const MyProduct = styled.div`
  margin-right: 10px;
  cursor: pointer;
  color: ${(props: { isMine: boolean }) =>
    props.isMine === true ? "#512771" : "#BDBDBD"};
  :hover {
    border-bottom: 1px solid #512771;
  }
`;
export const MyPick = styled.div`
  cursor: pointer;
  margin-left: 10px;
  color: ${(props: { isPicked: boolean }) =>
    props.isPicked ? "#512771" : "#BDBDBD"};
  :hover {
    border-bottom: 1px solid #512771;
  }
`;
export const MyWrapper = styled.div`
  display: flex;
  height: 22px;
  margin-bottom: 20px;
  margin-top: 30px;
`;
export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
`;
