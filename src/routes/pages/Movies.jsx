import axios from 'axios'
import { useState } from 'react'
import TextField from '@/components/TextField'
import Button from '@/components/Button'

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function fetchMovies() {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    const { data } = await axios.get(
      `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
    )
    setMovies(data.Search)
    setIsLoading(false)
  }

  return (
    <>
      <div>
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
      <ul>
        {movies.map(movie => {
          return (
            <li key={movie.imdbID}>
              <img
                src={movie.Poster}
                alt={movie.Title}
              />
              <h3>
                {movie.Title}({movie.Year})
              </h3>
            </li>
          )
        })}
      </ul>
    </>
  )
}
