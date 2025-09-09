// 페이지를 구성하는 파일!
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'

// http://localhost:5173/signin
// http://localhost:5173/signup
// http://localhost:5173/movies
// http://localhost:5173/movies/tt1234567

const router = createBrowserRouter([
  // 라우트 객체
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
