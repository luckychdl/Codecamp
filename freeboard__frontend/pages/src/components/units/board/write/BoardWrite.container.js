import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite () {

  const [writerError, setWriterError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [titleError, setTitleError] = useState('')
  const [contentsError, setContentsError] = useState('')

  const [writer, setWriter] = useState('') 
  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('') 
  const [contents, setContents] = useState('')

  const [active, setActive] = useState(false)

  const router = useRouter()
  const [click] = useMutation(CREATE_BOARD)

  function useError(event) {
    setWriter(event.target.value)
    if (event.target.value !== '') {
      setWriterError('')
    }

    if (event.target.value && password && title && contents) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  function pwError(event) {
    setPassword(event.target.value)
    if (event.target.value !== '') {
    setPasswordError('')
  }

  if (writer && event.target.value && title && contents) {
    setActive(true)
  } else {
    setActive(false)
  }
  } 

  function titError(event) {
    setTitle(event.target.value)
    if (event.target.value !== ''){
      setTitleError('')
    }

    if (writer && password && event.target.value && contents) {
      setActive(true)
    } else {
      setActive(false)
    }
  }

  function conError(event) {
    setContents(event.target.value)
    if (event.target.value !== '')  {
      setContentsError('')
    }

    if (writer && password && title && event.target.value) {
      setActive(true)
    } else {
      setActive(false)
    }
  }
  
//test
  async function error () {
    if( writer === '') {
      setWriterError('이름을 입력해주세요.')
    } if ( password === '') {
      setPasswordError('비밀번호를 입력해주세요.')
    } 
    if ( title === '') {
      setTitleError('제목을 작성해주세요.')
    } 
    if ( contents === '') {
      setContentsError('내용을 작성해주세요.')
    }
    if( writer !== '' && password !== '' && title !== '' && contents !==''){
      try{
        const result = await click({
          variables: { createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents
          }
        }
      })
      alert('게시물이 성곡적으로 등록되었습니다')
      router.push(`/detail/${result.data.createBoard._id}`)
    } catch(error){
      alert(error.message)
    }
  }
}



  return (
    <BoardWriteUI 
      useError={useError}
      pwError={pwError}
      titError={titError}
      conError={conError}
      error={error}
      passwordError={passwordError}
      writerError={writerError}
      titleError={titleError}
      contentsError={contentsError}
      active={active}
    />
  )
}
  