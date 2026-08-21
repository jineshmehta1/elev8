"use client"

import { motion } from "framer-motion"
import { ArrowRight, Diamond } from "lucide-react"
import Link from "next/link"

export function ContactCTA() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* THE COMPACT CONTAINER */}
        <div className="relative bg-[#0A0A0A] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl">
          
          {/* 1. SUBTLE BRAND WATERMARK (The '8') */}
          <div className="absolute -right-10 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.04]">
             <span className="text-[25vw] font-serif italic text-white leading-none">8</span>
          </div>

          {/* 2. ARCHITECTURAL ARCS (Low Opacity) */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <svg className="h-full w-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <path d="M0,200 C300,150 700,150 1000,200" fill="none" stroke="#C5A059" strokeWidth="0.5" />
            </svg>
          </div>

          {/* 3. CONTENT GRID */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 p-10 md:p-16">
            
            {/* LEFT SIDE: THE SUMMONS */}
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center space-x-3">
                <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/20" />
                <span className="text-[9px] tracking-[0.5em] uppercase text-[#C5A059] font-bold">
                  The Experience
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                Your Atmosphere, <span className="italic text-[#C5A059]">Defined.</span>
              </h2>
              
              <p className="text-white/40 text-sm md:text-base font-light tracking-wide max-w-md">
                Initiate a private consultation for bespoke musical curation at your next gathering.
              </p>
            </div>

            {/* RIGHT SIDE: THE ACTION */}
            <div className="flex lg:justify-end">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-white hover:bg-[#C5A059] text-black hover:text-white px-10 py-6 rounded-none transition-all duration-500 w-full sm:w-auto shadow-2xl flex items-center justify-center space-x-6"
                >
                  <span className="text-[10px] tracking-[0.4em] uppercase font-bold">
                    Inquire Now
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  
                  {/* Luxury Top Border Detail */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.button>
              </Link>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  )
}