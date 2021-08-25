```
행렬의 덧셈
문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.
입출력 예
arr1	arr2	return
[[1,2],[2,3]]	[[3,4],[5,6]]	[[4,6],[7,9]]
[[1],[2]]	[[3],[4]]	[[4],[6]]
```

```js
function solution(arr1, arr2) {
  let answer = [[]];
  // i = i + 1;
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];

    for (let l = 0; l < arr1[i].length; l++) {
      // arr1 의 숫자 값과 arr2 의 숫자 값을 더해서 저장하는 상수
      const sum = arr1[i][l] + arr2[i][l];

      //answer[i][l] = sum;
      answer[i].push(sum);
    }
  }

  return answer;
}
```

```js
function solution(arr1, arr2) {
  return arr1.map((num1, i) => {
    return num1.map((num2, l) => {
      // return arr1[i][l] + arr2[i][l];
      return num2 + arr2[i][l];
    });
  });
}
```
