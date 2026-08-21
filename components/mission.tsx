"use client"

import { motion } from "framer-motion"
import { Eye, Target, Diamond } from "lucide-react"

export function MissionVision() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      {/* THE LAYOUT ENGINE: Stacks on Mobile, Side-by-side on Desktop */}
      <div className="flex flex-col lg:flex-row min-h-screen lg:h-[80vh]">
        
        {/* 1. LEFT SECTION (VISION) - DARK BOX */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center p-10 sm:p-16 lg:p-24 overflow-visible">
          
          {/* THE DIAGONAL BACKGROUND: Becomes a standard block on mobile */}
          <div 
            className="absolute inset-0 bg-[#0A0A0A] z-0"
            style={{
              // Clip path only applies to screens larger than 1024px (lg)
              // This is handled via a CSS variable or standard responsive logic
            }}
            // We use a simple class for the responsive clip-path effect
            className="absolute inset-0 bg-[#0A0A0A] z-0 lg:[clip-path:polygon(0_0,100%_0,80%_100%,0%_100%)] lg:w-[120%]"
          />

          {/* CONTENT (Vision) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-md text-left"
          >
            <div className="flex items-center space-x-4 mb-8">
                <div className="w-10 h-10 rounded-full border border-[#C5A059]/30 flex items-center justify-center">
                    <Eye className="w-4 h-4 text-[#C5A059]" />
                </div>
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] font-bold">The Future</span>
            </div>

            {/* Responsive Heading: 3xl to 5xl */}
            <h2 className="text-3xl lg:text-5xl font-serif text-white mb-8">
              Our <span className="italic text-[#C5A059]">Vision</span>
            </h2>

            <p className="text-white/60 text-base lg:text-xl font-light leading-relaxed font-serif italic">
              "To become the most trusted architecture for luxury entertainment, 
              redefining how atmosphere is curated on a global scale."
            </p>
          </motion.div>
        </div>

        {/* 2. RIGHT SECTION (MISSION) - WHITE BOX */}
        <div className="relative w-full lg:w-1/2 flex items-center justify-center p-10 sm:p-16 lg:p-24 lg:pl-32">
          
          {/* CONTENT (Mission) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-md text-left"
          >
            <div className="flex items-center space-x-4 mb-8">
                <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center">
                    <Target className="w-4 h-4 text-[#C5A059]" />
                </div>
                <span className="text-[10px] tracking-[0.5em] uppercase text-stone-400 font-bold">The Purpose</span>
            </div>

            {/* Responsive Heading: 3xl to 5xl */}
            <h2 className="text-3xl lg:text-5xl font-serif text-black mb-8">
              Our <span className="italic text-stone-400">Mission</span>
            </h2>

            <p className="text-stone-500 text-base lg:text-xl font-light leading-relaxed font-serif italic">
              "To deliver unforgettable musical experiences by orchestrating the 
              perfect intersection of world-class artistry and discrete hospitality."
            </p>

            <div className="mt-2 opacity-30">
               <Diamond className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
            </div>
          </motion.div>
        </div>

      </div>

      {/* BACKGROUND DECORATION: Scaled down for mobile */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[40vw] lg:text-[25vw] font-serif text-black leading-none">E8</span>
      </div>
    </section>
  )
}