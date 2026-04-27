import React, { useState } from 'react';
import { Mail, Heart, Users, ChevronDown, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const [attending, setAttending] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);

      // Auto-hide toast after 3 seconds
      setTimeout(() => setShowToast(false), 3000);

      // Reset form (optional)
      e.target.reset();
      setAttending("");
    }, 1000);
  };

  const CornerOrnament = ({ className }) => (
    <svg viewBox="0 0 100 100" className={`absolute w-16 h-16 text-white opacity-30 ${className}`} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5C5 5 20 10 30 25C40 40 35 55 25 60C15 65 10 55 15 45C20 35 35 30 45 35C55 40 50 55 40 60" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M10 2C10 2 25 8 32 20C39 32 36 42 30 46" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.5" />
      <circle cx="30" cy="25" r="2" fill="currentColor" />
      <circle cx="25" cy="60" r="1.5" fill="currentColor" />
    </svg>
  );

  return (
    <>
      <section className="py-16 md:py-20 px-6 relative overflow-hidden bg-[#0a0a08]">
        {/* --- TOAST MESSAGE --- */}
        <div
          className={`fixed top-10 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${showToast ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0 pointer-events-none"
            }`}
        >
          <div className="bg-[#1a1a15] border border-[#d4af37] px-6 py-3 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.2)] flex items-center gap-3">
            <CheckCircle2 className="text-[#d4af37]" size={20} />
            <span className="text-[#f3e8d2] font-medium text-sm tracking-wide">
              Message sent successfully!
            </span>
          </div>
        </div>

        <CornerOrnament className="bottom-4 left-4 -scale-y-100" />
        <CornerOrnament className="bottom-4 right-4 -scale-x-100 -scale-y-100" />

        <div className="text-center mb-8">
          <Mail className="mx-auto text-[#d4af37] mb-3" size={28} />
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#d4af37] mb-3">
            Send a Message
          </h2>
          <div className="flex items-center justify-center gap-3 my-6">
            <div className="w-16 h-px bg-[#d4af37]/30"></div>
            <Heart size={12} className="text-[#d4af37] opacity-60 fill-[#d4af37]" />
            <div className="w-16 h-px bg-[#d4af37]/30"></div>
          </div>
        </div>

        <form className="max-w-md mx-auto space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Your Name</label>
            <input
              name="user_name"
              type="text"
              required
              placeholder="Your full name"
              className="flex h-10 w-full rounded-md border border-[#d4af37]/30 bg-black/40 text-[#f3e8d2] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] placeholder:text-white/40 uppercase"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Email</label>
            <input
              name="user_email"
              type="email"
              required
              placeholder="you@example.com"
              className="flex h-10 w-full rounded-md border border-[#d4af37]/30 bg-black/40 text-[#f3e8d2] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] placeholder:text-white/40"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white flex items-center gap-2">
              <Users size={14} /> Will you be attending?
            </label>
            <div className="relative">
              <select
                required
                value={attending}
                onChange={(e) => setAttending(e.target.value)}
                className="appearance-none flex h-10 w-full items-center justify-between rounded-md border border-[#d4af37]/30 bg-black/40 text-[#f3e8d2] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] cursor-pointer"
              >
                <option value="" className="bg-[#1a1a15]">Select...</option>
                <option value="yes" className="bg-[#1a1a15]">Yes, I'll be there!</option>
                <option value="no" className="bg-[#1a1a15]">Sorry, I can't make it</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-3 text-[#d4af37] opacity-60 pointer-events-none" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white">Your Message</label>
            <textarea
              name="message"
              required
              rows="3"
              placeholder="Write your wishes..."
              className="flex min-h-[80px] w-full rounded-md border border-[#d4af37]/30 bg-black/40 text-[#f3e8d2] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] placeholder:text-white/40"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#d4af37] text-black h-10 rounded-md font-bold transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-[#b8962e]"
              }`}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </section>


      <section className="py-16 md:py-20 px-6 relative overflow-hidden bg-[#0a0a08]">
        <div className="max-w-lg mx-auto text-center">
          {/* Top Decorative Wave */}
          <svg viewBox="0 0 400 40" className="w-full text-[#d4af37] mb-8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20 Q50 5 100 20 Q150 35 200 20 Q250 5 300 20 Q350 35 400 20" stroke="currentColor" strokeWidth="1" opacity="0.3"></path>
            <path d="M0 20 Q50 10 100 20 Q150 30 200 20 Q250 10 300 20 Q350 30 400 20" stroke="currentColor" strokeWidth="0.5" opacity="0.2"></path>
            {[50, 100, 150, 200, 250, 300, 350].map((cx, i) => (
              <circle key={i} cx={cx} cy={20 + Math.sin(i) * 10} r="2" fill="currentColor" opacity="0.25"></circle>
            ))}
          </svg>

          {/* Main Text */}
          <p className="passions text-4xl md:text-5xl text-[#d4af37] leading-relaxed mb-4">
            We can't wait to celebrate with you!
          </p>

          <p className="passions text-3xl text-[#c5a059] opacity-80">
            Arjun &amp; Dharani
          </p>

          {/* Bottom Decorative Wave (Inverted) */}
          <svg viewBox="0 0 400 40" className="w-full text-[#d4af37] mt-8 rotate-180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20 Q50 5 100 20 Q150 35 200 20 Q250 5 300 20 Q350 35 400 20" stroke="currentColor" strokeWidth="1" opacity="0.3"></path>
            <path d="M0 20 Q50 10 100 20 Q150 30 200 20 Q250 10 300 20 Q350 30 400 20" stroke="currentColor" strokeWidth="0.5" opacity="0.2"></path>
            {[50, 100, 150, 200, 250, 300, 350].map((cx, i) => (
              <circle key={i} cx={cx} cy={20 + Math.sin(i) * 10} r="2" fill="currentColor" opacity="0.25"></circle>
            ))}
          </svg>
        </div>
      </section>

    </>
  );
}