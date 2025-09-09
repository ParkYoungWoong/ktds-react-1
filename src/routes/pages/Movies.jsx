import axios from 'axios'
import { useState } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { Link } from 'react-router'

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function fetchMovies() {
    try {
      if (isLoading) return
      setIsLoading(true)
      // await new Promise(resolve => setTimeout(resolve, 2000))
      const { data } = await axios.get(
        `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
      )
      if (data.Response === 'False') {
        throw new Error(data.Error)
      }
      setMovies(data.Search || [])
    } catch (error) {
      console.log(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="mx-auto max-w-[1200px]">
      <div className="grid grid-cols-[1fr_100px] gap-2">
        <TextField
          value={searchText}
          onChange={event => setSearchText(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              fetchMovies()
            }
          }}
        />
        <Button
          loading={isLoading}
          onClick={fetchMovies}>
          검색
        </Button>
      </div>
      <ul className="mt-4 grid grid-cols-5 gap-2">
        {movies.map(movie => {
          return (
            <li key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>
                <img
                  src={movie.Poster}
                  alt={movie.Title}
                />
                <h3 className="truncate">
                  {movie.Title}({movie.Year})
                </h3>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
