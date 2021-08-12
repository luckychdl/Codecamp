import {ChangeEvent} from 'react'
import {INPUTS_INIT} from './BoardWrite.container'
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
  
interface IBoardWriteUIProps {
  onChangeInputs: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => void
  onClickUpdate: () => void
  onClickSubmit: () => void
  active: boolean
  isEdit?: boolean
  data: any
  inputsErrors: typeof INPUTS_INIT
}

export default function BoardWriteUI (props: IBoardWriteUIProps) {

return (
  <MainWrapper>
    <Title>{props.isEdit ? '게시물 수정' : '게시물 등록'}</Title>
    <SubWrapper>
      <Wrapper>
        <Name>작성자*</Name>
        <Box name='writer' type='text' placeholder='이름을 적어주세요.' onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.writer} readOnly={props.data?.fetchBoard.writer}></Box>
        <ErrorMessage>{props.inputsErrors.writer}</ErrorMessage>
      </Wrapper>
      <Wrapper>  
        <Name>비밀번호</Name>
        <Box name='password' type='password' placeholder='비밀번호를 입력해주세요.' onChange={props.onChangeInputs} ></Box>
        <ErrorMessage>{props.inputsErrors.password}</ErrorMessage>
      </Wrapper>
    </SubWrapper>
    <TitleWrapper>
      <TitleName>제목</TitleName>
      <TitleBox name='title' type='text' placeholder='제목을 작성해주세요.' onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.title}></TitleBox>
      <ErrorMessage>{props.inputsErrors.title}</ErrorMessage>
    </TitleWrapper>
    <ContentWrapper>
      <ContentName>내용</ContentName>
      <ContentBox name='contents'  placeholder='내용을 작성해주세요.' onChange={props.onChangeInputs} defaultValue={props.data?.fetchBoard.contents}></ContentBox>
      <ErrorMessage>{props.inputsErrors.contents}</ErrorMessage>
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
    
    <Button active={props?.active} 
      onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit} >
      {props.isEdit ? '수정하기' : '등록하기'}
      </Button>
  </MainWrapper>

)
}