import {
  Main,
  Wrapper,
  Row,
  ListColumn,
  Column,
  ButtonWrapper,
  Img,
  Button,
  Title
} from './BoardMain.styles'
import { getDate } from '../../../../commons/libraries/utils'


export default function BoardMainUI (props) {


  return(
  <Main>  
    <Wrapper>
      <Row>
        <ListColumn>번호</ListColumn>
        <ListColumn>제목</ListColumn>
        <ListColumn>작성자</ListColumn>
        <ListColumn>날짜</ListColumn>
      </Row>
      {props.data?.fetchBoards.map((data, index) => (
      <Row key={data._id}>
        <Column>{index + 1}</Column>
        <Title id={data._id} onClick={props.moveDetail}>{data.title}</Title>
        <Column>{data.writer}</Column>
        <Column>{getDate(data.createdAt)}</Column>
      </Row>
      ))}
    </Wrapper>
    <ButtonWrapper >
      <Img src='/FreeBoard/Register.png'/>
      <Button onClick={props.register}>게시물 등록하기</Button>
    </ButtonWrapper>
  </Main>
  )
}