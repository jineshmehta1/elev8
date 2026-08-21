"use client"

import { motion } from "framer-motion"
import { Diamond } from "lucide-react"
import Image from "next/image"

export function VocalistsHero() {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[75vh] lg:min-h-[85vh] w-full overflow-hidden bg-black flex items-center">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vocalists-banner.webp"
          alt="Professional vocalist performing at a luxury wedding celebration in Ireland"
          fill
          priority
          className="object-cover object-center opacity-40 scale-105 transition-transform duration-[10000ms] animate-ken-burns"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30" />
      </div>

      {/* Decorative Curves */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden md:block">
        <svg
          className="h-full w-full opacity-20"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M-50,1000 C300,800 400,500 250,0"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.5"
          />

          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 2,
              delay: 0.3,
              ease: "easeInOut",
            }}
            d="M-100,1000 C250,800 350,500 200,0"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-30 mx-auto px-5 sm:px-8 md:px-12 lg:px-20 xl:px-24">
        <div className="max-w-5xl">

          {/* Logo */}
          <div className="flex items-baseline gap-1 sm:gap-2 md:gap-4 mb-2">
            <h1 className="font-serif text-white leading-none tracking-[0.12em] sm:tracking-[0.18em] text-[52px] sm:text-[72px] md:text-[100px] lg:text-[120px]">
              ELEV
            </h1>

            <h1 className="font-serif text-[#C5A059] leading-none text-[52px] sm:text-[72px] md:text-[100px] lg:text-[120px]">
              8
            </h1>
          </div>

          {/* Diamond */}
          <div className="pl-1 sm:pl-2 mb-6 sm:mb-8">
            <Diamond
              className="w-3 h-3 sm:w-4 sm:h-4 text-[#C5A059] fill-[#C5A059]/20"
            />
          </div>

          {/* Title */}
          <h2 className="
            font-serif uppercase text-white/95
            text-2xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            tracking-[0.18em]
            sm:tracking-[0.28em]
            md:tracking-[0.35em]
            lg:tracking-[0.4em]
            leading-tight
            mb-6
            sm:mb-8
          ">
            Vocalists
          </h2>

          {/* Subtitle */}
          <div className="max-w-xl">
            <p
              className="
                uppercase
                text-[#C5A059]
                font-medium
                tracking-[0.25em]
                sm:tracking-[0.45em]
                md:tracking-[0.55em]
                text-[9px]
                sm:text-[10px]
                md:text-[11px]
                leading-relaxed
              "
            >
              THE HUMAN CONNECTION
              <br />
              <span className="text-white/60">
                THROUGH SOULFUL ARTISTRY
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Accent Line */}
      <div className="absolute bottom-8 sm:bottom-10 lg:bottom-12 left-5 sm:left-8 md:left-12 lg:left-20 xl:left-24 z-30">
        <div className="w-px h-10 sm:h-14 lg:h-20 bg-gradient-to-b from-[#C5A059] to-transparent" />
      </div>
    </section>
  )
}