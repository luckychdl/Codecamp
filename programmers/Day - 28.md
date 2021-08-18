```js
// 3진법 뒤집기
function solution(n) {
  n = n.toString(3).split("").reverse().join("");
  return parseInt(n, 3);
}
```
