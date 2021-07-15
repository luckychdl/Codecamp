import BoardWriteUI from './BoardWrite.presenter'
import { useMutation } from '@apollo/client'
import { useRouter } from "next/router"
import { useState } from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { ChangeEvent } from 'react'
import { IProps } from './BoardWrite.types'

const inputsInit = {
  writer: '',
  password: '',
  title: '',
  contents: ''
}


export default function BoardWrite(props: IProps){

  const router = useRouter()
  const [active, setActive] = useState(false)
  const [Mutation] = useMutation(CREATE_BOARD)
  const [inputs, setInputs] = useState(inputsInit)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  // const [writer, setWriter] = useState('')
  // const [password, setPassword] = useState('')
  // const [title, setTitle] = useState('')
  // const [contents, setContents] = useState('')



  function onChangeInputs(event: ChangeEvent<HTMLInputElement>) {
    const newInputs = {
      ...inputs,
      [event.target.name]: event.target.value
    }
    setInputs(newInputs)
    Object.values(newInputs).every(data => data) ? setActive(true) : setActive(false)
    
    // if (Object.values(newInputs).every(data => data)) {
    //   setActive(true)
    // } else {
    //   setActive(false)
    // }

    // if (newInputs.writer && newInputs.password && newInputs.title && newInputs.contents) {
    //   setActive(true)
    }




  // function onChangeWriter(event) {
  //   setWriter(event.target.value)
  //   // if (event.target.value && password && title && contents ) {
  //   //   setActive(true)
  //   // }else if (!event.target.value || !password || !title || !contents) {
  //   // setActive(false)
  // // }
  // }

  // function onChangePassword(event) {
  //   setPassword(event.target.value)
  //   // if (writer && event.target.value && title && contents ) {
  //   //   setActive(true)
  //   // }else if (!writer || !event.target.value || !title || !contents ) {
  // //   setActive(false)
  // // }
  // }

  // function onChangeTitle(event) {
  //   setTitle(event.target.value)
  //   // if (writer && password && event.target.value && contents) {
  //   //   setActive(true)
  //   // }else if (!writer || !password || !event.target.value || !contents) {
  //   // setActive(false)
  // // }
  // }
  // function onChangeContents(event) {
  //   setContents(event.target.value)
  //   // if (writer && password && title && event.target.value) {
  //   //   setActive(true)
  //   // }else if (!writer || !password || !title || !event.target.value ) {
  //   // setActive(false)
  // // }
  // }

  async function onClickSubmit () {
    try{
      const result = await Mutation({
        variables: { createBoardInput: {...inputs}}
      })
      alert(result.data.createBoard._id)
      router.push(`/detail/${result.data.createBoard._id}`)
    } catch(error) {
      alert(error.message)
    }
  }
  
  async function onClickEdit () {
    try{
      const result = await updateBoard({
        variables: {
          password: inputs.password,
          boardId: router.query.boardId,
          updateBoardInput: {
            title: inputs.title,
            contents: inputs.contents
          }
        }
      })
      alert(result.data.updateBoard._id)
      router.push(`/detail/${result.data.updateBoard._id}`)
      } catch(error) {
        alert(error.message)
      }
  }

  return (
    <BoardWriteUI 
      // aaa={onChangeWriter}
      // bbb={onChangePassword}
      // ccc={onChangeTitle}
      // ddd={onChangeContents}
      onChangeInputs={onChangeInputs}
      onClickSubmit={onClickSubmit}
      active={active}
      isEdit={props.isEdit}
      onClickEdit={onClickEdit}
    />

  )
}
