function aaa() {
  console.log()
}

function add(a, b) {
  return a + b
}

const result = add(1, 2)

const bbb = 1
const ccc = bbb
const qqq = '파인애플'
const www = qqq

const profile = {
  name: '철수',
  age: 13,
  school: '다람쥐초등학교'
}


const product = {
  name: '키보드',
  price: 10000,
  size: {
      width: 100,
      height: 200    
  }
}
const product2 = {
  ...product
}                         // 얕은 복사


JSON.stringify(product)
// "{\"name\":\"키보드\",\"price\":10000,\"size\":{\"width\":50,\"height\":200}}"

JSON.parse(JSON.stringify(product))     // 깊은 복사

// {name: "키보드", price: 10000, size: {…}}
// name: "키보드"
// price: 10000
// size: {width: 50, height: 200}
// __proto__: Object 


// 7월 12일

구조분해할당

const child = {
  name: '철수',
  age: 13,
  school: '다람쥐초등학교'
}
const {name, age, school} = child


const {name2, age2, school2} = {
  name2: '철수',
  age2: 13,
  school2: '다람쥐초등학교'
}

const numbers = [10, 15]
const [num1 , num2] = numbers
const number1 = numbers[0]
const number2 = numbers[1]

const [number111, number222] = [10, 15]

function useState() {
  // asasdasdad
  // adadsasdadds

  return ['컴포넌트에서 쓰이는 변수', '변경시키는 함수']
  
}

const [aaa, setAaa] = useState()
aaa
"컴포넌트에서 쓰이는 변수"
setAaa
"변경시키는 함수"


function getClassmates(aaa, ccc) {
    
  return [ccc, aaa]

}
const [child1, child2] = getClassmates('훈이', '맹구')
// child1
// "맹구"
// child2
// "훈이"