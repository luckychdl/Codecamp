import { MouseEvent } from "react";
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
  ListSubWrapper,
} from "./CommentList.styles";

interface ICommentListUI {
  data?: any;
  onClickDelete: (event: MouseEvent<HTMLImageElement, MouseEvent>) => void;
  onClickMoveEdit: () => void;
}

export default function CommentListUI(props: ICommentListUI) {
  return (
    <ListWrapper>
      {props.data?.fetchBoardComments.map((data: any) => (
        <ListSubWrapper key={data._id}>
          <FooterMainWrapper>
            <FooterWrapper>
              <ReviewProfile src="/FreeBoard/ReviewProfile.png" />
              <ContentsWrapper>
                <FooterSubWrapper>
                  <ReviewName>{data.writer}</ReviewName>
                  <YellowStar src="/FreeBoard/YellowStar.png" />
                  <YellowStar src="/FreeBoard/YellowStar.png" />
                  <YellowStar src="/FreeBoard/YellowStar.png" />
                  <Star src="/FreeBoard/Star.png" />
                  <Star src="/FreeBoard/Star.png" />
                </FooterSubWrapper>
                <ReviewContents id={data._id}>{data.contents}</ReviewContents>
              </ContentsWrapper>
            </FooterWrapper>
            <FooterImg>
              <Mode onClick={props.onClickMoveEdit} src="/FreeBoard/Mode.png" />
              <Clear onClick={props.onClickDelete} src="/FreeBoard/Clear.png" />
            </FooterImg>
          </FooterMainWrapper>
          <ReviewDate>{data.createdAt}</ReviewDate>
          <FooterBorder></FooterBorder>
        </ListSubWrapper>
      ))}
    </ListWrapper>
  );
}
