import { useState, useEffect } from 'react'
import axios from 'axios'

export default function App() {
  const [movies, setMovies] = useState([])

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    const { data } = await axios.get(
      'https://omdbapi.com?apikey=7035c60c&s=avengers'
    )
    const { Search } = data
    setMovies(Search)
  }

  return (
    <>
      <ul>
        {movies.map(movie => {
          return <li key={movie.imdbID}>{movie.Title}</li>
        })}
      </ul>
      {/* <button onClick={fetchMovies}>영화 정보 가져오기!</button> */}
    </>
  )
}
