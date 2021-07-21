function solution(x) {
  let answer = true;
  x = x.toString();
  let sum = 0; // 총 합을 담아주는 변수
  for (let i = 0; i < x.length; i++) {
    sum = sum + Number(x[i]);
  }
  if (x % sum === 0) {
    answer = true;
  } else if (x % sum !== 0) {
    answer = false;
  }
  console.log(sum);
  return answer;
}

function solution(x) {
  x = x.toString();
  let sum = 0; // 총 합을 담아주는 변수
  for (let i = 0; i < x.length; i++) {
    sum = sum + Number(x[i]);
  }
  return x % sum === 0 ? true : false;
}

function solution(x) {
  const answer = x
    .toString()
    .split("")
    .reduce((a, b) => {
      return Number(a) + Number(b);
    });
  return x % answer === 0;
}

function solution(nums) {
  let answer = 0;
  let pocket = []; // 각각 다른 종류의 포켓몬을 담아주는 배열
  for (let i = 0; i < nums.length; i++) {
    if (pocket.includes(nums[i]) === false && pocket.length < nums.length / 2) {
      pocket.push(nums[i]);
    }
  }
  return pocket.length;
}

function solution(nums) {
  let pocket = []; // 각각 다른 종류의 포켓몬을 담아주는 배열
  nums.filter((monster) => {
    return pocket.includes(monster) === false && pocket.length < nums.length / 2
      ? pocket.length.push(monster)
      : null;
  });
}
