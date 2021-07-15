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


// 2021 07 12

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



// 2021 07 13
// map
const classmate = ['철수', '영희', '훈이']

classmate.map((data) => data + '바보')
// (3) ["철수바보", "영희바보", "훈이바보"]
const classmates = classmate.map((data) => data + '바보')
// (3) ["철수바보", "영희바보", "훈이바보"]
const aaa = [{name: '철수'}, {name: '영희'}, {name: '훈이'}]

const bbb = aaa.map((data) => data+'바보')

const ccc = aaa.map((data) => ({name: `${data.name}바보`}))
// (3) [{…}, {…}, {…}]
// 0: {name: "철수바보"}
// 1: {name: "영희바보"}
// 2: {name: "훈이바보"}
// length: 3
// __proto__: Array(0)

const classmates = [
  {name: '철수', age: 13},
  {name: '영희',age: 10},
  {name:'훈이', age: 11}
]

classmates.map((data) => ({...data, school:'토끼 초등학교'}))

// (3) [{…}, {…}, {…}]
// 0: {name: "철수", age: 13}
// 1: {name: "영희", age: 10}
// 2: {name: "훈이", age: 11}
// length: 3
// __proto__: Array(0)

const classmates = [
  {name: '철수', age: 13},
  {name: '영희',age: 10},
  {name:'훈이', age: 11}
]

classmates.map((data) => ({name: data.name,age: data.age, school:'다람쥐 초등학교'}))

// (3) [{…}, {…}, {…}]
// 0: {name: "철수", age: 13, school: "다람쥐 초등학교"}
// 1: {name: "영희", age: 10, school: "다람쥐 초등학교"}
// 2: {name: "훈이", age: 11, school: "다람쥐 초등학교"}
// length: 3
// __proto__: Array(0)

classmates.map((data) => ({...data,school:'다람쥐 초등학교'}))

// (3) [{…}, {…}, {…}]
// 0: {name: "철수", age: 13, school: "다람쥐 초등학교"}
// 1: {name: "영희", age: 10, school: "다람쥐 초등학교"}
// 2: {name: "훈이", age: 11, school: "다람쥐 초등학교"}
// length: 3
// __proto__: Array(0)

const classmates = ['aaa','bbb','ccc']

classmates.filter(data => data === 'aaa')

// ["aaa"]

classmates.filter(data => data !== 'aaa')

// (2) ["bbb", "ccc"]

const age = [10, 15, 13]

age.filter(data => data >= 15)

// [15]

const classmates2 = [
  {age: 10},
  {age: 15},
  {age: 13}
]

classmates2.filter(data => data.age >= 15)
// [{…}]
// 0: {age: 15}
// length: 1
// __proto__: Array(0)

const classmates = [
  {name: '철수', age: 10, school:'토끼초등학교'},
  {name: '영희', age: 13, school:'다람쥐초등학교'},
  {name: '훈이', age: 11, school:'토끼초등학교'}
]

classmates.filter(data => data.school === '토끼초등학교')

// (2) [{…}, {…}]
// 0: {name: "철수", age: 10, school: "토끼초등학교"}
// 1: {name: "훈이", age: 11, school: "토끼초등학교"}
// length: 2
// __proto__: Array(0)

classmates.filter(data => data.age === 11)

// [{…}]
// 0: {name: "훈이", age: 11, school: "토끼초등학교"}
// length: 1
// __proto__: Array(0)

classmates.filter(data => data.name === '영희')

// [{…}]
// 0: {name: "영희", age: 13, school: "다람쥐초등학교"}
// length: 1
// __proto__: Array(0)

classmates.map((data) => ({...data, location: 'seoul'}))

// (3) [{…}, {…}, {…}]
// 0: {name: "철수", age: 10, school: "토끼초등학교", location: "seoul"}
// 1: {name: "영희", age: 13, school: "다람쥐초등학교", location: "seoul"}
// 2: {name: "훈이", age: 11, school: "토끼초등학교", location: "seoul"}
// length: 3
// __proto__: Array(0)

classmates
  .filter(data => data.age >= 11)
  .map(data => ({ ...data, gender: 'M'}))

// (2) [{…}, {…}]
// 0: {name: "영희", age: 13, school: "다람쥐초등학교", gender: "M"}
// 1: {name: "훈이", age: 11, school: "토끼초등학교", gender: "M"}
// length: 2
// __proto__: Array(0)

const classmates = [
  {name: '철수', age: 10, school:'토끼초등학교'},
  {name: '영희', age: 13, school:'다람쥐초등학교'},
  {name: '훈이', age: 11, school:'토끼초등학교'}
]

classmates
  .filter(data => data.school === '토끼초등학교')
  .map(data => ({ ...data, candy: 10}))

// (2) [{…}, {…}]
// 0: {name: "철수", age: 10, school: "토끼초등학교", candy: 10}
// 1: {name: "훈이", age: 11, school: "토끼초등학교", candy: 10}
// length: 2
// __proto__: Array(0)

classmates
  .filter(data => data.school === '다람쥐초등학교')
  .map(data => `${data.name}어린이`)

// ["영희어린이"]

classmates
  .filter(data => data.school === '다람쥐초등학교')
  .map(data => ({...data,name: `${data.name}어린이`}))

// [{…}]
// 0: {name: "영희어린이", age: 13, school: "다람쥐초등학교"}
// length: 1
// __proto__: Array(0)


// 2021/ 07 / 14

const classmates = [
  '철수',
  '영희',
  '훈이'
]

classmates.every(data => data)
true

const aaa = ['철수', '1234', '제목', '내용']

aaa.every(data => data !== '')
true

const inputs = {
  name: '철수',
  password: '1234',
  title: 'title',
  contents: 'contents'
}

Object.keys(inputs)
(4) ["name", "password", "title", "contents"]

Object.values(inputs)
(4) ["철수", "1234", "title", "contents"]

Object.values(inputs).every(data => data !== '')
true