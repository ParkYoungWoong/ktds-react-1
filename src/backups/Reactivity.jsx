import { useState } from 'react'
import clsx from 'clsx'

export default function App() {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)

  function increase(value) {
    const newCount = count + value
    setCount(newCount)
    console.log(newCount)
  }

  return (
    <>
      <h1 className="text-4xl font-bold">App!</h1>
      <h2
        style={{
          color: count > 20 ? 'green' : null,
          backgroundColor: 'blue'
        }}
        className={clsx({
          title: true,
          red: count > 10,
          active: isActive
        })}>
        {count}
      </h2>
      {/* <button onClick={increase}>증가</button> */}
      <button onClick={() => increase(7)}>증가</button>
      <button
        onClick={() => {
          setIsActive(true)
        }}>
        활성화
      </button>
    </>
  )
}
