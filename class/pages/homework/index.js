import {Header, MainWrapper,Glass,Wrapper,Review,Wrap,SubWrapper,Wrapper2,My,Woman,Lim,AAA,MenuWrapper,Menu,Question} from '../../styles/homework/Homework.styles'

export default function Road() {


  return(

    <MainWrapper>
      <Header></Header>
      <Glass></Glass>
      <Wrapper>
        <SubWrapper>
          <My>마이</My>
          <Wrap>
            <Woman></Woman>
            <Lim>임정아</Lim>
            <AAA></AAA>
          </Wrap>
        </SubWrapper>
        <MenuWrapper>
          <Menu>공지사항</Menu>
          <Menu>이벤트</Menu>
          <Menu>FAQ</Menu>
          <Menu>Q&A</Menu>
        </MenuWrapper>
      </Wrapper>
      <Wrapper2>
        <Question>Q.01</Question>
        <Review>리뷰 작성은 어떻게 하나요?</Review>
      </Wrapper2>
      <Wrapper2>
        <Question>Q.02</Question>
        <Review>리뷰 수정/삭제는 어떻게 하나요?</Review>
      </Wrapper2>
      <Wrapper2>
        <Question>Q.03</Question>
        <Review>아이디/비밀번호를 잊어버렸어요.</Review>
      </Wrapper2>
      <Wrapper2>
        <Question>Q.04</Question>
        <Review>회원탈퇴를 하고싶어요.</Review>
      </Wrapper2>
      <Wrapper2>
        <Question>Q.05</Question>
        <Review>출발지 설정은 어떻게 하나요?</Review>
      </Wrapper2>
      <Wrapper2>
        <Question>Q.06</Question>
        <Review>비밀번호를 변경하고 싶어요.</Review>
      </Wrapper2>
      
    </MainWrapper>
  )
    
}