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