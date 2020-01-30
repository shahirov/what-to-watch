import React from 'react'

import { LinkButton } from './play-button-styles'
import { ReactComponent as PlayIcon } from '../../../assets/icons/play.svg'

interface PlayButtonProps {
  movieId: string | number
}

export const PlayButton = ({ movieId }: PlayButtonProps) => {
  return (
    <LinkButton to={`/movie/${movieId}/show`}>
      <PlayIcon />
      <span>Play</span>
    </LinkButton>
  )
}
