// ... 전개 연산자(Spread Operator)

const user = {
  name: 'Neo',
  age: 22,
  isValid: true
}

const { age, ...rest } = user
console.log(age) // 22
console.log(rest) // { name: 'Neo', isValid: true }

// const newUser = {
//   ...user
// }
// const newUser = {
//   name: 'Neo',
//   age: 22,
//   isValid: true
// }

// const fruits = ['apple', 'banana', 'cherry']
// const newFruits = [...fruits]
// // const newFruits = ['apple', 'banana', 'cherry']

// function abc(a, b, c, ...xyz) {
//   console.log(a) // 1
//   console.log(b) // 2
//   console.log(c) // 3
//   console.log(xyz) // [4, 5, 6, 7, 8, 9, 10]
// }

// abc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
