```js
function solution(n, arr1, arr2) {
  const answer = [];

  // 10진법 -> 2진법으로 변경
  arr1 = arr1.map((num) => num.toString(2).padStart(n, "0"));
  arr2 = arr2.map((num) => num.toString(2).padStart(n, "0"));

  for (let i = 0; i < arr1.length; i++) {
    // 공백과 지도를 저장해주는 변수
    let str = "";
    for (let l = 0; l < arr1.length; l++) {
      if (arr1[i][l] === "1" || arr2[i][l] === "1") {
        str += "#";
      } else {
        str += " ";
      }
    }
    answer.push(str);
  }

  return answer;
}
```

```js
function solution(n, arr1, arr2) {
  // 10진법 -> 2진법으로 변경
  arr1 = arr1.map((num) => num.toString(2).padStart(n, "0"));
  arr2 = arr2.map((num) => num.toString(2).padStart(n, "0"));

  return arr1.map((el, i) => {
    return arr2
      .map((cu, l) => {
        return el[l] === "1" || arr2[i][l] === "1" ? "#" : " ";
      })
      .join("");
  });
}
```
