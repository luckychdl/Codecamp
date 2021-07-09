import {useState} from 'react'
import {LoginId,Wrapper,Title,Info,Box,Login} from '../../styles/login/Login.style'

export default function LoginPage() {

  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  
  const [idError, setIdError] = useState('')
  const [pwError, setPwError] = useState('')
  
  function aaa(event) {
    setId(event.target.value)
    if (id !== '') {
      setIdError('')
    }
  }

  function bbb(event) {
    setPassword(event.target.value)
    if (password !== '') {
      setPwError('')
  }
}
//테스트

  const ccc = () => {
    if( id === '') {
      setIdError('아이디를 입력해주세요.')
    } if ( password === '') {
      setPwError('비밀번호를 입력해주세요.')
    } else {
      alert ('로그인을 하시겠습니까?')
    }
    
    // 통신프로그램을 이용해서 id/pw 백엔드 컴퓨터 API에 전송하기
  }

  
  return(
    <Wrapper>
      <Title>로그인</Title>
      <Info>아이디</Info>
      <Box type='text' onChange={aaa}/>
      <LoginId>{idError}</LoginId>
      <Info>비밀번호</Info>
      <Box type='password' onChange={bbb}/>
      <LoginId>{pwError}</LoginId>
      <Login onClick={ccc}>로그인</Login>
    </Wrapper>
  )
}
