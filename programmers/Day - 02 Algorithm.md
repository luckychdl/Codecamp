```js
// 조건문 연습
function boolean(input1, input2) {
  if (input1 || input2 === true) {
    console.log("true");
  } else if (input1 && input2 === false) {
    console.log("false"); //boolean(false, false) 실행안됨
  }
}

function boolean(input1, input2) {
  if (input1 === true || input2 === true) {
    console.log("true");
  } else {
    console.log("false");
  }
}

boolean(true, false); // true
boolean(false, true); // true
boolean(false, false); // false
```

```js
// 홀짝
function evenOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
  } else if (num % 2 !== 0) {
    console.log("Odd");
  } else if (num === 0) {
    console.log("Zero"); // evenOdd(0) Zero 출력안됨 // 0을 나눈 나머지도 0이라서 맨위 조건에 걸려서 Even 출력??
  }
}

function evenOdd(num) {
  if (num === 0) {
    console.log("Zero");
  } else if (num % 2 !== 0) {
    console.log("Odd");
  } else if (num % 2 === 0) {
    console.log("Even");
  }
}

evenOdd(12); // "Even"
evenOdd(15); // "Odd"
evenOdd(0); // "Zero"
```

```js
// 온도
function temperature(num) {
  if (num <= 18) {
    console.log("조금 춥네요");
  } else if (19 <= num <= 23) {
    console.log("날씨가 좋네요");
  } else if (num >= 24) {
    console.log("조금 덥습니다"); // 조금 덥습니다 출력안됨
  }
}

function temperature(num) {
  if (num < 19) {
    console.log("조금 춥네요");
  } else if (18 < num && num < 24) {
    console.log("날씨가 좋네요");
  } else {
    console.log("조금 덥습니다"); // 조금 덥습니다 출력안됨
  }
}

function temperature(num) {
  if (num <= 18) {
    console.log("조금 춥네요");
  } else if (num >= 24) {
    console.log("조금 덥습니다");
  } else {
    console.log("날씨가 좋네요");
  }
}

temperature(13); // "조금 춥네요"
temperature(23); // "날씨가 좋네요"
temperature(27); // "조금 덥습니다"
```

```js
// 며칠
function days(month) {
  if (month === 2) {
    console.log("28");
  } else if (month % 2 === 0) {
    console.log("30");
  } else {
    console.log("31");
  }
}

days(1); // 31
days(2); // 28
days(4); // 30
```

```js
// 미니계산기
function calculator(num1, num2, operator) {
  if (operator === "+") {
    console.log(num1 + num2);
  } else if (operator === "-") {
    console.log(num1 - num2);
  } else if (operator === "/") {
    console.log(num1 / num2);
  } else if (operator === "*") {
    console.log(num1 * num2);
  } else {
    console.log("올바른 입력이 아닙니다.");
  }
}

calculator(10, 5, "+"); // 15
calculator(10, 5, "-"); // 5
calculator(10, 5, "*"); // 50
calculator(10, 5, "/"); // 2
calculator(10, 5, "a"); // "올바른 입력이 아닙니다"
```
