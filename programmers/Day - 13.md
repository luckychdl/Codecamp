```
완주하지 못한 선수
문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다. 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.
입출력 예
participant	completion	return
["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"
입출력 예 설명
예제 #1
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.


```

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
