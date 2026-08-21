"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export function AboutJazzEnsembles() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: THE NARRATIVE */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-4xl font-serif text-black leading-tight mb-8">
              It’s not just about the music. <br />
              <span className="italic text-[#C5A059]">It’s about the atmosphere.</span>
            </h2>

            <div className="space-y-6 text-stone-500 font-light text-lg leading-relaxed max-w-xl">
              <p>
                In a world of noise, Elev8 Jazz Ensembles provide a sanctuary of sound. 
                Our approach is rooted in the belief that music should be a seamless 
                architectural layer of your event—enhancing conversation, not competing with it.
              </p>
              
              <p className="text-base text-stone-400">
                Today, we are the trusted partner for luxury venues and private hosts seeking 
                a higher standard of musical presence. Our portfolio of ensembles helps:
              </p>

              {/* LISTING THE EXCEPTIONALITY */}
              <ul className="space-y-4 pt-4">
                <li className="flex items-start space-x-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold text-black uppercase tracking-tighter">Vetted Virtuosos: </span>
                    Musicians selected from the finest conservatories for their technical mastery.
                  </p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold text-black uppercase tracking-tighter">Behavioral Prestige: </span>
                    Artists who embody the visual and professional standards of elite hospitality.
                  </p>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                  <p className="text-sm">
                    <span className="font-bold text-black uppercase tracking-tighter">Global Versatility: </span>
                    Seamless sound delivery for weddings, brand launches, and private residencies.
                  </p>
                </li>
              </ul>
            </div>

            <button className="mt-12 group bg-black text-white px-10 py-5 rounded-none text-[11px] tracking-[0.3em] uppercase font-bold flex items-center space-x-6 hover:bg-[#C5A059] transition-all duration-500 shadow-xl">
              <span>View Ensemble Options</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
          </motion.div>

          {/* RIGHT COLUMN: THE MASKED IMAGE (Mirroring your screenshot) */}
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-square w-full max-w-md mx-auto"
            >
              {/* THE ARCH MASK */}
              <div className="relative w-full h-full overflow-hidden rounded-t-full shadow-2xl border-[1px] border-stone-100">
                <Image 
                  src="/jazz.webp" // High-end shot of a jazz musician or venue
                  alt="Elev8 Jazz Performance"
                  fill
                  className="object-cover hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* THE GOLD SLASH BAR (The horizontal element from your screenshot) */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "110%" }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute bottom-0 -left-[5%] h-12 bg-[#C5A059] -rotate-3 z-10 shadow-lg flex items-center px-10"
              >
                 <span className="text-white text-[10px] tracking-[0.5em] font-bold uppercase whitespace-nowrap">
                   The Elev8 Standard
                 </span>
              </motion.div>

              {/* Decorative Circle Dot */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-stone-50 rounded-full border border-stone-100 flex items-center justify-center opacity-40">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}