import { useState, useEffect } from 'react'

export default function App() {
  // 양식(대화형) 요소 => Form
  const [text, setText] = useState('Hello~')
  const [password, setPassword] = useState('')

  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault()
          console.log(text, password)
        }}>
        <input
          className="border-2 border-gray-400"
          type="text"
          value={text}
          onChange={event => {
            setText(event.target.value)
          }}
        />
        <input
          className="border-2 border-gray-400"
          type="password"
          value={password}
          onChange={event => {
            setPassword(event.target.value)
          }}
        />
        <button type="submit">로그인</button>
      </form>
    </>
  )
}
