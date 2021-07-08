import {useState} from 'react'
import {useMutation, gql} from '@apollo/client'
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
  RadioSubWrapper } from '../../../styles/boards/new/BoardsNew.styles'


export default function AAA () {

  const [user, setUser] =  useState('')
  const [passwordA, setPasswordA] = useState('')
  const [titleA, setTitleA] = useState('')
  const [content, setContent] = useState('')

  const [userError, setUserError] = useState('')
  const [passwordAError, setPasswordAError] = useState('')
  const [titleAError, setTitleAError] = useState('')
  const [contentError, setContentError] = useState('')

  const [writer, setWriter] = useState() 
  const [password, setPassword] = useState()
  const [title, setTitle] = useState() 
  const [contents, setContents] = useState()

  const [click] = useMutation(
    gql`
    mutation zzzz($createBoardInput: CreateBoardInput!) {
      createBoard(createBoardInput: $createBoardInput) {
        writer, title, contents
      }
    }
    `
  )

  function useError(event) {
    setUser(event.target.value)
    setWriter(event.target.value)
    if (user === '') {
      setUserError('이름을 입력해주세요.')
    } else {
      setUserError('')
    }
  }

  function pwError(event) {
    setPasswordA(event.target.value)
    setPassword((event.target.value))
    if (passwordA === '') {
      setPasswordAError('비밀번호를 입력해주세요.')
  } else {
    setPasswordAError('')
  }
  } 

  function titError(event) {
    setTitleA(event.target.value)
    setTitle(event.target.value)
    if (titleA === '') {
      setTitleAError('제목을 작성해주세요.')
    } else {
      setTitleAError('')
    }
  }

  function conError(event) {
    setContent(event.target.value)
    setContents(event.target.value)
    if (content === '') {
      setContentError('내용을 작성해주세요.')
    } else {
      setContentError('')
    }
  }
  
//test
  const error = () => {
    click({
      variables: {
        createBoardInput: {
          writer: writer,
          password: password,
          title: title,
          contents: contents
        }
      }
    })
        if( user === '') {
          setUserError('이름을 입력해주세요.')
        } if ( passwordA === '') {
          setPasswordAError('비밀번호를 입력해주세요.')
        } 
        if ( titleA === '') {
          setTitleAError('제목을 작성해주세요.')
        } 
        if ( content === '') {
          setContentError('내용을 작성해주세요.')
        }else {
          alert('게시물을 등록합니다')
        }
  }



  return (
    <MainWrapper>
      <Title>게시물 등록</Title>
      <SubWrapper>
        <Wrapper>
          <Name>작성자*</Name>
          <Box placeholder='이름을 적어주세요.' onChange={useError}></Box>
          <ErrorMessage>{userError}</ErrorMessage>
        </Wrapper>
        <Wrapper>  
          <Name>비밀번호</Name>
          <Box type='password' placeholder='비밀번호를 입력해주세요.' onChange={pwError}></Box>
          <ErrorMessage>{passwordAError}</ErrorMessage>
        </Wrapper>
      </SubWrapper>
      <TitleWrapper>
        <TitleName>제목</TitleName>
        <TitleBox placeholder='제목을 작성해주세요.' onChange={titError}></TitleBox>
        <ErrorMessage>{titleAError}</ErrorMessage>
      </TitleWrapper>
      <ContentWrapper>
        <ContentName>내용</ContentName>
        <ContentBox placeholder='내용을 작성해주세요.' onChange={conError}></ContentBox>
        <ErrorMessage>{contentError}</ErrorMessage>
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
      
      <Button onClick={error}>등록하기</Button>
    </MainWrapper>

  )
}
  