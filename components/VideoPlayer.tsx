'use client'

import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <video
        ref={videoRef}
        className="w-full rounded-lg shadow-lg"
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        poster="/placeholder.svg?height=400&width=800"
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
        <Button variant="secondary" size="icon" onClick={togglePlay}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button variant="secondary" size="icon" onClick={toggleMute}>
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>
    </div>
  )
}
