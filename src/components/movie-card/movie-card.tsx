import React, { useState } from 'react'

import {
  MovieCardWrapper,
  MovieCardImageContainer,
  MovieCardTitle,
  MovieCardLink
} from './movie-card-styles'
import { IMovie } from '../../mocks'
import { VideoPlayer } from '../video-player'

interface MovieCardProps {
  movie: IMovie
}

export const MovieCard = ({
  movie: { previewImage: imageUrl, title, previewVideo }
}: MovieCardProps) => {
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
          posterImage={imageUrl}
          videoUrl={previewVideo}
          isVideoPlaying={isVideoPlayerActive}
          width="280"
          height="175"
        />
      </MovieCardImageContainer>
      {!isVideoPlayerActive && (
        <MovieCardTitle>
          <MovieCardLink href="movie-page.html">{title}</MovieCardLink>
        </MovieCardTitle>
      )}
    </MovieCardWrapper>
  )
}
