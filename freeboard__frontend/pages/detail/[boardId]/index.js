import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
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
} from '../../../styles/boards/new/Detail.styles'

const FETCH_BOARD = gql`
  query fetchBord($boardId: ID!) {
    fetchBoard (boadId: $boardId) {
      writer
      title
      contents
    }
  }
`

export default function DetailPage () {

  const router = useRouter()
  const { data } = useQuery(
    FETCH_BOARD,
    {variables: { boardId: router.query.boardId }}
  )
  return (

    <MainWrapper>
      <HeadWrapper>
        <NameWrapper>
          <Profile src='/FreeBoard/Profile.png'/>
          <SubWrapper>
            <Name>{data ? data.fetchBoard.writer : 'None'}</Name>
            <Date>Date:2021.02.18</Date>
          </SubWrapper>
        </NameWrapper>
        <LinkWrapper>
          <Link src='/FreeBoard/Link.png'/>
          <Location src='/FreeBoard/Location.png'/>
        </LinkWrapper>
      </HeadWrapper>

      <Border></Border>
      <Title>{data ? data.fetchBoard.title : 'None'}</Title>
      <Image src='/FreeBoard/Image.png'/>
      <Content>{data ? data.fetchBoard.contents : 'None'}</Content>

      <Youtube></Youtube>

      <LikeMainWrapper>
          <Like src='/FreeBoard/Like.png'/>
          <Like src='/FreeBoard/Hate.png'/>
      </LikeMainWrapper>

    </MainWrapper>

  )
}