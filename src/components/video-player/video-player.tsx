import React, { useEffect, useRef } from 'react'

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
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef && videoRef.current

    if (video && isVideoPlaying) {
      video.src = videoUrl
      video.play()
    }

    return () => {
      if (video) {
        video.pause()
        video.src = ''
      }
    }
  }, [isVideoPlaying, videoUrl])

  return <video muted ref={videoRef} poster={posterImage} width={width} height={height} />
}
