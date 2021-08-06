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
