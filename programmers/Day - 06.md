~~~js
// 김서방 찾기
function solution (seoul) {
  let answer = 0
  for (let i = 0; i < seoul.length; i++ ) {
    if (seoul[i] === 'Kim') {
      answer = i
    } 
  }
  return `김서방은 ${answer} 에 있다`
}
~~~

~~~js
// 김서방 찾기 indexOf 
function solution(seoul) {
  const x = seoul.indexOf('Kim')
  return `김서방은 ${x}에 있다`
}
~~~

~~~js
// 가운데 글자 가져오기
function solution(s) {
  let answer
  if( s.length % 2 === 1) {
    answer = s[Math.floor(s.length / 2)]
  } else {
    answer = s[(s.length /2)-1] + s[s.length / 2]
  }
  return answer
}
~~~

~~~js
// 가운데 글자 가져오기 
function solution(s) {
  const answer = s.length % 2 === 1 
  ? s[Math.floor(s.length / 2)] 
  : s[(s.length /2)-1] + s[s.length / 2]
  return answer
}
~~~

~~~js
// 두 정수 사이의 합
function solution (a,b) {
  let answer = 0
  if (a === b){
    return a
  } else {
    // 반복문이 실행될 때 설정되는 초기값(a와 b중에 작은 값이 들어온다)
    let start = Math.min(a, b)
    // 반복문이 종료되는 조건을 설정(a와 b중에 큰 값이 들어온다.)
    let end = Math.max(a, b)
    for (let i = start; i <= end; i++) {
      answer += i
    }
  }
  return answer 
}
~~~