import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite () {

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

  const router = useRouter()
  const [click] = useMutation(CREATE_BOARD)

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
  async function error () {
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
    router.push(`/detail/${result.data.createBoard._id}`)
  } catch(error){
    alert(error.message)
  }
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



  return <BoardWriteUI 
    aaa={useError}
    aaaa={userError}
    bbb={pwError}
    bbbb={passwordAError}
    ccc={titError}
    cccc={titleAError}
    ddd={conError}
    dddd={contentError}
    eee={error}
    />
}
  