import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { Link } from 'react-router'
import { useMovieStore } from '@/stores/movie'

export default function Movies() {
  const searchText = useMovieStore(state => state.searchText)
  const movies = useMovieStore(state => state.movies)
  const isLoading = useMovieStore(state => state.isLoading)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const fetchMovies = useMovieStore(state => state.fetchMovies)
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
