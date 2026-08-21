"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Plus } from "lucide-react"

const artists = [
  {
    name: "Tony Devine",
    role: "Principal Pianist",
    specialty: "Classical, Jazz & Blues",
    image: "/2.png", 
  },
  {
    name: "Plamen Panov",
    role: "Expert Guitarist",
    specialty: "Acoustic & Electric Textures",
    image: "/1.png",
  },
  {
    name: "The Collective",
    role: "Full Show Band",
    specialty: "High-Energy Entertainment",
    image: "/tony_pacco_2.png",
  },
]

export function ArtistShowcase() {
  return (
    <section className="bg-white py-14 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-2 bg-stone-50 border border-[#C5A059]/30 rounded-full mb-6"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">
              The Artistry
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif text-black leading-tight">
            Meet the <span className="italic text-stone-400 font-light font-serif">Performers</span>
          </h2>
        </div>

        {/* THE BALANCED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative bg-[#0A0A0A] rounded-[2.5rem] md:rounded-[3rem] p-3 pb-10 flex flex-col items-center overflow-hidden shadow-2xl"
            >
              
              {/* IMAGE CONTAINER (In-set inside the dark card) */}
              <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] md:rounded-[2.5rem] mb-8 bg-stone-900">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                
                {/* Floating Plus Detail */}
                <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                   <Plus className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* ARTIST INFO (Inside the Dark Card) */}
              <div className="text-center px-4">
                <span className="text-[9px] tracking-[0.4em] uppercase text-[#C5A059] font-bold block mb-3">
                  {artist.role}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 tracking-wide">
                  {artist.name}
                </h3>
                <p className="text-white/40 font-light text-xs md:text-sm tracking-widest uppercase">
                  {artist.specialty}
                </p>
                
                {/* Decorative Bottom Reveal Line */}
                <div className="flex justify-center mt-6">
                  <div className="h-[1px] w-0 bg-[#C5A059] group-hover:w-16 transition-all duration-700 ease-in-out" />
                </div>
              </div>

              {/* Subtle Corner Glow Hover Effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}