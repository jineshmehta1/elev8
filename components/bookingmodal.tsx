"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Diamond, Check, Loader2 } from "lucide-react"
import Image from "next/image"

export function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [selectedTextures, setSelectedTextures] = useState<string[]>([])
  const [form, setForm] = useState({ name: "", email: "", date: "", location: "", eventType: "", message: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const musicTextures = [
    { id: 'piano', label: 'Bar Piano' },
    { id: 'jazz', label: 'Single Performer' },
    { id: 'strings', label: 'Acoustic Guitar' },
    { id: 'vocal', label: 'Full Band' },
    { id: 'sax', label: 'Duo' },
    { id: 'dj', label: 'DJ' },
  ]

  const toggleTexture = (id: string) => {
    setSelectedTextures(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, textures: selectedTextures }),
      })
      if (!res.ok) throw new Error()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          />

          <motion.div
            initial={{ y: 60, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 60, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-5xl bg-white shadow-2xl flex flex-col overflow-hidden rounded-3xl max-h-[95vh]"
          >
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-50 bg-white rounded-full p-2.5 shadow-md text-stone-500 hover:text-black transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-col lg:grid lg:grid-cols-12 min-h-[85vh] lg:min-h-[82vh]">

              <div className="lg:col-span-5 bg-[#0A0A0A] p-8 md:p-12 lg:p-16 flex flex-col relative">
                <div className="relative z-10 flex-1 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <Diamond className="w-5 h-5 text-[#C5A059]" />
                    <span className="text-xs tracking-[0.5em] uppercase font-bold text-[#C5A059]">THE REGISTRY</span>
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-serif text-white leading-none mb-6">
                    Elevating your <span className="italic text-[#C5A059]">Atmosphere.</span>
                  </h3>
                  <p className="text-white/60 text-base leading-relaxed max-w-sm">
                    Describe the sonic architecture of your event. Our team will craft a bespoke musical experience.
                  </p>
                </div>

                <div className="hidden md:block relative mt-12 aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
                  <Image src="/sonic.webp" alt="Sonic Experience" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              </div>

              <div className="lg:col-span-7 bg-white flex flex-col overflow-hidden">
                <div className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-16">

                  {status === "success" ? (
                    <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-20">
                      <Check className="w-10 h-10 text-[#C5A059]" />
                      <h4 className="text-2xl font-serif">Thank you.</h4>
                      <p className="text-stone-500 max-w-sm">
                        Your enquiry has been received. Our team will be in touch within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-12 md:space-y-16" onSubmit={handleSubmit}>

                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-xl font-serif italic text-[#C5A059]">01</span>
                          <h4 className="uppercase text-xs tracking-[0.4em] font-bold text-stone-400">Correspondence</h4>
                        </div>
                        <div className="space-y-8">
                          <UnderlineInput label="Full Name" placeholder="Alexandra Moreau" value={form.name} onChange={v => handleChange("name", v)} />
                          <UnderlineInput label="Email Address" placeholder="hello@alexandramoreau.com" value={form.email} onChange={v => handleChange("email", v)} />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-xl font-serif italic text-[#C5A059]">02</span>
                          <h4 className="uppercase text-xs tracking-[0.4em] font-bold text-stone-400">The Gathering</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                          <UnderlineInput label="Date" placeholder="15 • 06 • 2026" value={form.date} onChange={v => handleChange("date", v)} />
                          <UnderlineInput label="Location" placeholder="Lake Como, Italy" value={form.location} onChange={v => handleChange("location", v)} />
                        </div>
                        <div className="mt-8">
                          <UnderlineInput label="Event Type" placeholder="Wedding, Gala, Private Dinner..." value={form.eventType} onChange={v => handleChange("eventType", v)} />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-xl font-serif italic text-[#C5A059]">03</span>
                          <h4 className="uppercase text-xs tracking-[0.4em] font-bold text-stone-400">Sonic Texture</h4>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {musicTextures.map((t) => (
                            <button
                              key={t.id}
                              type="button"
                              onClick={() => toggleTexture(t.id)}
                              className={`px-5 py-4 text-sm border rounded-2xl flex items-center justify-between transition-all font-medium ${
                                selectedTextures.includes(t.id)
                                  ? 'bg-black text-white border-black'
                                  : 'border-stone-200 hover:border-[#C5A059] text-stone-600'
                              }`}
                            >
                              {t.label}
                              {selectedTextures.includes(t.id) && <Check className="w-4 h-4 text-[#C5A059]" />}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-xl font-serif italic text-[#C5A059]">04</span>
                          <h4 className="uppercase text-xs tracking-[0.4em] font-bold text-stone-400">Your Vision</h4>
                        </div>
                        <textarea
                          rows={5}
                          value={form.message}
                          onChange={e => handleChange("message", e.target.value)}
                          className="w-full border-b border-stone-200 py-4 text-base focus:outline-none focus:border-[#C5A059] placeholder:text-stone-400 resize-y"
                          placeholder="Describe the mood, atmosphere, and emotional journey you envision..."
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={status === "loading"}
                          className="w-full sm:w-auto bg-black hover:bg-[#C5A059] text-white hover:text-black px-16 py-7 text-sm tracking-widest uppercase font-bold flex items-center justify-center gap-4 transition-all rounded-none disabled:opacity-60"
                        >
                          {status === "loading" ? (
                            <>
                              Sending <Loader2 className="w-4 h-4 animate-spin" />
                            </>
                          ) : (
                            <>
                              Easy Enquiry Here <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                        {status === "error" && (
                          <p className="text-xs text-red-500 mt-4">Something went wrong. Please try again.</p>
                        )}
                        <p className="text-xs text-stone-400 text-center sm:text-left mt-6">
                          Our team usually responds within 24 hours.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

function UnderlineInput({
  label, placeholder, value, onChange,
}: { label: string; placeholder: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="block text-[10px] tracking-[0.4em] uppercase font-bold text-stone-400 mb-2">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border-b border-stone-200 pb-3 text-base focus:outline-none focus:border-[#C5A059] placeholder:text-stone-400"
      />
    </div>
  )
}