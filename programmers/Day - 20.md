```
시저 암호
문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

제한 조건
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
입출력 예
s	n	result
"AB"	1	"BC"
"z"	1	"a"
"a B z"	4	"e F d"
```

```js
// 시저 암호
const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      // answer += s[i]
    } else {
      // 대소문자의 알파벳인 경우
      let index = alphabet.indexOf(s[i]);
      // 현재 알파벳이 소문자인지 대문자인지를 판별, 저장
      const upper = index >= 26 ? true : false;
      index += n;
      // index = index + n;
      if (upper === true) {
        // 알파벳이 대문자인 경우
        index = index >= 52 ? index - alphabet.length / 2 : index;
      } else {
        // 알파벳이 소문자인 경우
        index = index >= 26 ? index - alphabet.length / 2 : index;
      }
      answer += alphabet[index];
    }
  }

  return answer;
}
```

```js
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += " ";
      // answer += s[i]
    } else {
      // 대소문자의 알파벳인 경우
      const text = lower.includes(s[i]) === true ? lower : upper;
      let index = text.indexOf(s[i]) + n;
      if (index >= text.length) {
        index = index - text.length;
      }

      answer += text[index];
    }
  }
  return answer;
}
```

```js
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function solution(s, n) {
  const result = s.split("").map((str) => {
    if (str === " ") {
      return " ";
    }
    const text = lower.includes(str) === true ? lower : upper;
    let index = text.indexOf(str) + n;
    if (index >= text.length) {
      index = index - text.length;
    }
    console.log(text[index]);
    return text[index];
  });
}
```
