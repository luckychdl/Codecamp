import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { FETCH_BOARD, DELETE_BOARD } from './BoardDetail.queries'
import { useQuery } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'

export default function BoardDetail () {

  const router = useRouter()
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const { data } = useQuery(
    FETCH_BOARD,
    {variables: { boardId: router.query.boardId }}
  )

  function onClickList() {
    router.push('/boards')
  }


  async function onClickDelete() {
    alert('해당 글을 삭제합니다!')

    try {
      await deleteBoard({
        variables: { boardId: router.query.boardId }
      })
      alert('삭제가 완료되었습니다!')
      router.back()
    } catch(error) {
      alert(error.message)
    } 
    
  } 
  
  return (
    <BoardDetailUI 
      data={data}
      list={onClickList}
      delete={onClickDelete}
    />
  )
}