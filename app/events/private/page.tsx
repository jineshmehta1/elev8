"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
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
  Anchor,
  GlassWater,
  PartyPopper,
  Home,
  Crown,
  Zap
} from "lucide-react"
import { PrivateEventsHero } from "@/components/privateeventBanner"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PrivateExperience } from "@/components/private"
import { WhyChoosePrivate } from "@/components/whyprivate"
import { PrivatePartyServices } from "@/components/privateservices"

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

const GoldArcs = () => (
  <div className="absolute inset-0 z-20 pointer-events-none opacity-20">
    <svg className="h-full w-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        d="M-50,1000 C300,800 400,500 250,0" fill="none" stroke="#C5A059" strokeWidth="0.5"
      />
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
        d="M-100,1000 C250,800 350,500 200,0" fill="none" stroke="#C5A059" strokeWidth="0.5"
      />
    </svg>
  </div>
);

/* -------------------------------------------------------------------------- */
/*                              MAIN PAGE COMPONENT                           */
/* -------------------------------------------------------------------------- */

export default function PrivateEventsPage() {
  return (
    <main className="bg-white selection:bg-[#C5A059] selection:text-white">
      <Navbar/>
      
      {/* 1. HERO SECTION */}
      <PrivateEventsHero/>

      <PrivateExperience/>

      <PrivatePartyServices/>

      <WhyChoosePrivate/>

      <PrivateBlueprint/>

      
      {/* 7. FAQ (Editorial Accordion) */}
      <PrivateFAQs />

      {/* 8. FINAL CTA (Compact Invitation) */}
      <PrivateFinalCTA />
      <Footer/>

    </main>
  )
}

/* -------------------------------------------------------------------------- */
/*                                1. PRIVATE HERO                             */
/* -------------------------------------------------------------------------- */





/* -------------------------------------------------------------------------- */
/*                                   7. FAQ                                   */
/* -------------------------------------------------------------------------- */



const privatePhases = [
  {
    id: "01",
    label: "Estate Arrivals",
    title: "The Sanctuary Entrance",
    desc: "Discrete solo piano or cello curation designed to establish an immediate sense of peace and prestige as guests cross the threshold.",
    img: "/pri1.webp",
    metric: "Sub-Ambient Tuning"
  },
  {
    id: "02",
    label: "Garden Soirées",
    title: "The Social Frequency",
    desc: "Warm acoustic textures and live jazz fusions calibrated to complement the rustle of nature and the flow of high-level social networking.",
    img: "/pri2.webp",
    metric: "Harmonic Intimacy"
  },
  {
    id: "03",
    label: "Gastronomy Suites",
    title: "The Culinary Rhythm",
    desc: "Sophisticated, low-impact musical architecture designed to enhance the sensory experience of a multi-course private dinner.",
    img: "/pri3.webp",
    metric: "Acoustic Attenuation"
  },
  {
    id: "04",
    label: "After-Hours Pulse",
    title: "The Domestic Energy",
    desc: "A transition into high-impact DJ & Live Music fusions, bringing the energy of a world-class lounge into the privacy of your estate.",
    img: "/pri4.webp",
    metric: "Peak Resonance Sync"
  }
]

export function PrivateBlueprint() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-white py-16 md:py-24 lg:py-44 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* TOP PILL HEADER */}
        <div className="flex justify-center mb-12 md:mb-20">
          <div className="flex items-center bg-white border border-stone-200 rounded-full pl-4 sm:pl-6 md:pl-8 pr-1 py-1 shadow-sm max-w-full">
            <span className="text-[8px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-black mr-3 sm:mr-4 whitespace-nowrap">
              Private Curation Blueprint
            </span>

            <div className="bg-[#C5A059] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-serif text-sm sm:text-lg flex-shrink-0">
              03
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black leading-tight">
                Architectural
                <br />
                <span className="italic text-[#C5A059]">
                  Residency Design.
                </span>
              </h2>
            </div>

            <div className="flex flex-col">
              {privatePhases.map((phase, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveTab(i)}
                  onClick={() => setActiveTab(i)}
                  className="group py-5 md:py-7 border-b border-stone-100 flex items-center justify-between text-left transition-all duration-500"
                >
                  <div className="flex items-center gap-3 md:gap-6 min-w-0">
                    <span
                      className={`text-[10px] font-mono flex-shrink-0 transition-colors duration-500 ${
                        activeTab === i
                          ? "text-[#C5A059]"
                          : "text-stone-300"
                      }`}
                    >
                      {phase.id}—
                    </span>

                    <span
                      className={`text-base sm:text-lg md:text-2xl uppercase tracking-tight transition-all duration-500 truncate ${
                        activeTab === i
                          ? "text-black md:pl-4"
                          : "text-stone-400 group-hover:text-black"
                      }`}
                    >
                      {phase.label}
                    </span>
                  </div>

                  <div
                    className={`flex-shrink-0 transition-all duration-500 ${
                      activeTab === i
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                  >
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#C5A059]" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.05, x: -20 }}
                transition={{
                  duration: 0.7,
                  ease: [0.19, 1, 0.22, 1],
                }}
                className="relative"
              >
                {/* WATERMARK TEXT */}
                <div className="absolute -top-8 md:-top-20 right-0 md:-right-10 pointer-events-none opacity-[0.03] select-none">
                  <span className="text-[18vw] md:text-[12vw] font-serif italic text-black whitespace-nowrap uppercase">
                    {privatePhases[activeTab].label.split(" ")[0]}
                  </span>
                </div>

                {/* IMAGE */}
                <div className="relative aspect-[16/11] w-full rounded-tr-[60px] sm:rounded-tr-[100px] md:rounded-tr-[160px] rounded-bl-[40px] sm:rounded-bl-[60px] md:rounded-bl-[80px] overflow-hidden shadow-2xl border-l border-stone-100">
                  <Image
                    src={privatePhases[activeTab].img}
                    alt="Private Phase"
                    fill
                    className="object-cover grayscale lg:hover:grayscale-0 transition-all duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* CONTENT OVERLAY */}
                  <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 right-4 sm:right-6 md:right-10 flex flex-col sm:flex-row sm:justify-between gap-4 sm:items-end">
                    <div className="max-w-md">
                      <h3 className="text-white font-serif text-xl sm:text-2xl md:text-3xl mb-2 italic">
                        {privatePhases[activeTab].title}
                      </h3>

                      <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                        {privatePhases[activeTab].desc}
                      </p>
                    </div>

                    <div className="self-start sm:self-auto bg-white/10 backdrop-blur-md px-3 py-2 border border-white/20">
                      <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                        {privatePhases[activeTab].metric}
                      </span>
                    </div>
                  </div>
                </div>

                {/* DECORATION */}
                <div className="hidden lg:flex absolute -top-10 -left-10 w-32 h-32 border border-[#C5A059]/20 rounded-full items-center justify-center animate-spin-slow">
                  <Diamond className="w-6 h-6 text-[#C5A059]/40" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
      `}</style>
    </section>
  )
}
import { ChevronDown } from "lucide-react"


export function PrivateFAQs() {
  const [active, setActive] = useState<number | null>(0)

  const faqs = [
    {
      q: "Do you provide your own piano and sound?",
      a: "Yes. Tony offers complete 'Acoustic Autonomy.' He provides a high-quality portable stage grand piano and a professional PA system, or is happy to utilize your venue's resident acoustic piano if preferred."
    },
    {
      q: "Can we request specific songs for our party?",
      a: "Absolutely. Tony is happy to learn special requests for milestone birthdays or anniversaries, provided enough notice is given to ensure a world-class arrangement."
    },
    {
      q: "What regions do you cover?",
      a: "Tony is principally based across Dublin, Wicklow, Kildare, and Co. Clare. He regularly travels to private estates and bars throughout these regions and surrounding counties."
    },
    {
      q: "Can you perform as part of a larger group?",
      a: "Yes. While Tony excels as a soloist, he frequently performs with expert guitarist Plamen Panov as a signature duo. A full band collective is also available for high-energy celebrations."
    },
    {
      q: "What genres are included in the repertoire?",
      a: "Our expansive catalog spans the emotional spectrum: from the precision of Classical and Jazz to the energy of R&B, Country, Blues, and modern chart-topping hits."
    }
  ]

  return (
    <section className="bg-stone-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] lg:translate-y-12 rounded-tr-[80px] sm:rounded-tr-[120px] lg:rounded-tr-[200px] rounded-bl-[40px] sm:rounded-bl-[60px] lg:rounded-bl-[100px] overflow-hidden shadow-2xl border border-[#C5A059]/20 bg-stone-200 group">
              <Image
                src="/global.webp"
                alt="Tony Devine - Private Curation"
                fill
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>

            {/* Badge */}
            <div className="absolute bottom-4 right-4 sm:-bottom-4 sm:-right-4 lg:-bottom-8 lg:-right-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border border-stone-100">
              <Diamond className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C5A059] fill-[#C5A059]/5" />
            </div>
          </motion.div>

          {/* FAQ Content */}
          <div className="lg:col-span-7">

            {/* Header */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.35em] md:tracking-[0.5em] text-[#C5A059] font-bold">
                Concierge Support
              </span>

              <div className="w-8 md:w-12 h-px bg-[#C5A059]/30" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black mb-10 md:mb-16 leading-tight">
              Frequently
              <br />
              <span className="italic text-[#C5A059]">
                Inquired.
              </span>
            </h2>

            {/* FAQ List */}
            <div className="space-y-1 md:space-y-2">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="group border-b border-stone-200 last:border-0"
                >
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className="w-full py-5 md:py-8 flex items-start justify-between gap-4 text-left"
                  >
                    <div className="flex items-start gap-3 md:gap-6 flex-1 min-w-0">
                      <span className="shrink-0 text-[10px] font-mono text-[#C5A059] mt-1 md:mt-2 font-bold tracking-tighter">
                        0{i + 1}—
                      </span>

                      <span
                        className={`text-lg sm:text-xl md:text-2xl font-serif leading-snug transition-colors duration-500 ${
                          active === i
                            ? "text-black"
                            : "text-stone-400 group-hover:text-black"
                        }`}
                      >
                        {f.q}
                      </span>
                    </div>

                    <div
                      className={`shrink-0 mt-1 md:mt-2 transition-transform duration-500 ${
                        active === i ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 md:w-5 md:h-5 ${
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
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pl-8 sm:pl-10 md:pl-14 pr-2 md:pr-10 pb-6 md:pb-8 text-stone-500 font-light text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer Tagline */}
            <div className="mt-8 md:mt-12 md:pl-14 opacity-20">
              <span className="text-[7px] md:text-[8px] uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold">
                Tony Devine // Bespoke Social Curation Standards
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                8. FINAL CTA                                */
/* -------------------------------------------------------------------------- */

function PrivateFinalCTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] bg-[#0A0A0A] border border-[#C5A059]/10 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">

          {/* Watermark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.05]">
            <span className="text-[40vw] md:text-[28vw] lg:text-[22vw] font-serif italic text-white leading-none">
              8
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center p-8 sm:p-10 md:p-14 lg:p-20">

            {/* Content */}
            <div className="lg:col-span-7 text-left">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/20 shrink-0" />

                <span className="text-[10px] md:text-[11px] tracking-[0.35em] md:tracking-[0.5em] uppercase text-[#C5A059] font-bold">
                  The Summons
                </span>
              </div>

              <h2 className="font-serif text-white leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Planning Something
                <br />
                <span className="italic text-[#C5A059]">
                  Truly Special?
                </span>
              </h2>

              <p className="mt-5 md:mt-6 text-white/50 text-sm md:text-base font-light tracking-wide max-w-xl leading-relaxed">
                Let Elev8 create an unforgettable private event experience
                tailored to your story, your guests, and the atmosphere you
                want them to remember.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 xl:justify-end w-full">

              <button
                className="
                  group
                  w-full sm:w-auto
                  min-h-[56px]
                  bg-white
                  text-black
                  px-8 md:px-10
                  py-4 md:py-5
                  font-bold
                  text-[10px] md:text-[11px]
                  tracking-[0.3em] md:tracking-[0.4em]
                  uppercase
                  hover:bg-[#C5A059]
                  hover:text-white
                  transition-all
                  duration-700
                  shadow-2xl
                  flex
                  items-center
                  justify-center
                  gap-4 md:gap-6
                "
              >
                <span>Get a Quote</span>

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-2"
                />
              </button>

              <button
                className="
                  w-full sm:w-auto
                  min-h-[56px]
                  border
                  border-white/20
                  text-white
                  px-8 md:px-10
                  py-4 md:py-5
                  font-bold
                  text-[10px] md:text-[11px]
                  tracking-[0.3em] md:tracking-[0.4em]
                  uppercase
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                "
              >
                Speak With Our Team
              </button>

            </div>
          </div>

          {/* Accent Line */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}

// Helpers for unique sections
const Layout = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></svg>
const Maximize = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 3 6 6"/><path d="m9 21-6-6"/><path d="M21 3v6h-6"/><path d="M3 21v-6h6"/><path d="M21 3h-6"/><path d="M3 21h6"/></svg>