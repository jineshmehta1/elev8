"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Diamond } from "lucide-react"

const services = [
  {
    title: "Live Bands",
    desc: "Full-scale soul and orchestral collectives for the grandest receptions.",
    img: "/wedband.webp",
  },
  {
    title: "String Ensembles",
    desc: "Classical elegance met with modern cinematic arrangements.",
    img: "/wedstring.webp",
  },
  {
    title: "Vocalists",
    desc: "Soulful virtuosos delivering bespoke romantic narratives.",
    img: "/wedvocal.webp",
  },
  {
    title: "Saxophone Performers",
    desc: "Smooth brass textures for cocktail hours and sunset sessions.",
    img: "/saxop.webp",
  },
  {
    title: "DJ + Live Fusion",
    desc: "The signature Elev8 sound—modern beats with live improvisation.",
    img: "/webdj.webp",
  },
  {
    title: "Cultural Performers",
    desc: "Bespoke traditional ensembles honoring heritage with prestige.",
    img: "/cul.webp",
  },
]

export function WeddingServices() {
  return (
    <section className="bg-stone-50 py-24">
      {/* 1. TOP BADGE HEADER */}
      <div className="flex justify-center mb-20">
        <div className="flex items-center bg-white border border-stone-200 rounded-full pl-8 pr-1 py-1 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-black mr-4">
            Service Portfolio
          </span>
          <div className="bg-[#C5A059] text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg">
            03
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* HEADER TEXT */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif text-black leading-tight mb-6">
            Entertainment <span className="italic text-[#C5A059]">Collectives.</span>
          </h2>
          <p className="text-stone-400 font-light text-base max-w-2xl mx-auto leading-relaxed">
            From intimate soloists to high-impact ensembles, we provide a spectrum of 
            world-class talent curated for the distinguished wedding stage.
          </p>
        </div>

        {/* 3x3 GRID OF INTEGRATED DARK CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-[#0A0A0A] rounded-[3rem] overflow-hidden flex flex-col h-full shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* IMAGE SECTION */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                {/* Floating Diamond Badge */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Diamond className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/20" />
                </div>
              </div>

              {/* CONTENT SECTION */}
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-[#C5A059] transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-400 font-light text-sm leading-relaxed mb-10">
                  {service.desc}
                </p>

                {/* FOOTER SECTION */}
                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#C5A059]">
                    Request Curation
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}