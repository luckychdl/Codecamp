
import {
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
  LikeMainWrapper
} from './BoardDetail.styles'


export default function BoardDetailUI (props) {

  return (

    <MainWrapper>
      <HeadWrapper>
        <NameWrapper>
          <Profile src='/FreeBoard/Profile.png'/>
          <SubWrapper>
            <Name>{props.qqq ?.fetchBoard.writer}</Name>
            <Date>{props.qqq ?.fetchBoard.createdAt}</Date>
          </SubWrapper>
        </NameWrapper>
        <LinkWrapper>
          <Link src='/FreeBoard/Link.png'/>
          <Location src='/FreeBoard/Location.png'/>
        </LinkWrapper>
      </HeadWrapper>

      <Border></Border>
      <Title>{props.qqq ?.fetchBoard.title}</Title>
      <Image src='/FreeBoard/Image.png'/>
      <Content>{props.qqq ?.fetchBoard.contents}</Content>

      <Youtube></Youtube>

      <LikeMainWrapper>
          <Like src='/FreeBoard/Like.png'/>
          <Like src='/FreeBoard/Hate.png'/>
      </LikeMainWrapper>

    </MainWrapper>

  )
}