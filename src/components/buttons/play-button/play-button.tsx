import React from 'react'

import { LinkButton } from '../buttons-styles'
import { ReactComponent as PlayIcon } from '../../../assets/icons/play.svg'

interface PlayButtonProps {
  movieId: string | number
}

export const PlayButton = ({ movieId }: PlayButtonProps) => {
  return (
    <LinkButton to={`/movie/${movieId}/player`}>
      <PlayIcon />
      <span>Play</span>
    </LinkButton>
  )
}
