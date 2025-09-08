import { useState, useMemo } from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  // const double = useMemo(실행할함수, 의존성배열)
  const double = useMemo(() => count * 2, [count])

  function increase() {
    setCount(count + 1)
  }
  function decrease() {
    setCount(count - 1)
  }

  return (
    <>
      <h1>
        {count} / {double}
      </h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </>
  )
}

const add1 = (x, y) => {
  return x + y
}
const add2 = (x, y) => x + y
