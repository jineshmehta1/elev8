"use client"

import { motion } from "framer-motion"
import { Diamond, ChevronRight } from "lucide-react"
import Image from "next/image"

export function PrivateEventsHero() {
  return (
    <section className="relative min-h-[700px] md:min-h-screen w-full overflow-hidden bg-black flex items-center">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/privatebg.webp"
          alt="Live piano performance at a private bar party in Dublin, Ireland"
          fill
          priority
          className="object-cover opacity-50 grayscale scale-105 animate-ken-burns"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 lg:via-black/70 to-transparent z-10" />
      </div>

      {/* Brand DNA Arcs */}
      <div className="absolute inset-0 z-20 pointer-events-none">
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
            transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            d="M-100,1000 C250,800 350,500 200,0"
            fill="none"
            stroke="#C5A059"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-30 mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 py-24">
        <div className="max-w-5xl">

          {/* Logo */}
          <div className="flex items-baseline gap-2 sm:gap-4 mb-3">
            <h1 className="text-[52px] sm:text-[72px] md:text-[90px] lg:text-[110px] font-serif tracking-[0.08em] md:tracking-[0.15em] text-white leading-none">
              ELEV
            </h1>

            <h1 className="text-[52px] sm:text-[72px] md:text-[90px] lg:text-[110px] font-serif text-[#C5A059] leading-none">
              8
            </h1>
          </div>

          {/* Diamond */}
          <div className="pl-1 md:pl-2 mb-6 md:mb-10">
            <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/20" />
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-[0.15em] md:tracking-[0.25em] lg:tracking-[0.3em] font-serif uppercase text-white/90 leading-[1.15] mb-8 md:mb-10">
            BAR PIANO
            <br />
            & PRIVATE PARTIES
          </h2>

          {/* Content */}
          <div className="space-y-8 md:space-y-10">

            <div className="space-y-3">
              <p className="text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.35em] md:tracking-[0.6em] uppercase text-[#C5A059] font-medium leading-relaxed">
                ENERGY. ATMOSPHERE. LIVELY LOUNGE VIBES.
              </p>

              <p className="text-white/60 text-[10px] md:text-[12px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-light max-w-2xl leading-relaxed">
                Bringing the perfect live soundtrack to
                <br className="hidden md:block" />
                Dublin, Kildare, Wicklow & Co. Clare
              </p>
            </div>

            {/* CTA */}
            <div>
              <button className="group bg-[#C5A059] text-black px-8 sm:px-10 md:px-12 py-4 md:py-6 transition-all duration-700 hover:bg-white flex items-center gap-4 md:gap-6 shadow-2xl">
                <span className="text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold whitespace-nowrap">
                  Book a Party
                </span>

                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Vertical Accent */}
      <div className="absolute bottom-8 md:bottom-12 left-6 sm:left-8 md:left-12 lg:left-20 xl:left-24 z-30">
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 64 }}
          transition={{ delay: 1, duration: 1 }}
          className="hidden md:block w-px h-16 bg-gradient-to-b from-[#C5A059] to-transparent"
        />
      </div>
    </section>
  )
}