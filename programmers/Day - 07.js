
// 문자열 다루기 기본
function solution(s) {
  let answer = true
  if (s.length !== 4 && s.length !== 6) {
    answer = false 
  } else {
    for (let i = 0; i < s.length; i ++) {
      if ( isNaN(s[i]) === true ) {
        answer = false
      }
    }
  }
  return answer
}

// map , filter 사용

function solution(s) {
  let answer = true

  if (s.length !== 4 && s.length !== 6) {
    return false
  } else {
    answer = s.split('')
      .filter((str) => isNaN(Str) === true)
      .length === 0
  }
}

// 2016년

const month = {
  1 : 31,
  2 : 29,
  3 : 31,
  4 : 30,
  5 : 31,
  6 : 30,
  7 : 31,
  8 : 31,
  9 : 30,
  10 : 31,
  11 : 30,
  12 : 31
}
const week = {
  0 : 'FRI',
  1 : 'SAT',
  2 : 'SUN',
  3 : 'MON',
  4 : 'TUE',
  5 : 'WED',
  6 : 'THU'
}
function solution(a , b) {
  let answer = ''
  let fullDays = 0  
  // 모든 일수를 저장하는 변수

  for (let i = 1; i < a; i ++) {
    fullDays = fullDays + month[i]
  }
  fullDays = fullDays + (b - 1)
  answer = week[fullDays % 7]
}

function solution(a , b) {
  const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
  const days = new Date(2016, a - 1, b).getDay()
  
  return answer

}