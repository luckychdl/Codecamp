function solution(num) {
  let answer = 0;
  for (let i = 1; i < num; i++) {
    if (num % 2 === 0) {
      answer = num / 2;
    } else {
      answer = num * 3 + 1;
    }
  }
  console.log(answer);
}
