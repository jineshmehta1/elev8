"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Diamond, ArrowRight } from "lucide-react"

const performanceStyles = [
  {
    title: "Classical Piano",
    sub: "Mozart, Beethoven, Chopin",
    image: "/class.webp", // Detailed shot of a manuscript or grand piano hammers
  },
  {
    title: "Contemporary Piano",
    sub: "Modern hits and pop arrangements",
    image: "/cont.webp", // Sleek modern piano in a bright penthouse
  },
  {
    title: "Jazz Piano",
    sub: "Smooth jazz and cocktail music",
    image: "/jazzpiano.webp", // Dimly lit lounge with a whiskey glass on a piano
  },
  {
    title: "Wedding Piano",
    sub: "Ceremony, cocktail hour, reception",
    image: "/weddingpiano.webp", // Grand ballroom with white floral arrangements
  },
  {
    title: "Corporate Piano",
    sub: "Events and networking atmospheres",
    image: "/corppiano.webp", // Modern skyscraper view through lobby glass
  },
  {
    title: "Luxury Lounge Piano",
    sub: "Upscale hotel and private residencies",
    image: "/luxpiano.webp", // Velvet furniture and ambient warm lighting
  }
]

export function PerformanceStyles() {
  return (
    <section className="bg-white py-14 md:py-10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* 1. SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-5 py-1.5 bg-stone-50 border border-[#C5A059]/30 rounded-full mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">
              The Portfolio
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-serif text-black leading-tight"
          >
            Performance <span className="italic text-[#C5A059]">Styles</span>
          </motion.h2>
        </div>

        {/* 2. THE GRID (Balanced 3-Column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {performanceStyles.map((style, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-full hover:-translate-y-2 transition-all duration-500 border border-white/5"
            >
              {/* IMAGE HEADER (16:9 for Compactness) */}
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={style.image}
                  alt={style.title}
                  fill
                  className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />
                
                {/* Gold Diamond Icon on Image */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                        <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
                    </div>
                </div>
              </div>

              {/* CONTENT BODY */}
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-xl md:text-2xl font-serif text-white mb-3 group-hover:text-[#C5A059] transition-colors">
                  {style.title}
                </h3>
                
                <p className="text-white/40 font-light text-sm md:text-base leading-relaxed mb-10">
                  {style.sub}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Explore Sound</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  
                  {/* Subtle Numbering */}
                  <span className="text-white/5 font-serif italic text-4xl group-hover:text-[#C5A059]/10 transition-colors">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

     

      </div>
    </section>
  )
}