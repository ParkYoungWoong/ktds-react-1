// 페이지를 구성하는 파일!
import { createBrowserRouter, RouterProvider } from 'react-router'
import Default from '@/routes/layouts/Default'
import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'
import Movies from '@/routes/pages/Movies'
import MovieDetails from '@/routes/pages/MovieDetails'
import SignIn from '@/routes/pages/SignIn'
import NotFound from '@/routes/pages/NotFound'
import { requiresAuth } from '@/routes/loaders/requiresAuth'
import { guestOnly } from '@/routes/loaders/guestOnly'

// http://localhost:5173/signin
// http://localhost:5173/signup
// http://localhost:5173/movies/tt1234567

const router = createBrowserRouter([
  {
    element: <Default />,
    children: [
      // 라우트 객체
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/movies',
        element: <Movies />,
        loader: requiresAuth
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetails />,
        loader: requiresAuth
      },
      {
        path: '/signin',
        element: <SignIn />,
        loader: guestOnly
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router} />
}
