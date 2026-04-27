import Ornament from './Ornament'

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-14 px-5 text-center bg-[#111109] border-t border-gold/[0.07]"
      data-aos="fade-up"
      data-aos-duration="700"
    >


      <div class="flex items-center justify-center gap-3 my-6">
        <div class="w-12 h-[0.5px] bg-yellow-400/70"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart text-yellow-400 opacity-50"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        <div class="w-12 h-[0.5px] bg-yellow-400/70"></div>
      </div>


      <p className="font-cormorant italic text-[28px] gold-text">Arjun &amp; Dharani</p>
      <p className="font-cinzel text-[9px] tracking-[5px] text-gold/40 mt-3 uppercase">
        June/23/2031 · India
      </p>
      <p className="font-garamond italic text-[14px] text-[#8a7d65] mt-4 max-w-xs mx-auto">
        We cannot wait to celebrate with you 💛
      </p>


      <div class="flex items-center justify-center gap-3 my-6">
        <div class="w-12 h-[0.5px] bg-yellow-400/70"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart text-yellow-400 opacity-50"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        <div class="w-12 h-[0.5px] bg-yellow-400/70"></div>
      </div>

      <p className="font-cinzel text-[8px] tracking-[3px] text-[#8a7d65] mt-2">
        Made with love ✦
      </p>
    </footer>
  )
}
