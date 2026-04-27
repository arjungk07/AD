import Ornament from './Ornament'

const events = [
  { event: 'Guest Arrival', time: 'Jun 23, 2026 · 4:00 PM' },
  { event: 'Wedding Ceremony', time: 'Jun 23, 2026 · 5:00 PM' },
  { event: 'Cocktail Hour', time: 'Jun 23, 2026 · 6:30 PM' },
  { event: 'Dinner Reception', time: 'Jun 23, 2026 · 7:00 PM' },
  { event: 'Dance & Celebration', time: 'Jun 23, 2026 · 9:00 PM' },
]

export default function Timeline() {
  return (
    <section
      className="relative z-10 py-20 px-5 text-center bg-[#0a0a08]"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock mx-auto text-gold-7 mb-3"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      <h2 className="passions italic text-4xl md:text-5xl gold-text mb-2">
        Program Timeline
      </h2>

      {/* heart symbol */}
      <div class="flex items-center justify-center gap-3 my-6">
        <div class="w-16 h-[0.5px] bg-yellow-400/70"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart text-yellow-400 opacity-50"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        <div class="w-16 h-[0.5px] bg-yellow-400/70"></div>
      </div>

      <div className="mt-10 max-w-md mx-auto flex flex-col">
        {events.map((e, i) => (
          <div
            key={i}
            className="flex justify-center md:justify-start gap-4 py-6 border-b border-gold/[0.08] last:border-0"
            data-aos="fade-right"
            data-aos-delay={i * 100}
            data-aos-duration="700"
          >
            {/* Timeline line + dot */}
            <div className="flex flex-col items-center">
              <div className="w-3 h-3 rounded-full bg-[#d4af37] shadow-[0_0_8px_rgba(212,175,55,0.6)]" />
              {i !== events.length - 1 && (
                <div className="w-[1px] flex-1 bg-[#d4af37]/40 mt-2" />
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <p className="font-cormorant text-[20px] font-medium text-[#e8dcc8]">
                {e.event}
              </p>
              <p className="font-cinzel text-[10px] tracking-[3px] text-[#d4af37]/70 mt-1">
                {e.time}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}
