"use client"

import React, { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { 
  Diamond, Play, ArrowRight, Music, Mic2, Star, Disc, 
  Drum, Users, Sparkles, Building2, ShieldCheck, 
  Calendar, Layers, Target, Trophy, ArrowUpRight, Plus, GlassWater
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PerformanceHero } from "@/components/performBanner"

/* -------------------------------------------------------------------------- */
/*                                HELPER COMPONENTS                            */
/* -------------------------------------------------------------------------- */

const GoldLabel = ({ text }: { text: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center justify-center space-x-4 mb-6"
  >
    <div className="w-8 h-[1px] bg-[#C5A059]/40" />
    <span className="text-[10px] uppercase tracking-[0.5em] text-[#C5A059] font-bold">{text}</span>
    <div className="w-8 h-[1px] bg-[#C5A059]/40" />
  </motion.div>
)

const SectionHeading = ({ main, italic }: { main: string, italic: string }) => (
  <motion.h2 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-3xl md:text-5xl font-serif text-black leading-tight mb-8"
  >
    {main} <span className="italic text-[#C5A059]">{italic}</span>
  </motion.h2>
)

/* -------------------------------------------------------------------------- */
/*                                1. HERO SECTION                             */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                2. OUR PERFORMERS                           */
/* -------------------------------------------------------------------------- */

function PerformerCategories() {
  const categories = [
    { title: "String Ensembles", icon: <Music />, img: "/string.webp" },
    { title: "Vocalists", icon: <Mic2 />, img: "/vocalist.webp" },
    { title: "Saxophonists", icon: <Star />, img: "/network.webp" },
    { title: "DJs", icon: <Disc />, img: "/djlive.webp" },
    { title: "Acoustic Artists", icon: <Users />, img: "/art.webp" },
    { title: "Live Bands", icon: <Building2 />, img: "/pri1.webp" },
    { title: "Percussionists", icon: <Drum />, img: "/per.webp" },
    { title: "Specialty Acts", icon: <Sparkles />, img: "/about.webp" }
  ]

  return (
    <section className="bg-white py-24 md:py-44">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <GoldLabel text="The Roster" />
          <SectionHeading main="Our World-Class" italic="Virtuosos." />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-[#0A0A0A] cursor-pointer shadow-2xl"
            >
              <Image src={cat.img} alt={cat.title} fill className="object-cover opacity-60 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                 <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-[#C5A059] mb-4 group-hover:bg-[#C5A059] group-hover:text-black transition-all">
                    {React.cloneElement(cat.icon as React.ReactElement, { size: 18 })}
                 </div>
                 <h3 className="text-white font-serif text-xl tracking-widest uppercase">{cat.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                3. FEATURED EXPERIENCES                     */
/* -------------------------------------------------------------------------- */

function PerformanceExperiences() {
  const experiences = [
    { title: "Strings", desc: "Elegant music for ceremonies, receptions, and luxury gatherings.", img: "/stcorp.webp" },
    { title: "Vocalists", desc: "From intimate acoustic performances to powerful stage moments.", img: "/vocal.webp" },
    { title: "Saxophone", desc: "Sophisticated lounge ambiance and energetic dance-floor interaction.", img: "/saxo.webp" },
    { title: "DJ + Live Music", desc: "The perfect fusion of modern energy and live performance.", img: "/djlive2.webp" }
  ]

  return (
    <section className="bg-stone-50 py-24 md:py-44">
      <div className="container mx-auto px-6 max-w-7xl mb-24 text-center">
        <GoldLabel text="Signature Experiences" />
        <SectionHeading main="Atmospheric" italic="Curation." />
      </div>
      <div className="container mx-auto px-6 max-w-screen-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[3/4.5] rounded-t-full rounded-b-[2rem] overflow-hidden bg-[#0A0A0A] shadow-2xl mb-8">
                <Image src={exp.img} alt={exp.title} fill className="object-cover opacity-70 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-10 left-0 w-full px-10 text-center">
                   <h3 className="text-white font-serif text-3xl mb-4 italic">{exp.title}</h3>
                   <div className="h-[1px] w-0 bg-[#C5A059] group-hover:w-full transition-all duration-700" />
                </div>
              </div>
              <p className="text-stone-400 font-light text-sm text-center px-4 leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                4. PERFORMANCE STYLES                      */
/* -------------------------------------------------------------------------- */

function PerformanceStyles() {
  const styles = ["Classical", "Contemporary", "Jazz", "Lounge", "Acoustic", "Soul & R&B", "House Music", "Dance & Party"]
  return (
    <section className="bg-white py-24 md:py-44">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
          <div>
            <GoldLabel text="Genre Palette" />
            <SectionHeading main="Defined by" italic="Texture." />
          </div>
          <p className="text-stone-400 font-light text-base max-w-sm leading-relaxed mb-4">A vast repertoire spanning centuries of musical innovation, tailored to your event's DNA.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {styles.map((style, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              className="group p-10 border border-stone-100 flex flex-col items-center justify-center text-center hover:bg-[#C5A059] transition-all duration-500"
            >
              <Diamond className="w-4 h-4 text-[#C5A059] mb-4 group-hover:text-white" />
              <span className="text-black font-bold uppercase text-[10px] tracking-[0.3em] group-hover:text-white transition-colors">{style}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                5. SIGNATURE COMBINATIONS                   */
/* -------------------------------------------------------------------------- */

function SignatureCombinations() {
  const combos = [
    { title: "Quartet + Vocalist", tag: "Ceremony Grandeur", desc: "Perfect for ceremonies and luxury receptions, merging classical depth with soulful narrative." },
    { title: "DJ + Saxophone", tag: "Modern Favorite", desc: "A modern luxury favorite that bridges the gap between curated beats and live improvisation." },
    { title: "DJ + Percussion", tag: "High-Energy", desc: "Interactive and high-impact. The definitive heartbeat of the late-night dancefloor." },
    { title: "Full Band", tag: "Full-Spectrum", desc: "A 10-piece collective delivering a grand entertainment arc from dinner to celebration." }
  ]

  return (
    <section className="bg-[#050505] py-24 md:py-44 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <GoldLabel text="Modular Artistry" />
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-12">Signature <br /><span className="italic text-[#C5A059]">Combinations.</span></h2>
            <div className="space-y-6">
              {combos.map((c, i) => (
                <div key={i} className="group border-l border-white/10 pl-8 py-4 hover:border-[#C5A059] transition-all">
                  <span className="text-[9px] uppercase tracking-[0.4em] text-[#C5A059] font-bold">{c.tag}</span>
                  <h3 className="text-white font-serif text-2xl mt-2 mb-3">{c.title}</h3>
                  <p className="text-white/40 font-light text-sm leading-relaxed max-w-md">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-tr-[200px] rounded-bl-[100px] overflow-hidden border border-white/10 shadow-2xl">
            <Image src="/private.webp" alt="Combination" fill className="object-cover opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-24 h-24 rounded-full border border-white/20 flex items-center justify-center animate-spin-slow">
                 <Diamond className="text-[#C5A059] w-6 h-6" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                6. WHAT SETS US APART                       */
/* -------------------------------------------------------------------------- */

function WhyElev8() {
  const points = [
    { title: "Curated Talent", icon: <Target /> },
    { title: "Luxury Expertise", icon: <Trophy /> },
    { title: "Personalized Music", icon: <Layers /> },
    { title: "Seamless Flow", icon: <Calendar /> },
    { title: "Exceptional Sound", icon: <ShieldCheck /> },
    { title: "Bespoke Design", icon: <Diamond /> }
  ]

  return (
    <section className="bg-white py-24 md:py-44">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="relative aspect-square w-full rounded-full border border-stone-100 p-12">
               <div className="w-full h-full rounded-full overflow-hidden grayscale">
                  <Image src="/privatepiano.webp" alt="Sound quality" fill className="object-cover" />
               </div>
               <div className="absolute -bottom-6 -right-6 bg-[#C5A059] p-10 shadow-2xl">
                  <span className="text-white font-serif text-6xl italic leading-none">8</span>
               </div>
            </div>
          </div>
          <div className="space-y-12">
            <SectionHeading main="Defining the" italic="Elev8 Standard." />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
              {points.map((p, i) => (
                <div key={i} className="group flex items-start space-x-6">
                  <div className="text-[#C5A059] mt-1 group-hover:scale-110 transition-transform">
                    {React.cloneElement(p.icon as React.ReactElement, { size: 24, strokeWidth: 1.5 })}
                  </div>
                  <div>
                    <h4 className="text-black font-bold uppercase text-[11px] tracking-[0.2em] mb-2">{p.title}</h4>
                    <div className="w-0 h-[1px] bg-[#C5A059] group-hover:w-full transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                RECORDINGS SHOWCASE                         */
/* -------------------------------------------------------------------------- */

function RecordingsShowcase() {
  const [activeTab, setActiveTab] = React.useState("instrumentals")

  React.useEffect(() => {
    // Dynamically load Instagram embed script
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process()
      }
    }

    // If script is already loaded, process embeds
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process()
    }

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [activeTab])

  const tabs = [
    { id: "instrumentals", name: "Instrumentals" },
    { id: "original-songs", name: "Rock, R&B & Country" },
    { id: "jazz-covers", name: "Jazz & Covers" },
    { id: "live-reel", name: "Live Reel" },
  ]

  const mediaData: Record<string, Array<{ title: string; subtitle: string; youtubeId: string }>> = {
    instrumentals: [
      { title: "Original Instrumental I", subtitle: "Elev8 Piano Original", youtubeId: "ctvOKyKPp0o" },
      { title: "Original Instrumental II", subtitle: "Elev8 Piano Original", youtubeId: "IBkWDnSaw0Y" },
      { title: "Original Instrumental III", subtitle: "Elev8 Piano Original", youtubeId: "OoxwPl7ToKA" },
    ],
    "original-songs": [
      { title: "Original Rock", subtitle: "Elev8 Live Performance", youtubeId: "PHATsFa3e4o" },
      { title: "Original Rhythm and Blues", subtitle: "Elev8 Live Performance", youtubeId: "2HOCALvNH1Y" },
      { title: "Original Country", subtitle: "Elev8 Live Performance", youtubeId: "l4LLTxkmJnU" },
    ],
    "jazz-covers": [
      { title: "Original Jazz", subtitle: "Elev8 Live Performance", youtubeId: "KRyzWOkOAdU" },
      { title: "Plamen Panov Cover I", subtitle: "Acoustic Session", youtubeId: "zdLBaSMY4Vs" },
      { title: "Plamen Panov Cover II", subtitle: "Acoustic Session", youtubeId: "wkPxNmU3l-A" },
    ]
  }

  const instagramEmbedHtml = `
    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C8AEyFasnQG/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#0a0a0a; border:1px solid rgba(255,255,255,0.1); border-radius:12px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/C8AEyFasnQG/?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#0a0a0a; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style="display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #333; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style="background-color: #333; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style="background-color: #333; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" fill="#C5A059"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#C5A059"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style="color:#C5A059; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #333; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #333; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #333; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style="background-color: #333; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style="width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #333; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style="width: 0px; border-top: 8px solid #333; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style="background-color: #333; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style="width: 0; height: 0; border-top: 8px solid #333; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style="background-color: #333; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style="background-color: #333; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style="color:#888; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/C8AEyFasnQG/?utm_source=ig_embed&amp;utm_campaign=loading" style="color:#888; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by elev8piano (@elev8piano)</a></p></div></blockquote>
  `;

  return (
    <section className="bg-black py-24 md:py-36 text-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <GoldLabel text="Listen & Watch" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-serif text-white leading-tight mb-8"
          >
            Our Signature <span className="italic text-[#C5A059]">Recordings.</span>
          </motion.h2>
          <p className="text-stone-400 font-light text-base max-w-md mx-auto -mt-4">
            Explore authentic audio sessions and live gig clips recorded by Elev8.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-xs tracking-[0.2em] uppercase font-bold border transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#C5A059] text-black border-[#C5A059]"
                  : "bg-transparent text-white/70 border-white/10 hover:text-white hover:border-white/30"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab !== "live-reel" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {mediaData[activeTab]?.map((track, i) => (
                  <div key={i} className="group flex flex-col">
                    <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60 shadow-2xl relative">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${track.youtubeId}`}
                        title={track.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <span className="text-[10px] tracking-[0.3em] uppercase text-[#C5A059] font-bold mt-6 mb-2">
                      {track.subtitle}
                    </span>
                    <h3 className="text-white font-serif text-xl group-hover:text-[#C5A059] transition-colors">
                      {track.title}
                    </h3>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <div className="w-full max-w-[540px] flex justify-center bg-[#0a0a0a] rounded-2xl p-4 border border-white/5 shadow-2xl">
                  <div 
                    className="w-full flex justify-center"
                    dangerouslySetInnerHTML={{ __html: instagramEmbedHtml }} 
                  />
                </div>
                <p className="text-stone-500 text-xs tracking-widest uppercase mt-6">
                  Instagram Reels Live Gig Embed
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                7. PERFORMANCE GALLERY                      */
/* -------------------------------------------------------------------------- */

function PerformanceGallery() {
  const images = ["tony_pacco_1.jpg", "tony_pacco_2.png", "jazztrio.webp", "stduo.webp"]
  return (
    <section className="bg-[#050505] py-24 md:py-44 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-24">
        <GoldLabel text="Film & Still Archive" />
        <h2 className="text-3xl md:text-5xl font-serif text-white text-center leading-tight">Visual <span className="italic text-[#C5A059]">Histories.</span></h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
        {images.map((i) => (
          <motion.div 
            key={i} 
            whileHover={{ opacity: 0.8 }}
            className="relative aspect-square bg-zinc-900 overflow-hidden cursor-crosshair group"
          >
            <Image src={`/${i}`} alt="Gallery" fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2000ms]" />
            <div className="noise-overlay opacity-[0.08]" /> {/* Noise overlay to blend AI details */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <ArrowUpRight className="text-white w-6 h-6" />
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                8. PERFECT FOR                             */
/* -------------------------------------------------------------------------- */

function OccasionsGrid() {
  const occasions = ["Weddings", "Corporate Events", "Private Parties", "Brand Launches", "Luxury Hospitality", "Gala Dinners"]
  return (
    <section className="bg-white py-24 md:py-44">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <GoldLabel text="Suitability" />
          <SectionHeading main="Tailored to the" italic="Occasion." />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occ, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-stone-50 p-12 rounded-t-full flex flex-col items-center justify-center text-center group border border-stone-100 hover:border-[#C5A059]/20 transition-all duration-700"
            >
              <div className="w-2 h-2 rounded-full bg-[#C5A059] mb-8" />
              <h3 className="text-black font-serif text-2xl uppercase tracking-widest leading-none mb-4">{occ}</h3>
              <div className="w-0 h-[1px] bg-[#C5A059] group-hover:w-12 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                9. BOOKING PROCESS                          */
/* -------------------------------------------------------------------------- */

function BookingProcess() {
  const steps = [
    { title: "Consultation", desc: "Bespoke meeting to align our virtuosos with your specific event DNA." },
    { title: "Curation", desc: "Designing the musical arc and mapping the collective to your venue." },
    { title: "Planning", desc: "Detailed technical riders and seamless logistical coordination." },
    { title: "Delivery", desc: "Discrete execution and world-class performance on your signature day." }
  ]
  return (
    <section className="bg-stone-50 py-12 md:py-14">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4">
            <GoldLabel text="The Process" />
            <SectionHeading main="Seamless" italic="Execution." />
            <p className="text-stone-400 font-light text-sm leading-relaxed max-w-xs">Crafting a premium experience requires meticulous detail from first inquiry to final note.</p>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-12">
            {steps.map((s, i) => (
              <div key={i} className="relative group">
                <span className="text-[#C5A059] font-serif text-5xl italic opacity-20 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                <h4 className="text-black font-bold uppercase text-[14px] tracking-[0.2em] mt-6 mb-4">{s.title}</h4>
                <p className="text-stone-400 font-light text-sm leading-relaxed">{s.desc}</p>
                <div className="absolute -left-4 top-0 w-[1px] h-full bg-stone-200 group-hover:bg-[#C5A059] transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                10. FINAL CTA                               */
/* -------------------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="relative overflow-hidden bg-[#050505] rounded-[2rem] md:rounded-[3rem] px-6 sm:px-10 md:px-16 lg:px-24 py-12 md:py-16 lg:py-20 text-center">

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <span className="text-[35vw] md:text-[20vw] font-serif italic text-white leading-none">
              ELEV8
            </span>
          </div>

          <div className="relative z-10 flex flex-col items-center">

            <GoldLabel text="Request Curation" />

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1]">
              Discover the
              <br />
              <span className="italic text-[#C5A059]">
                Perfect Performance.
              </span>
            </h2>

            <p className="mt-6 text-white/50 text-sm md:text-base font-light leading-relaxed max-w-2xl">
              Elev8 transforms events through exceptional talent,
              intentional sound design, and unforgettable experiences.
            </p>

            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

              <button
                className="
                  bg-[#C5A059]
                  text-white
                  px-8 md:px-10
                  py-4 md:py-5
                  font-bold
                  text-[10px]
                  tracking-[0.3em]
                  uppercase
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-700
                  shadow-xl
                  w-full sm:w-auto
                "
              >
                Book Consultation
              </button>

              <button
                className="
                  bg-white
                  text-black
                  px-8 md:px-10
                  py-4 md:py-5
                  font-bold
                  text-[10px]
                  tracking-[0.3em]
                  uppercase
                  hover:bg-[#C5A059]
                  hover:text-white
                  transition-all
                  duration-700
                  w-full sm:w-auto
                "
              >
                View All Performers
              </button>

            </div>
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                                MAIN PAGE COMPONENT                         */
/* -------------------------------------------------------------------------- */

export default function PerformancePage() {
  return (
    <main className="bg-white selection:bg-[#C5A059] selection:text-white">
        <Navbar/>
      <PerformanceHero/>
      <PerformerCategories />
      <PerformanceExperiences />
      <RecordingsShowcase />
      <PerformanceStyles />
      <SignatureCombinations />
      <WhyElev8 />
      <PerformanceGallery />
      <OccasionsGrid />
      <BookingProcess />
      <FinalCTA />
      <Footer/>
      
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </main>
  )
}