"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
  Loader2,
} from "lucide-react"

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name || !form.email) {
      setStatus("error")
      return
    }

    setStatus("loading")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) throw new Error("Request failed")

      setStatus("success")
      setForm({ name: "", email: "", eventType: "", date: "", message: "" })
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <section className="bg-white py-16 md:py-24 lg:py-40">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 sm:px-6 py-2 bg-stone-50 border border-[#C5A059]/30 rounded-full mb-6 md:mb-8"
          >
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#C5A059] font-bold">
              The Connection
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-black leading-tight"
          >
            Get In <span className="italic text-[#C5A059]">Touch</span>
          </motion.h2>
        </div>

        {/* MAIN CONTAINER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-stone-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:shadow-[0_40px_100px_rgba(0,0,0,0.08)]">

          {/* LEFT PANEL */}
          <div className="lg:col-span-5 bg-[#0A0A0A] relative p-8 sm:p-10 md:p-14 lg:p-16 xl:p-20 flex flex-col justify-between overflow-hidden">

            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage:
                  "radial-gradient(#C5A059 1.5px, transparent 1.5px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif text-white mb-10 md:mb-16 leading-tight">
                Initiate a <br />
                <span className="text-[#C5A059] italic">
                  Private Consultation
                </span>
              </h3>

              <div className="space-y-8 md:space-y-12">
                <ContactDetail
                  icon={<Mail />}
                  label="Direct Correspondence"
                  value="elev8piano@gmail.com"
                />

                <ContactDetail
                  icon={<Phone />}
                  label="Studio Line"
                  value="+353 (85) 751 2997"
                />

                <ContactDetail
                  icon={<MapPin />}
                  label="Global Presence"
                  value="Available for Worldwide Curation"
                />
              </div>
            </div>

            {/* SOCIAL LINKS */}
            <div className="relative z-10 pt-10 md:pt-16 flex flex-wrap items-center gap-4 md:gap-8">
              <div className="h-px w-12 bg-[#C5A059]/30 hidden sm:block" />

              <a
                href="#"
                className="text-white/40 hover:text-[#C5A059] transition-all text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.4em] uppercase font-bold"
              >
                Instagram
              </a>

              <a
                href="#"
                className="text-white/40 hover:text-[#C5A059] transition-all text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.4em] uppercase font-bold"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 md:p-14 lg:p-16 xl:p-20">
            <div className="max-w-xl mx-auto">

              {status === "success" ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center gap-4 py-20">
                  <div className="w-14 h-14 rounded-full border border-[#C5A059]/30 flex items-center justify-center">
                    <Check className="w-6 h-6 text-[#C5A059]" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-serif text-black">
                    Thank you.
                  </h4>
                  <p className="text-stone-500 max-w-sm font-light">
                    Your enquiry has been received. Our team will be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 text-[10px] tracking-[0.3em] uppercase font-bold text-[#C5A059] hover:text-black transition-colors"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center space-x-4 mb-10 md:mb-16">
                    <span className="text-[9px] md:text-[10px] tracking-[0.25em] md:tracking-[0.4em] text-[#C5A059] font-bold uppercase whitespace-nowrap">
                      01. Inquiry Details
                    </span>

                    <div className="h-px flex-grow bg-stone-100" />
                  </div>

                  <form className="space-y-8 md:space-y-12" onSubmit={handleSubmit}>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <BespokeInput
                        label="Full Name"
                        placeholder="e.g. Julian Voss"
                        value={form.name}
                        onChange={(v) => handleChange("name", v)}
                      />

                      <BespokeInput
                        label="Email Address"
                        placeholder="voss@estate.com"
                        value={form.email}
                        onChange={(v) => handleChange("email", v)}
                      />

                      <BespokeInput
                        label="Event Type"
                        placeholder="Wedding, Gala, Private..."
                        value={form.eventType}
                        onChange={(v) => handleChange("eventType", v)}
                      />

                      <BespokeInput
                        label="Proposed Date"
                        placeholder="DD / MM / YYYY"
                        value={form.date}
                        onChange={(v) => handleChange("date", v)}
                      />
                    </div>

                    <div className="space-y-4 pt-2 md:pt-4">
                      <label className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] md:tracking-[0.4em] text-[#C5A059] font-bold">
                        02. The Vision
                      </label>

                      <textarea
                        rows={5}
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Describe the atmosphere you wish to create..."
                        className="w-full bg-transparent border-b border-stone-200 py-4 text-stone-800 focus:outline-none focus:border-[#C5A059] transition-all duration-500 font-light resize-none placeholder:text-stone-300 text-base md:text-lg"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative w-full bg-black py-5 md:py-7 text-white overflow-hidden transition-all duration-700 disabled:opacity-60"
                    >
                      <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

                      <div className="relative z-10 flex items-center justify-center gap-3 md:gap-6 text-[10px] md:text-[11px] tracking-[0.2em] md:tracking-[0.4em] uppercase font-bold">
                        {status === "loading" ? (
                          <>
                            <span>Sending</span>
                            <Loader2 className="w-4 h-4 animate-spin" />
                          </>
                        ) : (
                          <>
                            <span>Request Curation</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                          </>
                        )}
                      </div>
                    </button>

                    {status === "error" && (
                      <p className="text-center text-xs text-red-500">
                        Please fill in your name and email, then try again.
                      </p>
                    )}

                    <p className="text-center text-[8px] md:text-[9px] text-stone-300 tracking-[0.2em] md:tracking-widest uppercase">
                      Expect a response within 24 hours of your inquiry.
                    </p>

                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function BespokeInput({
  label,
  placeholder,
  value,
  onChange,
}: {
  label: string
  placeholder: string
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="flex flex-col space-y-3 group">
      <label className="text-[9px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-stone-400 group-focus-within:text-[#C5A059] transition-colors font-bold">
        {label}
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent border-b border-stone-100 py-3 text-stone-800 focus:outline-none focus:border-[#C5A059] transition-all duration-500 font-light placeholder:text-stone-300 text-sm md:text-base"
      />
    </div>
  )
}

function ContactDetail({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start space-x-4 md:space-x-6 group cursor-pointer">
      <div className="w-10 h-10 rounded-full border border-[#C5A059]/20 flex items-center justify-center text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black transition-all duration-500 flex-shrink-0">
        <div className="scale-75">{icon}</div>
      </div>

      <div className="min-w-0">
        <p className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/30 font-bold mb-1">
          {label}
        </p>

        <p className="text-sm md:text-lg font-serif text-white/80 group-hover:text-white transition-colors break-words">
          {value}
        </p>
      </div>
    </div>
  )
}