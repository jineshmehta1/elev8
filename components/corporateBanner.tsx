"use client"

import { motion } from "framer-motion"
import { Diamond } from "lucide-react"
import Image from "next/image"

export function CorporateHero() {
  return (
    <section className="relative h-[70vh] md:h-[100vh] w-full overflow-hidden bg-black flex items-center">
      
      {/* 1. CINEMATIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/corporatebg.webp" 
          alt="Live pianist performing at a luxury hotel corporate event in Ireland"
          fill
          className="object-cover opacity-50 grayscale transition-transform duration-[10000ms] scale-105 animate-ken-burns"
          priority
        />
        {/* Deep Gradient Mask for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
      </div>

      {/* 2. BRAND DNA ARCS */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <svg className="h-full w-full opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M-50,1000 C300,800 400,500 250,0" fill="none" stroke="#C5A059" strokeWidth="0.5"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            d="M-100,1000 C250,800 350,500 200,0" fill="none" stroke="#C5A059" strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* 3. CONTENT LAYER - Fixed Axis Alignment */}
      <div className="container relative z-30 mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col items-start text-left max-w-4xl">
          
          {/* THE LOGO */}
          <div className="flex items-baseline space-x-4 mb-2">
            <h1 className="text-6xl md:text-[100px] font-serif tracking-[0.2em] text-white leading-none">ELEV</h1>
            <h1 className="text-6xl md:text-[100px] font-serif text-[#C5A059] leading-none">8</h1>
          </div>

          {/* ORNAMENTAL DIAMOND */}
          <div className="pl-2 mb-10">
            <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/20" />
          </div>

          {/* UPDATED PAGE TITLE */}
          <h2 className="text-2xl md:text-5xl lg:text-6xl tracking-[0.4em] font-serif uppercase text-white/90 mb-8 pl-1">
            HOTELS & CORPORATE
          </h2>

          {/* UPDATED TAGLINE BASED ON TONY'S DATA */}
          <div className="pl-1">
            <p className="text-[10px] md:text-[11px] tracking-[0.6em] uppercase text-[#C5A059] font-medium leading-relaxed">
              PRESTIGE SOUNDSCAPES <br />
              <span className="text-white/60">FOR LOBBIES, RESIDENCIES & BRAND EXPERIENCES</span>
            </p>
          </div>
        </div>
      </div>

      {/* 4. VERTICAL ALIGNMENT LINE */}
      <div className="absolute bottom-12 left-8 md:left-16 lg:left-24 z-30">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 64 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-px bg-gradient-to-b from-[#C5A059] to-transparent" 
        />
      </div>

    </section>
  )
}