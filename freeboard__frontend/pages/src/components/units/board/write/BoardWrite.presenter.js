import {
  Title,
  Name,
  Wrapper, 
  Box, 
  MainWrapper, 
  SubWrapper, 
  TitleBox,
  ErrorMessage, 
  TitleWrapper, 
  TitleName, 
  ContentWrapper, 
  ContentName, 
  ContentBox,
  Adress,
  AdressBox,
  AdressWrapper,
  AdressSubWrapper,
  Search,
  AdressSubBox,
  AdressBoxWrapper,
  YoutubeWrapper,
  YoutubeSubWrapper,
  YoutubeName,
  YoutubeBox,
  PhotoWarpper,
  Photo,
  PhotoSubWrapper,
  Plus,
  Upload,
  PhotoMainWrapper,
  Set,
  RadioWrapper,
  Radio,
  Button,
  Word,
  RadioSubWrapper } from './BoardWrite.styles'



export default function BoardWriteUI (props) {



return (
  <MainWrapper>
    <Title>게시물 등록</Title>
    <SubWrapper>
      <Wrapper>
        <Name>작성자*</Name>
        <Box placeholder='이름을 적어주세요.' onChange={props.aaa}></Box>
        <ErrorMessage>{props.aaaa}</ErrorMessage>
      </Wrapper>
      <Wrapper>  
        <Name>비밀번호</Name>
        <Box type='password' placeholder='비밀번호를 입력해주세요.' onChange={props.bbb}></Box>
        <ErrorMessage>{props.bbbb}</ErrorMessage>
      </Wrapper>
    </SubWrapper>
    <TitleWrapper>
      <TitleName>제목</TitleName>
      <TitleBox placeholder='제목을 작성해주세요.' onChange={props.ccc}></TitleBox>
      <ErrorMessage>{props.cccc}</ErrorMessage>
    </TitleWrapper>
    <ContentWrapper>
      <ContentName>내용</ContentName>
      <ContentBox placeholder='내용을 작성해주세요.' onChange={props.ddd}></ContentBox>
      <ErrorMessage>{props.dddd}</ErrorMessage>
    </ContentWrapper>
    <AdressWrapper>
      <Adress>주소</Adress>
      <AdressSubWrapper>
        <AdressBox placeholder='02750'></AdressBox>
        <Search>우편번호 검색</Search>
      </AdressSubWrapper>
    <AdressBoxWrapper>
      <AdressSubBox></AdressSubBox>
      <AdressSubBox></AdressSubBox>
    </AdressBoxWrapper>
    </AdressWrapper>
    <YoutubeWrapper>
      <YoutubeName>유튜브</YoutubeName>
      <YoutubeSubWrapper>
        <YoutubeBox placeholder='링크를 복사해주세요.'></YoutubeBox>
      </YoutubeSubWrapper>
    </YoutubeWrapper>
    <PhotoWarpper>
      <Photo>사진 첨부</Photo>
      <PhotoMainWrapper>
        <PhotoSubWrapper>
          <Plus>+</Plus>
          <Upload>Upload</Upload>
        </PhotoSubWrapper>
        <PhotoSubWrapper>
          <Plus>+</Plus>
          <Upload>Upload</Upload>
        </PhotoSubWrapper>
        <PhotoSubWrapper>
          <Plus>+</Plus>
          <Upload>Upload</Upload>
        </PhotoSubWrapper>
      </PhotoMainWrapper>
    </PhotoWarpper>
    <RadioWrapper>
      <Set>메인설정</Set>
      <RadioSubWrapper>
        <Radio type='radio'></Radio>
        <Word>유튜브</Word>
        <Radio type='radio'></Radio>
        <Word>사진</Word>
      </RadioSubWrapper>
    </RadioWrapper>
    
    <Button onClick={props.eee}>등록하기</Button>
  </MainWrapper>

)
}