import React from 'react'

import { useVideo } from '../../hooks'

interface VideoPlayerProps {
  posterImage: string
  videoUrl: string
  isVideoPlaying: boolean
  width: string
  height: string
}

export const VideoPlayer = ({
  posterImage,
  videoUrl,
  isVideoPlaying,
  width,
  height
}: VideoPlayerProps) => {
  const videoRef = useVideo(isVideoPlaying, videoUrl)

  return <video muted ref={videoRef} poster={posterImage} width={width} height={height} />
}
