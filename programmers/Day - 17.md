```js
// x만큼 간격이 있는 n개의 숫자
function solution(x, n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  console.log(answer);
  return answer;
}
```

```js
function solution(x, n) {
  const answer = new Array(n).fill(x).map((number, index) => x * (index + 1));
  return answer;
}
```
