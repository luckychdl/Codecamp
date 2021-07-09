~~~js
// 점수에 따른 등급
function grade(score) {
  if (score <= 100 && score >= 90) {
    console.log('A')
  } else if (score <= 89 && score >= 80) {
    console.log('B')
  } else if (score <= 79 && score >= 70) {
    console.log('C')
  } else if (score <= 69 && score >= 60) {
    console.log('D')
  } else if (score <= 59 && score >= 0) {
    console.log('F')
  } else {
    console.log('잘못된 점수입니다.')
  }
}


grade(105)  // "잘못된 점수입니다"
grade(-10)  // "잘못된 점수입니다"
grade(97)   // "A"
grade(86)   // "B"
grade(75)   // "C"
grade(66)   // "D"
grade(52)   // "F"


~~~

~~~js
// 마이페이지
const myShopping = [
		{ category: "과일", price: 12000　},
		{ category: "의류", price:10000　 },
		{ category: "의류", price: 20000　},
		{ category: "장난감", price: 9000 },
		{ category: "과일", price: 5000　 },
		{ category: "의류", price: 10000  },
		{ category: "과일", price: 8000　　},
		{ category: "의류", price: 7000　　},
		{ category: "장난감", price: 5000  },
		{ category: "의류", price: 10000　 },
]
let count = 0
let price = 0
let grade = ''
for (let i = 0; i < myShopping.length; i ++) { 
  if ( myShopping[i].category === '의류') {
    count = count + 1;
    price = price + myShopping[i].price
  }
}
  if (price >= 0 && price <= 2) {
    grage = 'Bronze'
  } else if (price >= 3 && price <= 4) {
    grade = 'Silver'
  } else if (price >= 5) {
    grade = 'Gold'
  }
  console.log ('의류를 구매한 횟수는 총 ' + count + '회 금액은 ' + price + '원이며 등급은 ' + grade + '입니다' )

~~~