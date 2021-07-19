import ReactPlayer from "react-player";
import { useState } from "react";
import {
  Main,
  MainWrapper,
  HeadWrapper,
  SubWrapper,
  Profile,
  NameWrapper,
  Name,
  Date,
  Link,
  Location,
  LinkWrapper,
  Border,
  Title,
  Image,
  Content,
  Like,
  LikeMainWrapper,
  Button,
  ButtonWrapper,
  LikeWrapper,
  Score,
  HateScore,
} from "./BoardDetail.styles";

interface IBoardDetailUIProps {
  data: any;
  onClickList: () => void;
  onClickEdit: () => void;
  onClickDelete: () => void;
}

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  function LikeDisLike() {
    setLike(like + 1);
  }
  function DisLike() {
    setDislike(dislike + 1);
  }
  return (
    <Main>
      <MainWrapper>
        <HeadWrapper>
          <NameWrapper>
            <Profile src="/FreeBoard/Profile.png" />
            <SubWrapper>
              <Name>{props.data?.fetchBoard.writer}</Name>
              <Date>{props.data?.fetchBoard.createdAt}</Date>
            </SubWrapper>
          </NameWrapper>
          <LinkWrapper>
            <Link src="/FreeBoard/Link.png" />
            <Location src="/FreeBoard/Location.png" />
          </LinkWrapper>
        </HeadWrapper>
        <Border></Border>
        <Title>{props.data?.fetchBoard.title}</Title>
        <Image src="/FreeBoard/Image.png" />
        <Content>{props.data?.fetchBoard.contents}</Content>

        <ReactPlayer
          url={props.data?.fetchBoard.youtubeUrl}
          width="600px"
          height="300px"
          playing={true}
          muted={true}
        />

        <LikeMainWrapper>
          <LikeWrapper>
            <Like src="/FreeBoard/Like.png" onClick={LikeDisLike} />
            <Score>{like}</Score>
          </LikeWrapper>
          <LikeWrapper>
            <Like src="/FreeBoard/DisLike.png" onClick={DisLike} />
            <HateScore>{dislike}</HateScore>
          </LikeWrapper>
        </LikeMainWrapper>
      </MainWrapper>
      <ButtonWrapper>
        <Button onClick={props.onClickList}>목록으로</Button>
        <Button onClick={props.onClickEdit}>수정하기</Button>
        <Button onClick={props.onClickDelete}>삭제하기</Button>
      </ButtonWrapper>
    </Main>
  );
}
