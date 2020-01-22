import React, { useState } from 'react'

import {
  MovieCardWrapper,
  MovieCardImageContainer,
  MovieCardTitle,
  MovieCardLink
} from './movie-card-styles'
import { VideoPlayer } from '../video-player'
import { Movie } from '../../features/movies/slice'

interface MovieCardProps {
  movie: Movie
}

export const MovieCard = ({ movie: { name, previewImage, previewVideoLink } }: MovieCardProps) => {
  const [isVideoPlayerActive, setVideoPlayerActive] = useState<boolean>(false)

  const videoPlayDelay = 1000
  let delayTimer: number | null = null

  const activateVideoPlayer = () => {
    delayTimer = setTimeout(() => setVideoPlayerActive(true), videoPlayDelay)
  }

  const deactivateVideoPlayer = () => {
    if (delayTimer) {
      clearTimeout(delayTimer)
      delayTimer = null
    }
    setVideoPlayerActive(false)
  }

  return (
    <MovieCardWrapper onMouseEnter={activateVideoPlayer} onMouseLeave={deactivateVideoPlayer}>
      <MovieCardImageContainer>
        <VideoPlayer
          posterImage={previewImage}
          videoUrl={previewVideoLink}
          isVideoPlaying={isVideoPlayerActive}
          width="280"
          height="175"
        />
      </MovieCardImageContainer>
      {!isVideoPlayerActive && (
        <MovieCardTitle>
          <MovieCardLink href="movie-page.html">{name}</MovieCardLink>
        </MovieCardTitle>
      )}
    </MovieCardWrapper>
  )
}
