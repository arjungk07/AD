import { useRef, useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import Ornament from './Ornament'

export default function ScratchReveal() {
  const canvasRef = useRef(null)
  const drawing = useRef(false)
  const lastPoint = useRef(null)

  const [revealed, setRevealed] = useState(false)
  const [coverImage, setCoverImage] = useState(null)

  useEffect(() => {
    resetAndRedraw()
  }, [coverImage])

  const resetAndRedraw = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    ctx.globalCompositeOperation = 'source-over'
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // --- CUSTOM IMAGE COVER ---
    if (coverImage) {
      const img = new Image()
      img.src = coverImage
      img.onload = () => {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height)
        const x = (canvas.width / 2) - (img.width / 2) * scale
        const y = (canvas.height / 2) - (img.height / 2) * scale
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale)
        renderOverlayText(ctx, canvas)
      }
    } else {
      // --- GOLD FOIL BASE ---
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      grad.addColorStop(0, '#b8860b')
      grad.addColorStop(0.5, '#ffd700')
      grad.addColorStop(1, '#b8860b')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // --- SHIMMER EFFECT ---
      for (let i = 0; i < 4000; i++) {
        ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.04})`
        ctx.fillRect(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          1,
          1
        )
      }



      renderOverlayText(ctx, canvas)
    }
  }

  const renderOverlayText = (ctx, canvas) => {
    ctx.fillStyle = 'rgba(0,0,0,0.35)'
    ctx.font = 'bold 14px serif'
    ctx.textAlign = 'center'
    ctx.fillText('✦ SCRATCH HERE ✦', canvas.width / 2, canvas.height / 2 + 5)
  }

  // ✨ Scratch dust particles
  const spawnScratchParticles = (x, y) => {
    const rect = canvasRef.current.getBoundingClientRect()

    confetti({
      particleCount: 3,
      startVelocity: 8,
      spread: 35,
      ticks: 30,
      origin: {
        x: (rect.left + x) / window.innerWidth,
        y: (rect.top + y) / window.innerHeight
      },
      colors: ['#ffd700', '#fff3c4'],
      scalar: 0.4,
      gravity: 1.4
    })
  }

  // 🎉 Reveal celebration
  const fireCelebration = () => {
    const end = Date.now() + 3000;
    void (function frame() {
      confetti({
        particleCount: 10,
        spread: 70,
        origin: { x: Math.random(), y: 0 },
        opacity: 1
      })
      if (Date.now() < end) requestAnimationFrame(frame)
    })()
  }

  // 🧠 Check reveal percentage
  const checkReveal = () => {
    if (revealed) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data
    let cleared = 0

    for (let i = 3; i < data.length; i += 4) {
      if (data[i] < 128) cleared++
    }

    if (cleared / (canvas.width * canvas.height) > 0.5) {
      setRevealed(true)
      fireCelebration()
    }
  }

  // 🔥 SMOOTH SCRATCH (LIKE YOUR IMAGE)
  const scratch = (x, y) => {
    if (revealed) return
    const ctx = canvasRef.current.getContext('2d')

    ctx.globalCompositeOperation = 'destination-out'
    ctx.lineJoin = 'round'
    ctx.lineCap = 'round'
    ctx.lineWidth = 40

    if (!lastPoint.current) {
      lastPoint.current = { x, y }
    }

    ctx.beginPath()
    ctx.moveTo(lastPoint.current.x, lastPoint.current.y)
    ctx.lineTo(x, y)
    ctx.stroke()

    lastPoint.current = { x, y }

    spawnScratchParticles(x, y)
    checkReveal()
  }

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect()
    const src = e.touches ? e.touches[0] : e
    return {
      x: src.clientX - rect.left,
      y: src.clientY - rect.top
    }
  }

  return (
    <section className="relative py-12 text-center bg-[#0a0a08] min-h-[500px]">

      <h2 className="passions text-4xl md:text-5xl text-gold-7 mb-3">Our forever begins</h2>
   
      <div className="flex items-center justify-center gap-3 my-6">
        <div className="w-16 h-[0.5px] bg-yellow-400/70"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart text-yellow-400 opacity-50"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
        <div className="w-16 h-[0.5px] bg-yellow-400/70"></div>
      </div>

      <div className="flex justify-center gap-4 mb-10">
        <label className="cursor-pointer rounded px-4 py-2 text-xs bg-yellow-400 text-black">
          CUSTOM COVER
          <input
            type="file"
            hidden
            onChange={(e) => {
              if (e.target.files[0]) {
                setCoverImage(URL.createObjectURL(e.target.files[0]))
                setRevealed(false)
              }
            }}
          />
        </label>

        <button onClick={() => {
          setCoverImage(null)
          setRevealed(false)
        }} className='border border-yellow-400 rounded px-2'>
          RESET GOLD
        </button>
      </div>

      <div className="relative w-80 h-48 mx-auto rounded-xl overflow-hidden">

        {/* 🎁 REVEAL CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center  text-white border border-yellow-400 "
        >
          <p className='text-md font-greatvibes opacity-90 mb-1'>We’re getting married! </p>
          <h3 className="text-2xl">Arjun💛Dharani</h3>
          <p className='text-sm font-greatvibes mt-4'>No excuses… you must be there! 💛 </p>
        </div>

        {/* 🎨 SCRATCH CANVAS */}
        <canvas
          ref={canvasRef}
          width={320}
          height={192}
          className="absolute inset-0 cursor-pointer"
          style={{
            opacity: revealed ? 0 : 1,
            transition: 'opacity 1s',


          }}

          onMouseDown={(e) => {
            drawing.current = true
            scratch(...Object.values(getPos(e)))
          }}

          onMouseMove={(e) => {
            if (drawing.current) scratch(...Object.values(getPos(e)))
          }}

          onMouseUp={() => {
            drawing.current = false
            lastPoint.current = null
          }}

          onMouseLeave={() => {
            drawing.current = false
            lastPoint.current = null
          }}

          onTouchStart={(e) => {
            drawing.current = true
            scratch(...Object.values(getPos(e)))
          }}

          onTouchMove={(e) => {
            if (drawing.current) scratch(...Object.values(getPos(e)))
          }}

          onTouchEnd={() => {
            drawing.current = false
            lastPoint.current = null
          }}
        />
      </div>

      <p className="mt-6 text-sm text-gold">
        {revealed ? "✨ You're Invited ✨" : "Scratch to reveal"}
      </p>

      <div className="mt-10 opacity-30">
        <Ornament />
      </div>
    </section>
  )
}
