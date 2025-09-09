const axios = {
  get: url => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(1234)
      }, 3000)
    })
  }
}

const res = await axios.get('')
console.log(res) // ???
