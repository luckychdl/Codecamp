```js
// 숫자더하기
function sum(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    count = count + i;
  }
  console.log(count);
}

sum(5); // 15
sum(3); // 6
```

```js
// 특정 문자열 세기
function countLetter(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "A") {
      count = count + 1;
    }
  }
  console.log(count);
}

countLetter("I am from Korea"); // 2
countLetter("A day without laughter is a day wasted."); // 6
```

```js
// 문자열 삽입
function makeNumber(num) {
  let count = "";
  for (let i = 1; i <= num; i++) {
    count = count + i;
    if (i !== num) {
      count = count + "-";
    }
  }
  console.log(count);
}

makeNumber(5); // 1-2-3-4-5
makeNumber(7); // 1-2-3-4-5-6-7
```

```js
// 홀수 문자열
function makeOdd(num) {
  let count = "";
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      count = count + i;
    }
  }
  console.log(count);
}
```
