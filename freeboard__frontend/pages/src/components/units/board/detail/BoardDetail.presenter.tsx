
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
  Youtube,
  Like,
  LikeMainWrapper,
  Button,
  ButtonWrapper,
  ReviewWrapper,
  ReviewImg,
  Review,
  ReviewWriter,
  ReviewPassword,
  Star,
  ReviewWrite,
  ReviewBorder,
  WriterWrapper,
  ReviewSubWrapper,
  ReviewButton,
  Text,
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
  TextWrapper,
  ContentsWrapper,
  FooterBorder
} from './BoardDetail.styles'

interface IBoardDetailUIProps {
  data: any
  onClickList: () => void
  onClickEdit: () => void
  onClickDelete: () => void
}

export default function BoardDetailUI (props: IBoardDetailUIProps) {

  return (
    <Main>
      <MainWrapper>
        <HeadWrapper>
          <NameWrapper>
            <Profile src='/FreeBoard/Profile.png'/>
            <SubWrapper>
              <Name>{props.data?.fetchBoard.writer}</Name>
              <Date>{props.data?.fetchBoard.createdAt}</Date>
            </SubWrapper>
          </NameWrapper>
          <LinkWrapper>
            <Link src='/FreeBoard/Link.png'/>
            <Location src='/FreeBoard/Location.png'/>
          </LinkWrapper>
        </HeadWrapper>
        <Border></Border>
        <Title>{props.data?.fetchBoard.title}</Title>
        <Image src='/FreeBoard/Image.png'/>
        <Content>{props.data?.fetchBoard.contents}</Content>

        <Youtube></Youtube>

        <LikeMainWrapper>
          <Like src='/FreeBoard/Like.png'/>
          <Like src='/FreeBoard/Hate.png'/>
        </LikeMainWrapper>
      </MainWrapper>
      <ButtonWrapper>
        <Button onClick={props.onClickList}>목록으로</Button>
        <Button onClick={props.onClickEdit}>수정하기</Button>
        <Button onClick={props.onClickDelete}>삭제하기</Button>
      </ButtonWrapper>
      <ReviewBorder></ReviewBorder>
      <ReviewSubWrapper>
        <ReviewWrapper>
          <ReviewImg src='/FreeBoard/Review.png' />
          <Review>댓글</Review>
        </ReviewWrapper>
        <WriterWrapper>
          <ReviewWriter placeholder='작성자' />
          <ReviewPassword placeholder='비밀번호' />
          <Star src='/FreeBoard/Star.png' />
          <Star src='/FreeBoard/Star.png' />
          <Star src='/FreeBoard/Star.png' />
          <Star src='/FreeBoard/Star.png' />
          <Star src='/FreeBoard/Star.png' />
        </WriterWrapper>
      </ReviewSubWrapper>
      <TextWrapper>
        <ReviewWrite placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은게시자에게 있습니다.' />
        <ReviewButton>등록하기</ReviewButton>
        <Text>0/100</Text>
      </TextWrapper>

      <FooterMainWrapper>
        <FooterWrapper>
          <ReviewProfile src='/FreeBoard/ReviewProfile.png'/>
          <ContentsWrapper>
            <FooterSubWrapper>
              <ReviewName>노원두</ReviewName>
              <YellowStar src='/FreeBoard/YellowStar.png'/>
              <YellowStar src='/FreeBoard/YellowStar.png'/>
              <YellowStar src='/FreeBoard/YellowStar.png'/>
              <Star src='/FreeBoard/Star.png' />
              <Star src='/FreeBoard/Star.png' />
            </FooterSubWrapper>
            <ReviewContents>진짜 유익하고 정말 필요한 정보인거 같아요~! 앞으로도 좋은 정보 부탁드립니다.</ReviewContents>
          </ContentsWrapper>
        </FooterWrapper>
        
        <FooterImg> 
          <Mode src='/FreeBoard/Mode.png'/>
          <Clear src='/FreeBoard/Clear.png'/>
        </FooterImg>
      </FooterMainWrapper>
        <ReviewDate>{props.data?.fetchBoard.createdAt}</ReviewDate>
        <FooterBorder></FooterBorder>
      <FooterMainWrapper>
        <FooterWrapper>
          <ReviewProfile src='/FreeBoard/ReviewProfile.png'/>
          <ContentsWrapper>
            <FooterSubWrapper>
              <ReviewName>땅찌</ReviewName>
              <YellowStar src='/FreeBoard/YellowStar.png'/>
              <YellowStar src='/FreeBoard/YellowStar.png'/>
              <YellowStar src='/FreeBoard/YellowStar.png'/>
              <Star src='/FreeBoard/Star.png' />
              <Star src='/FreeBoard/Star.png' />
            </FooterSubWrapper>
            <ReviewContents>진짜 좋네요~ 감사합니다~!</ReviewContents>
          </ContentsWrapper>
        </FooterWrapper>
        
        <FooterImg> 
          <Mode src='/FreeBoard/Mode.png'/>
          <Clear src='/FreeBoard/Clear.png'/>
        </FooterImg>
      </FooterMainWrapper>
      <ReviewDate>{props.data?.fetchBoard.createdAt}</ReviewDate>
        <FooterBorder></FooterBorder>
      <FooterMainWrapper>
        <FooterWrapper>
          <ReviewProfile src='/FreeBoard/ReviewProfile.png'/>
          <ContentsWrapper>
            <FooterSubWrapper>
              <ReviewName>안우엽</ReviewName>
              <YellowStar src='/FreeBoard/YellowStar.png'/>
              <YellowStar src='/FreeBoard/YellowStar.png'/>
              <YellowStar src='/FreeBoard/YellowStar.png'/>
              <Star src='/FreeBoard/Star.png' />
              <Star src='/FreeBoard/Star.png' />
            </FooterSubWrapper>
            <ReviewContents>앞으로도 좋은 정보 부탁드립니다~!</ReviewContents>
          </ContentsWrapper>

        </FooterWrapper>
        
        <FooterImg> 
          <Mode src='/FreeBoard/Mode.png'/>
          <Clear src='/FreeBoard/Clear.png'/>
        </FooterImg>
      </FooterMainWrapper>
      <ReviewDate>{props.data?.fetchBoard.createdAt}</ReviewDate>
        <FooterBorder></FooterBorder>

  </Main>
  )
}