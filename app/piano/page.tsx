"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Diamond, Music, Wind, Crown, Mic2, ChevronRight, Check } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhyLivePiano } from "@/components/whypiano"
import { PerformanceStyles } from "@/components/types"
import { PianoPackages } from "@/components/packages"
import { TestimonialsSection } from "@/components/testimonial"
import { BookingProcess } from "@/components/steps"

export default function PianoPage() {
  return (
    <main className="bg-white selection:bg-[#C5A059] selection:text-white">
      <Navbar />
      
      {/* 1. PIANO HERO BANNER */}
      <PianoHero />
      
      {/* 2. PIANO PHILOSOPHY */}
      <PianoPhilosophy />

      {/* 3. BENEFITS SECTION */}
      <WhyLivePiano/>

      {/* 4. PERFORMANCE STYLES */}
      <PerformanceStyles/>

      {/* 5. PACKAGE CONFIGURATIONS */}
      <PianoPackages/>

      {/* 6. BOOKING STEPS */}
      <BookingProcess/>

      {/* 7. VOICES OF RESONANCE */}
      <TestimonialsSection/>

      {/* 8. FINAL PAGE CTA */}
      <PianoCTA />

      <Footer />
    </main>
  )
}

/* -------------------------------------------------------------------------- */
/*                                1. PIANO HERO                               */
/* -------------------------------------------------------------------------- */
function PianoHero() {
  return (
    <section className="relative h-[80vh] md:h-screen w-full overflow-hidden bg-black flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/piano4.webp" 
          alt="Elev8 Piano Artistry"
          fill
          className="object-cover opacity-50 transition-transform duration-[10000ms] scale-110"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      </div>

      {/* GOLD ARCS DNA */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <svg className="h-full w-full opacity-25" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M-50,1000 C300,800 400,500 250,0"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.5"
          />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            d="M-100,1000 C250,800 350,500 200,0"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="container relative z-30 mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col items-start text-left max-w-4xl">
          {/* Logo Axis: Scaled for mobile */}
          <div className="flex items-baseline space-x-2 sm:space-x-4 mb-2">
            <h1 className="text-5xl sm:text-7xl md:text-[100px] font-serif tracking-[0.2em] text-white leading-none">ELEV</h1>
            <h1 className="text-5xl sm:text-7xl md:text-[100px] font-serif text-[#C5A059] leading-none">8</h1>
          </div>
          
          <div className="pl-1 sm:pl-2 mb-8 md:mb-10">
            <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/20" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.4em] font-serif uppercase text-white/90 mb-8 pl-1">
            PIANO
          </h2>

          <div className="pl-1">
            <p className="text-[9px] sm:text-[11px] tracking-[0.5em] md:tracking-[0.6em] uppercase text-[#C5A059] font-medium leading-relaxed">
              THE RESONANCE OF <br />
              <span className="text-white/60">REFINED IVORY AND SOUND</span>
            </p>
          </div>
        </div>
      </div>

      {/* Axis Axis Alignment Line */}
      <div className="absolute bottom-12 left-6 sm:left-12 lg:left-24 z-30">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 64 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="w-px bg-gradient-to-b from-[#C5A059] to-transparent" 
        />
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                             2. PIANO PHILOSOPHY                            */
/* -------------------------------------------------------------------------- */
function PianoPhilosophy() {
  return (
    <section className="bg-white py-16 md:py-32 lg:py-44 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* LEFT: THE STYLISH OVERLAP IMAGES (Responsive stacking) */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[600px] lg:h-[700px] flex items-center justify-center">
            {/* Main Background Image */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative w-4/5 aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-0 border border-stone-100"
            >
              <Image src="/mech.webp" alt="Piano Mechanics" fill className="object-cover" />
              <div className="absolute inset-0 bg-stone-900/5" />
            </motion.div>

            {/* Foreground Overlap Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="absolute -right-2 sm:-right-4 md:-right-8 bottom-8 sm:bottom-16 w-3/5 aspect-square rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[-20px_20px_50px_rgba(0,0,0,0.15)] border-[8px] md:border-[12px] border-white z-10"
            >
              <Image src="/hand.webp" alt="Artist Hands" fill className="object-cover" />
            </motion.div>
          </div>

          {/* RIGHT: THE CONTENT (Responsive Typography) */}
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] font-bold mb-6 block">The Soul of Sound</span>
              
              <h2 className="text-3xl lg:text-5xl font-serif text-black leading-tight mb-8 md:mb-12">
                The Art of the <br /> <span className="italic text-[#C5A059]">Felted Note.</span>
              </h2>
              
              <div className="space-y-8 md:space-y-12">
                <div className="group">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm font-serif italic text-[#C5A059]">01.</span>
                    <h3 className="text-[12px] sm:text-[13px] tracking-[0.3em] uppercase text-black font-bold">Sonic Architecture</h3>
                  </div>
                  <p className="text-stone-500 font-light text-base md:text-lg leading-relaxed pl-8 sm:pl-10">
                    Our signature "Felted" technique captures the mechanical soul of the grand piano, creating a soft, breathing resonance designed for discrete luxury.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-sm font-serif italic text-[#C5A059]">02.</span>
                    <h3 className="text-[12px] sm:text-[13px] tracking-[0.3em] uppercase text-black font-bold">Atmospheric Intent</h3>
                  </div>
                  <p className="text-stone-500 font-light text-base md:text-lg leading-relaxed pl-8 sm:pl-10">
                    Every arrangement is tailored to the architecture and acoustics of your venue, ensuring the sound moves through the space like natural light.
                  </p>
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  className="pl-8 sm:pl-10 border-l border-[#C5A059]/40 mt-12"
                >
                  <p className="text-lg sm:text-xl lg:text-2xl font-serif italic text-stone-800 leading-relaxed">
                    "Elevating the physical room into a spiritual memory."
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                 4. PAGE CTA                                */
/* -------------------------------------------------------------------------- */
function PianoCTA() {
  return (
    <section className="bg-white py-16 md:py-32">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
        <div className="relative bg-[#0A0A0A] rounded-[2rem] md:rounded-[3rem] overflow-hidden p-8 sm:p-12 md:p-24 border border-white/5 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
             <span className="text-[50vw] lg:text-[30vw] font-serif italic text-white leading-none">8</span>
          </div>

          <div className="max-w-xl text-center lg:text-left relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-6">
              The keys are ready. <br /> <span className="italic text-[#C5A059]">Is your atmosphere?</span>
            </h2>
            <p className="text-white/40 font-light text-sm sm:text-base md:text-lg">Inquire for bespoke piano curation for your next distinguished event.</p>
          </div>

          <button className="group relative bg-white text-black px-8 sm:px-12 py-5 sm:py-7 rounded-none transition-all duration-500 hover:bg-[#C5A059] hover:text-white flex items-center justify-center space-x-6 shadow-2xl w-full sm:w-auto z-10">
             <span className="text-[10px] tracking-[0.4em] uppercase font-bold whitespace-nowrap">Initiate Experience</span>
             <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  )
}