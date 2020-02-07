import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../../store'
import { DefaultButton, LinkButton } from '../buttons-styles'
import { selectAuth } from '../../../features/user/selectors'
import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg'
import { toggleFavoriteMovieRequest } from '../../../features/movies/slice'
import { selectFavoriteMovieById } from '../../../features/movies/selectors'
import { ReactComponent as InListIcon } from '../../../assets/icons/in-list.svg'

interface ListButtonProps {
  movieId: number
}

export const ListButton = ({ movieId }: ListButtonProps) => {
  const dispatch = useDispatch()
  const isAuthed = useSelector(selectAuth)
  const movie = useSelector<RootState>(state => selectFavoriteMovieById(state, movieId))

  const content = () => (
    <>
      {!movie ? <AddIcon /> : <InListIcon />}
      <span>My list</span>
    </>
  )

  const toggleMovie = () => {
    dispatch(toggleFavoriteMovieRequest(movieId))
  }

  return isAuthed ? (
    <DefaultButton type="button" onClick={toggleMovie}>
      {content()}
    </DefaultButton>
  ) : (
    <LinkButton to="/login">{content()}</LinkButton>
  )
}
