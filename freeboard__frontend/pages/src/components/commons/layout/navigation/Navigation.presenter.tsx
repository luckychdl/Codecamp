import {
  Wrapper,
  FreeBoard,
  Market,
  MyPage,
  Line,
  Gallery,
} from "./Navigation.styles";
export default function LayoutNavigationUI() {
  return (
    <Wrapper>
      <Gallery>갤러리</Gallery>
      <Line></Line>
      <FreeBoard>자유게시판</FreeBoard>
      <Line></Line>
      <Market>중고마켓</Market>
      <Line></Line>
      <MyPage>마이페이지</MyPage>
    </Wrapper>
  );
}
