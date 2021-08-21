import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: #5f0080;
  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: #bdbdbd;
  }
  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: blue;
  }
`;

const MediaPage = () => {
  return (
    <>
      <Wrapper></Wrapper>
    </>
  );
};
export default MediaPage;
