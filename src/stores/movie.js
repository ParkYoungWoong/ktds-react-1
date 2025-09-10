import { create } from 'zustand'
import axios from 'axios'
import { persist } from 'zustand/middleware'

export const useMovieStore = create(
  persist(
    (set, get) => {
      return {
        searchText: '',
        movies: [],
        isLoading: false,
        setSearchText(searchText) {
          set({ searchText })
        },
        async fetchMovies() {
          try {
            const { isLoading, searchText } = get()
            if (isLoading) return
            // setIsLoading(true)
            set({ isLoading: true })
            // await new Promise(resolve => setTimeout(resolve, 2000))
            const { data } = await axios.get(
              `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
            )
            if (data.Response === 'False') {
              throw new Error(data.Error)
            }
            // setMovies(data.Search || [])
            set({ movies: data.Search || [] })
          } catch (error) {
            console.log(error.message)
          } finally {
            // setIsLoading(false)
            set({ isLoading: false })
          }
        }
      }
    },
    { name: 'movieStore' }
  )
)
