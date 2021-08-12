import { useState, ChangeEvent } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD,UPDATE_BOARD } from './BoardWrite.queries'
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IQuery } from '../../../../../../src/commons/types/generated/types'

export const INPUTS_INIT = {
  writer: '',
  password: '',
  title: '',
  contents: ''
}

interface IBoardWriteProps {
  isEdit?: boolean
  data?: IQuery
  
}
interface INewInputs {
  title?:string
  contents?:string
  writer?:string
  password?: string
}
export default function BoardWrite (props: IBoardWriteProps) {
  const [inputs, setInputs] = useState(INPUTS_INIT)
  const [inputsErrors, setInputsErrors] = useState(INPUTS_INIT)
  const [active, setActive] = useState(false)

  const router = useRouter()
  const [createBoard] = useMutation<IMutation, IMutationCreateBoardArgs>(CREATE_BOARD)
  const [updateBoard] = useMutation<IMutation, IMutationUpdateBoardArgs>(UPDATE_BOARD)

  function onChangeInputs (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const newInputs = {...inputs, [event.target.name]: event.target.value }
    setInputs(newInputs)
    Object.values(newInputs).every(data => data ) ? setActive(true) : setActive(false)
    // setInputsErrors({...inputsErrors, [event.target.name]: ''})
  }

  async function onClickSubmit () {
    setInputsErrors({
      writer: inputs.writer ? '' : '작성자를 입력해주세요',
      password: inputs.password ? '' : '비밀번호를 입력해주세요',
      title: inputs.title ? '' : '제목을 입력해주세요',
      contents: inputs.contents ? '': '내용을 입력해주세요'
    })
    if(Object.values(inputs).every(data => data)){
      try{
        const result: any = await createBoard({
          variables: { createBoardInput: { ...inputs }}
      })
      alert('게시물이 성곡적으로 등록되었습니다')
      router.push(`/detail/${result.data.createBoard._id}`)
    } catch(error){
      alert(error.message)
    }
  }
}

  async function onClickUpdate () {
    const newInputs: INewInputs = {}
    inputs.writer ? newInputs.writer = inputs.writer : ''
    inputs.password ? newInputs.password = inputs.password : ''
    inputs.title ? newInputs.title = inputs.title : ''
    inputs.contents ? newInputs.contents = inputs.contents : ''
    
    // setInputsErrors({
    //     writer: newInputs.writer ? '' : '작성자를 입력해주세요',
    //     password: newInputs.password ? '' : '비밀번호를 입력해주세요',
    //     title: newInputs.title ? '' : '제목을 입력해주세요',
    //     contents: newInputs.contents ? '': '내용을 입력해주세요'
    // })
    if (Object.values(inputs).every(data => data)){
    try{
      const result: any = await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          password: inputs.password,
          updateBoardInput: { ...newInputs }
        }
      })
      alert('게시물이 성공적으로 수정되었습니다')
      router.push(`/detail/${result.data.updateBoard._id}`)
      } catch(error) {
        alert(error.message)
      }
    }
  }



  return (

      <BoardWriteUI 
        onClickUpdate={onClickUpdate}
        onClickSubmit={onClickSubmit}
        onChangeInputs={onChangeInputs}
        inputsErrors={inputsErrors}
        active={active}
        isEdit={props.isEdit}
        data={props.data}
      />
      

  )
  }