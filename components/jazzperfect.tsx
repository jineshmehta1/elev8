"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Diamond, ArrowUpRight } from "lucide-react"

const occasions = [
  {
    title: "Weddings",
    desc: "Eternal resonance for your most significant milestone.",
    image: "/jazzwed.webp", // Soft focus, grand ballroom, white florals
  },
  {
    title: "Corporate Events",
    desc: "Sophisticated musical backdrops that align with elite brand standards.",
    image: "/jazzcorp.webp", // Modern gala, sleek lighting, skyscraper views
  },
  {
    title: "Cocktail Receptions",
    desc: "The vibrant energy of a high-end lounge, captured through sound.",
    image: "/jazzcock.webp", // Champagne glasses on piano, warm bokeh lights
  },
  {
    title: "Luxury Dinners",
    desc: "Intimate, discrete curation for multi-course culinary experiences.",
    image: "/dinner.webp", // Candlelit table, long shadows, grand piano background
  },
  {
    title: "Private Parties",
    desc: "Transforming private estates into cinematic memories.",
    image: "/jazzprivate.webp", // Luxury garden party or high-end parlor setting
  },
  {
    title: "Venue Residencies",
    desc: "Elevating the daily atmosphere of world-class hotels and clubs.",
    image: "/jazzvenue.webp", // Grand hotel lobby, chandeliers, marble floors
  }
]

export function JazzOccasions() {
  return (
    <section className="bg-white py-14 md:py-14 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* 1. SECTION HEADER - 5xl Desktop / 3xl Mobile */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-1.5 bg-stone-50 border border-[#C5A059]/30 rounded-full mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">
              The Application
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-5xl font-serif text-black leading-tight max-w-3xl"
          >
            Tailored to the <span className="italic text-[#C5A059]">Architectural Intent</span>
          </motion.h2>
        </div>

        {/* 2. THE VISUAL GRID (Balanced 3-Column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {occasions.map((occ, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative flex flex-col items-center"
            >
              {/* IMAGE CONTAINER WITH ARCHITECTURAL MASK */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[10rem] rounded-b-[2rem] shadow-2xl bg-[#0A0A0A] border border-stone-100">
                <Image
                  src={occ.image}
                  alt={occ.title}
                  fill
                  className="object-cover transition-transform duration-[4000ms] group-hover:scale-110 opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                />
                
                {/* Lower Third Obsidian Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-80" />
                
                {/* Floating Detail */}
                <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl">
                        <ArrowUpRight className="w-5 h-5 text-[#C5A059]" />
                    </div>
                </div>

                {/* TEXT CONTENT INSIDE THE IMAGE BASE */}
                <div className="absolute bottom-10 left-10 right-10">
                   <h3 className="text-2xl md:text-3xl font-serif text-white mb-3 tracking-wide">
                    {occ.title}
                   </h3>
                   <div className="w-12 h-[1px] bg-[#C5A059] mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                   <p className="text-white/40 font-light text-xs md:text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                    {occ.desc}
                   </p>
                </div>
              </div>

              {/* OUTSIDE CARD LABEL (For extra style) */}
              <div className="mt-8 flex items-center space-x-4 opacity-20 group-hover:opacity-100 transition-opacity duration-500">
                 <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
                 <span className="text-[10px] tracking-[0.4em] uppercase text-black font-bold">Resonance 0{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

     

      </div>
    </section>
  )
}