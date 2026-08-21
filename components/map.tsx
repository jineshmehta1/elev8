"use client"

import { motion } from "framer-motion"
import { MapPin, ShieldCheck, Zap, PenTool } from "lucide-react"

const commitments = [
  {
    icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Discrete Consultation",
    description:
      "We respect the privacy of our high-profile clients. Every inquiry is handled with the utmost discretion and professional confidentiality.",
  },
  {
    icon: <PenTool className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Aesthetic Alignment",
    description:
      "Within 24 hours, we begin designing a bespoke musical proposal that aligns with your venue's DNA and event arc.",
  },
  {
    icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />,
    title: "Technical Excellence",
    description:
      "From grand pianos to premium audio logistics, we handle the entire technical rider so your experience is effortless.",
  },
]

export function ContactPresence() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* MAP SECTION */}
        <div className="relative mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-[450px] sm:h-[550px] lg:h-[650px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.1)] border border-stone-100"
          >
            {/* MAP */}
            <iframe
              src="https://maps.google.com/maps?q=Coach%20Lodge%20Rear%2059%20Rathar%20Avenue%20Dublin&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full grayscale invert-[0.92] contrast-[1.1] brightness-[0.8] saturate-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* STUDIO CARD */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="
                absolute
                left-4 right-4 bottom-4
                sm:left-6 sm:right-auto sm:max-w-sm
                md:left-12 md:bottom-12
                z-20
                bg-[#0A0A0A]/95
                backdrop-blur-xl
                p-5 sm:p-6 md:p-10
                rounded-[1.75rem] md:rounded-[2.5rem]
                border border-white/10
                shadow-2xl
              "
            >
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#C5A059] flex items-center justify-center shadow-lg shadow-[#C5A059]/20">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-black" />
                </div>

                <span className="text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.4em] text-[#C5A059] font-bold uppercase">
                  Ireland Studio
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white mb-3 md:mb-4">
                Dublin Residence
              </h3>

              <p className="text-white/50 font-light text-xs sm:text-sm leading-relaxed mb-5 md:mb-8">
                Coach Lodge, Rear 59 Rathar Avenue, Dublin. From this private
                residence, we curate exceptional live music experiences across
                Dublin, Wicklow & Kildare for weddings, private celebrations,
                corporate gatherings, and luxury events.
              </p>

              <div className="h-px w-full bg-white/10 mb-5 md:mb-8" />

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059]" />
                  <span className="text-white/70 text-[10px] md:text-xs tracking-[0.1em] md:tracking-[0.15em] uppercase">
                    Dublin • Wicklow • Kildare
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                  <span className="text-[#C5A059] text-[9px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase font-bold">
                    Bookings Open
                  </span>
                </div>
              </div>
            </motion.div>

            {/* OVERLAYS */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.5)]" />
          </motion.div>
        </div>

        {/* COMMITMENT CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                bg-stone-50/50
                p-6 sm:p-8 md:p-10 lg:p-12
                rounded-[2rem] md:rounded-[2.5rem]
                border border-stone-100
                hover:bg-white
                hover:shadow-2xl
                hover:shadow-stone-200/50
                transition-all duration-700
                group
              "
            >
              {/* ICON */}
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-stone-100 flex items-center justify-center text-[#C5A059] mb-6 md:mb-10 group-hover:bg-[#C5A059] group-hover:text-white group-hover:border-[#C5A059] transition-all duration-500 shadow-sm">
                {item.icon}
              </div>

              {/* TITLE */}
              <h4 className="text-lg md:text-xl font-serif text-black mb-4 md:mb-6 tracking-wide">
                {item.title}
              </h4>

              {/* DESCRIPTION */}
              <p className="text-stone-400 font-light text-sm leading-relaxed mb-4 md:mb-6 group-hover:text-stone-600 transition-colors">
                {item.description}
              </p>

              {/* DECORATIVE LINE */}
              <div className="w-8 h-px bg-stone-200 group-hover:w-16 group-hover:bg-[#C5A059] transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}