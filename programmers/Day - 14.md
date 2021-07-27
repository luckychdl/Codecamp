```js
// 나누어 떨어지는 숫자배열
function solution(arr, divisor) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
    }
  }
  if (answer.length === 0) {
    // 데이터가 아무것도 없는 경우
    answer.push(-1);
  } else {
    // 데이터가 있는 경우
    // 오름차순으로 정렬을 해줘야 한다.
    answer.sort(function (a, b) {
      return a - b;
    });
  }
  return answer;
}
```

```js
// filter 사용

function solution(arr, divisor) {
  const answer = arr
    .filter((number) => {
      return number % divisor === 0;
    })
    .sort((a, b) => a - b);
  console.log(answer);

  return answer.length === 0 ? [-1] : answer;
}
```

```js
// 자연수 뒤집어 배열로 만들기
// reverse 사용
function solution(n) {
  var answer = [];
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    answer.push(Number(n[i]));
  }
  answer.reverse();

  return answer;
}
```

```js
// for문 자체에서 뒤집기
function solution(n) {
  var answer = [];
  n = String(n);
  for (let i = n.length - 1; i >= 0; i--) {
    answer.push(Number(n[i]));
  }
  return answer;
}
```

```js
function solution(n) {
  const answer = n
    .toString()
    .split("")
    .reverse()
    .map((el) => {
      return Number(el);
    });
}
```
