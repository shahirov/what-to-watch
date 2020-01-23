import { useEffect, useRef } from 'react'

export const useVideo = (isVideoPlaying: boolean, videoUrl: string) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)

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
  }, [isVideoPlaying, videoUrl, videoRef])

  return videoRef
}
