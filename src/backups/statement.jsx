import { useState } from 'react'

// 비동기 - Pending(대기), Fulfilled(이행), Rejected(거부)

export default function App() {
  const [status, setStatus] = useState('pending')

  function render() {
    const s = '대기'
    if (status === 'pending') {
      return <h1>{s}</h1>
    } else if (status === 'fulfilled') {
      return <h1>이행!</h1>
    } else if (status === 'rejected') {
      return <h1>거부!</h1>
    } else {
      return <h1>알 수 없음!</h1>
    }
  }

  // return <>{status === 'pending' && <h1>대기!</h1>}</>
  // return <>{status === 'pending' ? <h1>대기!</h1> : <h1>이행!</h1>}</>
  return <>{render()}</>
}
