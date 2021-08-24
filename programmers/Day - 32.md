```js
const idFilter = "qwertyuiopasdfghjklzxcvbnm1234567890-_.";

function solution(new_id) {
  let resultId = "";
  // 1단계
  resultId = new_id.toLowerCase();

  // 2단계
  resultId = resultId.split("").filter((el) => idFilter.includes(el));

  // 3단계
  resultId = resultId.filter((el, i) => {
    if (el === "." && resultId[i - 1] !== ".") {
      return ".";
    } else if (el !== ".") {
      return el;
    }
  });
  // 4단계
  if (resultId[0] === ".") {
    resultId = resultId.slice(1, resultId.length);
  }
  function removeLastDot() {
    if (resultId[resultId.length - 1] === ".") {
      resultId = resultId.slice(0, resultId.length - 1);
    }
  }
  // 5단계
  if (resultId.length === 0) {
    resultId = new Array(3).fill("a");
  }

  // 6단계
  if (resultId.length > 15) {
    resultId = resultId.slice(0, 15);

    removeLastDot();
  }

  // 7단계
  if (resultId.length <= 2) {
    while (resultId.length !== 3) {
      resultId.push(resultId[resultId.length - 1]);
    }
  }
  return resultId.join("");
}
```
