import { gql, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'


const FETCH_BOARD = gql`
  query fetchBoard ($boardId: ID!) {
    fetchBoard (boardId: $boardId) {
      writer
      title
      contents
    }
  }

`
export default function DetailPage () {
  
  const router = useRouter()
  const { data } = useQuery(
    FETCH_BOARD,
    { variables: { boardId: router.query.boardId }}
  )

  return (
    <>
      <div>작성자: {data ? data.fetchBoard.writer : '222'}</div>  
                  {/* 삼항 연산자 // 조건 ? 참 : 거짓 */}

      {/* <div>글제목: {data?.fetchBoard.title}</div> */}
      <div>글제목: {data?.fetchBoard.title}</div>  
                    {/* 옵셔널 체이닝 */}

      <div>글내용: {data && data.fetchBoard.contents}</div>
    </>
    
  )

}