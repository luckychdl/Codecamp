```js
// 피보나치 수열
function solution(n) {
  const answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }
  return answer[n];
}
```

```js
function solution(n) {
  let [prev, next, sum] = [0, 1, 1];
  // prev = F(n - 2)
  // next = F(n - 1)
  // sum = F(n - 2) + F(n - 1)

  for (let i = 2; i <= n; i++) {
    sum = (prev + next) % 1234567;
    prev = next;
    next = sum;
  }
  return sum;
}
```
