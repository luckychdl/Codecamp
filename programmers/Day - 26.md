```js
// 예산
function solution(d, budget) {
  let answer = 0;

  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    budget -= d[i];

    if (budget <= 0) {
      if (budget < 0) {
        return i;
      } else if (budget === 0) {
        return i + 1;
      }
      break;
    }
  }
  if (budget > 0) {
    return d.length;
  }
  return answer;
}
```

```js
// 배열
function solution(d, budget) {
  let answer = 0;

  d.sort((a, b) => a - b);
  // 지원할 수 있는 예산을 담아주는 배열
  const arr = [];
  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget >= 0) {
      arr.push(d[i]);
    }
  }
  return arr.length;
}
```

```js
// filter
function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .filter((price) => {
      budget -= price;
      if (budget >= 0) {
        return price;
      }
    }).length;
}
```
