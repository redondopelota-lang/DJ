import { useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume2 } from 'lucide-react'

type BackgroundAudioProps = {
  src: string
}

export function BackgroundAudio({ src }: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [needsGesture, setNeedsGesture] = useState(false)

  const playAudio = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      await audio.play()
      setIsPlaying(true)
      setNeedsGesture(false)
    } catch {
      setIsPlaying(false)
      setNeedsGesture(true)
    }
  }

  const pauseAudio = () => {
    const audio = audioRef.current
    if (!audio) return

    audio.pause()
    setIsPlaying(false)
    setNeedsGesture(true)
  }

  const toggleAudio = () => {
    if (isPlaying) {
      pauseAudio()
      return
    }

    void playAudio()
  }

  useEffect(() => {
    const audio = new Audio(src)
    audio.preload = 'auto'
    audio.loop = true
    audio.volume = 0.3
    audioRef.current = audio

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    void playAudio()

    return () => {
      audio.pause()
      audio.currentTime = 0
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audioRef.current = null
    }
  }, [src])

  return (
    <button
      type="button"
      className={isPlaying ? 'background-audio is-playing' : 'background-audio'}
      onClick={toggleAudio}
      aria-pressed={isPlaying}
      aria-label={isPlaying ? 'Pausar música de fondo' : 'Activar música de fondo'}
    >
      <span className="background-audio__icon">
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
      </span>
      <span className="background-audio__copy">
        <strong>{isPlaying ? 'Pausar música' : needsGesture ? 'Activar música' : 'Música activa'}</strong>
        <small>
          <Volume2 size={13} />
          Sonido web
        </small>
      </span>
    </button>
  )
}
