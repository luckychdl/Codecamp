
~~~js
// 약수의 합
function solution(n) {
  let answer = 0
  for ( let i = 1; i <= n; i++) {
    if ( n % i === 0 ) answer += i
        //나눴을 때의 나머지 값이 0일 경우 => 약수
  }
  return answer
}
~~~

~~~js
//약수의 합 
function solution(n) {
  let answer = 0
  for ( let i = 1; i <= n; i++) {
    if ( Number.isInteger(n/i) === true ) answer += i
  }
  return answer
}
~~~

~~~js
// 약수의 합
function solution(n) {
  let answer = 0
  new Array (n).fill(1).filter ( (num,idx) => {n % (num + idx) === 0 ? answer += (num + idx) : null})
  return answer
}
~~~

~~~js
// 자릿수 더하기
function solution(n) {
  let answer = 0
  n = String(n)
  for (let i = 0; i < n.length; i++) {
    answer += Number(n[i])
  }
  return answer
}
~~~
~~~js
// 자릿수 더하기
function solution(n) {
  let answer = 0
  String(n).split('').map((n) => answer = answer + Number(n))
  
  return answer
}
~~~