
import { 
  MyInput, 
  MyButton 
} from './BoardWrite.styles'

export default function BoardWriteUI (props) {
  return (
    <>
      작성자 : <MyInput type='text' name='writer' onChange={props.onChangeInputs} /><br />
      비밀번호 : <MyInput type='password' name='password' onChange={props.onChangeInputs} /><br />
      글제목 : <MyInput type='text' name='title' onChange={props.onChangeInputs} /><br />
      글내용 : <MyInput type='text' name='contents' onChange={props.onChangeInputs} /><br />
      <MyButton onClick={props.onClickSubmit} active={props.active}>데이터 입력하기</MyButton>
    </>
  )
}

