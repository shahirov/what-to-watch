import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import {
  SmallMovieCardWrapper,
  MovieCardImageContainer,
  MovieCardTitle,
  MovieCardText
} from './small-movie-card-styles'
import { VideoPlayer } from '../video-player'
import { Movie } from '../../features/movies/slice'
import { VIDEO_PLAY_DELAY_TIME } from '../../global/constants'

interface MovieCardProps {
  movie: Movie
}

export const SmallMovieCard = ({
  movie: { name, previewImage, previewVideoLink, id }
}: MovieCardProps) => {
  const history = useHistory()
  const [isVideoPlayerActive, setVideoPlayerActive] = useState<boolean>(false)
  const videoPlayerTimer = useRef<number | undefined>()

  useEffect(() => {
    return () => clearTimeout(videoPlayerTimer.current)
  }, [])

  const activateVideoPlayer = () => {
    videoPlayerTimer.current = setTimeout(() => setVideoPlayerActive(true), VIDEO_PLAY_DELAY_TIME)
  }

  const deactivateVideoPlayer = () => {
    clearTimeout(videoPlayerTimer.current)
    setVideoPlayerActive(false)
  }

  const goToMovieDetailsPage = () => {
    history.push(`/movie/${id}`)
  }

  return (
    <SmallMovieCardWrapper
      onMouseEnter={activateVideoPlayer}
      onMouseLeave={deactivateVideoPlayer}
      onClick={goToMovieDetailsPage}
    >
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
          <MovieCardText>{name}</MovieCardText>
        </MovieCardTitle>
      )}
    </SmallMovieCardWrapper>
  )
}
