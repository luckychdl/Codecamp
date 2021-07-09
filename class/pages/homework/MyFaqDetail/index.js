import {
  Header, 
  ProfileImg, 
  MainWrapper,
  Glass,
  Wrapper,
  Review,
  Wrap,
  SubWrapper,
  Wrapper2,
  ReviewWrapper,
  ArrowWrapper,
  My,
  Lim,
  Arrow,
  MenuWrapper,
  Menu,
  MenuPink,
  Question,
  Right,
  BottomWrapper,
  BottomMenu,
  BottomSubWrapper,
  Text
} from '../../../styles/homework/Homework.styles'

export default function Road() {


  return(

    <MainWrapper>
      <Header></Header>
      <Glass src='/EatsRoad/Glass.png' />
      <Wrapper>
        <SubWrapper>
          <My>마이</My>
          <Wrap>
            <ProfileImg src='/EatsRoad/Profile.png'/>
            <Lim>임정아</Lim>
            <Arrow src='/EatsRoad/Arrow3.png'/>
          </Wrap>
        </SubWrapper>
        <MenuWrapper>
          <Menu>공지사항</Menu>
          <Menu>이벤트</Menu>
          <MenuPink>FAQ</MenuPink>
          <Menu>Q&A</Menu>
        </MenuWrapper>
      </Wrapper>
      <ReviewWrapper>
        <ArrowWrapper>
          <Wrapper2>
            <Question>Q.01</Question>
            <Review>리뷰 작성은 어떻게 하나요?</Review>
          </Wrapper2>
          <Right src='/EatsRoad/Right.png'/>
        </ArrowWrapper>
        <ArrowWrapper>
          <Wrapper2>
            <Question>Q.02</Question>
            <Review>리뷰 수정/삭제는 어떻게 하나요?</Review>
          </Wrapper2>
          <Right src='/EatsRoad/Right.png'/>
        </ArrowWrapper>
        <ArrowWrapper>
          <Wrapper2>
            <Question>Q.03</Question>
            <Review>아이디/비밀번호를 잊어버렸어요.</Review>
          </Wrapper2>
          <Right src='/EatsRoad/Right.png'/>
        </ArrowWrapper>
        <ArrowWrapper>
          <Wrapper2>
            <Question>Q.04</Question>
            <Review>회원탈퇴를 하고싶어요.</Review>
          </Wrapper2>
          <Right src='/EatsRoad/Right.png'/>
        </ArrowWrapper>
        <ArrowWrapper>
          <Wrapper2>
            <Question>Q.05</Question>
            <Review>출발지 설정은 어떻게 하나요?</Review>
          </Wrapper2>
          <Right src='/EatsRoad/Right.png'/>
        </ArrowWrapper>
        <ArrowWrapper>
          <Wrapper2>
            <Question>Q.06</Question>
            <Review>비밀번호를 변경하고 싶어요.</Review>
          </Wrapper2>
          <Right src='/EatsRoad/Right.png'/>
        </ArrowWrapper>
      </ReviewWrapper>
      
      <BottomWrapper>
        <BottomSubWrapper>
          <BottomMenu src='/EatsRoad/Home.png'/>
          <div>홈</div> 
        </BottomSubWrapper>
        <BottomSubWrapper>
          <BottomMenu src='/EatsRoad/Location.png'/> 
          <div>잇츠로드</div>
        </BottomSubWrapper>
        <BottomSubWrapper>
          <BottomMenu src='/EatsRoad/Like.png'/> 
          <div>마이찜</div>
        </BottomSubWrapper>
        <BottomSubWrapper>
          <BottomMenu src='/EatsRoad/Selected.png'/> 
          <Text>마이</Text>
        </BottomSubWrapper>
        
      </BottomWrapper>
    </MainWrapper>
  )
    
}