import { ACCESS_TOKEN_NAME } from '@/lib/api'
import { redirect } from 'react-router'

export async function requiresAuth(request) {
  const token = localStorage.getItem(ACCESS_TOKEN_NAME)
  // const { data } = await api.post('/auth/me')
  // 토큰이 유효하다!
  if (token) {
    return true
  }
  return redirect('/signin')
}
