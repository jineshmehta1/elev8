"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import {CorporateHero} from "@/components/corporateBanner"

import { 
  Diamond, 
  Building2, 
  Sliders,
  Trophy, 
  Briefcase, 
  Presentation, 
  PartyPopper, 
  Music, 
  Mic2, 
  Disc, 
  Star, 
  ArrowRight, 
  Sparkles,
  Plus, 
  Play, 
  ShieldCheck, 
  Globe, 
  Settings, 
  Users,
  ChevronRight,
  Gem,
  CheckCircle2,
  Clock,
  Layout,
  MessageCircle,
  Phone,
  Zap
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CorporateExperience } from "@/components/corpexp"
import { WhyChooseCorporate } from "@/components/whycoporate"
import { CorporateServices } from "@/components/corporateservices"

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

export default function CorporateEventsPage() {
  return (
    <main className="bg-white selection:bg-[#C5A059] selection:text-white">
      <Navbar/>
      
      {/* 1. HERO SECTION */}
      <CorporateHero/>

      <CorporateExperience/>

      <CorporateServices/>

      <WhyChooseCorporate/>

 



      {/* 5. EVENT FORMATS (Visual Grid) */}
      <CorporateBlueprint />

      {/* 6. HOW WE WORK (Staggered Timeline) */}
      <CorporateWorkflow />

      {/* 7. FAQ (Editorial Accordion) */}
      <CorporateFAQs />

      {/* 8. FINAL CTA (Compact Invitation) */}
      <CorporateFinalCTA />

      <Footer/>

    </main>
  )
}

/* -------------------------------------------------------------------------- */
/*                                1. HERO SECTION                             */
/* -------------------------------------------------------------------------- */




/* -------------------------------------------------------------------------- */
/*                                5. EVENT FORMATS                            */
/* -------------------------------------------------------------------------- */





const corporatePhases = [
  {
    id: "01",
    label: "Executive Briefings",
    title: "The Sound of Focus",
    desc: "Low-impact, high-clarity solo piano curation designed to heighten concentration and intellectual flow in boardroom environments.",
    img: "/sound.webp",
    metric: "432Hz Alignment"
  },
  {
    id: "02",
    label: "Global Networking",
    title: "The Social Frequency",
    desc: "Sophisticated Jazz fusions and Lounge DJ sets calibrated to the perfect decibel for seamless high-level conversation.",
    img: "/global.webp",
    metric: "Discrete Resonance"
  },
  {
    id: "03",
    label: "Brand Activations",
    title: "The Identity Pulse",
    desc: "Modern, high-energy sonic branding utilizing live brass and electronic fusions to ignite market excitement.",
    img: "/brand.webp",
    metric: "High-Impact Sync"
  },
  {
    id: "04",
    label: "Grand Galas",
    title: "The Midnight Prestige",
    desc: "A complete entertainment arc from cinematic award walk-ups to high-energy 10-piece collective celebrations.",
    img: "/galas.webp",
    metric: "Full-Spectrum Curation"
  }
]



export function CorporateBlueprint() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="bg-white py-16 md:py-24 lg:py-36 xl:py-44 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="flex justify-center mb-12 md:mb-20 lg:mb-24">
          <div className="flex items-center bg-white border border-stone-200 rounded-full pl-4 sm:pl-6 md:pl-8 pr-1 py-1 shadow-sm">
            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-bold text-black mr-3 sm:mr-4">
              Curation Blueprint
            </span>

            <div className="bg-[#C5A059] text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-serif text-sm sm:text-lg">
              05
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-5">

            <div className="mb-8 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-black leading-tight">
                Architectural
                <br />
                <span className="italic text-[#C5A059]">
                  Service Design.
                </span>
              </h2>
            </div>

            <div className="flex flex-col">
              {corporatePhases.map((phase, i) => (
                <button
                  key={i}
                  onMouseEnter={() => setActiveTab(i)}
                  onClick={() => setActiveTab(i)}
                  className="group py-5 sm:py-6 md:py-8 border-b border-stone-100 flex items-center justify-between text-left transition-all duration-500"
                >
                  <div className="flex items-center gap-3 sm:gap-5 md:gap-6 min-w-0">
                    <span
                      className={`text-[9px] sm:text-[10px] font-mono transition-colors duration-500 ${
                        activeTab === i
                          ? "text-[#C5A059]"
                          : "text-stone-300"
                      }`}
                    >
                      {phase.id}—
                    </span>

                    <span
                      className={`text-lg sm:text-xl md:text-2xl uppercase tracking-tight transition-all duration-500 ${
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
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A059]" />
                  </div>
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN */}
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

                {/* Watermark */}
                <div className="absolute -top-8 md:-top-12 lg:-top-20 right-0 pointer-events-none opacity-[0.03] select-none">
                  <span className="text-[20vw] md:text-[15vw] font-serif italic text-black whitespace-nowrap uppercase">
                    {corporatePhases[activeTab].label.split(" ")[0]}
                  </span>
                </div>

                {/* Image Frame */}
                <div className="relative aspect-[16/11] w-full overflow-hidden rounded-tr-[60px] sm:rounded-tr-[100px] lg:rounded-tr-[160px] rounded-bl-[30px] sm:rounded-bl-[50px] lg:rounded-bl-[80px] shadow-2xl border-l border-stone-100">

                  <Image
                    src={corporatePhases[activeTab].img}
                    alt={corporatePhases[activeTab].title}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Overlay Content */}
                  <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 right-4 sm:right-6 md:right-10 flex flex-col sm:flex-row justify-between gap-4 items-start sm:items-end">

                    <div className="max-w-md">
                      <h3 className="text-white font-serif text-xl sm:text-2xl md:text-3xl italic mb-2">
                        {corporatePhases[activeTab].title}
                      </h3>

                      <p className="text-white/70 text-xs sm:text-sm font-light leading-relaxed">
                        {corporatePhases[activeTab].desc}
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md px-3 sm:px-4 py-2 border border-white/20">
                      <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#C5A059] font-bold whitespace-nowrap">
                        {corporatePhases[activeTab].metric}
                      </span>
                    </div>

                  </div>
                </div>

                {/* Decorative Ring */}
                <div className="hidden xl:flex absolute -top-10 -left-10 w-32 h-32 border border-[#C5A059]/20 rounded-full items-center justify-center animate-spin-slow">
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

/* -------------------------------------------------------------------------- */
/*                                6. WORKFLOW                                 */
/* -------------------------------------------------------------------------- */

function CorporateWorkflow() {
  const steps = [
    { title: "Discovery", desc: "A discrete brief to understand your strategic goals and audience.", icon: <Search /> },
    { title: "Planning", desc: "Curating the exact performer configuration and genre timeline.", icon: <Layout /> },
    { title: "Coordination", desc: "Handling all technical logistics and production requirements.", icon: <Settings /> },
    { title: "Delivery", desc: "Flawless executive execution from first arrivals to final encore.", icon: <Sparkles /> }
  ]

  return (
    <section className="bg-white py-10 md:py-12 overflow-hidden relative border-y border-stone-100">
      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-24">
          <GoldPill text="The Process" />
          <h2 className="text-3xl lg:text-5xl font-serif text-black leading-tight">The Path to <span className="italic text-[#C5A059]">Excellence</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#0A0A0A] flex items-center justify-center text-[#C5A059] mb-8 shadow-2xl relative z-10 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <div className="absolute top-8 left-[50%] w-full h-[1px] bg-stone-100 hidden lg:block -z-0" />
              <h4 className="text-[13px] tracking-[0.2em] uppercase font-bold text-black mb-4">{step.title}</h4>
              <p className="text-stone-400 font-light text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
              <span className="mt-8 text-stone-200 font-serif italic text-4xl opacity-40">0{i+1}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   7. FAQ                                   */
/* -------------------------------------------------------------------------- */

import { ChevronDown} from "lucide-react"



export function CorporateFAQs() {
  const [active, setActive] = useState<number | null>(0)

  const faqs = [
    {
      q: "Can entertainment be customized to our brand?",
      a: "Absolutely. Principal Tony Devine curates every setlist to match your brand objectives. From sophisticated Jazz and Blues for networking to high-energy R&B and contemporary hits for celebrations, the repertoire is entirely bespoke."
    },
    {
      q: "Do you provide your own instrument and sound?",
      a: "Yes. We offer complete Acoustic Autonomy. Tony provides a high-quality portable stage grand piano and a professional PA system, ensuring a world-class sound experience even in venues without an in-house instrument."
    },
    {
      q: "What areas do you principally serve?",
      a: "Tony is based across Dublin, Wicklow, and Clare. We regularly provide musical curation for prestigious venues in these regions and are available for travel to corporate retreats and events throughout Ireland and beyond."
    },
    {
      q: "Can multiple musicians be booked together?",
      a: "Yes. While Tony leads as the Principal Pianist, we frequently perform as the Signature Duo with expert guitarist Plamen Panov. For larger galas, we can scale up to a full collective show-band at your request."
    },
    {
      q: "Do you collaborate with event planners?",
      a: "We work seamlessly with event agencies, hotel managers, and corporate planners. We handle all technical logistics and behavioral protocols to ensure a discrete and professional integration into your event schedule."
    }
  ]

  return (
    <section className="bg-stone-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-start">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-tr-[80px] sm:rounded-tr-[120px] lg:rounded-tr-[200px] rounded-bl-[40px] sm:rounded-bl-[60px] lg:rounded-bl-[100px] border border-[#C5A059]/20 bg-stone-200 shadow-2xl group lg:translate-y-10">

              <Image
                src="/vocalcorpo.webp"
                alt="Corporate Excellence"
                fill
                className="object-cover transition-all duration-[3000ms] group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white border border-stone-100 shadow-xl flex items-center justify-center">
              <Diamond className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#C5A059] fill-[#C5A059]/5" />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="lg:col-span-7">

            {/* Label */}
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[#C5A059] font-bold whitespace-nowrap">
                Executive Support
              </span>

              <div className="w-10 sm:w-12 h-px bg-[#C5A059]/30" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black mb-10 md:mb-14 lg:mb-16 leading-tight">
              Refining the
              <br />
              <span className="italic text-[#C5A059]">
                Logistics.
              </span>
            </h2>

            {/* FAQs */}
            <div className="space-y-1">
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className="group border-b border-stone-200 last:border-0"
                >
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className="w-full py-5 sm:py-6 md:py-8 flex items-start justify-between gap-4 text-left"
                  >
                    <div className="flex flex-1 min-w-0 items-start gap-3 sm:gap-5 md:gap-6">

                      <span className="text-[9px] sm:text-[10px] font-mono text-[#C5A059] mt-2 font-bold whitespace-nowrap">
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
                      className={`flex-shrink-0 mt-1 sm:mt-2 transition-transform duration-500 ${
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
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pl-8 sm:pl-12 md:pl-14 pr-2 sm:pr-4 md:pr-10 pb-6 md:pb-8 text-sm sm:text-base md:text-lg text-stone-500 font-light leading-relaxed max-w-2xl">
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
                Tony Devine // Elev8 Corporate Protocol
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

function CorporateFinalCTA() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[4rem] bg-[#0A0A0A] border border-white/5 shadow-2xl">

          {/* Watermark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.03]">
            <span className="text-[40vw] md:text-[25vw] font-serif italic text-white leading-none">
              8
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 p-8 sm:p-10 md:p-14 lg:p-20">

            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-5">
                <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/20" />
                <span className="text-[9px] sm:text-[10px] tracking-[0.4em] uppercase text-[#C5A059] font-bold">
                  The Inquiry
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white leading-tight">
                Make Your Next
                <br />
                <span className="italic text-[#C5A059]">
                  Event Exceptional.
                </span>
              </h2>

              <p className="mt-5 text-white/50 text-sm md:text-base font-light leading-relaxed max-w-xl">
                Deliver an experience your guests, clients, and teams will
                remember. Request a bespoke proposal today.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 lg:justify-center xl:justify-end">

              <button className="group w-full sm:w-auto bg-white text-black px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-none font-bold text-[10px] tracking-[0.35em] uppercase transition-all duration-700 hover:bg-[#C5A059] hover:text-white shadow-2xl flex items-center justify-center gap-4">
                <span>Request Proposal</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-2"
                />
              </button>

              <button className="w-full sm:w-auto border border-white/20 text-white px-6 sm:px-8 lg:px-10 py-4 sm:py-5 rounded-none font-bold text-[10px] tracking-[0.35em] uppercase transition-all hover:bg-white hover:text-black flex items-center justify-center">
                Speak With Our Team
              </button>

            </div>
          </div>

          {/* Bottom Luxury Line */}
          <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}

// Additional Icon Helpers
const Search = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
const Headset = ({ className }: { className?: string }) => <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-5Z"/></svg>