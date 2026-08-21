"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MapPin, Zap, Users, Music, Diamond } from "lucide-react"

const corporateFeatures = [
  {
    title: "Regional Residency",
    desc: "Principally serving the prestigious venues of Dublin, Kildare, Wicklow, and the Atlantic coast of Clare.",
    icon: <MapPin className="w-5 h-5" />,
    color: "bg-stone-50"
  },
  {
    title: "Acoustic Autonomy",
    desc: "We provide a high-quality portable grand and professional PA system for venues without a resident piano.",
    icon: <Zap className="w-5 h-5" />,
    color: "bg-[#C5A059]/10"
  },
  {
    title: "The Signature Duo",
    desc: "Tony frequently performs with expert guitarist Plamen Panov, offering a high-energy duo for any corporate scale.",
    icon: <Users className="w-5 h-5" />,
    color: "bg-stone-50"
  },
  {
    title: "Repertoire Mastery",
    desc: "Spanning Classical, Jazz, R&B, and Contemporary hits, curated specifically for your event's crowd.",
    icon: <Music className="w-5 h-5" />,
    color: "bg-zinc-50"
  }
]

export function WhyChooseCorporate() {
  return (
    <section className="bg-white py-12 md:py-16 overflow-hidden">
      
      {/* SECTION PILL INDICATOR */}
      <div className="flex justify-center mb-20">
        <div className="flex items-center bg-white border border-stone-200 rounded-full pl-8 pr-1 py-1 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-black mr-6">The Brand Standard</span>
          <div className="bg-[#C5A059] text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg">07</div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: FEATURE STACK & HEADING */}
          <div className="lg:col-span-6 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl lg:text-5xl font-serif text-black mb-12 leading-tight">
                The Corporate <br /> 
                <span className="italic text-[#C5A059]">Prestige & Reliability.</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {corporateFeatures.map((f, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-stone-100 group hover:border-[#C5A059]/30 transition-all duration-500 rounded-xl"
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#C5A059] ${f.color} group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-500 rounded-lg shadow-sm`}>
                      {f.icon}
                    </div>
                    <div className="ml-8">
                      <h3 className="text-sm font-bold text-black uppercase tracking-[0.1em] mb-1">
                        {f.title}
                      </h3>
                      <p className="text-stone-400 text-sm font-light leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: ARCHITECTURAL MASKED IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Architectural Mask: Rounded TL and BR like requested */}
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl border-[15px] border-stone-50 rounded-tl-[160px] rounded-br-[160px] rounded-tr-[20px] rounded-bl-[20px] group">
              <Image 
                src="/corpmusic.webp" 
                alt="Tony Devine - Corporate Prestige" 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[3000ms] group-hover:scale-110" 
              />
              
              {/* Overlay Label */}
              <div className="absolute bottom-10 left-10 bg-white/95 backdrop-blur-md p-6 border-l-4 border-[#C5A059] shadow-2xl">
                <Diamond className="w-5 h-5 text-[#C5A059] mb-3" />
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-black">Aesthetic Curation</p>
              </div>

              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Corner Decorative Star */}
            <div className="absolute top-10 right-10">
              <Diamond className="w-6 h-6 text-white opacity-40 group-hover:text-[#C5A059] transition-all duration-500" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}