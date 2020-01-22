import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeGenre } from '../../features/genre/slice'
import { selectGenre } from '../../features/genre/selectors'
import { selectGenreList } from '../../features/movies/selectors'
import { StyledGenreList, GenreItem, GenreLink } from './genre-list-styles'

export const GenreList = () => {
  const dispatch = useDispatch()

  const genreList = useSelector(selectGenreList)
  const selectedGenre = useSelector(selectGenre)

  const setGenre = (event: React.SyntheticEvent, genre: string) => {
    event.preventDefault()
    dispatch(changeGenre(genre))
  }

  return (
    <StyledGenreList>
      {genreList.map((genre, idx) => (
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
