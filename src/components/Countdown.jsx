import { useState, useEffect } from 'react'
import Ornament from './Ornament'

const WEDDING = new Date('2031-06-23T17:00:00')

function pad(n) { return String(n).padStart(2, '0') }

function getTime() {
  const diff = WEDDING - new Date()
  if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 }
  return {
    days: Math.floor(diff / 864e5),
    hours: Math.floor((diff % 864e5) / 36e5),
    mins: Math.floor((diff % 36e5) / 6e4),
    secs: Math.floor((diff % 6e4) / 1e3),
  }
}

function Box({ value, label, delay }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        bg-gradient-to-br from-gold/[0.07] to-gold/[0.02]
        border border-gold/20 rounded-lg px-6 py-5 min-w-[90px]
        animate-borderGlow animate-glow
      "
      style={{ animationDelay: delay }}
      data-aos="zoom-in"
      data-aos-delay={parseInt(delay) * 1000}
    >
      <span className="font-garamond text-[40px] leading-none text-gold-8 min-w-[60px] text-center tabular-nums">
        {pad(value)}
      </span>
      <span className="font-cinzel text-[9px] tracking-[4px] text-[#8a7d65] mt-2 uppercase">
        {label}
      </span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(getTime())

  useEffect(() => {
    const id = setInterval(() => setTime(getTime()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative z-10 py-20 px-5 text-center bg-[#111109]"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <h2 className="passions italic text-4xl md:text-5xl gold-text mb-2">
        Counting Down to Forever
      </h2>
      
      <div class="flex items-center justify-center gap-3 my-6">
        <div class="w-16 h-[0.5px] bg-yellow-400/70"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart text-yellow-400 opacity-50"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        <div class="w-16 h-[0.5px] bg-yellow-400/70"></div>
      </div>

      <div className="grid grid-cols-2 md:flex gap-5 justify-center mt-8">
        <Box value={time.days} label="Days" delay="0s" />
        <Box value={time.hours} label="Hours" delay="0.1s" />
        <Box value={time.mins} label="Minutes" delay="0.2s" />
        <Box value={time.secs} label="Seconds" delay="0.3s" />
      </div>
    </section>
  )
}
