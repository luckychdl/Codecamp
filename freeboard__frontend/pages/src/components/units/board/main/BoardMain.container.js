import BoardMainUI from './BoardMain.presenter'
import { FETCH_BOARDS } from './BoardMain.queries'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'

export default function BoardMain () {

  const { data } = useQuery(FETCH_BOARDS)
  const router = useRouter()

  function onClickregister () {
    router.push('/boards/new')


  }
 
  return (
  <BoardMainUI 
    qqq={ data }
    register={onClickregister}
    />
    )
  }
