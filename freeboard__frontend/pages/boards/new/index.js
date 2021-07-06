import {useState} from 'react'
import {Title,Name,Wrapper, Box, MainWrapper, SubWrapper, TitleBox,ErrorMessage, TitleWrapper, TitleName, ContentWrapper, ContentName, ContentBox,Adress,AdressBox,AdressWrapper,AdressSubWrapper,Search,AdressSubBox,AdressBoxWrapper,YoutubeWrapper,YoutubeSubWrapper,YoutubeName,YoutubeBox,PhotoWarpper,Photo,PhotoSubWrapper,Plus,Upload,PhotoMainWrapper,Set,RadioWrapper,Radio,Button,ButtonWrapper,Word,RadioSubWrapper } from '../../../styles/boards/new/BoardsNew.styles'


export default function AAA () {

  const [user, setUser] =  useState('')
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [adress, setAdress] = useState('')
  const [link, setLink] = useState('')

  const [userError, setUserError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [titleError, setTitleError] = useState('')
  const [contentError, setContentError] = useState('')
  const [adressError, setAdressError] = useState('')
  const [link_Error, setLinkError] = useState('')

  function useError(event) {
    setUser(event.target.value)
    if (user === '') {
      setUserError('이름을 입력해주세요.')
    } else {
      setUserError('')
    }
  }

  function pwError(event) {
    setPassword(event.target.value)
    if (password === '') {
      setPasswordError('비밀번호를 입력해주세요.')
  } else {
    setPasswordError('')
  }
  } 

  function titError(event) {
    setTitle(event.target.value)
    if (title === '') {
      setTitleError('제목을 작성해주세요.')
    } else {
      setTitleError('')
    }
  }

  function conError(event) {
    setContent(event.target.value)
    if (content === '') {
      setContentError('내용을 작성해주세요.')
    } else {
      setContentError('')
    }
  }
  function adError(event) {
    setAdress(event.target.value)
    if (adress === '') {
      setAdressError('주소를 입력해주세요.')
    } else {
      setAdressError('')
    }
  }
  function linkError(event) {
    setLink(event.target.value)
    if (link === '') {
      setLinkError('링크를 입력해주세요.')
    } else {
      setLinkError('')
    }
  }

  const error = () => {
        if( user === '') {
          setUserError('이름을 입력해주세요.')
        } else if ( password === '') {
          setPasswordError('비밀번호를 입력해주세요.')
        } 
        else if ( title === '') {
          setTitleError('제목을 작성해주세요.')
        } 
        else if ( content === '') {
          setContentError('내용을 작성해주세요.')
        } 
        else if ( adress === '') {
          setAdressError('주소를 입력해주세요.')
        } 
        else if ( link === '') {
          setLinkError('링크를 입력해주세요.')
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
          <ErrorMessage>{passwordError}</ErrorMessage>
        </Wrapper>
      </SubWrapper>
      <TitleWrapper>
        <TitleName>제목</TitleName>
        <TitleBox placeholder='제목을 작성해주세요.' onChange={titError}></TitleBox>
        <ErrorMessage>{titleError}</ErrorMessage>
      </TitleWrapper>
      <ContentWrapper>
        <ContentName>내용</ContentName>
        <ContentBox placeholder='내용을 작성해주세요.' onChange={conError}></ContentBox>
        <ErrorMessage>{contentError}</ErrorMessage>
      </ContentWrapper>
      <AdressWrapper>
        <Adress>주소</Adress>
        <AdressSubWrapper>
          <AdressBox placeholder='02750' onChange={adError}></AdressBox>
          <ErrorMessage>{adressError}</ErrorMessage>
          <Search>우편번호 검색</Search>
        </AdressSubWrapper>
      <AdressBoxWrapper>
        <AdressSubBox  onChange={adError}></AdressSubBox>
        <ErrorMessage>{adressError}</ErrorMessage>
        <AdressSubBox  onChange={adError}></AdressSubBox>
        <ErrorMessage>{adressError}</ErrorMessage>
      </AdressBoxWrapper>
      </AdressWrapper>
      <YoutubeWrapper>
        <YoutubeName>유튜브</YoutubeName>
        <YoutubeSubWrapper>
          <YoutubeBox placeholder='링크를 복사해주세요.' onChange={linkError}></YoutubeBox>
          <ErrorMessage>{link_Error}</ErrorMessage>
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
  