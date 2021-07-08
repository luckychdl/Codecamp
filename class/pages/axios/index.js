import axios from 'axios'
import {useState} from 'react'
import {Box} from '../../styles/axios/Axios.styles.js'




export default function AxiosPage () {

  const [data, setData] = useState('')
  const [data2, setData2] = useState('')
  const [next, setNext] =useState('')

  // async function handleClickData() {}
  const handleClickData = async () => {             // 화살표 함수 => async 위치 : const 함수명 = async () => {}

    const aaa = await axios.get('https://koreanjson.com/posts')  // 백엔드 요청  // response로 데이터 받아서 해당 API이름이 객체데이터로 변경됨
    
    // console.log(aaa.data[0])
    // console.log(bbb.data)
    setData(aaa.data[0].title)
    setData2(aaa.data[0].content)
    setNext(aaa.data[0].id)
                                          // Promise는 비동기 처리를 다루기위해 사용되는 객체
  }

  const OnClickNextData = async () => {
  const nextPage = await axios.get(`https://koreanjson.com/posts/${next+1}`)
    if (next < 200) {
    setData(nextPage.data.title)
    setData2(nextPage.data.content)
    setNext(nextPage.data.id)
      } else {
        alert('마지막 페이지입니다.')
      }
    }

  const OnClickPreData = async () => {
    const nextPage = await axios.get(`https://koreanjson.com/posts/${next-1}`)
      if (next > 1) {
        setData(nextPage.data.title)
        setData2(nextPage.data.content)
        setNext(nextPage.data.id)
    } else {
      alert('첫번째 페이지입니다.')
    }
  }

  



  return(
    <>
      <Box>{next}</Box>
      <hr />
      <Box>{data}</Box>
      <hr />
      <Box>{data2}</Box>
      <hr />
      <button onClick={OnClickPreData}>이전페이지</button>
      <button onClick={handleClickData}>데이터 불러오기</button>
      <button onClick={OnClickNextData}>다음페이지</button>
    </>
  )
}