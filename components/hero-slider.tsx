"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from "lucide-react"

interface VideoSlide {
  id: number
  title: string
  description: string
  videoUrl: string
  posterUrl: string
}

const videoSlides: VideoSlide[] = [
  {
    id: 1,
    title: "Epic Adventure",
    description: "A thrilling journey through uncharted territories",
    videoUrl: "https://raw.githubusercontent.com/taskgrid-tech/microtech/main/nik.mp4",
    posterUrl: "/placeholder.jpg?height=720&width=1280&query=epic adventure movie poster",
  },
  {
    id: 2,
    title: "Romantic Drama",
    description: "A heartwarming story of love and redemption",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    posterUrl: "/placeholder.jpg?height=720&width=1280&query=romantic drama movie poster",
  },
  {
    id: 3,
    title: "Action Thriller",
    description: "High-octane action with stunning cinematography",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    posterUrl: "/placeholder.jpg?height=720&width=1280&query=action thriller movie poster",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoReady = async () => {
      try {
        video.muted = isMuted
        video.volume = 1
        if (isPlaying) {
          // Wait for video to be ready before playing
          await video.play()
        } else {
          video.pause()
        }
      } catch (error) {
        console.log("[v0] Video play interrupted:", error)
        // Silently handle the error as it's expected during slide transitions
      }
    }

    // Add a small delay to ensure video element is properly mounted
    const timeoutId = setTimeout(handleVideoReady, 100)

    return () => {
      clearTimeout(timeoutId)
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    }
  }, [currentSlide, isMuted])

  // Separate effect for handling play/pause state changes
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handlePlayStateChange = async () => {
      try {
        if (isPlaying) {
          console.log("useEffect: Starting video playback")
          await video.play()
        } else {
          console.log("useEffect: Pausing video playback")
          video.pause()
        }
      } catch (error) {
        console.log("useEffect: Play/pause error:", error)
      }
    }

    handlePlayStateChange()
  }, [isPlaying])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSlides.length)
    }, 15000)

    return () => clearInterval(interval)
  }, [])

  const togglePlay = () => {
    console.log("togglePlay called, current isPlaying:", isPlaying)
    console.log("Setting isPlaying to:", !isPlaying)
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    console.log("toggleMute called, current isMuted:", isMuted)
    const video = videoRef.current
    if (!video) {
      console.log("No video ref found")
      return
    }
    
    const newMutedState = !isMuted
    console.log("Setting muted to:", newMutedState)
    video.muted = newMutedState
    setIsMuted(newMutedState)
  }

  const goToSlide = (index: number) => {
    console.log("goToSlide called with index:", index)
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    console.log("goToPrevious called")
    setCurrentSlide((prev) => (prev - 1 + videoSlides.length) % videoSlides.length)
  }

  const goToNext = () => {
    console.log("goToNext called")
    setCurrentSlide((prev) => (prev + 1) % videoSlides.length)
  }

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          key={videoSlides[currentSlide].id}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
          poster={videoSlides[currentSlide].posterUrl}
          preload="metadata"
        >
          <source src={videoSlides[currentSlide].videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Bottom gradient for better text readability */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end">
        <div className="w-full px-8 sm:px-12 lg:px-16 pb-20 text-white">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in-up leading-tight">
              {videoSlides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in-up animate-delay-200 font-serif text-gray-200 leading-relaxed">
              {videoSlides[currentSlide].description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-400">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3">
                View Our Films
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-foreground bg-transparent font-semibold px-8 py-3"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-50">
        <Button
          size="sm"
          variant="secondary"
          onClick={togglePlay}
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 relative z-50 cursor-pointer"
          style={{ pointerEvents: 'auto' }}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={toggleMute}
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 relative z-50 cursor-pointer"
          style={{ pointerEvents: 'auto' }}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </Button>
      </div>

      {/* Navigation Arrows */}
      <Button
        size="sm"
        variant="secondary"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 cursor-pointer"
        style={{ pointerEvents: 'auto' }}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20 cursor-pointer"
        style={{ pointerEvents: 'auto' }}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-50" style={{ pointerEvents: 'auto' }}>
        {videoSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? "bg-primary scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            style={{ pointerEvents: 'auto' }}
          />
        ))}
      </div>
    </section>
  )
}
