"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check, ChevronRight } from "lucide-react"
import Link from "next/link"

const curationPrograms = [
  {
    id: "01",
    title: "The Soloist",
    tagline: "INTIMACY & RESONANCE",
    description: "Master the art of silence and subtle melody. Designed for private dinners and gallery openings.",
    image: "/soloist.webp",
    alt: "Solo pianist performing intimate background music at a private dinner in Dublin",
    features: ["Felted Piano", "Minimalist", "Spatial Tuning", "Atmosphere"],
    focus: "Intimacy",
    intensity: 40,
    link: "/events/private",
    buttonText: "Explore Private Party Music"
  },
  {
    id: "02",
    title: "The Chamber",
    tagline: "DIALOGUE & TEXTURE",
    description: "A sophisticated conversation between piano and strings. Perfect for high-end cocktail hours.",
    image: "/chamber.webp",
    alt: "Piano and cello chamber duo performing at a luxury cocktail reception in Ireland",
    features: ["Piano & Cello", "Modern Fusion", "Soundscapes", "Ensemble Flow"],
    focus: "Dialogue",
    intensity: 65,
    link: "/events/corporate",
    buttonText: "View Corporate Entertainment"
  },
  {
    id: "03",
    title: "The Grand",
    tagline: "IMPACT & CELEBRATION",
    description: "Full-bodied sound designed to fill grand halls. The definitive choice for galas and weddings.",
    image: "/grand.webp",
    alt: "Grand piano and jazz quartet performing at a gala wedding celebration in Wicklow",
    features: ["Jazz Quartet", "Grand Piano", "High-Energy", "Finales"],
    focus: "Energy",
    intensity: 95,
    link: "/events/weddings",
    buttonText: "Explore Wedding Packages"
  }
]

export function EventExperiences() {
  return (
    <section className="bg-white py-16 md:py-28 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* SECTION HEADING: Responsive 3xl to 5xl */}
        <div className="mb-10 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] font-bold mb-3 block"
          >
            Bespoke Musical Tiers
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight">
            The Curation <span className="italic text-stone-400 font-light">Programs</span>
          </h2>
        </div>

        {/* THE RESPONSIVE GRID: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {curationPrograms.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col h-full hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* CINEMA ASPECT RATIO IMAGE (Compact height) */}
              <div className="relative aspect-[21/9] w-full overflow-hidden bg-stone-100">
                <Image
                  src={program.image}
                  alt={program.alt}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                
                {/* ID Badge Overlay */}
                <div className="absolute top-4 left-5 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
                  <span className="text-[8px] text-white tracking-[0.2em] font-bold uppercase">Tier {program.id}</span>
                </div>
              </div>

              {/* CONTENT BODY: Optimized Padding for Mobile */}
              <div className="p-6 sm:p-8 md:p-9 flex flex-col flex-grow">
                <div className="mb-5">
                  <h3 className="text-2xl font-serif text-black mb-1">{program.title}</h3>
                  <p className="text-[9px] tracking-[0.2em] text-[#C5A059] font-bold uppercase">{program.tagline}</p>
                </div>
                
                <p className="text-stone-500 font-light text-sm leading-relaxed mb-8">
                  {program.description}
                </p>

                {/* 2-COLUMN DELIVERABLES: Maintains alignment on small screens */}
                <div className="mb-8 border-t border-stone-50 pt-6">
                  <span className="text-[8px] uppercase tracking-widest text-stone-300 font-bold block mb-4">Included Features</span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {program.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <Check className="w-2.5 h-2.5 text-[#C5A059] flex-shrink-0" />
                        <span className="text-stone-600 text-[11px] font-light truncate">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SLIM FOCUS BAR: Pushed to bottom */}
                <div className="bg-stone-50 p-4 rounded-xl mb-8 mt-auto">
                  <div className="flex justify-between items-end mb-2.5">
                    <span className="text-[8px] uppercase tracking-widest text-stone-400 font-bold">Performance Style</span>
                    <span className="text-xs font-serif italic text-black font-medium">{program.focus}</span>
                  </div>
                  <div className="h-[2px] w-full bg-stone-200 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${program.intensity}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-[#C5A059]"
                    />
                  </div>
                </div>

                {/* BUTTON: Full-width on mobile for better touch target */}
                <Link href={program.link} className="w-full">
                  <button className="w-full py-4.5 rounded-xl bg-black text-white flex items-center justify-center space-x-3 group/btn hover:bg-[#C5A059] transition-all duration-500 shadow-lg shadow-black/5">
                     <span className="text-[10px] tracking-[0.2em] uppercase font-bold">{program.buttonText}</span>
                     <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center group-hover/btn:bg-white/20 transition-colors">
                      <ChevronRight className="w-3 h-3 text-white transition-transform group-hover/btn:translate-x-0.5" />
                     </div>
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      
      </div>
    </section>
  )
}