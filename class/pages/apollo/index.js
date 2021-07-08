import { useState } from "react"
import {useMutation, gql} from '@apollo/client'

export default function ApolloPage() {


  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [school, setSchool] = useState()


  const [asdf] = useMutation(
    gql`
      mutation zzzz($aaa:String, $bbb:Int, $ccc:String){
        createProfile(
          name:$aaa, 
          age:$bbb, 
          school:$ccc
        ){
          message
        }
      }
    `
  )

  function onChageName(event) {
    setName(event.target.value)
  }

  function onChageAge(event) {
    setAge(event.target.value)
  }

  function onChageSchool(event) {
    setSchool(event.target.value)
  }

  function onClickSubmit () {
    console.log(name)
    console.log(age)
    console.log(school)
    asdf({
      variables: {
        aaa: name,
        bbb: Number(age),
        ccc: school
      }
    })
  }
 
  return (
    <>
      <div></div>
      이름 : <input type='text' onChange={onChageName} />
      <br />
      <br />
      나이 : <input type='text' onChange={onChageAge} />
      <br />
      <br />
      학교 : <input type='text' onChange={onChageSchool} />
      <br />
      <br />
      <button onClick={onClickSubmit}>데이터 입력하기</button>
    </>


  )
}