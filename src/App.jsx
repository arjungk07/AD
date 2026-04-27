import { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

// Components
import MusicToggle from './components/MusicToggle'
import Hero from './components/Hero'
import InviteText from './components/InviteText'
import ScratchReveal from './components/ScratchReveal'
import Countdown from './components/Countdown'
import Timeline from './components/Timeline'
import Venue from './components/Venue'
import PreWedding from './components/PreWedding'
import Footer from './components/Footer'
import DressCode from './components/Dresscode'
import ContactForm from './components/ContactForm'
import WeddingInvitation from './components/WeddingInvitation'

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
      offset: 80,
    })
  }, [])

  // Trigger celebration and AOS refresh when opened
  const handleMasterOpen = () => {
    setIsOpen(true);
    
    // 1. Initial Celebration Burst
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#ffffff', '#c5a059']
    });

    // 2. Refresh AOS so animations trigger as user scrolls revealed content
    setTimeout(() => {
      AOS.refresh();
    }, 1000);
  };

  return (
    <div className={`relative min-h-screen bg-[#0a0a08] text-[#e8dcc8] ${!isOpen ? 'h-screen overflow-hidden' : ''}`}>
      
      {/* 1. MASTER REVEAL OVERLAY (Curtains & Shimmer Button) */}
      <WeddingInvitation isOpen={isOpen} onOpen={handleMasterOpen} />

      {/* 2. REVEALED CONTENT */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            {/* Music toggle only functional/visible after opening */}
            <MusicToggle />

            <main>
              <section data-aos="fade-up"><Hero /></section>
              <section data-aos="fade-up"><InviteText /></section>
              <section data-aos="fade-up"><ScratchReveal /></section>
              <section data-aos="fade-up"><Countdown /></section>
              <section data-aos="fade-up"><Timeline /></section>
              <section data-aos="fade-up"><Venue /></section>
              <section data-aos="fade-up"><DressCode /></section>
              <section data-aos="fade-up"><PreWedding /></section>
              <section data-aos="fade-up"><ContactForm /></section>
              <Footer />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}