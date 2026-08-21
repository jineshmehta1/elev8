"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Diamond, MapPin, Users } from "lucide-react"

export function MeetTonyDevine() {
  return (
    <section className="bg-white py-6 md:py-12 lg:py-14 overflow-hidden relative">
      
      {/* 1. BACKGROUND WATERMARK - Scaled for mobile */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none overflow-hidden">
        <span className="text-[25vw] lg:text-[20vw] font-serif text-black leading-none uppercase tracking-tighter">
          Virtuoso
        </span>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* 2. LEFT: THE STYLISH OVERLAP IMAGES (Responsive Stack) */}
          <div className="lg:col-span-6 relative h-[450px] sm:h-[600px] lg:h-[700px] flex items-center justify-center order-1">
            {/* Main Image of Tony - Full Color */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative w-4/5 aspect-[5/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl z-0 border border-stone-100"
            >
              <Image 
                src="/tony_pacco_2.png" 
                alt="Tony Devine - Principal Pianist" 
                fill 
                className="object-cover transition-transform duration-[3000ms] hover:scale-105" 
                priority
              />
              <div className="noise-overlay opacity-[0.08]" /> {/* Film grain to blend AI details */}
              <div className="absolute inset-0 bg-black/5" />
            </motion.div>

            {/* Foreground Detail (Ensemble) - Responsive positioning */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="absolute -right-2 sm:-right-4 bottom-8 sm:bottom-16 w-3/5 aspect-[7/5] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden shadow-[-10px_10px_40px_rgba(0,0,0,0.15)] border-[6px] md:border-[12px] border-white z-10"
            >
              <Image 
                src="/tony_pacco_1.jpg" 
                alt="Ensemble Interaction" 
                fill 
                className="object-cover" 
              />
              <div className="noise-overlay opacity-[0.08]" /> {/* Film grain to blend AI details */}
            </motion.div>

            {/* Gold Accent Watermark */}
            <div className="absolute -left-6 -bottom-6 lg:-left-10 lg:-bottom-10 opacity-10 pointer-events-none">
                <span className="text-[30vw] lg:text-[15vw] font-serif italic text-[#C5A059]">8</span>
            </div>
          </div>

          {/* 3. RIGHT: TONY'S STORY (Editorial Content) */}
          <div className="lg:col-span-6 order-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <motion.div className="px-5 py-1.5 bg-stone-50 border border-[#C5A059]/30 rounded-full mb-6 md:mb-8 w-fit">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">Principal Pianist</span>
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black leading-tight mb-4 tracking-tight">
                The Artistry of <br /> 
                <span className="italic text-[#C5A059]">Tony Devine.</span>
              </h2>

              <p className="text-[#C5A059] text-[10px] md:text-[11px] tracking-[0.4em] uppercase font-bold mb-8 md:mb-10">
                Dublin • Wicklow • Kildare • Clare
              </p>
              
              <div className="space-y-6 md:space-y-8">
                <p className="text-stone-600 text-base md:text-lg font-light leading-relaxed">
                  Welcome to Elev8. I am Tony Devine, a professional freelance pianist dedicated to bringing a touch of elegance, energy, and atmosphere to the world’s most distinguished venues.
                </p>

                <p className="text-stone-500 text-sm md:text-base font-light leading-relaxed border-l-2 border-stone-100 pl-6 md:pl-8">
                  My repertoire spans the emotional spectrum—from the classical precision of the greats to the soulful textures of Jazz, Blues, R&B, and contemporary hits.
                </p>

                {/* THE ENSEMBLE HOOK (Box scales for mobile) */}
                <div className="bg-stone-50 p-6 md:p-8 rounded-[2rem] border border-stone-100 mt-8 group">
                   <div className="flex items-center space-x-4 mb-4">
                      <Users className="w-5 h-5 text-[#C5A059]" />
                      <h4 className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-black font-bold">The Signature Duo</h4>
                   </div>
                   <p className="text-stone-500 text-sm font-light leading-relaxed">
                    I frequently perform alongside expert guitarist <span className="text-black font-medium">Plamen Panov</span>. Together, we provide a seamless, high-energy musical experience.
                   </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                    <button className="w-full sm:w-auto bg-black text-white px-10 py-5 rounded-none text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-[#C5A059] transition-all duration-500 shadow-xl">
                        Request Consultation
                    </button>
                    <div className="flex items-center space-x-2 text-stone-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-[9px] uppercase tracking-widest">Regional Residencies</span>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}