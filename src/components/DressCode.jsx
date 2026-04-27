import Ornament from './Ornament'

const codes = [
    {
        gender: 'Women',
        desc: 'Elegant formal attire in pastel or jewel tones',
        icon: '👗',
    },
    {
        gender: 'Men',
        desc: 'Suit or traditional formal wear',
        icon: '🤵',
    },
]

export default function DressCode() {
    return (
        <section
            className="relative z-10 py-20 px-5 text-center bg-[#0a0a08]"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shirt mx-auto text-primary mb-3"><path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></svg>
           
          <h2 className="passions italic text-4xl md:text-5xl gold-text mb-2">
       Dress Code
      </h2>
      
      <div class="flex items-center justify-center gap-3 my-6">
        <div class="w-16 h-[0.5px] bg-yellow-400/70"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart text-yellow-400 opacity-50"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        <div class="w-16 h-[0.5px] bg-yellow-400/70"></div>
      </div>

            <div
                className="mt-8 flex flex-col sm:flex-row justify-center gap-10 max-w-lg mx-auto"
            >
                {codes.map((c, i) => (
                    <div
                        key={i}
                        className="flex-1 text-center"
                        data-aos="fade-up"
                        data-aos-delay={i * 150}
                        data-aos-duration="700"
                    >
                        <p className="passions text-4xl md:text-5xl tracking-[3px] text-gold font-semibold mb-3">
                            {c.gender}
                        </p>
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent mx-auto mb-3" />
                        <p className="font-garamond italic text-[16px] text-[#8a7d65] leading-relaxed max-w-[180px] mx-auto">
                            {c.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}