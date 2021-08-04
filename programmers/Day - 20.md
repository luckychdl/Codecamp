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
