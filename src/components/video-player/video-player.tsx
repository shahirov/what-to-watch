import React, { useRef, useEffect } from 'react'

interface VideoPlayerProps {
  posterImage: string
  videoUrl: string
  isPlaying: boolean
  width: string
  height: string
}

export const VideoPlayer = ({
  posterImage,
  videoUrl,
  isPlaying,
  width,
  height
}: VideoPlayerProps) => {
  const videoPlayerRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoPlayerRef && videoPlayerRef.current

    if (video && isPlaying) {
      video.play()
    } else {
      video?.load()
    }
  }, [isPlaying])

  return (
    <video
      ref={videoPlayerRef}
      poster={posterImage}
      width={width}
      height={height}
      preload="none"
      muted
    >
      <source src={videoUrl} />
    </video>
  )
}
