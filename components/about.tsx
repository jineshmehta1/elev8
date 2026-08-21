"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export function OurStory() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth parallax for the overlapping architectural layout
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 60])

  return (
    <section ref={containerRef} className="bg-white py-24 md:py-44 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* 1. CENTERED HEADING: 3xl Mobile / 5xl Desktop */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-5 py-1.5 bg-stone-50 border border-[#C5A059]/30 rounded-full mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">
              The Journey
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-black leading-tight max-w-4xl"
          >
            A Symphony of <span className="italic text-[#C5A059]">Artistry & Ambience.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* 2. LEFT SIDE: OVERLAPPING IMAGES (NO GRAYSCALE) */}
          <div className="lg:col-span-6 relative h-[500px] md:h-[750px] flex items-center justify-center">
            
            {/* Background Image: The Atmosphere */}
            <motion.div 
              style={{ y: y1 }}
              className="relative w-4/5 aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl z-0 border border-stone-100"
            >
              <Image 
                src="/about.webp" 
                alt="Tony Devine Performance"
                fill
                className="object-cover"
                priority
              />
              <div className="noise-overlay opacity-[0.08]" /> {/* Noise overlay to blend AI details */}
              <div className="absolute inset-0 bg-stone-900/10" />
            </motion.div>

            {/* Foreground Image: The Human Touch (Tony & Plamen Duo) */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute -right-4 md:-right-10 bottom-20 w-3/5 aspect-square rounded-[2.5rem] overflow-hidden shadow-[-30px_30px_60px_rgba(0,0,0,0.15)] border-[12px] border-white z-10"
            >
              <Image 
                src="/tony_pacco_2.png" 
                alt="Expert Collaboration"
                fill
                className="object-cover"
              />
              <div className="noise-overlay opacity-[0.08]" /> {/* Noise overlay to blend AI details */}
            </motion.div>

            {/* Architectural DNA Watermark */}
            <div className="absolute -left-12 -bottom-12 opacity-[0.04] pointer-events-none select-none">
                <span className="text-[20vw] font-serif italic text-[#C5A059]">8</span>
            </div>
          </div>

          {/* 3. RIGHT SIDE: STYLISH TEXT NARRATIVE (Tony's Story) */}
          <div className="lg:col-span-6 space-y-24 pt-10">
            
            <StoryChapter 
              number="01"
              title="The Founding Vision"
              content="Elev8 Piano was founded by Tony Devine with a singular mission: to redefine the sonic identity of luxury spaces. As a professional freelance pianist, Tony’s journey began with the realization that high-end venues deserved a soundtrack as meticulously designed as their architecture."
            />

            <StoryChapter 
              number="02"
              title="A Mastery of Genre"
              content="Our extensive repertoire spans the emotional spectrum. From the classical precision of the greats and the soulful textures of Jazz and Blues to the high-energy pulse of R&B, Country, and modern hits, we craft setlists that adapt to the heartbeat of the room."
            />

            <StoryChapter 
              number="03"
              title="Collaborative Excellence"
              content="Growth led to the expansion of our sound. Tony frequently performs alongside expert guitarist Plamen Panov. Together, or as part of a full show-band collective, we provide a seamless, memorable musical experience across Dublin, Wicklow, Kildare, and Co. Clare."
            />

            {/* Stylish Quote with Tony's Signature Vibe */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="pl-10 border-l border-[#C5A059]/40 relative"
            >
               <p className="text-2xl font-serif italic text-stone-800 leading-relaxed">
                "We don't just provide music; we curate the soul of the room, ensuring every note resonates with the host’s vision."
               </p>
               <div className="mt-8 flex items-center space-x-4">
                  <div className="w-10 h-[1px] bg-[#C5A059]" />
                  <div className="flex flex-col">
                    <span className="text-[10px] tracking-[0.3em] uppercase text-black font-bold">Tony Devine</span>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#C5A059] font-medium">Principal Artist & Founder</span>
                  </div>
               </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

// HELPER COMPONENT: Stylish Chapter
function StoryChapter({ number, title, content }: { number: string; title: string; content: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center space-x-6 mb-8">
        <span className="text-sm font-serif italic text-[#C5A059] opacity-40 group-hover:opacity-100 transition-opacity">
            {number}.
        </span>
        <h3 className="text-[14px] tracking-[0.4em] uppercase text-black font-bold">
            {title}
        </h3>
      </div>
      <p className="text-stone-500 font-light text-lg leading-relaxed pl-12 border-l border-stone-50 ml-[1.15rem]">
        {content}
      </p>
    </motion.div>
  )
}