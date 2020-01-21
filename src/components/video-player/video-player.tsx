import React, { useRef, useEffect } from 'react'

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
  const videoPlayerRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    let isPlayed = false
    const videoPlayer = !isPlayed && videoPlayerRef.current

    if (videoPlayer && isVideoPlaying) {
      videoPlayer.src = videoUrl
      videoPlayer.play()
      isPlayed = true
    }

    return () => {
      if (videoPlayer && isPlayed) {
        videoPlayer.pause()
        videoPlayer.src = ''
      }
    }
  }, [isVideoPlaying, videoUrl])

  return <video ref={videoPlayerRef} poster={posterImage} width={width} height={height} muted />
}
