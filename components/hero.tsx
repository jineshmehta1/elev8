"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Parallax and Fade effects for the video and text on scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* 1. CINEMATIC VIDEO BACKGROUND */}
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay for readability */}
        <div className="noise-overlay" /> {/* Noise overlay to soften AI perfection */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          {/* Replace with your high-end cinematic piano video URL */}
          <source src="/piano-hero.webm" type="video/webm" />
        </video>
        
        {/* Subtle Bottom Gradient to blend into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent z-20" />
      </motion.div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          {/* Subtle Label */}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-gold-400/80 text-[10px] text-white sm:text-xs tracking-[0.5em] uppercase mb-6 block font-light"
          >
            Elev8: Live Piano & Guitar
          </motion.span>

          {/* Hidden True H1 for SEO */}
          <h1 className="sr-only">Elev8: Live Piano & Guitar for Your Event</h1>

          {/* The Hook: Elegant Serif */}
          <h2 className="text-4xl md:text-6xl lg:text-6xl text-white font-serif mb-8 leading-[1.1] tracking-tight">
            Live Piano & Guitar <br /> 
            <span className="italic">for Your Event</span>
          </h2>

          {/* Subtext: Minimal & Spaced */}
          <p className="text-white/70 text-sm md:text-base font-light max-w-xl mx-auto mb-12 leading-relaxed tracking-wide">
            We are on call to provide beautiful, live piano and acoustic guitar for your next gathering, wedding, or corporate event.
          </p>

          {/* 3. CALL TO ACTIONS */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* UPDATED HOVER COLOR TO CHAMPAGNE GOLD (#C5A059) */}
            <Button 
              asChild
              className="bg-white text-black hover:bg-[#C5A059] hover:text-white transition-all duration-500 rounded-none px-10 py-7 text-[11px] tracking-[0.2em] uppercase font-medium h-auto w-full sm:w-auto"
            >
              <Link href="/setlist">Our set list</Link>
            </Button>
            
            <Link href="/performances" className="group flex items-center space-x-3 text-white/90 hover:text-white transition-colors py-4 px-6">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-all duration-500">
                <Play className="w-3 h-3 fill-white" />
              </div>
              <span className="text-[11px] uppercase tracking-[0.2em] font-light">Watch Performances</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* 4. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 rotate-0">Explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </section>
  )
}