"use client"

import { motion } from "framer-motion"
import { Check, Diamond } from "lucide-react"

const points = [
  "We will be on time",
  "We dress for the occasion",
  "We have over 30 years experience!",
  "Enjoy a huge variety of songs & styles!",
  "We are reliable & trustworthy.",
  "We provide all instruments and quality engineered sound",
  "Make your event memorable!",
  "Our client testimonials speak for themselves",
  "We can help add that touch of class to the occasion!"
]

export function MusicForEveryOccasion() {
  return (
    <section className="bg-[#050505] py-24 md:py-32 relative overflow-hidden">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C5A059]/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center space-x-3 mb-6"
          >
            <div className="w-8 h-px bg-[#C5A059]/40" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">
              Our Promise
            </span>
            <div className="w-8 h-px bg-[#C5A059]/40" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
            Music for <br className="md:hidden" /><span className="italic text-[#C5A059]">Every Occasion</span>
          </h2>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {points.map((point, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative bg-white/[0.02] backdrop-blur-sm border border-[#C5A059]/10 p-8 rounded-2xl hover:bg-[#C5A059]/5 hover:border-[#C5A059]/30 transition-all duration-500 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-start gap-5">
                <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full border border-[#C5A059]/20 flex items-center justify-center bg-black/20 group-hover:bg-[#C5A059]/10 group-hover:border-[#C5A059]/50 transition-all duration-500">
                  <Check className="w-4 h-4 text-[#C5A059]" />
                </div>
                <div className="flex-1">
                  <p className="text-white/80 font-light leading-relaxed group-hover:text-white transition-colors duration-500 text-[15px]">
                    {point}
                  </p>
                </div>
              </div>

              {/* Decorative Number */}
              <div className="absolute top-4 right-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <span className="font-serif italic text-6xl text-white">
                  0{i + 1}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
