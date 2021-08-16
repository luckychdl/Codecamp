```js
// 실패율
function solution(N, stages) {
  const clearArr = [];

  for (let i = 1; i <= N; i++) {
    clearArr.push({ stage: i, clear: 0 });
  }

  stages = stages.sort(function (a, b) {
    return a - b;
  });

  let users = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (clearArr[stages[i] - 1] !== undefined) {
      clearArr[stages[i] - 1].clear += 1;

      if (stages[i] !== stages[i + 1]) {
        const fail = clearArr[stages[i] - 1].clear / users;
        users = users - clearArr[stages[i] - 1].clear;

        clearArr[stages[i] - 1].clear = fail;
      }
    }
  }
```

```js
// map / forEach
  const answer = clearArr
    .sort(function (a, b) {
      return b.clear - a.clear;
    })
    .map((el) => el.stage);

  return answer;
}
ß
function solution(N, stages) {
  stages = stages.sort(function (a, b) {
    return a - b;
  });
  let users = stages.length;

  const clearArr = new Array(N).fill(1).map((el, index) => {
    return { stage: index + 1, clear: 0 };
  });

  const result = stages.forEach((el, i) => {
    if (clearArr[el - 1] !== undefined) {
      clearArr[el - 1].clear += 1;

      if (el !== stages[i + 1]) {
        const fail = clearArr[el - 1].clear / users;
        users = users - clearArr[el - 1].clear;

        clearArr[el - 1].clear = fail;
      }
    }
  });

  const answer = clearArr
    .sort((a, b) => b.clear - a.clear)
    .map((el) => el.stage);

  return answer;
}
```
