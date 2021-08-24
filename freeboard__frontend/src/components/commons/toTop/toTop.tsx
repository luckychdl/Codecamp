import styled from "@emotion/styled";

const Top = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 9999;
  margin: 50px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  position: sticky;
  bottom: 0px;
`;
const ToTop = () => {
  const onClickTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Wrapper>
      <Top onClick={onClickTop} src="/FreeBoard/topArrow.svg"></Top>
    </Wrapper>
  );
};
export default ToTop;
