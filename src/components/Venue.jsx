import Ornament from './Ornament'

export default function Venue() {
  return (
    <section
      className="relative z-10 py-20 px-5 text-center bg-[#111109]"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <div className="text-4xl mb-4" data-aos="zoom-in" data-aos-delay="100">🏛</div>

      <h2 className="passions italic text-5xl md:text-6xl gold-text mb-2">
        venue
      </h2>

      <div class="flex items-center justify-center gap-3 my-6">
        <div class="w-16 h-[0.5px] bg-yellow-400/70"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart text-yellow-400 opacity-50"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        <div class="w-16 h-[0.5px] bg-yellow-400/70"></div>
      </div>

      <div
        className="mt-4"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="700"
      >
        <p className="font-cormorant text-[clamp(22px,4vw,34px)] font-medium text-[#e8dcc8] mt-4">
          The Grand Palace
        </p>
        <p className=" text-[17px] text-[#8a7d65] mt-2 ">
          JFA LUCKY PALACE A/C    Melur Main Rd<br></br> Muthia Nagar, Uthangudi, Tamil Nadu 625107.
        </p>

        <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-72 min-h-[156px] h-auto text-[#d4af37] opacity-20 mb-4 mx-auto"><rect x="100" y="250" width="600" height="10" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"></rect><path d="M350 250 V160 Q350 80 400 60 Q450 80 450 160 V250" stroke="currentColor" stroke-width="1.5" fill="none"></path><circle cx="400" cy="55" r="4" stroke="currentColor" stroke-width="1.5" fill="none"></circle><rect x="150" y="180" width="200" height="70" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"></rect><path d="M200 180 V140 Q200 110 250 100 Q300 110 300 140 V180" stroke="currentColor" stroke-width="1.5" fill="none"></path><circle cx="250" cy="96" r="3" stroke="currentColor" stroke-width="1.5" fill="none"></circle><rect x="450" y="180" width="200" height="70" rx="2" stroke="currentColor" stroke-width="1.5" fill="none"></rect><path d="M500 180 V140 Q500 110 550 100 Q600 110 600 140 V180" stroke="currentColor" stroke-width="1.5" fill="none"></path><circle cx="550" cy="96" r="3" stroke="currentColor" stroke-width="1.5" fill="none"></circle><rect x="130" y="150" width="20" height="100" stroke="currentColor" stroke-width="1.5" fill="none"></rect><path d="M125 150 L140 120 L155 150" stroke="currentColor" stroke-width="1.5" fill="none"></path><rect x="650" y="150" width="20" height="100" stroke="currentColor" stroke-width="1.5" fill="none"></rect><path d="M645 150 L660 120 L675 150" stroke="currentColor" stroke-width="1.5" fill="none"></path><rect x="375" y="180" width="20" height="30" rx="10" stroke="currentColor" stroke-width="1" fill="none"></rect><rect x="405" y="180" width="20" height="30" rx="10" stroke="currentColor" stroke-width="1" fill="none"></rect><path d="M180 250 V220 Q180 200 210 200 Q240 200 240 220 V250" stroke="currentColor" stroke-width="1" fill="none"></path><path d="M270 250 V220 Q270 200 300 200 Q330 200 330 220 V250" stroke="currentColor" stroke-width="1" fill="none"></path><path d="M470 250 V220 Q470 200 500 200 Q530 200 530 220 V250" stroke="currentColor" stroke-width="1" fill="none"></path><path d="M560 250 V220 Q560 200 590 200 Q620 200 620 220 V250" stroke="currentColor" stroke-width="1" fill="none"></path><path d="M375 250 V210 Q375 185 400 180 Q425 185 425 210 V250" stroke="currentColor" stroke-width="1.5" fill="none"></path><circle cx="150" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="200" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="250" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="300" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="350" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="400" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="450" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="500" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="550" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="600" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle><circle cx="650" cy="265" r="1.5" fill="currentColor" opacity="0.4"></circle></svg>


        <a
          href="https://www.google.com/maps/place/JFA+LUCKY+PALACE+A%2FC+MARRIAGE+HALL/@9.9512366,78.1663836,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00c55f3671f157:0xaded1ba77a5b97fa!8m2!3d9.9512366!4d78.1712545!16s%2Fg%2F11s98cv4zn?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="gold-btn mt-8 inline-block"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          View on Google Maps
        </a>
      </div>
    </section>
  )
}
