import { useState } from "react"
import { useMutation, gql } from '@apollo/client'
import { useRouter } from "next/router"


const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`
export default function ApolloPage() {
  const router = useRouter()

  const [writer, setWriter] = useState()
  const [password, setPassword] = useState()
  const [title, setTitle] = useState()
  const [contents, setContents] = useState()


  const [Mutation] = useMutation(CREATE_BOARD)

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
      const result = await Mutation({
        variables: { createBoardInput: {
            writer: writer,
            password: password,
            title: title,
            contents: contents
          } 
        }
      })
      alert(result.data.createBoard._id)
      router.push(`/detail/${result.data.createBoard._id}`)
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