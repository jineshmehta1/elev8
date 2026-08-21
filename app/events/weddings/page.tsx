"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { 
  Diamond, 
  Heart, 
  Music, 
  Users, 
  Star, 
  Mic2, 
  Disc, 
  Sparkles, 
  Calendar, 
  ShieldCheck, 
  Settings, 
  ArrowRight, 
  ChevronRight, 
  Plus, 
  MessageCircle,
  Gem,
  CheckCircle2,
  Clock,
  MapPin,
  Play,
  Layout
} from "lucide-react"
import { WeddingsHero } from "@/components/weddingsBanner"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WeddingExperience } from "@/components/weddingexp"

import { WhyChooseElev8 } from "@/components/whywedding"

/* -------------------------------------------------------------------------- */
/*                               SHARED HELPERS                               */
/* -------------------------------------------------------------------------- */

const GoldPill = ({ text }: { text: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="px-5 py-1.5 bg-stone-50 border border-[#C5A059]/30 rounded-full mb-8 w-fit mx-auto lg:mx-0"
  >
    <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">
      {text}
    </span>
  </motion.div>
);

const BrandAxisLogo = () => (
  <div className="flex flex-col items-start text-left mb-2">
    <div className="flex items-baseline space-x-4">
      <h1 className="text-6xl md:text-[100px] font-serif tracking-[0.2em] text-white leading-none">ELEV</h1>
      <h1 className="text-6xl md:text-[100px] font-serif text-[#C5A059] leading-none">8</h1>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                              MAIN PAGE COMPONENT                           */
/* -------------------------------------------------------------------------- */

export default function WeddingPage() {
  return (
    <main className="bg-white selection:bg-[#C5A059] selection:text-white">
      <Navbar/>
      
      {/* 1. HERO SECTION */}
      <WeddingsHero/>

      <WeddingExperience/>



      <WhyChooseElev8/>

      <WeddingBlueprint/>

      <WeddingFAQs/>

      

      {/* 7. FINAL CTA (Encore Invitation) */}
      <WeddingFinalCTA />

      <Footer/>

    </main>
  )
}

/* -------------------------------------------------------------------------- */
/*                                1. WEDDING HERO                            */
/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/*                                7. FINAL CTA                                */
/* -------------------------------------------------------------------------- */


const weddingPhases = [
  {
    id: "01",
    label: "Sacred Ceremonies",
    title: "The Sound of 'I Do'",
    desc: "Bespoke acoustic arrangements designed to capture the emotional frequency of the aisle walk and the sacred silence of the union.",
    img: "/saxwed.webp",
    metric: "Timeless Resonance"
  },
  {
    id: "02",
    label: "Social Vibrancy",
    title: "The Textured Cocktail",
    desc: "Sophisticated Jazz fusions or Lounge DJ sets calibrated to the perfect decibel to facilitate natural guest connection and social flow.",
    img: "/djvio.webp",
    metric: "Perfect Volume"
  },
  {
    id: "03",
    label: "Grand Receptions",
    title: "The Culinary Suite",
    desc: "Elegant solo piano or string textures that move through the architecture like light, complementing high-end gastronomy and conversation.",
    img: "/djwed.webp",
    metric: "Elegant Ambiance"
  },
  {
    id: "04",
    label: "Night Celebration",
    title: "The Hybrid Explosion",
    desc: "High-impact DJ sets met with live brass and percussion fusions, designed to sustain the floor's energy until the final curtain.",
    img: "/djlive.webp",
    metric: "High Energy Dance"
  }
]

export function WeddingBlueprint() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-white py-24 md:py-44 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* TOP PILL HEADER */}
        <div className="flex justify-center mb-24">
          <div className="flex items-center bg-white border border-stone-200 rounded-full pl-8 pr-1 py-1 shadow-sm">
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-black mr-4">
              Wedding Music Flow
            </span>
            <div className="bg-[#C5A059] text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg">
              04
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: INTERACTIVE MENU */}
          <div className="lg:col-span-5 space-y-2">
            <div className="mb-12">
              <h2 className="text-4xl md:text-6xl font-serif text-black leading-tight">
                Tailoring the <br /> <span className="italic text-[#C5A059]">Music Flow.</span>
              </h2>
            </div>

            <div className="flex flex-col">
              {weddingPhases.map((phase, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveTab(i)}
                  className="group py-8 border-b border-stone-100 flex items-center justify-between text-left transition-all duration-500"
                >
                  <div className="flex items-center space-x-6">
                    <span className={`text-[10px] font-mono transition-colors duration-500 ${activeTab === i ? 'text-[#C5A059]' : 'text-stone-300'}`}>
                      {phase.id}—
                    </span>
                    <span className={`text-xl md:text-2xl uppercase tracking-tighter transition-all duration-500 ${activeTab === i ? 'text-black pl-4' : 'text-stone-400 group-hover:text-black'}`}>
                      {phase.label}
                    </span>
                  </div>
                  <div className={`transition-all duration-500 ${activeTab === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                    <ArrowRight className="w-5 h-5 text-[#C5A059]" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: DYNAMIC REVEAL FRAME */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.05, x: -20 }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                className="relative"
              >
                {/* BIG BACKGROUND SERIF TEXT */}
                <div className="absolute -top-20 -right-10 pointer-events-none opacity-[0.03] select-none">
                   <span className="text-[12vw] font-serif italic text-black whitespace-nowrap uppercase">
                     {weddingPhases[activeTab].label.split(' ')[0]}
                   </span>
                </div>

                {/* THE MASKED IMAGE */}
                <div className="relative aspect-[16/11] w-full rounded-tr-[160px] rounded-bl-[80px] overflow-hidden shadow-2xl border-l-[1px] border-stone-100">
                  <Image 
                    src={weddingPhases[activeTab].img} 
                    alt="Wedding Phase"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* DATA OVERLAY */}
                  <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                    <div className="max-w-xs">
                      <h3 className="text-white font-serif text-3xl mb-2 italic">
                        {weddingPhases[activeTab].title}
                      </h3>
                      <p className="text-white/60 text-xs font-light leading-relaxed">
                        {weddingPhases[activeTab].desc}
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20">
                       <span className="text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                         {weddingPhases[activeTab].metric}
                       </span>
                    </div>
                  </div>
                </div>

                {/* DECORATIVE ELEMENTS */}
                <div className="absolute -top-10 -left-10 w-32 h-32 border border-[#C5A059]/20 rounded-full flex items-center justify-center animate-spin-slow">
                   <Diamond className="w-6 h-6 text-[#C5A059]/40" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  )
}
import { ChevronDown } from "lucide-react"


export function WeddingFAQs() {
  const [active, setActive] = useState<number | null>(0)

  const faqs = [
    {
      q: "Can we request custom songs for our key moments?",
      a: "Absolutely. Whether it's a unique arrangement for your walk down the aisle or a specific song for your first dance, we are happy to learn and tailor the music to your preferences.",
    },
    {
      q: "How do you handle setup changes between locations?",
      a: "We coordinate everything seamlessly, moving our equipment quickly and quietly so the music flows perfectly from the ceremony to the drinks reception.",
    },
    {
      q: "Do you travel for destination weddings?",
      a: "Yes. We travel worldwide. We handle all travel logistics and setups to bring our live piano and guitar performances to your destination wedding.",
    },
    {
      q: "Will we have a consultation to discuss the music?",
      a: "Yes, we will consult with you to select your preferred songs, understand the timeline, and coordinate details with your venue or planner.",
    },
    {
      q: "Do you provide sound systems?",
      a: "Yes. We provide complete, professional sound systems suited for your venue, ensuring clear and beautiful sound for all your guests.",
    },
  ]

  return (
    <section className="bg-stone-50 py-16 md:py-24 lg:py-36 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-start">

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-tr-[80px] sm:rounded-tr-[120px] lg:rounded-tr-[180px] rounded-bl-[40px] sm:rounded-bl-[60px] lg:rounded-bl-[100px] border border-[#C5A059]/20 bg-stone-200 shadow-2xl">
              <Image
                src="/wedfaq.webp"
                alt="Wedding Curation Excellence"
                fill
                className="object-cover transition-transform duration-[3000ms] hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 flex h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 items-center justify-center rounded-full border border-stone-100 bg-white shadow-xl">
              <Diamond className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C5A059] fill-[#C5A059]/5" />
            </div>
          </motion.div>

          {/* Content Column */}
          <div className="lg:col-span-7">

            {/* Label */}
            <div className="mb-6 md:mb-8 flex items-center gap-3">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#C5A059] font-bold whitespace-nowrap">
                Wedding Concierge
              </span>

              <div className="h-px w-10 sm:w-12 bg-[#C5A059]/30" />
            </div>

            {/* Heading */}
            <h2 className="mb-10 md:mb-14 lg:mb-16 text-3xl sm:text-4xl md:text-5xl font-serif leading-tight text-black">
              Frequently
              <br />
              <span className="italic text-[#C5A059]">
                Inquired.
              </span>
            </h2>

            {/* FAQ List */}
            <div className="space-y-1">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="group border-b border-stone-200 last:border-0"
                >
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className="flex w-full items-start justify-between gap-4 py-5 sm:py-6 md:py-8 text-left"
                  >
                    <div className="flex flex-1 min-w-0 items-start gap-3 sm:gap-5 md:gap-6">
                      <span className="mt-2 whitespace-nowrap font-mono text-[9px] sm:text-[10px] font-bold text-[#C5A059]">
                        0{i + 1}—
                      </span>

                      <span
                        className={`font-serif leading-snug transition-colors duration-500 text-lg sm:text-xl md:text-2xl ${
                          active === i
                            ? "text-black"
                            : "text-stone-400 group-hover:text-black"
                        }`}
                      >
                        {f.q}
                      </span>
                    </div>

                    <div
                      className={`mt-1 sm:mt-2 flex-shrink-0 transition-transform duration-500 ${
                        active === i ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                          active === i
                            ? "text-[#C5A059]"
                            : "text-stone-300"
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="max-w-2xl pl-8 sm:pl-12 md:pl-14 pr-2 sm:pr-4 md:pr-10 pb-6 md:pb-8 text-sm sm:text-base font-light leading-relaxed text-stone-500">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer Tag */}
            <div className="mt-8 md:mt-12 pl-8 sm:pl-12 md:pl-14 opacity-20">
              <span className="text-[7px] sm:text-[8px] uppercase tracking-[0.4em] sm:tracking-[0.5em] font-bold">
                Elev8 Collective // Bespoke Wedding Inquiry Standards
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
function WeddingFinalCTA() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] bg-[#0A0A0A] border border-white/5 shadow-2xl">

          {/* Watermark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03]">
            <span className="font-serif italic text-white leading-none text-[40vw] sm:text-[28vw] lg:text-[20vw]">
              8
            </span>
          </div>

          <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center p-6 sm:p-8 md:p-12 lg:p-20 xl:p-24">

            {/* Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 sm:gap-4 mb-5 md:mb-6">
                <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/20" />

                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.35em] sm:tracking-[0.5em] text-[#C5A059] font-bold">
                  The Summons
                </span>
              </div>

              <h2 className="font-serif text-white leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Planning Your
                <br />
                <span className="italic text-[#C5A059]">
                  Dream Wedding?
                </span>
              </h2>

              <p className="mt-5 md:mt-6 max-w-xl text-sm sm:text-base leading-relaxed font-light tracking-wide text-white/50">
                Create a celebration your guests will remember forever.
                Our team is ready to curate the soundtrack to your story.
              </p>
            </div>

            {/* CTA */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end">
              <button className="group w-full sm:w-auto bg-white text-black px-6 sm:px-8 lg:px-10 py-4 sm:py-5 transition-all duration-700 shadow-2xl flex items-center justify-center gap-3 hover:bg-[#C5A059] hover:text-white">
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.25em] sm:tracking-[0.35em] uppercase font-bold">
                  Get a Quote
                </span>

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-2"
                />
              </button>
            </div>

          </div>

          {/* Luxury Divider */}
          <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}