"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Music, Mic2, Users, Sparkles, ArrowRight, Diamond } from "lucide-react"

const packages = [
  {
    title: "Solo Pianist",
    desc: "The pure, timeless resonance of the grand piano. Elegant solo performance curated for intimate atmospheres.",
    image: "/solo.webp",
    icon: <Music className="w-5 h-5" />,
    tag: "The Foundation"
  },
  {
    title: "Piano + Vocalist",
    desc: "A soulful human layer added to the keys. Perfect for storytelling and deep emotional connection.",
    image: "/pivo.webp",
    icon: <Mic2 className="w-5 h-5" />,
    tag: "The Dialogue"
  },
  {
    title: "Piano Trio",
    desc: "A rhythmic fusion of piano, upright bass, and drums. Bringing sophisticated energy and jazz-hour warmth.",
    image: "/trio.webp",
    icon: <Users className="w-5 h-5" />,
    tag: "The Groove"
  },
  {
    title: "Luxury Ensemble",
    desc: "The ultimate cinematic experience. Piano accompanied by strings or a full chamber collective.",
    image: "/emsem.webp",
    icon: <Sparkles className="w-5 h-5" />,
    tag: "The Grand act"
  }
]

export function PianoPackages() {
  return (
    <section className="bg-white py-14 md:py-14 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* 1. SECTION HEADER - 5xl Desktop / 3xl Mobile */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-1.5 bg-stone-50 border border-[#C5A059]/30 rounded-full mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">
              The Curation
            </span>
          </motion.div>
          
          <h2 className="text-3xl lg:text-5xl font-serif text-black leading-tight">
            Performance <span className="italic text-[#C5A059]">Packages</span>
          </h2>
        </div>

        {/* 2. THE GRID (Balanced 4-Column) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative bg-[#0A0A0A] rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col h-full hover:-translate-y-3 transition-all duration-500 border border-white/5"
            >
              {/* IMAGE HEADER (Fixed aspect for balance) */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-[4000ms] group-hover:scale-110 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                
                {/* Float Badge */}
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-black/40 backdrop-blur-md border border-white/10 rounded-full">
                    <span className="text-[8px] tracking-[0.2em] text-white/60 uppercase font-bold">{pkg.tag}</span>
                </div>
              </div>

              {/* CONTENT BODY */}
              <div className="p-8 md:p-10 flex flex-col flex-grow">
                {/* Icon Circle */}
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059] mb-8 group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-500">
                  {pkg.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-serif text-white mb-4 group-hover:text-[#C5A059] transition-colors">
                  {pkg.title}
                </h3>
                
                <p className="text-white/40 font-light text-xs md:text-sm leading-relaxed mb-10 group-hover:text-white/60 transition-colors">
                  {pkg.desc}
                </p>

                {/* Interactive Footer */}
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                   <div className="flex items-center space-x-3 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                     <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Request</span>
                     <ArrowRight className="w-3 h-3" />
                   </div>
                   <Diamond className="w-3 h-3 text-white/5 group-hover:text-[#C5A059]/20 transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. CENTERED FOOTNOTE */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center"
        >
            <p className="text-stone-300 text-[10px] tracking-[0.4em] uppercase">
                All packages include bespoke repertoire curation
            </p>
            <div className="mt-8 flex justify-center opacity-10">
                <div className="w-[1px] h-20 bg-gradient-to-b from-black to-transparent" />
            </div>
        </motion.div>

      </div>
    </section>
  )
}