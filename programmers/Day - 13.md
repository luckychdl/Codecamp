```js
//완주하지 못한 선수

function solution(participant, completion) {
  let answer = "";
  for (let i = 0; i < completion.length; i = i + 1) {
    if (participant.includes(completion[i]) === true) {
      participant.splice(participant.indexOf(completion[i]), 1);
    }
  }
  return participant[0];
}
// pop() => 제일 마지막에 있는 배열 삭제
// shift() => 제일 앞에 있는 배열 삭제
// splice() => 원하는 위치 배열 삭제
```

```js
function solution(participant, completion) {
  let answer = "";
  participant = participant.sort();
  completion = completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
```

```js
function solution(participant, completion) {
  let answer = "";
  participant = participant.sort();
  completion = completion.sort();
  let stop = false;
  // 합격자가 아닌 참가자의 이름이 최초로 들어갔는지를 판단해주는 변수
  participant.forEach((name, i) => {
    if (name !== completion[i] && stop === false) {
      answer = name;
      stop = true;
    }
  });
  return answer;
}

//forEach , map
//map() => 리턴값이 항상 배열
//forEach() => 리턴부분 없이 괄호 안에서 코드를 사용할 수 있음
```
