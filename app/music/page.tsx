"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Diamond, Check, HelpCircle, ChevronDown, Music, Volume2, Shield, Calendar, Settings } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function MusicPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)

  const partnerEnsembles = [
    {
      title: "Jazz Ensembles",
      image: "/jazz.webp",
      description: "From elegant duos to full quartets, bringing the sophisticated energy of the golden age to your event.",
      features: ["Swing & Bebop", "Background Ambience", "Custom Lineups"]
    },
    {
      title: "Cinematic Strings",
      image: "/string.webp",
      description: "Ethereal classical and modern string arrangements that add grand elegance and emotional resonance.",
      features: ["Duo, Trio or Quartet", "Modern Pop Covers", "Classical Masterpieces"]
    },
    {
      title: "Soulful Vocalists",
      image: "/vocalist.webp",
      description: "World-class singers performing soul, jazz, and contemporary acoustic songs to connect with your guests.",
      features: ["Acoustic Duets", "Ceremony Solos", "Evening Lounge Set"]
    },
    {
      title: "Saxophone Performance",
      image: "/sax.webp",
      description: "Engaging and smooth saxophone melodies bridging the gap between classic jazz and modern lounge vibes.",
      features: ["Solo Saxophone", "Drinks Reception Jazz", "DJ Improvisation"]
    },
    {
      title: "DJ + Live Music",
      image: "/dj.webp",
      description: "High-energy professional DJ sets fused with live instrumental improvisation to keep the dancefloor alive.",
      features: ["Full Sound System", "Sax & Percussion Fusion", "Tailored Playlists"]
    }
  ]

  const repertoireCategories = [
    {
      category: "Modern Pop & Romances",
      examples: ["Taylor Swift - Lover", "Ed Sheeran - Perfect", "Coldplay - Yellow", "Billie Eilish - Ocean Eyes"]
    },
    {
      category: "Classic Rock & Anthems",
      examples: ["Queen - Bohemian Rhapsody", "Elton John - Your Song", "Fleetwood Mac - Dreams", "The Beatles - Let It Be"]
    },
    {
      category: "Jazz Standards & Swing",
      examples: ["Fly Me to the Moon", "What a Wonderful World", "Autumn Leaves", "La Vie En Rose"]
    },
    {
      category: "Classical & Cinematic",
      examples: ["Ludovico Einaudi - Nuvole Bianche", "Yiruma - River Flows in You", "Pachelbel - Canon in D", "Amélie - Comptine d'un autre été"]
    }
  ]

  const faqs = [
    {
      question: "Do you supply all the sound equipment?",
      answer: "Yes. We provide a premium state-of-the-art stage piano, acoustic/electric guitars, and professional PA sound systems calibrated for the size and acoustics of your venue. All we need is access to a standard power outlet."
    },
    {
      question: "Can we request a specific song for our key moment?",
      answer: "Absolutely. We are happy to arrange and learn up to two new songs specifically for your ceremony walks or first dance, with at least 4 weeks' notice."
    },
    {
      question: "How do you control the volume during drinks receptions or dinners?",
      answer: "We specialize in background music. We calibrate our sound systems specifically so guests can chat easily without shouting, while still enjoying the warm live acoustic atmosphere."
    },
    {
      question: "Do you perform outdoors?",
      answer: "Yes, provided the setup area is completely covered/shaded and flat, with access to power. Safe shelter from direct sunlight or rain is essential to protect our professional instruments."
    },
    {
      question: "How long do you need to set up before the performance?",
      answer: "We typically arrive 60 to 90 minutes before our scheduled start time. This allows us to load in, set up our instruments and sound systems, and run sound checks before your guests arrive."
    },
    {
      question: "Can you travel outside of Dublin and Wicklow?",
      answer: "Yes, we travel nationwide across Ireland (including Kildare, Co. Clare, and beyond) to perform at weddings, private parties, and corporate events. Travel fees may apply depending on the location."
    },
    {
      question: "What happens if one of the performers is unavailable?",
      answer: "In the rare event of an emergency or illness, we have a curated network of elite professional pianists and acoustic guitarists in Ireland who can step in seamlessly to deliver the exact same high-quality performance."
    }
  ]

  return (
    <main className="bg-white selection:bg-[#C5A059] selection:text-white">
      <Navbar />

      {/* 1. HERO BANNER - FULL SCREEN */}
      <section className="relative h-screen w-full overflow-hidden bg-black flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/duo.webp"
            alt="Elev8 Piano & Guitar Duo"
            fill
            className="object-cover opacity-60 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        </div>

        <div className="container relative z-30 mx-auto px-6 sm:px-12 lg:px-24">
          <div className="max-w-4xl">
            <div className="flex items-baseline space-x-2 mb-2">
              <span className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-[0.2em] text-white uppercase">Our Music</span>
            </div>
            <div className="mb-8">
              <Diamond className="w-4 h-4 text-[#C5A059] fill-[#C5A059]/20" />
            </div>
            <h1 className="text-2xl sm:text-3xl tracking-[0.3em] font-serif uppercase text-[#C5A059] mb-6">
              Piano & Guitar Duo
            </h1>
            <p className="text-white/80 text-base sm:text-lg font-light max-w-2xl leading-relaxed mb-10">
              Beautiful, live piano and acoustic guitar tailored perfectly for your next gathering, wedding, or corporate event.
            </p>
            <a
              href="#primary-duo"
              className="inline-flex items-center text-xs text-[#C5A059] tracking-[0.3em] uppercase border-b border-[#C5A059] pb-2 hover:text-white hover:border-white transition-all"
            >
              Explore Our Sounds
            </a>
          </div>
        </div>
      </section>

      {/* 2. THE CORE DUO: PIANO & GUITAR */}
      <section id="primary-duo" className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] font-bold mb-3 block">
                Primary Duo
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-8">
                The Essence of <span className="italic text-[#C5A059]">Elev8</span>
              </h2>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                Our core experience brings together Principal Pianist Tony Devine and Guitarist Plamen Panov. As a duo, we deliver an elegant blend of warm acoustic guitar tones and rich, melodic piano keys.
              </p>
              <p className="text-stone-600 font-light leading-relaxed mb-8">
                Perfect for wedding ceremonies, relaxed drinks receptions, intimate dinners, or corporate background ambiance. We are on call to design the ideal soundscape that is sophisticated, organic, and memorable.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Tailored Setlists",
                  "Acoustic & Electric Tones",
                  "Professional Sound Systems",
                  "Flexible Performance Blocks"
                ].map((feat, i) => (
                  <div key={i} className="flex items-center space-x-3 text-stone-700">
                    <Check className="w-5 h-5 text-[#C5A059]" />
                    <span className="text-sm font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-stone-200 shadow-2xl"
            >
              <Image
                src="/piano4.webp"
                alt="Live Performance"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 1: INTERACTIVE REPERTOIRE */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] font-bold mb-3 block">
              What We Play
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight">
              A Wide & Varied <span className="italic text-[#C5A059]">Repertoire</span>
            </h2>
            <p className="text-stone-500 font-light max-w-xl mx-auto mt-4 text-sm">
              We cover a broad musical spectrum, seamlessly transitioning from classic standards to modern acoustic hits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {repertoireCategories.map((cat, i) => (
              <div key={i} className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100 hover:shadow-lg transition-all duration-300">
                <Music className="w-6 h-6 text-[#C5A059] mb-6" />
                <h3 className="text-lg font-serif text-black mb-4">{cat.category}</h3>
                <ul className="space-y-2">
                  {cat.examples.map((item, idx) => (
                    <li key={idx} className="text-stone-500 text-xs font-light flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: CEREMONY VS. DRINKS RECEPTION SETUP */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] font-bold mb-3 block">
              Performance Formats
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight">
              Ceremonies <span className="italic text-[#C5A059]">& Receptions</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold block mb-4">Format 01</span>
              <h3 className="text-2xl font-serif text-black mb-4">Intimate Ceremonies</h3>
              <p className="text-stone-500 font-light leading-relaxed mb-6 text-sm">
                Quiet, slow, and emotional arrangements. The piano takes a gentle lead while the classical acoustic guitar provides warm harmonic backing to set the perfect mood for your walks.
              </p>
              <div className="w-full h-[1px] bg-stone-100 my-6" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium">Ideal For:</span>
              <p className="text-black text-xs font-light mt-1">Processionals, Recessionals, Registry Signings, and Guest Arrival.</p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-stone-100">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold block mb-4">Format 02</span>
              <h3 className="text-2xl font-serif text-black mb-4">Lively Drinks & Receptions</h3>
              <p className="text-stone-500 font-light leading-relaxed mb-6 text-sm">
                Upbeat acoustic pop covers, jazz swing rhythms, and classic singalong melodies. Structured to be engaging and create a celebratory, social background ambiance.
              </p>
              <div className="w-full h-[1px] bg-stone-100 my-6" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone-400 font-medium">Ideal For:</span>
              <p className="text-black text-xs font-light mt-1">Drinks Receptions, Dinners, Networking Events, and Cocktail Hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: THE GEAR & SOUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-stone-200 shadow-2xl lg:order-last">
              <Image
                src="/trio.webp"
                alt="Instrument Gear Setup"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] font-bold mb-3 block">
                Premium Hardware
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-8">
                Uncompromising <span className="italic text-[#C5A059]">Sound Quality</span>
              </h2>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                We perform using professional-grade stage gear to deliver clear, rich audio at any venue. Our instrumentation is meticulously selected to complement the performance aesthetic of modern luxury events.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <Music className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-black text-base">High-End Stage Piano</h4>
                    <p className="text-stone-500 font-light text-xs mt-1">Nord and Roland stage setups mimicking concert grand actions and tones.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <Settings className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-black text-base">Acoustic & Electric Guitars</h4>
                    <p className="text-stone-500 font-light text-xs mt-1">Taylor acoustics and customized electrics for crystal clear notes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 4: SOUND & VOLUME CALIBRATION */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <span className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold mb-3 block">Volume Control</span>
              <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                The Ambient <span className="italic text-[#C5A059]">Volume Guarantee</span>
              </h2>
              <p className="text-white/70 font-light mt-6 leading-relaxed text-sm md:text-base">
                We believe live music should elevate conversations, not overpower them. We carefully monitor our sound levels to create an elegant sonic backdrop that allows your guests to connect easily.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center space-x-4">
                <Volume2 className="w-8 h-8 text-[#C5A059] flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-white">Acoustic Balance</h4>
                  <p className="text-white/50 font-light text-xs mt-1">Balanced audio output matching the exact acoustics of the room.</p>
                </div>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10 flex items-center space-x-4">
                <Shield className="w-8 h-8 text-[#C5A059] flex-shrink-0" />
                <div>
                  <h4 className="font-serif text-white">No Intrusive Noise</h4>
                  <p className="text-white/50 font-light text-xs mt-1">Professional calibration eliminating static hums or loud feedback.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 5: BESPOKE SONG LEARNING */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-stone-200 shadow-2xl"
            >
              <Image
                src="/brand.webp"
                alt="Acoustic Sheet Music Preparation"
                fill
                className="object-cover"
              />
            </motion.div>
            <div>
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] font-bold mb-3 block">
                Bespoke Arrangements
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight mb-8">
                Tailoring Music <span className="italic text-[#C5A059]">For Your Union</span>
              </h2>
              <p className="text-stone-600 font-light leading-relaxed mb-6">
                Every event is unique. We offer a bespoke custom arrangement service to learn and play special request songs that define your personal memories.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <Calendar className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-black text-base">Early Planning & Collaboration</h4>
                    <p className="text-stone-500 font-light text-xs mt-1">Consult with Tony and Plamen to map your requested song list weeks in advance.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">
                    <Check className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-black text-base">Perfect Arrangement Crafting</h4>
                    <p className="text-stone-500 font-light text-xs mt-1">Translating full band productions into warm, stripped-back piano and guitar arrangements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PARTNER ENSEMBLES - CENTERED ROW 2 */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] font-bold mb-3 block">
              Bigger Sound & Varieties
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight">
              Our Partner <span className="italic text-[#C5A059]">Ensembles</span>
            </h2>
            <p className="text-stone-500 font-light max-w-2xl mx-auto mt-4 text-sm md:text-base">
              Looking for a bigger sound? We also partner with select vocalists, saxophonists, and DJs upon request to build the perfect band for your night.
            </p>
          </div>

          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {partnerEnsembles.slice(0, 3).map((ens, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-stone-100 flex flex-col h-full hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={ens.image}
                    alt={ens.title}
                    fill
                    className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif text-black mb-3">{ens.title}</h3>
                  <p className="text-stone-600 font-light text-sm mb-6 flex-grow leading-relaxed">
                    {ens.description}
                  </p>
                  <div className="space-y-2 mt-auto border-t border-stone-200/60 pt-4">
                    {ens.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-stone-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span className="text-xs font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2: 2 Centered Cards */}
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {partnerEnsembles.slice(3, 5).map((ens, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-stone-100 flex flex-col h-full hover:shadow-xl transition-all duration-500 w-full lg:w-[calc(33.333%-16px)]"
              >
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={ens.image}
                    alt={ens.title}
                    fill
                    className="object-cover transition-transform duration-[2000ms] hover:scale-105"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif text-black mb-3">{ens.title}</h3>
                  <p className="text-stone-600 font-light text-sm mb-6 flex-grow leading-relaxed">
                    {ens.description}
                  </p>
                  <div className="space-y-2 mt-auto border-t border-stone-200/60 pt-4">
                    {ens.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-stone-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
                        <span className="text-xs font-light">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION 6: FREQUENTLY ASKED QUESTIONS - 2 COLUMN WITH SIDE IMAGE */}
      <section className="py-24 bg-white border-t border-stone-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C5A059] font-bold mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-black leading-tight">
              Musical <span className="italic text-[#C5A059]">Logistics</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Image */}
            <div className="lg:col-span-5 relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-stone-200 shadow-2xl">
              <Image
                src="/luxpiano.webp"
                alt="Frequently Asked Questions"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column: Accordion */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-stone-100 pb-4 transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
                  >
                    <div className="flex items-center space-x-4">
                      <HelpCircle className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                      <span className="text-black font-serif text-base sm:text-lg">{faq.question}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-stone-400 transition-transform duration-300 ${
                        activeFaq === index ? "transform rotate-180 text-[#C5A059]" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-stone-500 font-light text-sm sm:text-base leading-relaxed pl-9 pb-4">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="relative py-24 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C5A059_0.8px,transparent_1px)] bg-[length:25px_25px] opacity-10" />
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <span className="text-[#C5A059] text-xs tracking-[0.4em] uppercase mb-4 block">Let&apos;s Perform</span>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
            Ready to Design the Perfect Atmosphere?
          </h2>
          <p className="text-white/70 font-light text-sm md:text-base max-w-xl mx-auto mb-10">
            We are on call to provide beautiful, live piano and acoustic guitar for your next gathering, wedding, or corporate event. Let&apos;s create a custom musical experience for your guests.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#C5A059] text-black hover:bg-white px-12 py-5 text-sm tracking-[0.2em] font-medium uppercase transition-all duration-300"
          >
            Inquire Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
