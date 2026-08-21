"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { 
  Music, 
  GlassWater, 
  Sparkles, 
  Zap, 
  Volume2, 
  Diamond 
} from "lucide-react"

const weddingSteps = [
  {
    title: "The Ceremony",
    desc: "Bespoke processionals and recessionals. We curate the exact emotional frequency for your 'I Do' moment.",
    icon: <Music className="w-5 h-5" />,
  },
  {
    title: "Cocktail Hour",
    desc: "Sophisticated jazz or acoustic textures designed to elevate social energy and guest networking.",
    icon: <GlassWater className="w-5 h-5" />,
  },
  {
    title: "The Reception",
    desc: "Grand entrances and curated dinner sets that transition seamlessly from elegance to celebration.",
    icon: <Sparkles className="w-5 h-5" />,
  },
  {
    title: "The After Party",
    desc: "High-impact DJ fusions with live brass and percussion to sustain the floor's energy until the final curtain.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Sound Design & Production",
    desc: "Acoustic calibration and discrete technical execution. High-fidelity sound that fills the room without clutter.",
    icon: <Volume2 className="w-5 h-5" />,
  }
]

export function WeddingExperience() {
  return (
    <section className="bg-white py-24">
      {/* 1. TOP BADGE HEADER */}
      <div className="flex justify-center mb-20">
        <div className="flex items-center bg-white border border-stone-200 rounded-full pl-8 pr-1 py-1 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-black mr-4">
            Wedding Curation
          </span>
          <div className="bg-[#0A0A0A] text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg">
            02
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* 2. LEFT COLUMN: CONTENT */}
          <div className="lg:col-span-6">
            <div className="flex">
              {/* Vertical Accent Bar */}
              <div className="w-[3px] bg-[#C5A059] mr-8" />
              
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 font-bold mb-4">
                  Our Approach
                </span>
                <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight mb-8">
                  Tailoring the <span className="italic text-[#C5A059]">Perfect Soundtrack</span> For Your Wedding.
                </h2>
              </div>
            </div>

            <p className="text-stone-400 font-light text-base leading-relaxed mb-12 ml-9">
              We provide beautiful, live piano and acoustic guitar music that matches each moment of your special day, ensuring a seamless and elegant experience for you and your guests.
            </p>

            {/* FEATURES LIST */}
            <div className="space-y-0 ml-9">
              {weddingSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-start py-6">
                    {/* Icon Box */}
                    <div className="w-12 h-12 flex-shrink-0 border border-[#C5A059]/30 rounded-none flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-white transition-all duration-500">
                      {step.icon}
                    </div>
                    
                    <div className="ml-6">
                      <h3 className="text-lg font-bold text-black uppercase tracking-tight mb-1">
                        {step.title}
                      </h3>
                      <p className="text-stone-400 text-sm font-light leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  {/* Divider (Hidden on last item) */}
                  {index !== weddingSteps.length - 1 && (
                    <div className="h-[1px] w-full bg-stone-100" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* 3. RIGHT COLUMN: IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6 sticky top-32"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl">
              <Image 
                src="/wedding.webp" // High-end wedding shot
                alt="The Elev8 Wedding Experience"
                fill
                className="object-cover transition-transform duration-[4000ms] hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5" />
              
              {/* Floating Badge */}
              <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-md p-6 border border-[#C5A059]/20 shadow-xl">
                <Diamond className="w-6 h-6 text-[#C5A059] mb-2" />
                <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-black">
                  Elite <br /> Standard
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}