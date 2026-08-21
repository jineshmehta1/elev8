"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Sparkles, Music, Maximize, Heart, PenTool, Award, Diamond } from "lucide-react"

const leftBenefits = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Sophisticated Atmosphere",
    desc: "Elevating the energy of your venue with a touch of timeless class."
  },
  {
    icon: <Music className="w-5 h-5" />,
    title: "Timeless Repertoire",
    desc: "A curated selection of classics and contemporary masterpieces."
  },
  {
    icon: <Maximize className="w-5 h-5" />,
    title: "Versatile Scale",
    desc: "Perfectly suited for grand ballrooms or intimate private parlors."
  }
]

const rightBenefits = [
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Lasting Memories",
    desc: "Creating an emotional resonance that guests will discuss for years."
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "Bespoke Requests",
    desc: "Tailoring the setlist to include the melodies that matter most to you."
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Elite Artistry",
    desc: "Performances by world-class virtuosos with a passion for perfection."
  }
]

export function WhyLivePiano() {
  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-20 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-5 py-1.5 bg-stone-50 border border-[#C5A059]/30 rounded-full mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">
              The Experience
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-serif text-black leading-tight max-w-2xl"
          >
            Why Choose <br /> <span className="italic text-[#C5A059]">Live Piano Artistry?</span>
          </motion.h2>
        </div>

        {/* MAIN SYMMETRIC GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT COLUMN: CARDS */}
          <div className="lg:col-span-4 space-y-8 hidden lg:block">
            {leftBenefits.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#C5A059] p-8 rounded-3xl shadow-xl flex flex-col items-end text-right group hover:-translate-y-2 transition-all duration-500 border border-white/20"
              >
                <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center text-black mb-6 group-hover:bg-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif text-black mb-3 uppercase tracking-wider font-bold">{item.title}</h3>
                <p className="text-black/70 text-sm font-light leading-relaxed max-w-[280px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CENTER COLUMN: THE CINEMATIC IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-4 relative z-10"
          >
            <div className="relative aspect-[3/4.5] w-full max-w-[420px] mx-auto overflow-hidden rounded-[6rem] shadow-2xl border-[1px] border-stone-100 group">
              <Image 
                src="/why2.webp" 
                alt="Live Piano Ambience"
                fill
                className="object-cover transition-transform duration-[4000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
              
              {/* Floating Diamond Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-5 rounded-full shadow-2xl border border-[#C5A059]/20">
                 <Diamond className="w-6 h-6 text-[#C5A059] fill-[#C5A059]/10" />
              </div>
            </div>
          </motion.div>

          {/* MOBILE VIEW ADAPTATION */}
          <div className="lg:hidden space-y-6">
             {[...leftBenefits, ...rightBenefits].map((item, i) => (
                <div key={i} className="bg-[#C5A059] p-8 rounded-3xl flex flex-col items-center text-center shadow-lg border border-white/20">
                    <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center text-black mb-4">{item.icon}</div>
                    <h3 className="text-xl font-serif text-black mb-2 uppercase font-bold">{item.title}</h3>
                    <p className="text-black/70 text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
             ))}
          </div>

          {/* RIGHT COLUMN: CARDS */}
          <div className="lg:col-span-4 space-y-8 hidden lg:block">
            {rightBenefits.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#C5A059] p-8 rounded-3xl shadow-xl flex flex-col items-start text-left group hover:-translate-y-2 transition-all duration-500 border border-white/20"
              >
                <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center text-black mb-6 group-hover:bg-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-lg font-serif text-black mb-3 uppercase tracking-wider font-bold">{item.title}</h3>
                <p className="text-black/70 text-sm font-light leading-relaxed max-w-[280px]">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}