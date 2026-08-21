"use client"

import { motion } from "framer-motion"
import { ArrowRight, Diamond } from "lucide-react"
import Link from "next/link"

export function AboutCTA() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* THE COMPACT "ENCORE" BANNER */}
        <div className="relative bg-[#0A0A0A] rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl">
          
          {/* 1. ARCHITECTURAL BACKGROUND DETAIL */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <svg className="h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
              <path d="M0,1000 C300,800 600,800 1000,1000" fill="none" stroke="#C5A059" strokeWidth="0.5" />
              <path d="M0,950 C300,750 600,750 1000,950" fill="none" stroke="#C5A059" strokeWidth="0.5" />
            </svg>
          </div>

          {/* 2. THE BRAND MARK '8' (Subtle floating element) */}
          <div className="absolute right-0 top-0 translate-x-1/3 -translate-y-1/3 pointer-events-none select-none opacity-[0.03]">
             <span className="text-[35vw] font-serif italic text-white leading-none">8</span>
          </div>

          {/* 3. CONTENT LAYOUT */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 p-12 md:p-24">
            
            <div className="max-w-xl text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
                <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/20" />
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] font-bold">
                  The Final Note
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-[1.1] mb-6">
                Our philosophy is the prelude. <br /> 
                <span className="italic text-[#C5A059]">Your event is the main act.</span>
              </h2>
              
              <p className="text-white/40 text-sm md:text-lg font-light tracking-wide max-w-md">
                Bring the Elev8 standard to your next gathering. 
                Inquire today for bespoke musical curation.
              </p>
            </div>

            {/* THE "KING" ACTION BUTTON */}
            <div className="flex-shrink-0 w-full md:w-auto">
              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-white text-black px-12 py-8 rounded-none transition-all duration-700 shadow-2xl flex items-center justify-center space-x-8 w-full md:w-auto overflow-hidden"
                >
                  {/* Subtle Gold Hover Background Slide */}
                  <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  
                  <div className="relative z-10 flex items-center space-x-6 group-hover:text-white transition-colors duration-500">
                    <span className="text-[11px] tracking-[0.4em] uppercase font-bold">
                        Initiate Experience
                    </span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-3" />
                  </div>
                </motion.button>
              </Link>
            </div>

          </div>
        </div>
        
        {/* BOTTOM DECORATIVE THREAD */}
        <div className="mt-12 flex flex-col items-center opacity-20">
            <span className="text-[9px] tracking-[0.8em] uppercase text-black font-medium mb-4">Elev8 Piano</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-black to-transparent" />
        </div>

      </div>
    </section>
  )
}