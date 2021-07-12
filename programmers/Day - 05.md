~~~js
// 수박수박수

function solution(n) {
  var answer = ''
  for (i = 0; i < n; i ++) {
    if ( i % 2 === 0 ) {
      answer += '수'
    } if ( i % 2 === 1 ) {
      answer += '박'
    }
  }
  return answer
}
~~~

~~~js
// 홀짝
function solution(num) {
  var answer = ''
  // result = num % 2 === 0 ? 'Even' : 'Odd'
  if (num % 2 === 0) {
    answer = 'Even'
  } if (num %2 === 1) {
    answer = 'Odd'
  }
  return answer
}

~~~

~~~js
// 평균구하기
function solution(arr) {
  let answer = 0
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i]
}
  return answer / arr.length
}  
~~~
