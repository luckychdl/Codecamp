~~~js
function solution(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    // i = 첫번째 인덱스 j = 두번째 인덱스
    for (let j = i + 1; j < numbers.length; i++) {
      // j = 0 으로 설정하면 i와 똑같은 값이 출력되기 떄문에 다른 값을 뽑아오기 위해 j = i + 1
      let sum = numbers[i] + numbers[j];
      // 첫번째 인덱스 값과 두번째 인덱스 값을 더해준 값을 저장하는 변수
      // if(answer.indexOf(sum) === -1 )
      if (answer.includes(sum) === false) {
        answer.push(sum);
      }
    }
  }
  return answer.sort(function (a, b) {
    return a - b;
  });
}
~~~
~~~js
a = ["a"];
a.indexOf("a"); //  = 0 해당 값이 있으면 0을 리턴
a.indexOf("b"); // = -1 해당 값이 없으면 -1을 리턴

function solution(s) {
  let answer = "";
  let idx = 0;
  // 반복문이 실행될 때 공백을 기준으로 인덱스 값을 저장하는 변수
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      idx = 0;
      answer = answer + " ";
    } else {
      answer =
        answer + (idx % 2 === 0 ? s[i].toUpperCase() : s[i].toLowerCase());
      idx = idx + 1;
    }
  }
  return answer;
}
~~~
~~~js
function solution(s) {
  let answer = "";
  answer = s
    .split(" ")
    .map((a) => {
      return a
        .split("")
        .map((b, i) => {
          return i % 2 === 0 ? b.toUpperCase() : b.toLowerCase();
        })
        .join("");
    })
    .join(" ");
  return answer;
}
~~~