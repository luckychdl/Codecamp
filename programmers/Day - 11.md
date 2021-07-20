~~~js
function solution(s) {
  let answer = true;
  // p와 y의 개수를 담아주는 변수
  let [p, y] = [0, 0];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p" || s[i] === "P") {
      p = p + 1;
    } else if (s[i] === "y" || s[i] === "Y") {
      y = y + 1;
    }
  }
  if (p === y) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
~~~

~~~js
function solution(s) {
  s = s.toLowerCase();
  const check = {
    p:0,
    y:0
  }
  for (let i = 0; i < s.length; i++) {
    check[s[i]] = check[s[i]] + 1
  }
  return check['p'] === check['y']
}
~~~

~~~js
function solution(num) {
  // 초기설정값
  let count = 0
  // 괄호 안은 조건문 === true일 때만 실행이 된다.
  while(num !== 1) {
    if (num % 2 === 0) {
      num = num / 2
    }else if(num % 2 === 1) {
      num = (num * 3) + 1
    }
    count++
  }
  if (count >= 500) {
    return -1
  } else{
    return count
  }
}
~~~

// for문은 끝나는 조건이 명확히 정해진 상태에서 많이 사용 
// => i 의 값의 범위가 정해져있음, 언제까지 반복을 실행할건지 끝나는 지점이 정해져있음
// while문 끝나는 조건이 명확히 정해져있지 않을 때 사용 
// => 정해지지 않은 횟수를 원하는 값을 얻을 때 까지 반복 할 때 사용