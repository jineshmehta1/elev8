"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Home, Wine, ShieldCheck, Star, Sparkles, UserCheck, Diamond } from "lucide-react"

const privateFeatures = [
  {
    title: "Bespoke Home Curation",
    desc: "Musical architecture designed to respect the unique acoustics and layout of your private estate.",
    icon: <Home className="w-5 h-5" />,
    color: "bg-stone-50"
  },
  {
    title: "Discrete Hospitality",
    desc: "Performers vetted for elite behavioral standards, ensuring a respectful and unobtrusive presence.",
    icon: <UserCheck className="w-5 h-5" />,
    color: "bg-[#C5A059]/5"
  },
  {
    title: "World-Class Soloists",
    desc: "Access to an inner circle of virtuosos—from solo pianists to soulful vocalists.",
    icon: <Star className="w-5 h-5" />,
    color: "bg-amber-50"
  },
  {
    title: "Milestone Atmosphere",
    desc: "Creating an emotional resonance tailored to birthdays, anniversaries, and exclusive soirées.",
    icon: <Sparkles className="w-5 h-5" />,
    color: "bg-zinc-50"
  }
]

export function WhyChoosePrivate() {
  return (
    <section className="bg-stone-50 py-24">
      {/* HEADER BADGE */}
      <div className="flex justify-center mb-20">
        <div className="flex items-center bg-white border border-stone-200 rounded-full pl-8 pr-1 py-1 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-black mr-4">Estate Standard</span>
          <div className="bg-[#C5A059] text-white w-10 h-10 rounded-full flex items-center justify-center font-serif text-lg">06</div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: FEATURE STACK */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl md:text-5xl font-serif text-black mb-12">
              The Private <br /> <span className="italic text-[#C5A059]">Distinction.</span>
            </h2>
            {privateFeatures.map((f, i) => (
              <motion.div key={i} className="bg-white p-6 shadow-sm border border-stone-100 group hover:border-[#C5A059]/30 transition-all duration-500">
                <div className="flex items-center">
                  <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#C5A059] ${f.color} group-hover:bg-[#C5A059] group-hover:text-white transition-all`}>
                    {f.icon}
                  </div>
                  <div className="ml-6">
                    <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-1">{f.title}</h3>
                    <p className="text-stone-400 text-xs font-light">{f.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: ARCHITECTURAL IMAGE */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-2xl border-[15px] border-white rounded-tl-[120px] rounded-br-[120px]">
              <Image src="/art.webp" alt="Estate Performance" fill className="object-cover" />
              <div className="absolute top-8 right-8"><Diamond className="w-6 h-6 text-white opacity-40" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}