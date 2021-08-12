function solution(N, stages) {
  var answer = [];
  const clearArr = [];
  for (let i = 1; i <= N; i++) {
    // stage = 스테이지 번호
    // clear = 몇명의 플레이어가 클리어 했는지를 담아준다
    clearArr.push({ stage: i, clear: 0 });
  }
  stages.sort((a, b) => a - b);
  let users = stages.length;
  for (let i = 0; i < stages.length; i++) {
    if (clearArr[stages[i] - 1] !== undefined) {
      clearArr[stages[i] - 1].clear += 1;

      if (stages[i] !== stages[1 + 1]) {
        const fail = clearArr[stages[i] - 1].clear / users;
        users = users - clearArr[stages[i] - 1].clear;

        clearArr[stages[i] - 1].clear = fail;
      }
    }
  }
  const answer = clearArr
    .sort((a, b) => {
      return b.clear - a.clear;
    })
    .map((el) => el.stage);
  return answer;
}
function solution(N, stages) {
  stages.sort((a, b) => a - b);
  let users = stages.length;
  const clearArr = new Array(N).fill(1).map((el, i) => {
    return { stage: i + 1, clear: 0 };
  });

  const result = stages.forEach((el, i) => {
    if (clearArr[el - 1] !== undefined) {
      clearArr[el - 1].clear += 1;

      if (el !== stages[i + 1]) {
        const fail = clearArr[el - 1].clear / users;
        users = users - clearArr[el - 1].clear;
        clearArr[el - 1].clear = fail;
      }
    }
  });
  return clearArr.sort((a, b));
}
