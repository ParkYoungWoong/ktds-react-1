import { useState } from 'react'
import TextField from '@/components/TextField.jsx'

export default function App() {
  return (
    <>
      <TextField
        type="email"
        label="이메일"
      />
      <TextField
        type="password"
        label="비밀번호"
      />
      <TextField
        type="text"
        label="이름"
      />
      <TextField type="text" />
    </>
  )
}
