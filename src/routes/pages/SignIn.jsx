import { useState } from 'react'
import TextField from '@/components/TextField.jsx'
import Button from '@/components/Button.jsx'
import api, { ACCESS_TOKEN_NAME } from '@/lib/api'
import { useNavigate } from 'react-router'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault()
    setIsLoading(true)
    console.log(email, password) // 요청/응답
    const { data } = await api.post('/auth/signin', {
      email,
      password
    })
    const { user, token } = data
    localStorage.setItem(ACCESS_TOKEN_NAME, token)
    // window.location.href = '/'
    navigate('/')
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
      <Button
        type="submit"
        loading={isLoading}>
        로그인
      </Button>
    </form>
  )
}
