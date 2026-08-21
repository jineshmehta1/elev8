"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Building2, Globe, Users, ShieldCheck, Diamond, ArrowRight } from "lucide-react"

const corporateSolutions = [
  {
    title: "Hotel & Lobby Residencies",
    desc: "Sophisticated background music for high-end hotel receptions and restaurants, providing a tasteful blend of Jazz, Blues, and easy-listening Pop.",
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: "Corporate Networking",
    desc: "Refined soundscapes designed to facilitate high-level connection without overpowering conversation. Perfect for VIP cocktail hours and brand galas.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    title: "Ensemble Scalability",
    desc: "Performances led by Tony Devine, featuring expert guitarist Plamen Panov or a full show band collective for larger corporate celebrations.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Acoustic Autonomy",
    desc: "Tony provides a premium portable stage piano and professional PA system, ensuring world-class sound even in venues without a resident instrument.",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
  {
    title: "Bespoke Repertoire",
    desc: "Every setlist is curated. Tony is happy to learn specific requests for your event, ensuring the music aligns with your brand objectives.",
    icon: <Diamond className="w-5 h-5" />,
  }
]

export function CorporateExperience() {
  return (
    <section className="bg-white py-24 md:py-40">
      
      {/* SECTION PILL */}
      <div className="flex justify-center mb-24">
        <div className="flex items-center bg-white border border-stone-200 rounded-full pl-8 pr-1 py-1 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-black mr-6">Corporate & Hotel</span>
          <div className="bg-[#C5A059] text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg">02</div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* items-start is CRITICAL for sticky to work */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: SCROLLABLE CONTENT */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex"
            >
              <div className="w-[2px] bg-[#C5A059] mr-8 hidden md:block" />
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.5em] text-stone-400 font-bold mb-4">Elite Brand Alignment</span>
                <h2 className="text-3xl lg:text-5xl font-serif text-black leading-tight mb-8">
                  Architectural Sound for <br />
                  <span className="italic text-[#C5A059]">Distinguished Venues.</span>
                </h2>
                <p className="text-stone-400 font-light text-lg leading-relaxed max-w-xl">
                  Tony Devine provides world-class musical curation for Dublin, Kildare, and the Atlantic coast’s most prestigious hotels and corporate firms.
                </p>
              </div>
            </motion.div>

            {/* SOLUTIONS LIST */}
            <div className="space-y-4 md:ml-9">
              {corporateSolutions.map((solution, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start py-10 border-b border-stone-100 hover:border-[#0A0A0A] transition-colors duration-500">
                    <div className="w-12 h-12 flex-shrink-0 border border-stone-100 flex items-center justify-center text-[#C5A059] group-hover:bg-[#0A0A0A] group-hover:text-white group-hover:border-[#0A0A0A] transition-all duration-500 rounded-xl">
                      {solution.icon}
                    </div>
                    <div className="ml-8">
                      <h3 className="text-sm font-bold text-black uppercase tracking-[0.2em] mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-stone-400 text-base font-light leading-relaxed max-w-md group-hover:text-stone-600 transition-colors">
                        {solution.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* CTA at end of scroll */}
            <div className="pt-12 md:ml-9">
                <button className="group flex items-center space-x-6 text-black hover:text-[#C5A059] transition-colors">
                    <span className="text-[11px] tracking-[0.4em] uppercase font-bold">Initiate Proposal</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-3" />
                </button>
            </div>
          </div>

          {/* RIGHT: STICKY IMAGE CONTAINER */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] shadow-2xl border border-stone-100"
            >
              <Image 
                src="/corporate.webp" 
                alt="Tony Devine - Hotel Performance" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-[3000ms]" 
              />
              
              {/* PRESTIGE BADGE Overlay */}
              <div className="absolute top-10 left-10 right-10 bg-white/95 backdrop-blur-md p-8 border-l-4 border-[#C5A059] shadow-2xl">
                <Diamond className="w-6 h-6 text-[#C5A059] mb-4" />
                <p className="text-[11px] tracking-[0.4em] uppercase font-bold text-black mb-1">Prestige Residency</p>
                <p className="text-[9px] tracking-[0.2em] uppercase text-stone-400">Dublin • Wicklow • Clare</p>
              </div>

              {/* VIGNETTE */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-40" />
            </motion.div>

            {/* SUBTLE CAPTION */}
            <div className="mt-10 flex flex-col items-end opacity-20">
                <div className="flex items-center space-x-4">
                    <span className="text-[9px] tracking-[0.4em] uppercase text-black font-medium">Elev8 Corporate Solutions</span>
                    <div className="w-16 h-[1px] bg-black" />
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}