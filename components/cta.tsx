"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="bg-white py-16 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* THE MAIN CTA CONTAINER */}
        <div className="relative bg-[#0A0A0A] rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.4)] border border-white/5">
          
          {/* Subtle Background Glow/Gradient */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-[#C5A059]/10 to-transparent pointer-events-none" />
          
          {/* Background Watermark - Adjusted for responsive sizing */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
             <span className="text-[50vw] md:text-[30vw] font-serif text-white uppercase leading-none">E8</span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-12 p-8 sm:p-12 md:p-20">
            
            {/* LEFT: TEXT CONTENT */}
            <div className="flex flex-col items-start text-left order-2 lg:order-1">
              
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 bg-[#C5A059] px-3 md:px-4 py-1.5 rounded-full mb-6 md:mb-8"
              >
                <Star className="w-3 h-3 text-black fill-black" />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-black">
                  Exclusive Dates Available
                </span>
              </motion.div>

              {/* Headline: Responsive scale 3xl to 6xl */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight mb-8 md:mb-12"
              >
                Ready to <span className="italic text-[#C5A059]">Elevate</span> <br /> 
                Your Evening?
              </motion.h2>

              {/* CTA Button & Social Proof - Responsive Layout */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-8 md:gap-10 w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group bg-[#C5A059] text-black px-8 md:px-10 py-5 md:py-6 rounded-none text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold flex items-center justify-center space-x-4 shadow-2xl hover:bg-white transition-all duration-500"
                >
                  <span>Request Experience</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                </motion.button>

                <div className="flex flex-col items-center sm:items-start border-l border-white/10 pl-0 sm:pl-10 pt-4 sm:pt-0">
                   <span className="text-2xl md:text-3xl font-serif text-white leading-none">400+</span>
                   <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 mt-2">Elevated Gatherings</span>
                </div>
              </div>
            </div>

            {/* RIGHT: CINEMATIC IMAGE */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-square md:aspect-video lg:aspect-square xl:aspect-video order-1 lg:order-2"
            >
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group border border-white/10">
                <Image 
                  src="/piano11.webp" 
                  alt="Elev8 Piano luxury grand piano ready for a wedding ceremony in Ireland"
                  fill
                  className="object-cover transition-transform duration-[4000ms] group-hover:scale-110"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                
                {/* Logo Badge Overlay */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 border border-white/10 px-3 md:px-4 py-2 bg-black/40 backdrop-blur-md">
                   <span className="text-[8px] md:text-[10px] tracking-[0.3em] text-white/60 uppercase font-light">ELEV8 PIANO</span>
                </div>
              </div>

              {/* Decorative Floating Icon - Responsive sizing */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:-top-10 md:-right-10 w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-[#C5A059] rounded-full flex items-center justify-center shadow-2xl border-4 md:border-8 border-[#0A0A0A] z-20"
              >
                  <span className="text-black font-serif text-2xl sm:text-3xl md:text-5xl italic pt-1">8</span>
              </motion.div>
            </motion.div>

          </div>
        </div>
        
      </div>
    </section>
  )
}