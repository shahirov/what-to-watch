import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { StyledGenreList, GenreItem, GenreLink } from './genre-list-styles'
import { changeGenre } from '../../features/movies/slice'
import { selectGenres, selectGenre } from '../../features/movies/selectors'

export const GenreList = () => {
  const dispatch = useDispatch()

  const genres = useSelector(selectGenres)
  const selectedGenre = useSelector(selectGenre)

  const setGenre = (event: React.SyntheticEvent, genre: string) => {
    event.preventDefault()
    dispatch(changeGenre(genre))
  }

  return (
    <StyledGenreList>
      {genres.map((genre, idx) => (
        <GenreItem key={genre + idx}>
          <GenreLink
            href="#/"
            isActive={selectedGenre === genre}
            onClick={event => setGenre(event, genre)}
          >
            {genre}
          </GenreLink>
        </GenreItem>
      ))}
    </StyledGenreList>
  )
}
