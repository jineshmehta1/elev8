"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Diamond } from "lucide-react"

export function JazzFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "How far in advance should I book a jazz ensemble?",
      a: "We recommend booking 6–12 weeks in advance, especially for weddings, corporate events, and peak holiday seasons to ensure best availability and curation time.",
    },
    {
      q: "Can your ensembles perform outdoors?",
      a: "Yes. All our musicians utilize professional sound systems and can deliver exceptional performances in both indoor and outdoor settings, provided technical safety is met.",
    },
    {
      q: "Do you accept specific song requests?",
      a: "Absolutely. We welcome song requests and can craft bespoke arrangements for your first dance, anniversary, or any signature moment of your event.",
    },
    {
      q: "What is included in the performance fee?",
      a: "The fee includes the bespoke live performance, professional audio equipment, setup/teardown logistics, and travel within our principal regional hubs.",
    },
    {
      q: "Can we customize the ensemble size?",
      a: "Yes. From intimate duos to full jazz collectives, we tailor the ensemble size, repertoire, and duration to perfectly match the architecture of your vision.",
    },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: FAQs - Occupies 7 columns on desktop */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="mb-10 md:mb-16 text-left">
              <div className="flex items-center space-x-3 mb-6">
                <Diamond className="w-3 h-3 text-[#C5A059] fill-[#C5A059]/20" />
                <span className="uppercase tracking-[3px] md:tracking-[5px] text-[#C5A059] text-[10px] md:text-xs font-bold">
                  Clarity & Confidence
                </span>
              </div>
              
              {/* HEADING: Strictly 3xl Mobile / 5xl Desktop */}
              <h2 className="text-3xl md:text-5xl font-serif leading-tight text-black">
                Frequently <span className="italic text-[#C5A059]">Inquired.</span>
              </h2>
            </div>

            <div className="space-y-4 md:space-y-5">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                return (
                  <motion.div
                    key={index}
                    className="border border-stone-100 rounded-2xl md:rounded-[2.5rem] overflow-hidden group transition-all duration-500 hover:border-[#C5A059]/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-stone-50 transition-colors"
                    >
                      <div className="flex items-start gap-4 md:gap-6">
                        <span className="text-[#C5A059] font-serif text-lg md:text-2xl opacity-50 group-hover:opacity-100 transition-opacity mt-0.5">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-lg md:text-xl font-medium text-black pr-4 leading-tight">{faq.q}</h3>
                      </div>

                      <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl border border-stone-200 flex items-center justify-center transition-all duration-500 ${isOpen ? 'bg-[#C5A059] border-[#C5A059]' : 'bg-transparent'}`}>
                        {isOpen ? 
                          <Minus className="w-4 h-4 md:w-5 md:h-5 text-white" /> : 
                          <Plus className="w-4 h-4 md:w-5 md:h-5 text-stone-400 group-hover:text-[#C5A059]" />
                        }
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-6 md:px-20 pb-8 text-stone-500 font-light leading-relaxed text-base md:text-lg">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* RIGHT SIDE: IMAGE - Occupies 5 columns on desktop, Sticky behavior */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="lg:sticky lg:top-32">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative aspect-[4/5] sm:aspect-video lg:aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border border-stone-100"
              >
                <Image
                  src="/jazzfaq.webp" 
                  alt="Live Jazz Performance"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-[1px] bg-[#C5A059]" />
                    <span className="uppercase text-[9px] md:text-xs tracking-[3px] font-bold text-[#C5A059]">Live from the soul</span>
                  </div>
                  <p className="text-xl md:text-3xl font-serif italic leading-tight text-white/90">
                    “The right note at the right moment can turn any event into a memory that lasts forever.”
                  </p>
                </div>
              </motion.div>

              {/* Decorative Corner Accents (Desktop only) */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 md:w-40 md:h-40 border border-[#C5A059]/20 rounded-full hidden xl:block -z-10" />
              <div className="absolute -left-8 top-12 w-20 h-20 md:w-24 md:h-24 border border-[#C5A059]/10 rounded-full hidden xl:block -z-10" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}