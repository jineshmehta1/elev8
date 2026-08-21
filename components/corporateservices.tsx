"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Diamond } from "lucide-react"

const corporateServices = [
  {
    title: "Hotel & Lobby Residencies",
    desc: "Sophisticated background music curated for luxury receptions and restaurants—enhancing the room without overpowering it.",
    img: "/product.webp",
  },
  {
    title: "Networking & Brand Galas",
    desc: "A tasteful blend of Jazz, Blues, and R&B designed to facilitate high-level conversation and elite engagement.",
    img: "/network.webp",
  },
  {
    title: "Award Ceremony Stings",
    desc: "Cinematic musical walk-ups and prestige interludes tailored for high-stakes recognition and stage presence.",
    img: "/award.webp",
  },
  {
    title: "The Collective Showband",
    desc: "A full-scale musical collective led by Tony Devine for grand celebrations, holiday parties, and milestones.",
    img: "/gala.webp",
  },
  {
    title: "Piano & Guitar Duo",
    desc: "Tony Devine & expert guitarist Plamen Panov provide a high-energy fusion for bars and lively lounge environments.",
    img: "/dj.webp",
  },
  {
    title: "Technical Autonomy",
    desc: "We provide our own premium portable grand piano and PA systems, ensuring world-class sound for any luxury venue.",
    img: "/tech.webp",
  },
]

export function CorporateServices() {
  return (
    <section className="bg-white py-12 md:py-16">
      
      {/* SECTION INDICATOR */}
      <div className="flex justify-center mb-20">
        <div className="flex items-center bg-white border border-stone-200 rounded-full pl-8 pr-1 py-1 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-black mr-4">Corporate & Hotel Portfolio</span>
          <div className="bg-[#C5A059] text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg">05</div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        {/* HEADER: 3xl Mobile / 5xl Desktop */}
        <div className="text-center mb-24">
          <h2 className="text-3xl lg:text-5xl font-serif text-black leading-tight mb-6">
            Hotel & Corporate <span className="italic text-[#C5A059]">Excellence.</span>
          </h2>
          <p className="text-stone-400 font-light text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Led by Principal Pianist Tony Devine, providing architectural sound design for the world's most distinguished corporate brands and hotel residencies.
          </p>
        </div>

        {/* THE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {corporateServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group bg-[#0A0A0A] rounded-[3rem] overflow-hidden flex flex-col h-full shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/5"
            >
              {/* IMAGE HEADER */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image 
                  src={service.img} 
                  alt={service.title} 
                  fill 
                  className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale group-hover:grayscale-0" 
                />
                
                {/* Floating Detail */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Diamond className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/20" />
                </div>
              </div>

              {/* CONTENT BODY */}
              <div className="p-10 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-[#C5A059] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-white/40 font-light text-sm leading-relaxed mb-10 group-hover:text-white/60 transition-colors">
                  {service.desc}
                </p>

                {/* INTERACTIVE FOOTER */}
                <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-[0.4em] font-bold text-[#C5A059] opacity-80 group-hover:opacity-100 transition-opacity">
                    Inquire Specialty
                  </span>
                  
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black group-hover:border-[#C5A059] transition-all duration-500">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
              
              {/* Subtle Ambient Background Detail */}
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#C5A059]/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#C5A059]/10 transition-colors duration-700" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM DECORATIVE THREAD */}
        <div className="mt-24 flex flex-col items-center opacity-10">
            <div className="w-[1px] h-24 bg-gradient-to-b from-black to-transparent" />
        </div>
      </div>
    </section>
  )
}