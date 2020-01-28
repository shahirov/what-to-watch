import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import {
  SmallMovieCardWrapper,
  MovieCardImageContainer,
  MovieCardTitle,
  MovieCardLink
} from './small-movie-card-styles'
import { VideoPlayer } from '../video-player'
import { Movie } from '../../features/movies/slice'

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
    videoPlayerTimer.current = setTimeout(() => setVideoPlayerActive(true), 1000)
  }

  const deactivateVideoPlayer = () => {
    clearTimeout(videoPlayerTimer.current)
    setVideoPlayerActive(false)
  }

  const goToMovieOverviewPage = () => {
    history.push(`/movie/${id}`)
  }

  return (
    <SmallMovieCardWrapper
      onMouseEnter={activateVideoPlayer}
      onMouseLeave={deactivateVideoPlayer}
      onClick={goToMovieOverviewPage}
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
          <MovieCardLink to={`/movie/${id}`}>{name}</MovieCardLink>
        </MovieCardTitle>
      )}
    </SmallMovieCardWrapper>
  )
}
