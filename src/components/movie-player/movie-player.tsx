import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import {
  Player,
  PlayerVideo,
  PlayerExit,
  PlayerControls,
  PlayerControlsRow,
  PlayerTime,
  PlayerProgress,
  PlayerToggler,
  PlayerTimeValue,
  PlayerPlay,
  PlayerName,
  PlayerFullScreen
} from './movie-player-styles'
import { RootState } from '../../store'
import { Movie } from '../../features/movies/slice'
import playIconUrl from '../../assets/icons/play.svg'
import pauseIconUrl from '../../assets/icons/pause.svg'
import { selectMovieById } from '../../features/movies/selectors'
import fullScreenIconUrl from '../../assets/icons/full-screen.svg'
import { convertSecsToHrsMinsSecs } from '../../utils/time-convert'

export const MoviePlayer = () => {
  const history = useHistory()
  const { movieId } = useParams<{ movieId: string }>()

  const movie = useSelector<RootState, Movie | undefined>(state => selectMovieById(state, movieId))

  const playerRef = useRef<HTMLVideoElement>(null)

  const [playerStatus, setPlayerStatus] = useState({
    isPlaying: true,
    progress: 0,
    endTime: '0:00:00'
  })

  const timeUpdateHandler = () => {
    if (playerRef && playerRef.current) {
      const player = playerRef.current

      setPlayerStatus(prevState => ({
        ...prevState,
        progress: (player.currentTime / player.duration) * 100,
        endTime: convertSecsToHrsMinsSecs(player.duration - player.currentTime)
      }))
    }
  }

  useEffect(() => {
    const player = playerRef && playerRef.current

    if (player && movie) {
      player.src = movie.videoLink
      player.play().then(_ => {
        player.addEventListener('timeupdate', timeUpdateHandler)
      })
    }

    return () => {
      if (player) {
        player.src = ''
        player.removeEventListener('timeupdate', timeUpdateHandler)
      }
    }
  }, [movie, setPlayerStatus])

  const exitFromMoviePlayer = () => history.goBack()

  const playMovie = () => {
    if (!playerStatus.isPlaying) {
      playerRef.current!.play()
      setPlayerStatus(prevState => ({ ...prevState, isPlaying: true }))
    } else {
      playerRef.current!.pause()
      setPlayerStatus(prevState => ({ ...prevState, isPlaying: false }))
    }
  }

  const turnOnFullScreen = () => {
    if (playerRef && playerRef.current) {
      const player = playerRef.current
      player.requestFullscreen()
    }
  }

  if (!movie) return null

  const { isPlaying, progress, endTime } = playerStatus
  const { posterImage, name } = movie

  return (
    <Player>
      <PlayerVideo ref={playerRef} poster={posterImage} />

      <PlayerExit type="button" onClick={exitFromMoviePlayer}>
        Exit
      </PlayerExit>

      <PlayerControls>
        <PlayerControlsRow>
          <PlayerTime>
            <PlayerProgress value={progress} max="100" />
            <PlayerToggler style={{ left: progress + '%' }}>Toggler</PlayerToggler>
          </PlayerTime>
          <PlayerTimeValue>{endTime}</PlayerTimeValue>
        </PlayerControlsRow>

        <PlayerControlsRow>
          <PlayerPlay type="button" onClick={playMovie}>
            {!isPlaying ? (
              <img src={playIconUrl} alt="Play movie" />
            ) : (
              <img src={pauseIconUrl} alt="Pause movie" />
            )}
            <span>Play</span>
          </PlayerPlay>
          <PlayerName>{name}</PlayerName>

          <PlayerFullScreen type="button" onClick={turnOnFullScreen}>
            <img src={fullScreenIconUrl} alt="Fullscreen" />
            <span>Full screen</span>
          </PlayerFullScreen>
        </PlayerControlsRow>
      </PlayerControls>
    </Player>
  )
}
