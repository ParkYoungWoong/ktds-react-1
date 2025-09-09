import { useState } from 'react'
import TextField from '@/components/TextField.jsx'
import Button from '@/components/Button.jsx'

export default function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    console.log(email, password, name) // 요청/응답
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <form
      className="flex max-w-[400px] flex-col gap-2"
      onSubmit={handleSubmit}>
      <TextField
        type="email"
        name="email"
        label="이메일"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <TextField
        type="password"
        label="비밀번호"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <TextField
        type="text"
        label="이름"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      {/* <button type="submit">회원가입</button> */}
      <Button
        type="submit"
        loading={isLoading}>
        회원가입
      </Button>
    </form>
  )
}
