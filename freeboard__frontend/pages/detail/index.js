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
} from '../../styles/boards/new/Detail.styles'

export default function DetailPage () {


  return (

    <MainWrapper>
      <HeadWrapper>
        <NameWrapper>
          <Profile src='/FreeBoard/Profile.png'/>
          <SubWrapper>
            <Name>신동원</Name>
            <Date>Date:2021.02.18</Date>
          </SubWrapper>
        </NameWrapper>
        <LinkWrapper>
          <Link src='/FreeBoard/Link.png'/>
          <Location src='/FreeBoard/Location.png'/>
        </LinkWrapper>
      </HeadWrapper>

      <Border></Border>
      <Title>게시글 제목입니다.</Title>
      <Image src='/FreeBoard/Image.png'/>
      <Content>가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하</Content>

      <Youtube></Youtube>

      <LikeMainWrapper>
          <Like src='/FreeBoard/Like.png'/>
          <Like src='/FreeBoard/Hate.png'/>
      </LikeMainWrapper>

    </MainWrapper>

  )
}