import {
  ListWrapper,
  Star,
  FooterMainWrapper,
  ReviewProfile,
  FooterWrapper,
  FooterSubWrapper,
  ReviewName,
  YellowStar,
  ReviewContents,
  FooterImg,
  Mode,
  Clear,
  ReviewDate,
  ContentsWrapper,
  FooterBorder,
} from "./CommentList.styles";

interface ICommentListUI {
  data?: any;
}

export default function CommentListUI(props: ICommentListUI) {
  return (
    <ListWrapper>
      <FooterMainWrapper>
        <FooterWrapper>
          <ReviewProfile src="/FreeBoard/ReviewProfile.png" />
          <ContentsWrapper>
            <FooterSubWrapper>
              <ReviewName>{props.data?.fetchBoardComments.writer}</ReviewName>
              <YellowStar src="/FreeBoard/YellowStar.png" />
              <YellowStar src="/FreeBoard/YellowStar.png" />
              <YellowStar src="/FreeBoard/YellowStar.png" />
              <Star src="/FreeBoard/Star.png" />
              <Star src="/FreeBoard/Star.png" />
            </FooterSubWrapper>
            <ReviewContents>
              {props.data?.fetchBoardComments.contents}
            </ReviewContents>
          </ContentsWrapper>
        </FooterWrapper>

        <FooterImg>
          <Mode src="/FreeBoard/Mode.png" />
          <Clear src="/FreeBoard/Clear.png" />
        </FooterImg>
      </FooterMainWrapper>
      <ReviewDate>{props.data?.fetchBoardComments.createdAt}</ReviewDate>
      <FooterBorder></FooterBorder>
    </ListWrapper>
  );
}
