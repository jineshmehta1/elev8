"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote: "The atmosphere Julian created for our gala was nothing short of cinematic. It wasn't just background music; it was the soul of the evening.",
    author: "Isabella Montgomery",
    role: "Director of Events, The Ritz-Carlton",
    image: "/1t.webp"
  },
  {
    quote: "Finding a musician who understands both classical precision and modern atmosphere is rare. Elev8 is in a league of its own.",
    author: "Marcus Chen",
    role: "Private Estate Client",
    image: "/2t.webp"
  },
  {
    quote: "Professional, discrete, and profoundly talented. They transformed our garden wedding into an ethereal experience we will never forget.",
    author: "Sophia Laurent",
    role: "Luxury Bridal Client",
    image: "/3t.webp"
  }
]

export function TestimonialsSection() {
  return (
    <section className="bg-stone-50 py-24 md:py-40 overflow-hidden relative">
      
      {/* 1. LARGE BACKGROUND WATERMARK */}
      <div className="absolute top-10 left-10 opacity-[0.03] pointer-events-none select-none">
        <Quote className="w-[30vw] h-[30vw] text-black" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-5 py-2 bg-white border border-[#C5A059]/30 rounded-full mb-6"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">
              Testimonials
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight">
            Voices of <span className="italic text-stone-400 font-light font-serif">Resonance</span>
          </h2>
          <p className="mt-6 text-stone-500 font-light text-lg max-w-xl">
            Real reflections from the world’s most distinguished hosts and venues.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT SIDE: THE BIG STATEMENT */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col items-start"
          >
            <div className="w-16 h-16 bg-[#C5A059] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#C5A059]/20">
              <Quote className="w-8 h-8 text-white fill-current" />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-serif text-black leading-tight mb-8">
              "More than a performance, it’s an <span className="italic text-[#C5A059]">atmospheric shift</span> we curate together."
            </h3>
            
            <div className="w-20 h-[2px] bg-[#C5A059] mb-12" />

            {/* Subtle Piano/Artistic Image (Like the Chess Piece) */}
            <div className="relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden grayscale opacity-90 hover:grayscale-0 transition-all duration-1000">
              <Image 
                src="/piano3.webp" 
                alt="Close-up of piano keys during a live wedding performance in Dublin"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT SIDE: THE CARDS */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-10 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-stone-100 flex flex-col justify-between flex-1 group hover:-translate-y-2 transition-all duration-500"
                >
                  <div>
                    <div className="flex justify-between items-center mb-8">
                       <Quote className="w-8 h-8 text-[#C5A059]/20 group-hover:text-[#C5A059] transition-colors duration-500" />
                       <div className="flex space-x-1">
                         {[...Array(5)].map((_, i) => (
                           <Star key={i} className="w-3 h-3 text-[#C5A059] fill-[#C5A059]" />
                         ))}
                       </div>
                    </div>
                    <p className="text-stone-600 font-light leading-relaxed mb-10 text-base italic">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 border-t border-stone-50 pt-8">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden grayscale">
                      <Image src={t.image} alt={t.author} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-black tracking-wide">{t.author}</h4>
                      <p className="text-[10px] uppercase tracking-widest text-[#C5A059] mt-1 font-medium">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}