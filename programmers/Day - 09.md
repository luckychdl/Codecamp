~~~js
// 문자열 내림차순으로 배치하기
function solution(s) {
  let answer = ''
  let arr = [] // 문자열을 배열로 만들어주기 위한 변수
  // for (let i = 0; i < s.length; i++) {
  //   arr.push(s[i])
  // }
  arr = s.split('')
  arr = arr.sort().reverse()

  for(let i = 0; i < arr.length; i++) {
    answer += arr[i]
  }
  return answer
}
~~~

~~~js
// 문자열 내림차순으로 배치하기
function solution(s) {
  const answer = s.split('').sort().reverse().join('')
  return answer
}

// 문자열 내림차순으로 배치하기
function solution(s) {
  const answer = s.split('')
                  .sort( function(a, b) {
                    return a > b ? -1 : 1
                  })
                  .join('')
    return answer
}
~~~




~~~js
// K번쨰수
function solution(array, commands) {
  let answer = []
  for (let idx = 0; idx < commands.length; idx += 1) {
    const i = commands[idx][0]
    const j = commands[idx][1]
    const k = commands[idx][2]

    // 배열을 slice 한 결과를 담아주는 변수
    const sliceResult = array.slice(i-1, j).sort()
    answer.push(sliceResult[k-1])
}
return answer
}
~~~

~~~js
function solution(array, commands) {
  let answer = []
  for (let idx = 0; idx < commands.length; idx += 1) {
    const i = commands[idx][0]
    const j = commands[idx][1]
    const k = commands[idx][2]

    // 배열을 slice 한 결과를 담아주는 변수
    const sliceResult = array.slice(i-1, j).sort( function (a, b){
      return a - b
    })
    answer.push(sliceResult[k-1])
}
return answer
}
~~~

~~~js
// K번쨰수
function solution(array, commands) {
  const answer = commands.map( el => {
    const sliceResult = array.slice(el[0] - 1, el[1])
  }).sort( function(a, b){ return a - b })

  return sliceResult[el[2]-1]
}
~~~