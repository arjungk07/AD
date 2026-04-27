import Ornament from './Ornament'

const events = [
  { name: 'Mehendi', time: 'Jun 13, 2026 · 3:00 PM', place: "at Bride's Home" },
  { name: 'Haldi', time: 'Jun 14, 2026 · 10:00 AM', place: "at Groom's Home" },
  { name: 'Sangeet', time: 'Jun 14, 2026 · 7:00 PM', place: 'at Grand Palace Hall' },
]

export default function PreWedding() {
  return (
    <>
     

    {/* // transportation section */}

      <section class="py-16 md:py-20 px-6 relative overflow-hidden opacity-1" >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-car mx-auto text-gold-7 mb-3"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
        <h2 class="passions text-5xl md:text-6xl text-gold-7 mb-2 text-center">Transportation</h2>
        <div class="flex items-center justify-center gap-3 my-6">
          <div class="w-16 h-[0.5px] bg-gold-7"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart text-gold-7 opacity-50"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
          <div class="w-16 h-[0.5px] bg-gold-7"></div>
        </div>
        <div class="max-w-md mx-auto text-center">
          <p class="text-muted-foreground whitespace-pre-line leading-relaxed">Shuttle service will be available from the city center to the venue. Pickup point: Central Station at 3:30 PM.</p>
        </div>
      </section>

       <section
        className="relative z-10 py-20 px-5 text-center bg-[#0a0a08]"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-party-popper mx-auto text-gold-7 mb-3"><path d="M5.8 11.3 2 22l10.7-3.79"></path><path d="M4 3h.01"></path><path d="M22 8h.01"></path><path d="M15 2h.01"></path><path d="M22 20h.01"></path><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"></path><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"></path><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"></path><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"></path></svg>
        <h2 className="passions italic text-5xl md:text-6xl text-gold-7 mb-2">
          Prewedding Events
        </h2>

        <div class="flex items-center justify-center gap-3 my-6">
          <div class="w-16 h-[0.5px] bg-yellow-400/70"></div>
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart text-yellow-400 opacity-50"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
          <div class="w-16 h-[0.5px] bg-yellow-400/70"></div>
        </div>

        <div className="mt-10 max-w-sm mx-auto flex flex-col gap-5">
          {events.map((e, i) => (
            <div
              key={i}
              className="
              bg-gradient-to-br from-gold/[0.06] to-gold/[0.02]
              border border-gold/[0.15] rounded-xl px-7 py-6 text-center
              animate-borderGlow transition-all duration-300
              hover:border-gold/40 hover:shadow-[0_0_30px_rgba(255,183,0,0.12)]
            "
              style={{ animationDelay: `${i * 0.5}s` }}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              data-aos-duration="700"
            >
              <p className="font-cormorant text-[26px] font-medium text-gold-8">{e.name}</p>
              <p className="font-cinzel text-[10px] tracking-[3px] text-gold/70 mt-2">{e.time}</p>
              <p className="font-garamond italic text-[15px] text-[#8a7d65] mt-1">{e.place}</p>
            </div>
          ))}
        </div>
      </section>

    </>
  )
}
