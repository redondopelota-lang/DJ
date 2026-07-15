import { useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume2 } from 'lucide-react'

const AUDIO_PREFERENCE_KEY = 'alvaro-redon-audio-preference'

type BackgroundAudioProps = {
  src: string
  title: string
}

export function BackgroundAudio({ src, title }: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [needsGesture, setNeedsGesture] = useState(false)

  const persistPreference = (value: 'on' | 'off') => {
    window.localStorage.setItem(AUDIO_PREFERENCE_KEY, value)
  }

  const playAudio = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      await audio.play()
      setIsPlaying(true)
      setNeedsGesture(false)
      persistPreference('on')
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
    setNeedsGesture(false)
    persistPreference('off')
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
    audio.volume = 0.42
    audioRef.current = audio

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    const storedPreference = window.localStorage.getItem(AUDIO_PREFERENCE_KEY)
    if (storedPreference !== 'off') {
      void playAudio()
    }

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
        <strong>{isPlaying ? 'Pausar música' : needsGesture ? 'Activar música' : 'Reproducir música'}</strong>
        <small>
          <Volume2 size={13} />
          {title}
        </small>
      </span>
    </button>
  )
}
