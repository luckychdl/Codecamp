import { MainWrapper, FirstPage, SubWrapper } from "./Landing.styles";
export default function LandingUI() {
  return (
    <MainWrapper>
      <SubWrapper>
        <FirstPage src="/FreeBoard/firstPage.png" />
      </SubWrapper>
      <SubWrapper>
        <FirstPage src="/FreeBoard/secondPage.png" />
      </SubWrapper>
      <SubWrapper>
        <FirstPage src="/FreeBoard/thirdPage.png" />
      </SubWrapper>
    </MainWrapper>
  );
}
