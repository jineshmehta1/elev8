"use client"

import { motion } from "framer-motion"
import { Diamond } from "lucide-react"
import Image from "next/image"

export function PerformanceHero() {
  return (
    <section className="relative h-[85vh] sm:h-[90vh] lg:h-screen w-full overflow-hidden bg-black flex items-center">
      
      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          playsInline
          className="h-full w-full object-cover opacity-60"
        >
          <source src="/remove_music.mp4" type="video/mp4" />
        </video>
        <div className="noise-overlay opacity-[0.12]" /> {/* Noise overlay to blend AI details */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20 z-10" />
      </div>

      {/* BRAND WATERMARK COVER OVERLAY */}
      <div className="absolute bottom-[68px] right-8 z-30 flex items-center space-x-4 bg-black/90 backdrop-blur-md px-8 py-4 border border-[#C5A059]/30 rounded-none shadow-[0_0_40px_rgba(0,0,0,0.8)]">
        <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/90 font-bold">Elev8 Live Performances</span>
      </div>

      {/* ARCHITECTURAL SVG LINES */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <svg
          className="h-full w-full opacity-20"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M-50,1000 C300,800 400,500 250,0"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.5"
          />

          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: 0.3,
              ease: "easeInOut",
            }}
            d="M-100,1000 C250,800 350,500 200,0"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* CONTENT */}
      <div className="container relative z-30 mx-auto px-5 sm:px-8 md:px-12 lg:px-24">
        <div className="max-w-5xl">
          
          {/* BRAND LOGO */}
          <div className="flex items-baseline gap-2 sm:gap-4 mb-3">
            <h1 className="text-5xl sm:text-7xl md:text-[90px] lg:text-[110px] font-serif tracking-[0.12em] md:tracking-[0.2em] text-white leading-none">
              ELEV
            </h1>

            <h1 className="text-5xl sm:text-7xl md:text-[90px] lg:text-[110px] font-serif text-[#C5A059] leading-none">
              8
            </h1>
          </div>

          {/* GOLD DIAMOND */}
          <div className="pl-1 sm:pl-2 mb-6 md:mb-10">
            <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/20" />
          </div>

          {/* TITLE */}
          <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-serif uppercase text-white/90 tracking-[0.18em] sm:tracking-[0.25em] md:tracking-[0.4em] mb-6 md:mb-8">
            Performances
          </h2>

          {/* SUBTEXT */}
          <div className="max-w-3xl">
            <p className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.4em] md:tracking-[0.6em] text-[#C5A059] font-medium leading-relaxed md:leading-loose">
              Making Memories in Unforgettable Atmospheres.
              <br />

              <span className="text-white/60">
                From Solo and Duo Performances To High-Energy DJ Experiences,
                <br className="hidden md:block" />
                Choose from our song list or choose your own
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-5 sm:left-8 md:left-12 lg:left-24 z-30">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 64 }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="w-px h-12 md:h-16 bg-gradient-to-b from-[#C5A059] to-transparent"
        />
      </div>
    </section>
  )
}