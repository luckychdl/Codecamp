import { useState } from "react"

export default function StatePage4 () {
  const [state, setState] = useState(0)


  function onClickState() {
    setState((prev) => prev + 1)
    setState((prev) => prev + 2)
    setState((prev) => prev + 3)
    setState((prev) => prev + 4)

  }
  
  return(
    <>
    <div>{state}</div>
    <button onClick={onClickState}>스테이트 테스트하기</button>
    </>
  )
}