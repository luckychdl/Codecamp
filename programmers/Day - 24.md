```js
// 체육복
function solution(n, lost, reserve) {
  const [copyLost, copyReserve] = [[...lost], [...reserve]];
  // lost와 reserve에 중복되는 학생의 번호를 제거
  lost = copyLost
    .filter((el) => reserve.includes(el) === false)
    .sort((a, b) => a - b);
  reserve = copyReserve
    .filter((el) => copyLost.includes(el) === false)
    .sort((a, b) => a - b);
  let answer = n - lost.length;
  // 옷을 잃어버린 사람을 제외한 값
  for (let i = 0; i < lost.length; i++) {
    const prev = reserve.indexOf(lost[i] - 1);
    // 있으면 인덱스 번호, 없으면 -1
    if (prev !== -1) {
      reserve.splice(prev, 1);
      answer += 1;

      continue;
    }
    // 잃어버린 학생 번호의 뒷 번호를 체크
    const next = reserve.indexOf(lost[i] + 1);
    if (next !== -1) {
      reserve.splice(next, 1);
      answer += 1;
    }
  }
  return answer;
}
```

```js
function solution(n, lost, reserve) {
  const [copyLost, copyReserve] = [[...lost], [...reserve]];

  // lost와 reserve 에 중복되는 학생의 번호를 제거
  lost = copyLost
    .filter((el) => reserve.includes(el) === false)
    .sort((a, b) => a - b);

  reserve = copyReserve
    .filter((el) => copyLost.includes(el) === false)
    .sort((a, b) => a - b);

  let answer = n - lost.length;
  // 옷을 잃어버린 사람을 제외한 값

  lost.forEach((el) => {
    const prev = reserve.indexOf(el - 1);
    const next = reserve.indexOf(el + 1);

    if (prev !== -1) {
      reserve.splice(prev, 1);
      answer += 1;
    } else if (next !== -1) {
      reserve.splice(next, 1);
      answer += 1;
    }
  });
  return answer;
}
```
