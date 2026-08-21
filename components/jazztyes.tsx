"use client"

import { motion } from "framer-motion"
import { Music, Users, Mic2, Star, Plus, ArrowRight, Diamond } from "lucide-react"
import Image from "next/image"

const ensembles = [
  {
    title: "Jazz Duo",
    sub: "Piano & Bass / Sax",
    desc: "Intimate and discrete. The perfect dialogue for low-lit dinner settings and private parlors.",
    icon: <Users className="w-5 h-5" />,
    id: "01"
  },
  {
    title: "Jazz Trio",
    sub: "The Classic Sound",
    desc: "Piano, Bass, and Drums. The definitive signature for sophisticated cocktail hours and receptions.",
    icon: <Music className="w-5 h-5" />,
    id: "02"
  },
  {
    title: "Jazz Quartet",
    sub: "Dynamic Grandeur",
    desc: "Adding a horn or vocalist to the trio. A full cinematic experience for grand celebrations.",
    icon: <Mic2 className="w-5 h-5" />,
    id: "03"
  },
  {
    title: "Jazz Quintet",
    sub: "High-Impact Energy",
    desc: "A full ensemble with multiple horns. Designed for brand launches and large-scale galas.",
    icon: <Star className="w-5 h-5" />,
    id: "04"
  }
]

export function EnsembleOptions() {
  return (
    <section className="bg-white py-14 md:py-14 overflow-hidden relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: THE NARRATIVE (Mirroring Screenshot Layout) */}
          <div className="lg:col-span-5 lg:sticky lg:top-40">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Diamond className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/20" />
                <span className="text-[10px] tracking-[0.5em] uppercase text-stone-400 font-bold">The Tiers</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-8">
                The Anatomy of <br /> 
                <span className="italic text-[#C5A059]">Sonic Curation.</span>
              </h2>

              <p className="text-stone-500 font-light text-lg leading-relaxed mb-10 max-w-md">
                Every space has a different acoustic heartbeat. We offer five distinct 
                ensemble configurations, each designed to match the scale and 
                emotional intent of your event.
              </p>

              {/* UNIQUE CUSTOM ENSEMBLE CALLOUT */}
              <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100 relative group overflow-hidden">
                 <div className="relative z-10">
                    <h4 className="text-[11px] tracking-[0.3em] uppercase text-black font-bold mb-2">Bespoke Option</h4>
                    <h3 className="text-2xl font-serif text-black mb-4 group-hover:text-[#C5A059] transition-colors">Custom Ensemble</h3>
                    <p className="text-stone-400 text-sm font-light mb-6">Need strings, a big band, or a specific soloist? We curate a one-of-one lineup for your vision.</p>
                    <button className="flex items-center space-x-3 text-[#C5A059]">
                       <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Inquire Bespoke</span>
                       <Plus className="w-4 h-4" />
                    </button>
                 </div>
                 <div className="absolute top-0 right-0 opacity-[0.03] translate-x-1/4 -translate-y-1/4">
                    <Star className="w-40 h-40 text-black" />
                 </div>
              </div>

              <button className="mt-12 group bg-black text-white px-10 py-6 rounded-none text-[11px] tracking-[0.3em] uppercase font-bold flex items-center space-x-6 hover:bg-[#C5A059] transition-all duration-500 shadow-2xl">
                <span>View Full Comparison</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: THE GRID (Mirroring Screenshot Cards) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {ensembles.map((ensemble, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative bg-[#0A0A0A] p-10 rounded-[2.5rem] border border-white/5 flex flex-col h-full hover:-translate-y-3 transition-all duration-700 shadow-2xl overflow-hidden"
                >
                  {/* Subtle Background 8 Detail */}
                  <div className="absolute -right-6 -bottom-6 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity duration-700">
                    <span className="text-9xl font-serif italic text-white leading-none">{ensemble.id}</span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059] mb-10 group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-500">
                    {ensemble.icon}
                  </div>

                  <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#C5A059] transition-colors tracking-wide">
                    {ensemble.title}
                  </h3>
                  
                  <p className="text-[10px] tracking-[0.3em] uppercase text-white/30 font-bold mb-6">
                    {ensemble.sub}
                  </p>
                  
                  <p className="text-white/40 font-light text-sm leading-relaxed mb-10 group-hover:text-white/70 transition-colors">
                    {ensemble.desc}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                    <button className="flex items-center space-x-3 text-[#C5A059] opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                       <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Request Availability</span>
                       <Plus className="w-3 h-3" />
                    </button>
                    <Diamond className="w-3 h-3 text-white/5 group-hover:text-[#C5A059]/20 transition-colors" />
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C5A059]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}