import Ornament from './Ornament'

export default function InviteText() {
  return (
    <section className="relative z-10 py-20 px-5 text-center  border-y border-gold/[0.07]">
      <svg viewBox="0 0 400 60" className="w-full h-14 text-gold mb-8" fill="none">
        <path
          d="M0 30 
       Q100 0 200 30 
       T400 30"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.4"
        />

        <path
          d="M0 30 
       Q100 10 200 30 
       T400 30"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.2"
        />

        {/* Center jewel */}
        <circle cx="200" cy="30" r="3" fill="currentColor" opacity="0.6" />
      </svg>

      <p
        className="font-cormorant italic text-[clamp(17px,3vw,21px)] text-[#8a7d65] max-w-lg mx-auto leading-[1.9]"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        With hearts full of love and joy, we warmly invite you to share in the
        celebration of our union. Your presence would mean the world to us as we
        begin this beautiful journey together.
      </p>
      <svg viewBox="0 0 400 60" className="w-full h-14 text-gold mb-8" fill="none">
        <path
          d="M0 30 
       Q100 0 200 30 
       T400 30"
          stroke="currentColor"
          strokeWidth="1.2"
          opacity="0.4"
        />

        <path
          d="M0 30 
       Q100 10 200 30 
       T400 30"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.2"
        />

        {/* Center jewel */}
        <circle cx="200" cy="30" r="3" fill="currentColor" opacity="0.6" />
      </svg>   
       </section>
  )
}
