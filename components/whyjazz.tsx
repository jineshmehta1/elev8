"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Music, Mic2, Star, Trophy, GlassWater, Diamond, ArrowRight } from "lucide-react"

const jazzFeatures = [
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Virtuoso Talent",
    desc: "Performers vetted from the world’s elite jazz conservatories."
  },
  {
    icon: <Star className="w-5 h-5" />,
    title: "Curated Style",
    desc: "From timeless swing to smooth bossa nova and modern jazz."
  },
  {
    icon: <Mic2 className="w-5 h-5" />,
    title: "Acoustic Balance",
    desc: "Perfectly calibrated volume levels for high-end conversation."
  },
  {
    icon: <GlassWater className="w-5 h-5" />,
    title: "Lounge Purity",
    desc: "Transforming physical venues into soulful, spiritual memories."
  }
]

export function WhyElev8() {
  return (
    <section className="bg-white py-16 md:py-32 lg:py-44 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          
          {/* LEFT SIDE: ARCHED IMAGE & OVERLAP (Responsive Column 5) */}
          <div className="lg:col-span-5 relative order-1">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full rounded-br-[60px] md:rounded-br-[80px] rounded-tl-[120px] md:rounded-tl-[160px] overflow-hidden shadow-2xl bg-stone-100 border border-stone-100"
            >
              <Image 
                src="/whyjazz.webp" 
                alt="Elite Jazz Performance"
                fill
                className="object-cover transition-transform duration-[3000ms] hover:scale-105"
                priority
              />
              {/* Subtle Gold Tint Overlay */}
              <div className="absolute inset-0 bg-[#C5A059]/5 mix-blend-multiply" />
            </motion.div>
            
            {/* OVERLAPPING GOLD BOX (Responsive Badge) */}
            <motion.div 
              initial={{ scale: 0, rotate: -15 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
              className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 w-16 h-16 md:w-24 md:h-24 bg-[#C5A059] flex items-center justify-center shadow-2xl z-20"
            >
              <Music className="w-8 h-8 md:w-12 md:h-12 text-white" strokeWidth={1.5} />
            </motion.div>

            {/* Decorative Arcs Behind Image */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-[#C5A059]/20 rounded-tr-[100px] -z-10 hidden md:block" />
          </div>

          {/* RIGHT SIDE: CONTENT GRID (Responsive Column 7) */}
          <div className="lg:col-span-7 flex flex-col order-2">
            {/* SUB-HEADER */}
            <div className="flex items-center space-x-3 mb-6">
              <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/20" />
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-[#C5A059]">
                The Jazz Standard
              </span>
            </div>

            {/* MAIN HEADLINE: Strict 3xl to 5xl Scale */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-black leading-tight mb-8"
            >
              When You <span className="bg-[#C5A059] text-white px-3 md:px-5 py-0.5 inline-block transform -rotate-1">Desire</span> Sophistication. <br className="hidden sm:block" />
              Atmospheric <span className="italic text-[#C5A059]">Jazz Artistry.</span>
            </motion.h2>

            <p className="text-stone-500 font-light text-base md:text-lg leading-relaxed mb-12 max-w-xl">
              Elev8 provides a curated collective of world-class jazz virtuosos. 
              From smoky lounge trios to grand gala ensembles, we design the 
              perfect blue-note landscape for your distinguished gathering.
            </p>

            {/* 2X2 FEATURE GRID: Responsive flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 md:gap-x-12 gap-y-10 md:gap-y-12">
              {jazzFeatures.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-5 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-500">
                     {f.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-black mb-2 transition-colors group-hover:text-[#C5A059]">
                      {f.title}
                    </h4>
                    <p className="text-stone-400 text-xs md:text-sm font-light leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* BOTTOM CTA LINK */}
            <div className="mt-16 flex items-center space-x-4 group cursor-pointer w-fit">
                <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-black border-b border-black/10 pb-1 group-hover:border-[#C5A059] transition-all">
                  View Full Repertoire
                </span>
                <ArrowRight className="w-4 h-4 text-[#C5A059] group-hover:translate-x-2 transition-transform" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}