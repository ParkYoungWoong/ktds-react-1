const user = {
  name: 'Neo',
  // age: 22,
  email: 'neo@heropy.dev'
}

const { age = 77, isValid = false } = user
console.log(age) // 22
console.log(isValid) // false
