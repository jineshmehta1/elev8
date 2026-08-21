"use client"

import { motion } from "framer-motion"
import { Send, MessageCircle, UserCheck, Sparkles, Diamond } from "lucide-react"

const steps = [
  {
    id: "01",
    title: "1. The Inquiry",
    desc: "Submit your event details via our contact form. We focus on your vision and musical preferences.",
    icon: <Send className="w-5 h-5" />
  },
  {
    id: "02",
    title: "Bespoke Consultation",
    desc: "A discrete dialogue to refine requirements, from venue acoustics to custom repertoire selection.",
    icon: <MessageCircle className="w-5 h-5" />
  },
  {
    id: "03",
    title: "Artist Curation",
    desc: "Review a handpicked selection of virtuosos tailored specifically to your event's DNA.",
    icon: <UserCheck className="w-5 h-5" />
  },
  {
    id: "04",
    title: "The Performance",
    desc: "Remain in the moment. We handle every technical detail, transforming your space through sound.",
    icon: <Sparkles className="w-5 h-5" />
  }
]

export function BookingProcess() {
  return (
    <section className="bg-white py-14 md:py-14 overflow-hidden relative">
      
      {/* 1. ARCHITECTURAL DNA LINE (The Timeline Thread) */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-stone-100 hidden lg:block -translate-y-12">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="h-full bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent"
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* HEADER - 5xl Desktop / 3xl Mobile */}
        <div className="flex flex-col items-center text-center mb-24 md:mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-5 py-1.5 bg-stone-50 border border-[#C5A059]/30 rounded-full mb-8"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">
              The Journey
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl lg:text-5xl font-serif text-black leading-tight"
          >
            The Path to <span className="italic text-[#C5A059]">Atmosphere</span>
          </motion.h2>
        </div>

        {/* 2. THE TIMELINE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`relative group flex flex-col items-center ${
                index % 2 !== 0 ? "lg:mt-16" : "" // Staggered Effect
              }`}
            >
              {/* STEP NUMBER & ICON */}
              <div className="relative z-20 mb-8">
                 <div className="w-16 h-16 rounded-2xl bg-[#0A0A0A] flex items-center justify-center text-[#C5A059] shadow-2xl border border-white/10 group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-500">
                    {step.icon}
                 </div>
                 <span className="absolute -top-4 -right-4 font-serif italic text-3xl text-stone-200 group-hover:text-[#C5A059]/40 transition-colors">
                    {step.id}
                 </span>
              </div>

              {/* OBSIDIAN STEP CARD */}
              <div className="bg-[#0A0A0A] p-8 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl text-center w-full hover:-translate-y-2 transition-all duration-500">
                <h3 className="text-lg md:text-xl font-serif text-white mb-4 group-hover:text-[#C5A059] transition-colors uppercase tracking-wide">
                  {step.title}
                </h3>
                
                <p className="text-white/40 font-light text-xs md:text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                  {step.desc}
                </p>

                {/* Card Detail */}
                <div className="mt-8 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <Diamond className="w-3 h-3 text-[#C5A059]/40 fill-[#C5A059]/20" />
                </div>
              </div>

              {/* MOBILE CONNECTING LINE */}
              {index !== steps.length - 1 && (
                <div className="w-[1px] h-12 bg-gradient-to-b from-[#C5A059]/40 to-transparent lg:hidden mt-4" />
              )}
            </motion.div>
          ))}
        </div>

     

      </div>
    </section>
  )
}