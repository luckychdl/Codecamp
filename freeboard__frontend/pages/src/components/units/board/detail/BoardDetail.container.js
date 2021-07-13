import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client'
import { FETCH_BOARD } from './BoardDetail.queries'
import { useQuery } from '@apollo/client'
import BoardDetailUI from './BoardDetail.presenter'
import { DELETE_BOARD } from './BoardDetail.queries'
import { FETCH_BOARDS } from '../main/BoardMain.queries'

export default function BoardDetail () {

  const router = useRouter()
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const { data } = useQuery(
    FETCH_BOARD,
    {variables: { boardId: router.query.boardId }}
  )

  function onClickList() {
    router.push('/boards/main')
  }

  async function onClickDelete(event) {
    alert('해당 글을 삭제합니다!')

    try {
      await deleteBoard({
        variables: {boardId: event.target.id},
        refetchQueries: [{query: FETCH_BOARD}]
      })
      alert('삭제가 완료되었습니다!')
      
    } catch(error) {
      alert(error.message)
      location.reload()
    }
    
  } 
  
  return (
    <BoardDetailUI 
      qqq={data}
      list={onClickList}
      delete={onClickDelete}
    />
  )
}