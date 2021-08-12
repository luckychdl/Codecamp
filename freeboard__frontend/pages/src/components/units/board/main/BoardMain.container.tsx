import BoardMainUI from './BoardMain.presenter'
import { FETCH_BOARDS } from './BoardMain.queries'
import { useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { MouseEvent } from 'react'

export default function BoardMain () {

  const { data } = useQuery(FETCH_BOARDS)
  const router = useRouter()

  function onClickregister () {
    router.push('/boards/new')
  }

  function onClickMoveDetail (event: MouseEvent<HTMLDivElement>) {
    router.push(`/detail/${(event.target as Element).id}`)
  }
 
  return (
  <BoardMainUI 
    data={ data }
    onClickregister={onClickregister}
    onClickMoveDetail={onClickMoveDetail}
    />
    )
  }
