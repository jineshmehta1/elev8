"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    question: "How is the repertoire curated for our event?",
    answer:
      "Each performance is thoughtfully tailored to your occasion. Rather than relying on a fixed setlist, we craft a musical journey that complements your venue, audience, and the atmosphere you wish to create."
  },
  {
    question: "Do we need to provide a piano at the venue?",
    answer:
      "No. We can provide a premium stage piano and professional sound system, or perform on your venue's acoustic piano if it is regularly maintained and tuned."
  },
  {
    question: "Can we request specific songs for our event?",
    answer:
      "Absolutely. We are happy to learn special requests for weddings, private celebrations, and corporate events, provided sufficient notice is given before the performance date."
  },
  {
    question: "What areas do you cover?",
    answer:
      "Based in Dublin, we regularly perform throughout Dublin, Wicklow and Kildare, and are available for events across Ireland. If your venue is outside these areas, simply get in touch to discuss travel arrangements."
  },
  {
    question: "Do you travel for destination events?",
    answer:
      "Yes. We are available for destination weddings, private events, and luxury celebrations throughout Ireland and internationally, subject to availability and travel requirements."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-white py-14 md:py-10 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* LEFT SIDE: THE VISUAL ANCHOR */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="px-5 py-2 bg-stone-50 border border-stone-200 rounded-full mb-8 w-fit">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">
                  Common Inquiries
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-black leading-tight mb-8">
                Refining the <br /> <span className="italic text-[#C5A059]">Details</span>
              </h2>
              <p className="text-stone-500 font-light text-lg leading-relaxed max-w-sm mb-12">
                Everything you need to know about bringing the Elev8 experience to your next gathering.
              </p>
            </div>

            {/* Architectural Image Detail */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl">
              <Image 
                src="/faq.webp" // A detailed shot of piano strings or venue architecture
                alt="Grand piano detail shot at a luxury event venue in Ireland"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT SIDE: THE ACCORDIONS */}
          <div className="lg:col-span-7 pt-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-stone-100">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg md:text-xl font-serif transition-colors duration-500 ${openIndex === index ? 'text-[#C5A059]' : 'text-black group-hover:text-[#C5A059]'}`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                    <Plus className={`w-5 h-5 ${openIndex === index ? 'text-[#C5A059]' : 'text-stone-300'}`} />
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="pb-8 text-stone-500 font-light leading-relaxed text-base max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CALL TO ACTION LINK */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="mt-12 p-8 bg-stone-50 rounded-[2rem] border border-stone-100 flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <p className="text-stone-800 font-serif text-xl italic">
                Have a more specific vision?
              </p>
              <button className="bg-black text-white px-10 py-5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-[#C5A059] transition-all duration-500">
                Send a Bespoke Request
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}