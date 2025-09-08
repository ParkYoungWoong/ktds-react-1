import { useState, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    console.log('카운트:', count)
  }, [count])

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  )
}
