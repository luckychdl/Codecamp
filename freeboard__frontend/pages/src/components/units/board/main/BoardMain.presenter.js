import {
  Main,
  Wrapper,
  Row,
  ListColumn,
  Column,
  ButtonWrapper,
  Img,
  Button
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
      {props.qqq?.fetchBoards.map((data, index) => (
      <Row key={data.id}>
        <Column>{index + 1}</Column>
        <Column>{data.title}</Column>
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