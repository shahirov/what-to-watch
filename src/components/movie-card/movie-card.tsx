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
  const [isVideoPlayerActive, setVideoPlayerActivation] = useState<boolean>(false)

  let timer: number | null = null

  const activateVideoPlayer = () => {
    timer = setTimeout(() => setVideoPlayerActivation(true), 1000)
  }

  const deactivateVideoPlayer = () => {
    if (timer) {
      clearTimeout(timer)
    }
    setVideoPlayerActivation(false)
  }

  return (
    <MovieCardWrapper onMouseEnter={activateVideoPlayer} onMouseLeave={deactivateVideoPlayer}>
      <MovieCardImageContainer>
        <VideoPlayer
          posterImage={imageUrl}
          videoUrl={previewVideo}
          isPlaying={isVideoPlayerActive}
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
