function solution(n) {
  let answer = 0;
  // 2부터 n 까지의 숫자들을 담아주는 배열
  const numbers = [];
  for (let i = 2; i <= n; i++) {
    numbers[i - 2] = i;
    // numbers.push(i);
  }
  for (let i = 2; i * i <= n; i++) {
    for (let l = i * i; l <= n; l = l + i) {
      numbers[l - 2] = false;
    }
  }
  answer = numbers.filter((data) => data !== false).length;
  return answer;
}

function solution(n) {
  let answer = 0;
  // 2부터 n 까지의 숫자들을 담아주는 배열
  const numbers = [];
  for (let i = 2; i <= n; i++) {
    numbers[i - 2] = i;
    // numbers.push(i);
  }
  for (let i = 2; i * i <= n; i++) {
    if (numbers[i - 2] === false) {
      continue; // 현재 반복문을 진행하지 않고 다음 반복문을 진행한다.
    }
    for (let l = i * i; l <= n; l = l + i) {
      numbers[l - 2] = false;
    }
  }
  answer = numbers.filter((data) => data !== false).length;
  return answer;
}
