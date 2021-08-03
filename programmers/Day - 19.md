```js
function solution(arr) {
  let answer = [];
  // 배열의 제일 작은 수를 저장하는 변수
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  arr.splice(arr.indexOf(min), 1);
  if (arr.length === 0) {
    return [-1];
  }
  return arr;
}
```

```js
function solution(arr) {
  let answer = [];
  // 배열의 제일 작은 수를 저장하는 변수
  const min = Math.min.apply(null, arr);

  arr.splice(arr.indexOf(min), 1);

  return arr.length === 0 ? [-1] : arr;
}
```

```js
function solution(arr) {
  //          Math.min.apply(null, arr)
  const min = Math.min(...arr);
  const result = arr.filter((num) => num > min);

  return result.length === 0 ? [-1] : result;
}
```
