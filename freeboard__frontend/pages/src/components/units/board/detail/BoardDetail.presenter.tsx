import ReactPlayer from "react-player";
import { Tooltip } from "antd";
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
  onClickLike: () => void;
  onClickDisLike: () => void;
}

export default function BoardDetailUI(props: IBoardDetailUIProps) {
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
            <Tooltip
              placement="topRight"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <Location src="/FreeBoard/Location.png"></Location>
            </Tooltip>
          </LinkWrapper>
        </HeadWrapper>
        <Border></Border>
        <Title>{props.data?.fetchBoard.title}</Title>
        {props.data?.fetchBoard.images?.map((data: string) => (
          <Image key={data} src={`https://storage.googleapis.com/${data}`} />
        ))}

        <Content>{props.data?.fetchBoard.contents}</Content>

        <ReactPlayer
          url={props.data?.fetchBoard.youtubeUrl}
          width="600px"
          height="300px"
          controls={true}
          muted={true}
        />

        <LikeMainWrapper>
          <LikeWrapper>
            <Like src="/FreeBoard/Like.png" onClick={props.onClickLike} />
            <Score>{props.data?.fetchBoard.likeCount}</Score>
          </LikeWrapper>
          <LikeWrapper>
            <Like src="/FreeBoard/DisLike.png" onClick={props.onClickDisLike} />
            <HateScore>{props.data?.fetchBoard.dislikeCount}</HateScore>
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
