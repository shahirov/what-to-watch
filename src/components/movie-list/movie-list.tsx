import React, { useState } from 'react'

import { Movie } from '../../mocks/movies'
import { MovieCard } from '../movie-card/movie-card'
import { MovieListWrapper } from './movie-list-styles'

interface MovieListProps {
  movies: Movie[]
}

export const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [activeMovieCard, setActiveMovieCard] = useState<Movie>()

  const handleMovieCardMouseEnter = (movieCard: Movie) => {
    setActiveMovieCard(movieCard)
  }

  return (
    <MovieListWrapper>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} onMovieCardMouseEnter={handleMovieCardMouseEnter} />
      ))}
    </MovieListWrapper>
  )
}
