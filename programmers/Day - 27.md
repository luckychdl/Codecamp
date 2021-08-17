```js
// 크레인 인형뽑기
function solution(board, moves) {
  let answer = 0;
  // 인형들을 담는 배열
  const basket = [];
  for (let i = 0; i < moves.length; i++) {
    for (let l = 0; l < board.length; l++) {
      const doll = board[l][moves[i] - 1];
      if (doll === 0) {
        // 인형이 없는경우
        continue;
      } else {
        // 인형이 없는 경우
        if (basket[basket.length - 1] === doll) {
          basket.splice(basket.length - 1, 1);
          answer += 2;
        } else {
          basket.push(doll);
        }

        board[l][moves[i] - 1] = 0;

        break;
      }
    }
  }
  return answer;
}
```

```js
function solution(board, moves) {
  let answer = 0;
  // 인형들을 담는 배열
  const basket = [];

  moves.forEach((location, i) => {
    // 반복문을 실행하지 않게 하는 변수 (false 일 때만 실행한다.)
    let checked = false;

    board.forEach((arr, l) => {
      const doll = arr[moves[i] - 1];

      if (checked === false) {
        if (doll !== 0) {
          if (basket[basket.length - 1] === doll) {
            basket.splice(basket.length - 1, 1);
            answer += 2;
          } else {
            basket.push(doll);
          }

          arr[moves[i] - 1] = 0;

          checked = true;
        }
      }
    });
  });

  return answer;
}
```
