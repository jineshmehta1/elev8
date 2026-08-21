"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  Music,
  Wine,
  Star,
  Zap,
  Users,
  Diamond,
  ArrowRight,
} from "lucide-react"

const privateSolutions = [
  {
    title: "Bar & Lounge Residencies",
    desc: "Injecting energy into Dublin and Wicklow’s finest bars and hotel lounges with a lively, upbeat presence that keeps guests engaged.",
    icon: <Music className="w-5 h-5" />,
  },
  {
    title: "The Signature Party Duo",
    desc: "Collaborating with expert guitarist Plamen Panov to provide a full-bodied, high-energy sound perfect for private celebrations.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Genre-Fluid Curation",
    desc: "A massive catalog spanning R&B, Country, Pop, and Contemporary hits, tailored to the specific energy of your social circle.",
    icon: <Star className="w-5 h-5" />,
  },
  {
    title: "Milestone Celebrations",
    desc: "Bespoke soundtracks for milestone birthdays and anniversaries, ranging from romantic atmosphere to dance-floor energy.",
    icon: <Wine className="w-5 h-5" />,
  },
  {
    title: "Acoustic Autonomy",
    desc: "Tony provides a premium portable grand piano and professional sound, ensuring a flawless performance in any private estate or garden.",
    icon: <Zap className="w-5 h-5" />,
  },
]

export function PrivateExperience() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-40 overflow-hidden">
      
      {/* SECTION INDICATOR */}
      <div className="flex justify-center mb-12 md:mb-16 lg:mb-24 px-4">
        <div className="flex items-center bg-white border border-stone-200 rounded-full pl-4 sm:pl-6 md:pl-8 pr-1 py-1 shadow-sm">
          <span className="text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] font-bold text-black mr-3 sm:mr-4 md:mr-6 whitespace-nowrap">
            Bar & Private Parties
          </span>

          <div className="bg-[#C5A059] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-serif text-sm md:text-lg">
            03
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

          {/* IMAGE COLUMN */}
          <div className="lg:col-span-5 order-first lg:order-none">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
                className="relative aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5] w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-stone-100"
              >
                <Image
                  src="/bg.webp"
                  alt="Private Events Setting"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-[3000ms]"
                />


                {/* VIGNETTE */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 pointer-events-none" />
              </motion.div>

              {/* CAPTION */}
              <div className="mt-6 md:mt-10 flex flex-col items-end opacity-20">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-[8px] md:text-[9px] tracking-[0.25em] md:tracking-[0.4em] uppercase text-black font-medium">
                    Bespoke Private Curation
                  </span>

                  <div className="w-10 md:w-16 h-px bg-black" />
                </div>
              </div>
            </div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-10 md:space-y-12">

            {/* INTRO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex"
            >
              <div className="w-[2px] bg-[#C5A059] mr-5 md:mr-8 hidden md:block" />

              <div>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.35em] md:tracking-[0.5em] text-stone-400 font-bold mb-4 block">
                  Lively Atmosphere
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black leading-tight mb-6 md:mb-8">
                  Private Events for
                  <br />
                  <span className="italic text-[#C5A059]">
                    every Occasion
                  </span>
                </h2>

                <p className="text-stone-400 font-light text-base md:text-lg leading-relaxed max-w-xl">
                  Elevating the energy of your private event or bar residency
                  with Tony Devine&apos;s signature blend of elegance and upbeat
                  performance.
                </p>
              </div>
            </motion.div>

            {/* SOLUTIONS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 md:ml-9">
              {privateSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="flex flex-col items-start p-6 border border-stone-100 hover:border-[#0A0A0A] bg-stone-50/50 hover:bg-stone-50 transition-all duration-500 rounded-2xl h-full">

                    <div className="w-10 h-10 md:w-12 md:h-12 mb-4 flex-shrink-0 border border-stone-200 flex items-center justify-center text-[#C5A059] group-hover:bg-[#0A0A0A] group-hover:text-white group-hover:border-[#0A0A0A] transition-all duration-500 rounded-xl">
                      {solution.icon}
                    </div>

                    <div>
                      <h3 className="text-xs md:text-sm font-bold text-black uppercase tracking-[0.15em] mb-2">
                        {solution.title}
                      </h3>

                      <p className="text-stone-400 text-sm font-light leading-relaxed group-hover:text-stone-600 transition-colors">
                        {solution.desc}
                      </p>
                    </div>

                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8 md:pt-12 md:ml-9">
              <button className="group flex items-center gap-4 md:gap-6 text-black hover:text-[#C5A059] transition-colors">
                <span className="text-[10px] md:text-[11px] tracking-[0.25em] md:tracking-[0.4em] uppercase font-bold">
                  Request a Party Set
                </span>

                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-3" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}