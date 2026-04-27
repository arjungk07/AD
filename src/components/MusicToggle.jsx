import { useState, useRef, useEffect } from 'react'
import { FiMusic, FiPause } from 'react-icons/fi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const MUSIC_URL = './dist/assets/yedhedho-pennae.mp3'

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(false)
  const [userStopped, setUserStopped] = useState(false) // New state to track manual pause
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = new Audio(MUSIC_URL)
    audio.loop = true
    audio.volume = 0.35
    audioRef.current = audio

    const attemptPlay = async () => {
      // If the user manually clicked stop, don't try to auto-start
      if (userStopped) return 

      try {
        await audio.play()
        setPlaying(true)
        removeListeners()
      } catch (err) {
        // Autoplay blocked by browser, wait for interaction
        console.log("Waiting for user interaction to play music...")
      }
    }

    const handleInteraction = () => {
      attemptPlay()
    }

    const removeListeners = () => {
      window.removeEventListener('click', handleInteraction)
      window.removeEventListener('touchstart', handleInteraction)
      window.removeEventListener('scroll', handleInteraction)
      window.removeEventListener('keydown', handleInteraction)
    }

    // 1. Try to play immediately on mount (refresh/start)
    attemptPlay()

    // 2. Setup listeners for the very first interaction
    window.addEventListener('click', handleInteraction)
    window.addEventListener('touchstart', handleInteraction)
    window.addEventListener('scroll', handleInteraction)
    window.addEventListener('keydown', handleInteraction)

    return () => {
      audio.pause()
      removeListeners()
    }
  }, [userStopped]) // Dependency on userStopped ensures we respect manual pause

  const toggle = async () => {
    const audio = audioRef.current
    if (!audio) return

    if (playing) {
      audio.pause()
      setPlaying(false)
      setUserStopped(true) // Set to true so autoplay doesn't trigger again
    } else {
      setLoading(true)
      try {
        await audio.play()
        setPlaying(true)
        setUserStopped(false) // User wants music again
      } catch (e) {
        console.error('Playback failed:', e)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="fixed top-4 right-8 md:right-44 z-50 flex items-center gap-2">
      {playing && (
        <div className="relative w-6 h-8 pointer-events-none">
          <span className="absolute left-0 top-0 text-[#d4af37] text-sm animate-floatUp">♪</span>
          <span className="absolute left-2 top-2 text-[#c5a059] text-xs animate-floatUp" style={{ animationDelay: '0.7s' }}>♫</span>
        </div>
      )}

      <button
        onClick={toggle}
        className={`
          relative flex items-center justify-center w-10 h-10 rounded-full border
          transition-all duration-300
          ${playing
            ? 'border-[#d4af37] bg-[#d4af37]/10 text-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)]'
            : 'border-[#d4af37]/30 bg-black/80 text-[#d4af37]/60 hover:border-[#d4af37]/60 hover:text-[#d4af37]'
          }
        `}
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin" />
        ) : playing ? (
          <FiPause size={18} />
        ) : (
          <FiMusic size={18} />
        )}
      </button>

      <span className={`hidden sm:block font-serif text-[9px] tracking-[4px] uppercase ${playing ? 'text-[#d4af37]' : 'text-[#d4af37]/40'}`}>
        {playing ? 'Playing' : 'Music'}
      </span>
    </div>
  )
}