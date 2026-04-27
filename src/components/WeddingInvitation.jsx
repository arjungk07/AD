import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WeddingInvitation({ isOpen, onOpen }) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <div className="fixed inset-0 z-[100] flex overflow-hidden">
          {/* --- LEFT CURTAIN --- */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
            className="w-1/2 h-full relative z-10 border-r border-[#d4af37]/10"
            style={{ 
              background: 'linear-gradient(135deg, #141414 0%, #1f1f1f 50%, #0f0f0f 100%)' 
            }}
          >
            {/* Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' stroke='%23c9a355' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")` }} 
            />
          </motion.div>

          {/* --- RIGHT CURTAIN --- */}
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 1.5, ease: [0.45, 0, 0.55, 1] }}
            className="w-1/2 h-full relative z-10 border-l border-[#d4af37]/10"
            style={{ 
              background: 'linear-gradient(225deg, #141414 0%, #1f1f1f 50%, #0f0f0f 100%)' 
            }}
          >
            <div 
              className="absolute inset-0 opacity-[0.03]" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' stroke='%23c9a355' stroke-width='0.3' fill='none'/%3E%3C/svg%3E")` }} 
            />
          </motion.div>

          {/* --- CENTER SHIMMER BUTTON (WAX SEAL) --- */}
          <div className="absolute inset-0 flex items-center justify-center z-[110] pointer-events-none">
            <motion.button
              onClick={onOpen}
              initial={{ opacity: 1, scale: 1 }}
              exit={{ 
                scale: 0, 
                opacity: 0,
                transition: { duration: 0.6, ease: "backIn" } 
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                y: { repeat: Infinity, duration: 3, ease: "easeInOut" } 
              }}
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full cursor-pointer pointer-events-auto shadow-2xl"
              style={{
                background: 'radial-gradient(circle at 35% 35%, #333, #1a1a1a)',
                boxShadow: '0 10px 40px rgba(0,0,0,0.7), inset 0 2px 4px rgba(255,255,255,0.1), inset 0 -2px 6px rgba(0,0,0,0.3)'
              }}
            >
              {/* Spinning Shimmer Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, transparent 40%, rgba(212, 172, 97, 0.15) 50%, transparent 60%)'
                }}
              />

              {/* Ornamental Inner Border */}
              <div className="absolute inset-4 border border-[#d4af37]/30 rounded-full" />
              
              {/* Wax Seal Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span 
                  className="text-xl font-bold text-[#d4af37]"
                  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                >
                  A💛D
                </span>
                <span className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase text-[#d4af37] mt-1 font-sans">
                  Tap to Open
                </span>
              </div>
            </motion.button>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}