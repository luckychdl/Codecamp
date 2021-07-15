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
        <Box name={'writer'} placeholder='이름을 적어주세요.' onChange={props.useError}></Box>
        <ErrorMessage>{props.writerError}</ErrorMessage>
      </Wrapper>
      <Wrapper>  
        <Name>비밀번호</Name>
        <Box name={'password'} type='password' placeholder='비밀번호를 입력해주세요.' onChange={props.pwError}></Box>
        <ErrorMessage>{props.passwordError}</ErrorMessage>
      </Wrapper>
    </SubWrapper>
    <TitleWrapper>
      <TitleName>제목</TitleName>
      <TitleBox name={'title'} placeholder='제목을 작성해주세요.' onChange={props.titError}></TitleBox>
      <ErrorMessage>{props.titleError}</ErrorMessage>
    </TitleWrapper>
    <ContentWrapper>
      <ContentName>내용</ContentName>
      <ContentBox name={'contents'} placeholder='내용을 작성해주세요.' onChange={props.conError}></ContentBox>
      <ErrorMessage>{props.contentsError}</ErrorMessage>
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
    
    {!props.isEdit && <Button onClick={props.error} active={props.active}>데이터 입력하기</Button>}
      {props.isEdit && <Button onClick={props.update} active={props.active}>데이터 수정하기</Button>}
  </MainWrapper>

)
}