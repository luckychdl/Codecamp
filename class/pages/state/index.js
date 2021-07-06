import {useState} from 'react'

export default function StatePage() {
  
  const [count, setCount] = useState(0)


  function aaa() {
    setCount(count + 1)
    console.log(count)
  }

  const [hello, setHello] = useState('안녕하세요')

  const Hi = () => {
    if (hello === '안녕하세요') {
      setHello('반갑습니다.')
  } else {
      setHello('안녕하세요')
  }
  }
    


const [token, setToken] = useState('000000')
const [get, setGet] = useState(false)
function ccc() {
  setToken(String(Math.floor(Math.random() * 1000000)).padStart(6,'0'))
  setGet(true)
}

const [refresh, setRefresh] = useState(false)
function ttt() {
  setToken('000000')
  if ( refresh === false) {
    setGet(false)
  } else {
    setRefresh(false)
  }
}


  return (
    
    <div>
        <div>{count}</div>
        <button onClick={aaa}>+1</button>
        <div>{hello}</div>
        <button onClick={Hi}>클릭</button>

        <div>{token}</div>
        <button onClick={ccc} disabled={get}>인증번호받기</button>
        <button onClick={ttt} disabled={refresh}>새로고침</button>
    </div>
         
  )

}