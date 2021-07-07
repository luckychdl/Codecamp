import {useState} from 'react'

export default function State2Page() {


  const [count, setCount] = useState(0)
  function aaa () {
    setCount(count + 1)
  }


  // let count = 7
  // function aaa () {
  //   count += 1
  //   document.getElementById('bbb').innerText = count
  // }

  return (
    <>
      <div id='bbb'>{count}</div>
      <button onClick={aaa}>+1</button>
    </>
  )

}