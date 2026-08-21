"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const musicServices = [
  {
    title: "Bar Piano",
    alt: "Bar pianist playing grand piano at a luxury drinks reception",
    description: "The timeless foundation of Elev8. Refined artistry and ambient melodies for intimate settings.",
    image: "/piano.webp", 
  },
  {
    title: "Single Performer",
    alt: "Single live performer entertaining at a luxury corporate event",
    description: "A captivating solo act delivering the vibrant energy and sophistication of live music.",
    image: "/soul.webp",
  },
  {
    title: "Acoustic Guitar",
    alt: "Acoustic guitarist performing at an elegant wedding ceremony",
    description: "Ethereal melodies and rich acoustic textures creating deep emotional resonance.",
    image: "/cinematic.webp",
  },
  {
    title: "Full Band",
    alt: "Full live band performing energetic music at a private event",
    description: "A high-energy ensemble curated to bring unforgettable rhythm and life to your event.",
    image: "/jazz.webp",
  },
  {
    title: "Duo",
    alt: "Musical duo performing live at a luxury drinks reception",
    description: "A sophisticated pair offering a modern, smooth, and engaging musical interplay.",
    image: "/sax.webp",
  },
  {
    title: "DJ",
    alt: "Professional DJ performing a high-energy set at a luxury event",
    description: "High-energy curation and seamless mixing to keep the atmosphere vibrant all night.",
    image: "/dj.webp",
  },
]

export function MusicCollection() {
  return (
    <section className="bg-white py-14 md:py-12">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* CENTERED HEADING & MODERN PILL */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-6 py-2 bg-stone-50 border border-stone-200 rounded-full mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">
              The Sonic Collection
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-serif text-black leading-tight"
          >
            Curating <span className="italic text-[#C5A059]">Elevated</span> Experiences
          </motion.h2>
        </div>

        {/* THE MODERN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {musicServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative aspect-[1.4/1] overflow-hidden rounded-[2rem] md:rounded-[3rem] cursor-pointer bg-black"
            >
              {/* IMAGE WITH ZOOM EFFECT */}
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:opacity-40 opacity-70 group-hover:blur-[2px]"
              />

              {/* GRADIENT OVERLAY (Vignette) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />

              {/* CONTENT LAYER */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                
                {/* Always Visible Title */}
                <h3 className="text-2xl md:text-2xl font-serif text-white transition-all duration-500 group-hover:translate-y-[-100px] group-hover:text-[#C5A059]">
                  {service.title}
                </h3>

                {/* Hidden Description (Slides up on Hover) */}
                <div className="absolute bottom-10 left-10 right-10 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <p className="text-white/80 font-light text-sm md:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center space-x-2 text-[#C5A059]">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Inquire Now</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </div>
              </div>

              {/* BORDER GLOW ON HOVER */}
              <div className="absolute inset-0 border-2 border-[#C5A059]/0 group-hover:border-[#C5A059]/20 rounded-[2rem] md:rounded-[3rem] transition-all duration-500" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}