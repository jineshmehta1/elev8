"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Users, CalendarCheck, Globe, Award, Diamond } from "lucide-react"

const features = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Curated Virtuosos",
    desc: "A handpicked collective of world-class performers vetted for elite hospitality standards."
  },
  {
    icon: <CalendarCheck className="w-5 h-5" />,
    title: "White-Glove Process",
    desc: "A seamless, discrete booking and coordination experience from first note to final curtain."
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Global Reach",
    desc: "Bringing atmospheric excellence to luxury residencies and private estates worldwide."
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: "Premium Quality",
    desc: "Uncompromising standards in both acoustic performance and visual presentation."
  }
]

export function WhyChooseElev8() {
  return (
    <section className="bg-stone-50 py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* 1. CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-5 py-1.5 bg-white border border-[#C5A059]/30 rounded-full mb-6"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">
              Why Choose Us
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-serif text-black leading-tight">
            Defining the <span className="italic text-[#C5A059]">Elev8 Standard</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* 2. LEFT SIDE: STACKED FEATURE CARDS (GOLDEN BG) */}
          <div className="lg:col-span-6 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                // Updated to Golden Background
                className="group bg-[#C5A059] p-8 rounded-2xl shadow-[0_20px_50px_rgba(197,160,89,0.2)] hover:shadow-[0_20px_60px_rgba(197,160,89,0.4)] hover:-translate-y-1 transition-all duration-500 flex items-start space-x-6 border border-white/20"
              >
                {/* Icon Container: Darker contrast against gold */}
                <div className="w-12 h-12 rounded-xl bg-black/10 flex items-center justify-center text-black group-hover:bg-black group-hover:text-[#C5A059] transition-colors duration-500 flex-shrink-0">
                  {feature.icon}
                </div>
                
                <div>
                  {/* Title: Black for high-end legibility on gold */}
                  <h3 className="text-[14px] tracking-[0.1em] uppercase font-bold text-black mb-2">
                    {feature.title}
                  </h3>
                  {/* Description: Muted black/brown for elegant contrast */}
                  <p className="text-black/70 text-sm font-light leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3. RIGHT SIDE: ARCHITECTURAL IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[5/5] w-full overflow-hidden rounded-tl-[8rem] rounded-br-[8rem] rounded-tr-[2rem] rounded-bl-[2rem] shadow-2xl border-[1px] border-[#C5A059]/20 group">
              <Image 
                src="/why.webp" 
                alt="Luxury Musical Standard"
                fill
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>

            {/* Decorative Gold Badge */}
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl border border-stone-100">
                <Diamond className="w-6 h-6 text-[#C5A059] fill-[#C5A059]/10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}