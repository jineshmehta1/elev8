"use client"

import { motion } from "framer-motion"
import { Sparkles, PenTool, ShieldCheck, Crown, Heart, UserCheck, Diamond } from "lucide-react"

const values = [
  {
    icon: <Crown className="w-6 h-6" />,
    title: "Excellence",
    desc: "We settle for nothing less than world-class performance, ensuring every note is executed with absolute precision."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Creativity",
    desc: "Beyond traditional play, we approach every event as a blank canvas for unique sonic storytelling."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Reliability",
    desc: "Discretion and punctuality are our foundations. We manage the logistics so you can remain in the moment."
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Professionalism",
    desc: "Our artists embody the prestige of your venue, presenting a visual standard of elite hospitality."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Passion",
    desc: "Technique is nothing without emotion. We perform with a deep-rooted passion that resonates in the room."
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "Client First",
    desc: "Your vision is our north star. We curate every detail to align with your personal definition of luxury."
  }
]

export function OurValues() {
  return (
    <section className="bg-white py-14 md:py-14 overflow-hidden relative">
      
      {/* 1. BACKGROUND DECORATION */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-serif text-black leading-none uppercase tracking-[0.2em]">Values</span>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* HEADER - Updated sizes to 3xl and 5xl */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-2 bg-stone-50 border border-[#C5A059]/30 rounded-full mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">
              Our Core DNA
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl lg:text-5xl font-serif text-black leading-tight"
          >
            The Values of <span className="italic text-[#C5A059]">Resonance</span>
          </motion.h2>
        </div>

        {/* 2. THE VALUES GRID - Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative bg-[#0A0A0A] p-10 md:p-12 rounded-[2.5rem] border border-white/5 overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-500 mb-10">
                {value.icon}
              </div>

              <h3 className="text-xl md:text-2xl font-serif text-white mb-6 group-hover:text-[#C5A059] transition-colors duration-300">
                {value.title}
              </h3>

              <p className="text-white/40 font-light text-sm md:text-base leading-relaxed group-hover:text-white/70 transition-colors">
                {value.desc}
              </p>

              {/* Decorative Corner Detail */}
              <div className="absolute -bottom-4 -right-4 opacity-5 group-hover:opacity-20 transition-opacity duration-700">
                 <Diamond className="w-16 h-16 text-[#C5A059]" />
              </div>
            </motion.div>
          ))}
        </div>

       

      </div>
    </section>
  )
}