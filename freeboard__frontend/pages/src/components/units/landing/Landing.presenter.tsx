import { MainWrapper, FirstPage, SubWrapper } from "./Landing.styles";
export default function LandingUI() {
  return (
    <MainWrapper>
      <SubWrapper>
        <FirstPage src="/FreeBoard/landing.webp" />
      </SubWrapper>
      <SubWrapper>
        <FirstPage src="/FreeBoard/landing1.webp" />
      </SubWrapper>
      <SubWrapper>
        <FirstPage src="/FreeBoard/landing2.webp" />
      </SubWrapper>
    </MainWrapper>
  );
}
