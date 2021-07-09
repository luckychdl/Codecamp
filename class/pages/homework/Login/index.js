import {
  MainWrapper,
  Header,
  Wrapper,
  Location,
  EatsRoad,
  SignWrapper,
  Id,
  Password,
  Border,
  LoginButton,
  FindInfoWrapper,
  FindInfo,
  Line,
  Kakao
} from '../../../styles/homework/LoginPage.styles'


export default function LoginPage () {



  return (
    <MainWrapper>
      <Header></Header>
      
      <Wrapper>
        <Location src='/EatsRoad/LocationWhite.png' />
        <EatsRoad>잇츠로드</EatsRoad>
      </Wrapper>
      <SignWrapper>
        <Id type='text' placeholder='이메일을 입력해 주세요'></Id>
        <Border></Border>
        <Password type='password' placeholder='비밀번호를 확인해 주세요'></Password>
        <Border></Border>
      </SignWrapper>
      <LoginButton>로그인</LoginButton>
      
      <FindInfoWrapper>
        <FindInfo>아이디 찾기</FindInfo>
        <Line></Line>
        <FindInfo>비밀번호 찾기</FindInfo>
        <Line></Line>
        <FindInfo>회원가입</FindInfo>
      </FindInfoWrapper>
      <Kakao>카카오톡으로 로그인</Kakao>
    </MainWrapper>


  )
}