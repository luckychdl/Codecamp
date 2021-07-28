```js
// 모의고사
const answer1 = [1, 2, 3, 4, 5]; // 1번 수포자가 찍는 방식
const answer2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 2번 수포자가 찍는 방식
const answer3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 3번 수포자가 찍는 방식
function solution(answers) {
  const score = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === answer1[i % answer1.length]) {
      score[0]++;
    }
    if (answers[i] === answer2[i % answer2.length]) {
      score[1]++;
    }
    if (answers[i] === answer3[i % answer3.length]) {
      score[2]++;
    }
  }
  // const max = Math.max.apply(null, score);
  const max = Math.max(...score);
  for (let i = 0; i < score.length; i++) {
    if (score[i] === max) {
      result.push(i + 1);
    }
  }
  return result;
}
```

```js
// 배열 하나로 줄여서 조건문 줄이기
const answerList = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];
function solution(answers) {
  const score = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    for (let l = 0; l < answerList.length; l++) {
      if (answerList[l][i % answerList[l].length] === answers[i]) {
        score[l]++;
      }
    }
  }
  // const max = Math.max.apply(null, score);
  const max = Math.max(...score);
  const result = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === max) {
      result.push(i + 1);
    }
  }
  return result;
}
```

```js
// 메소드로 변경하기
const answerList = [
  [1, 2, 3, 4, 5],
  [2, 1, 2, 3, 2, 4, 2, 5],
  [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
];
function solution(answers) {
  const score = [0, 0, 0];
  answers.forEach((el, i) => {
    answerList.forEach((cu, l) => {
      if (cu[i % cu.length] === el) {
        score[l]++;
      }
    });
  });
  // const max = Math.max.apply(null, score);
  const max = Math.max(...score);
  const result = [];
  for (let i = 0; i < score.length; i++) {
    if (score[i] === max) {
      result.push(i + 1);
    }
  }
  return result;
}
```
