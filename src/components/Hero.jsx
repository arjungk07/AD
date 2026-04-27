import Ornament from './Ornament'

function Corner({ className }) {
  return (
    <svg
      className={`absolute w-24 h-24 opacity-30 pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path d="M10 90 A80 80 0 0 1 90 10" stroke="#d4af37" strokeWidth="1.2" />
      <path d="M20 90 A70 70 0 0 1 90 20" stroke="#d4af37" strokeWidth="0.6" opacity="0.6" />

      <line x1="10" y1="90" x2="40" y2="70" stroke="#d4af37" strokeWidth="0.7" />
      <line x1="10" y1="90" x2="30" y2="60" stroke="#d4af37" strokeWidth="0.5" />

      <circle cx="40" cy="70" r="2" fill="#d4af37" opacity="0.7" />
      <circle cx="30" cy="60" r="1.5" fill="#d4af37" opacity="0.6" />
      <circle cx="10" cy="90" r="3" fill="#d4af37" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      className="
        relative min-h-screen flex flex-col items-center justify-center
        text-center px-5 py-20
        bg-[radial-gradient(ellipse_at_50%_30%,#1a1500_0%,transparent_70%)]
        will-change-transform
      "
    >
      {/* TOP DIVIDER */}
      <div className="relative bottom-10  w-64 md:w-80">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#862d2d]" />
          <div className="w-2 h-2 rotate-45 bg-[#bf9540]" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#862d2d]" />
        </div>
      </div>
      
      {/* ✅ LIGHTWEIGHT GLOW (NO LAG) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-64 h-64 rounded-full bg-[#d4af37]/10 blur-xl -top-20 -left-20 animate-slowGlow" />
        <div className="absolute w-64 h-64 rounded-full bg-[#d4af37]/10 blur-xl -bottom-20 -right-20 animate-slowGlow delay-1000" />
      </div>

      {/* CORNERS */}
      {/* Top Left */}
      <Corner className="hidden md:block absolute md:top-6 md:left-6" />

      {/* Top Right */}
      <Corner className="hidden md:block absolute md:top-6 md:right-6 rotate-90" />

      {/* Bottom Right */}
      <Corner className="hidden md:block absolute md:bottom-6 md:right-6 rotate-180" />

      {/* Bottom Left */}
      <Corner className="hidden md:block absolute md:bottom-6 md:left-6 -rotate-90" />

      

      {/* LABEL */}
      <p className="font-cinzel text-[9px] tracking-[6px] text-gold/70 uppercase mb-5 animate-fadeUp">
        Royal Invite · Wedding
      </p>

      {/* NAMES */}
      <div className="font-cormorant font-light leading-none animate-fadeUp">
        <span className="block text-5xl text-[#e8dcc8]">
          G K Arjun
        </span>

        <span className="block italic text-[clamp(20px,4vw,36px)] tracking-[8px] text-gold/80 my-2">
          &
        </span>

        <span className="block text-5xl text-[#e8dcc8]">
          S A Dharani
        </span>
      </div>

      <Ornament />

      {/* DATE */}
      <p className="font-cinzel text-[11px] tracking-[5px] text-gold/60 mt-2">
        soon
      </p>

      {/* TAGLINE */}
      <p className="font-cormorant italic text-[18px] text-[#8a7d65] max-w-sm mt-5 leading-relaxed">
        Together forever, as one — beginning the greatest journey of our lives.
      </p>

      {/* BOTTOM DIVIDER */}
      <div className="relative w-64 top-5 md:w-80 my-5">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#862d2d]" />
          <div className="w-2 h-2 rotate-45 bg-[#bf9540]" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#862d2d]" />
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2">
        <span className="text-[8px] tracking-[5px] text-gold uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold to-transparent animate-pulse" />
      </div>
    </section>
  )
}
