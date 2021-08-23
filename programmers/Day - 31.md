```js
// 다트게임
const bonus = ["S", "D", "T"];
const option = ["*", "#"];
function solution(dartResult) {
  const scoreList = [];
  let scoreStr = "";
  for (let i = 0; i < dartResult.length; i++) {
    if (Number.isNaN(Number(dartResult[i])) === false) {
      scoreStr += dartResult[i];
    } else if (bonus.includes(dartResult[i]) === true) {
      scoreList.push({
        score: Number(scoreStr),
        bonus: dartResult[i],
      });
      scoreStr = "";
    } else if (option.includes(dartResult[i]) === true) {
      scoreList[scoreList.length - 1]["option"] = dartResult[i];
    }
  }
  const scoreResult = [];
  for (let i = 0; i < scoreList.length; i++) {
    let sum = 0; // 최종적으로 연산된 결과가 담기는 변수

    if (scoreList[i].bonus === "S") sum += scoreList[i].score;
    if (scoreList[i].bonus === "D") sum += Math.pow(scoreList[i].score, 2);
    if (scoreList[i].bonus === "T") sum += Math.pow(scoreList[i].score, 3);

    if (scoreList[i].option) {
      if (scoreList[i].option === "#") sum *= -1;
      if (scoreList[i].option === "*") {
        sum *= 2;
        if (scoreResult.length > 0) {
          scoreResult[scoreResult.length - 1] *= 2;
        }
      }
    }
    scoreResult.push(sum);
  }
  return scoreResult.reduce((el, cu) => el + cu);
}
```

```js
const bonus = ["S", "D", "T"];
const option = ["*", "#"];
function solution(dartResult) {
  const scoreList = [];
  let scoreStr = "";
  dartResult.split("").forEach((el, i) => {
    if (Number.isNaN(Number(el)) === false) {
      scoreStr += el;
    } else if (bonus.includes(el) === true) {
      scoreList.push({
        score: Number(scoreStr),
        bonus: el,
      });
      scoreStr = "";
    } else if (option.includes(el) === true) {
      scoreList[scoreList.length - 1]["option"] = el;
    }
  });
  const scoreResult = [];
  scoreResult.forEach((el, i) => {
    let sum = 0;

    if (el.bonus === "S") sum += el.score;
    if (el.bonus === "D") sum += Math.pow(el.score, 2);
    if (el.bonus === "T") sum += Math.pow(el.score, 3);

    if (el.option) {
      if (el.option === "#") sum *= -1;
      if (el.option === "*") {
        sum *= 2;

        if (i > 0) scoreResult[i - 1] *= 2;
      }
    }
    scoreResult.push(sum);
  });
  return scoreResult.reduce((el, cu) => el + cu);
}
```
