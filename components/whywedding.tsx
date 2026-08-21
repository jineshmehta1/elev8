"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { 
  PenTool, 
  Award, 
  Music, 
  CalendarCheck, 
  Volume2, 
  Layout,
  Diamond
} from "lucide-react"

const features = [
  {
    title: "Bespoke Entertainment Design",
    desc: "Every sonic landscape is custom-architected to match the specific DNA of your venue and vision.",
    icon: <PenTool className="w-5 h-5" />,
    color: "bg-[#C5A059]/10"
  },
  {
    title: "Luxury Event Expertise",
    desc: "A decade of experience curating for the world's most distinguished black-tie galas and weddings.",
    icon: <Award className="w-5 h-5" />,
    color: "bg-amber-50"
  },
  {
    title: "World-Class Talent",
    desc: "A hand-selected collective of virtuosos vetted for both technical mastery and elite hospitality.",
    icon: <Music className="w-5 h-5" />,
    color: "bg-stone-50"
  },
  {
    title: "Seamless Coordination",
    desc: "White-glove coordination from first inquiry to the final note, ensuring a stress-free experience.",
    icon: <CalendarCheck className="w-5 h-5" />,
    color: "bg-stone-100"
  },
  {
    title: "Premium Sound Quality",
    desc: "Discrete, high-fidelity audio engineering that fills the room with warmth without visual clutter.",
    icon: <Volume2 className="w-5 h-5" />,
    color: "bg-[#C5A059]/5"
  },
  {
    title: "Personalized Music Programming",
    desc: "Bespoke setlists curated to reflect your personal narrative and the energy of each moment.",
    icon: <Layout className="w-5 h-5" />,
    color: "bg-orange-50"
  }
]

export function WhyChooseElev8() {
  return (
    <section className="bg-stone-50 py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* 1. CENTERED HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-black mb-4">
            Why Couples Choose <span className="italic text-[#C5A059]">Elev8</span>
          </h2>
          <div className="w-20 h-[2px] bg-[#C5A059]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* 2. LEFT COLUMN: VERTICAL FEATURE STACK */}
          <div className="lg:col-span-6 space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-stone-100 group hover:border-[#C5A059]/30 transition-all duration-500"
              >
                <div className="flex items-center">
                  {/* Icon Box with reference style colors */}
                  <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#C5A059] ${feature.color} transition-colors group-hover:bg-[#C5A059] group-hover:text-white`}>
                    {feature.icon}
                  </div>
                  
                  <div className="ml-6">
                    <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-stone-400 text-xs font-light leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3. RIGHT COLUMN: ARCHITECTURAL IMAGE MASK */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl border-[15px] border-white rounded-tl-[100px] rounded-br-[100px] rounded-tr-lg rounded-bl-lg">
              <Image 
                src="/wedd.webp" // High-end wedding couple or performance shot
                alt="The Elev8 Standard"
                fill
                className="object-cover transition-transform duration-[4000ms] hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/5" />
              
              {/* Reference Decorative Elements */}
              <div className="absolute top-8 right-8">
                <Diamond className="w-6 h-6 text-white opacity-40" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}