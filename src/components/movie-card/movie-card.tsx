import React from 'react'

import {
  MovieCardWrapper,
  MovieCardImageContainer,
  MovieCardImage,
  MovieCardTitle,
  MovieCardLink
} from './movie-card-styles'
import { Movie } from '../../mocks/movies'

interface MovieCardProps {
  movie: Movie
  onMovieCardMouseEnter: (movie: Movie) => void
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, onMovieCardMouseEnter }) => {
  const { previewImage: imageUrl, title, videoLink } = movie

  return (
    <MovieCardWrapper onMouseEnter={() => onMovieCardMouseEnter(movie)}>
      <MovieCardImageContainer>
        <MovieCardImage src={imageUrl} alt={title} width="280" height="175" />
      </MovieCardImageContainer>
      <MovieCardTitle>
        <MovieCardLink href={videoLink}>{title}</MovieCardLink>
      </MovieCardTitle>
    </MovieCardWrapper>
  )
}
