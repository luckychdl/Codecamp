import { useState } from "react"
import {useMutation, gql} from '@apollo/client'

export default function ApolloPage() {


  const [writer, setWriter] = useState()
  const [password, setPassword] = useState()
  const [title, setTitle] = useState()
  const [contents, setContents] = useState()


  const [asdf] = useMutation(
    gql`
      mutation zzzz($writer:String, $password:String, $title:String, $contents:String){
        createBoard(
          writer:$writer, 
          password:$password, 
          title:$title, 
          contents:$contents
        ){
          message 
        }
      }
    `
  )

  function onChageWriter(event) {
    setWriter(event.target.value)
  }

  function onChagePassword(event) {
    setPassword(event.target.value)
  }

  function onChageTitle(event) {
    setTitle(event.target.value)
  }
  function onChageContents(event) {
    setContents(event.target.value)
  }

  async function onClickSubmit () {
    try{
      const result = await asdf({
        variables: {
          writer: writer,
          password: password,
          title: title,
          contents: contents
        }
      })
      alert(result.data.createBoard.message)
    } catch(error) {
      alert(error.message)
    }
  }
 
  return (
    <>
      <div></div>
      작성자 : <input type='text' onChange={onChageWriter} />
      <br />
      <br />
      비밀번호 : <input type='password' onChange={onChagePassword} />
      <br />
      <br />
      글제목 : <input type='text' onChange={onChageTitle} />
      <br />
      <br />
      글내용 : <input type='text' onChange={onChageContents} />
      <br />
      <br />
      <button onClick={onClickSubmit}>데이터 입력하기</button>
    </>


  )
}