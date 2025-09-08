import { useState } from 'react'

export default function App() {
  const [fruits, setFruits] = useState(['사과', '바나나', '체리'])

  return (
    <>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key={fruit}>
              {index + 1}. {fruit}
            </li>
          )
        })}
      </ul>
    </>
  )
}
