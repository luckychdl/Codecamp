```js
function solution(n) {
  let sqrt = 1;
  // 초기 제곱근 값
  while (sqrt * sqrt < n) {
    // 조건식이 true일 경우에만 아래의 반복 코드가 실행된다.
    sqrt++;
    if (sqrt * sqrt > n) {
      return -1;
    }
  }
  sqrt++;
  return sqrt * sqrt;
  console.log(sqrt * sqrt === n);
}
```

```js
function solution(n) {
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt) === true) {
    sqrt++;
    return sqrt * sqrt;
  } else {
    return -1;
  }
}
```
