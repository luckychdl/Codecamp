```
최대공약수와 최소공배수
문제 설명
두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

제한 사항
두 수는 1이상 1000000이하의 자연수입니다.
입출력 예
n	m	return
3	12	[3, 12]
2	5	[1, 10]
입출력 예 설명
입출력 예 #1
위의 설명과 같습니다.

입출력 예 #2
자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.
```

```js
function solution(n, m) {
  let answer = [];
  // 최대공약수 구하기
  // gcd = 최대공약수
  const gcdArr = [];

  // lcm = 최소공배수
  let [gcd, lcm] = [1, 1];

  // 최소공배수 구하기
  const lcmArr = [];

  for (let i = 0; i < 2; i++) {
    // n 과 m 의 값을 차례로 담아주기 위해서
    const number = i === 0 ? n : m;
    // n 과 m 의 곱한 값을 넣어주는 상수 데이터 (= 두 수의 최대공배수)
    const sum = n * m;

    // 최대공약수를 구하는 식
    for (let l = 2; l <= number; l++) {
      // number 와 l을 나눴을 때에 0이 나오면 약수로 판단을 한다.
      if (number % l === 0) {
        if (gcdArr.includes(l) === false) {
          // 약수
          gcdArr.push(l);
        } else {
          if (l > gcd) {
            gcd = l;
          }
        }
      }
    }

    // 최소공배수 구하기
    for (let l = number; l <= sum; l += number) {
      if (lcmArr.includes(l) === false) {
        lcmArr.push(l);
      } else {
        lcm = l;
        break;
      }
    }
  }

  return [gcd, lcm];
}
```

```js
// 유클리드 호제법
// 작은 수  % 큰 수 === 0 ? 작은 수가 최소공배수
//                     : 작은 수 % 나머지 === 0 ? 나머지가 최대공약수

function solution(n, m) {
  function recursion(a, b) {
    if (b === 0) {
      return a;
    }
    return recursion(b, a % b);
  }
  const gcd = recursion(n, m);
  const lcm = (n * m) / gcd;

  return [gcd, lcm];
}
```
