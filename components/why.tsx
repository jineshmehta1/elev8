"use client"

import { motion } from "framer-motion"
import { Music, Users, Calendar, Diamond, Headphones, Globe, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const reasons = [
  {
    icon: <Music className="w-8 h-8" />,
    title: "BESPOKE CURATION",
    description: "Every event is unique. We tailor the perfect musical journey to match your vision, atmosphere, and guests.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "WORLD-CLASS MUSICIANS",
    description: "Handpicked professionals with exceptional talent, experience, and a passion for perfection.",
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "SEAMLESS EXPERIENCE",
    description: "From initial consultation to the final note, we handle every detail so you can enjoy a stress-free experience.",
  },
  {
    icon: <Diamond className="w-8 h-8" />,
    title: "LUXURY & ELEGANCE",
    description: "We bring a refined presence and timeless elegance that elevates every setting.",
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    title: "VERSATILE REPERTOIRE",
    description: "From classic to contemporary, jazz to cinematic—we curate the perfect sound for every moment.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "GLOBAL STANDARD",
    description: "Trusted by luxury hotels, prestigious venues, and high-profile clients around the world.",
  },
]

export function WhyChooseElev8() {
  return (
    <section className="bg-[#050505] py-24 md:py-32 relative overflow-hidden">
      
      {/* 1. BACKGROUND VISUAL: Left-anchored Piano */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <Image 
          src="/bg.webp" // Dark, moody shot of a grand piano profile
          alt="Tony Devine performing on a Steinway grand piano at a luxury Irish venue"
          fill
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#050505]/80 to-[#050505]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        
        {/* HEADER: Balanced & Centered */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#C5A059] text-[10px] tracking-[0.6em] uppercase font-bold mb-4 block"
          >
            WHY CHOOSE ELEV8
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            Excellence in Every Detail
          </h2>
          
          {/* Ornamental Divider */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="h-[1px] w-12 bg-[#C5A059]/30" />
            <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/20" />
            <div className="h-[1px] w-12 bg-[#C5A059]/30" />
          </div>

          <p className="text-white/40 font-light text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We go beyond performance. We craft unforgettable musical 
            experiences tailored to the world’s most discerning clients.
          </p>
        </div>

        {/* THE 3x2 BALANCED GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/[0.02] backdrop-blur-sm border border-[#C5A059]/10 p-10 rounded-2xl flex flex-col items-center text-center group hover:bg-[#C5A059]/5 transition-all duration-500"
            >
              <div className="text-[#C5A059] mb-8 group-hover:scale-110 transition-transform duration-500">
                {reason.icon}
              </div>
              <h3 className="text-[13px] tracking-[0.2em] font-bold text-white mb-6 uppercase">
                {reason.title}
              </h3>
              <div className="w-8 h-[1px] bg-[#C5A059]/30 mb-6" />
              <p className="text-white/40 font-light text-sm leading-relaxed group-hover:text-white/60">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FOOTER CALL-TO-ACTION BAR */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 p-8 md:p-10 bg-white/[0.03] border border-[#C5A059]/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Logo Detail */}
          <div className="flex items-center space-x-12">
            <span className="text-7xl font-serif italic text-[#C5A059]/20">8</span>
            <div className="hidden md:block h-12 w-[1px] bg-white/10" />
            <div>
                <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold mb-1">
                  ELEVATE YOUR EVENT. ELEVATE THE EXPERIENCE.
                </p>
                <p className="text-white/40 text-sm font-light italic">
                  Let us create a moment your guests will never forget.
                </p>
            </div>
          </div>

          <Link href="/setlist" className="group flex items-center space-x-4 border border-[#C5A059]/40 px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold text-white hover:bg-[#C5A059] hover:text-black transition-all duration-500">
            <span>Our set list</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>

      </div>
    </section>
  )
}