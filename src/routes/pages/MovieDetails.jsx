import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState()

  useEffect(() => {
    fetchMovie()
  }, [])

  async function fetchMovie() {
    const { data } = await axios.get(
      `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
    )
    setMovie(data)
  }

  return (
    <>
      {movie && (
        <>
          <img
            src={movie.Poster.replace('SX300', 'SX1200')}
            alt={movie.Title}
          />
          <div>
            <h1>{movie.Title}</h1>
            <p>{movie.Plot}</p>
          </div>
        </>
      )}
    </>
  )
}
