"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function BrandIntroduction() {
  return (
    <section className="relative bg-white py-16 md:py-32 lg:py-40 overflow-hidden">
      
      {/* 1. BACKGROUND WATERMARK */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[25vw] lg:text-[22vw] font-serif text-[#C5A059]/[0.05] uppercase leading-none transform translate-y-10 whitespace-nowrap">
          Atmosphere
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: EDITORIAL TYPOGRAPHY */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start order-2 lg:order-1"
          >
            {/* Champagne Gold Overline */}
            <span className="text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.5em] uppercase text-[#C5A059] mb-4 md:mb-6 block font-medium">
              The Essence of Elev8
            </span>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-black leading-[1.2] lg:leading-[1.1] mb-6 md:mb-8 tracking-tight">
              Curating refined <br className="hidden sm:block" />
              <span className="italic text-[#C5A059] font-light font-serif">musical states</span> <br className="hidden sm:block" />
              for the host.
            </h2>
            
            {/* Champagne Gold Divider */}
            <div className="w-12 md:w-16 h-[1px] bg-[#C5A059]/40 mb-6 md:mb-8" />

            <p className="text-stone-600 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-lg mb-8 md:mb-10">
              Elev8 Piano creates refined musical experiences for weddings, luxury events, 
              corporate gatherings, and intimate celebrations. We don’t just play music; 
              we curate the soul of the room.
            </p>
            
            <Link href="/about" className="group flex flex-col items-start">
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-medium text-black pb-1 group-hover:text-[#C5A059] transition-colors duration-300">
                Discover Our Philosophy
              </span>
              {/* Champagne Gold Animated Line */}
              <div className="h-[1px] w-full bg-[#C5A059] scale-x-100 group-hover:scale-x-50 transition-transform duration-500 origin-left" />
            </Link>
          </motion.div>

          {/* RIGHT: THE IMAGE */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="lg:col-span-5 relative w-full order-1 lg:order-2 mb-8 lg:mb-0"
          >
            {/* The Main Image Wrapper - Champagne Tint Border */}
            {/* Height scales dynamically but maintains a portrait aspect ratio */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[3/4] w-full overflow-hidden rounded-t-[120px] sm:rounded-t-[180px] lg:rounded-t-[240px] rounded-b-[20px] shadow-2xl border-[8px] md:border-[12px] border-[#C5A059]/10 group">
              <Image
                src="/piano.webp" 
                alt="Luxury grand piano at an elegant event venue in Dublin, Ireland"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>

            {/* FLOATING QUOTE BOX */}
            {/* Responsive positioning: centered on mobile, offset on desktop */}
            <motion.div 
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.6, duration: 1 }}
               className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 md:-bottom-8 md:-left-12 bg-white p-6 md:p-10 shadow-2xl border border-stone-100 max-w-[180px] sm:max-w-[220px] md:max-w-[260px] z-20"
            >
              <p className="font-serif italic text-lg sm:text-xl md:text-3xl text-black leading-tight">
                "An evening redefined."
              </p>
              {/* Champagne Gold Detail Text */}
              <div className="mt-3 md:mt-4 text-[8px] md:text-[9px] uppercase tracking-widest text-[#C5A059] font-bold">
                — Est. 2024
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}