"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Instagram, Youtube, MessageCircle, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
// THIS WAS THE MISSING IMPORT CAUSING THE ERROR:
import { cn } from "@/lib/utils"

export function Footer() {
  const whiteKeys = Array.from({ length: 28 });

  return (
    <footer className="bg-[#050505] text-white border-t border-white/5 pt-16 lg:pt-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-16 lg:mb-24">
        
        {/* TOP SECTION: BRANDING & CALL TO ACTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 lg:mb-20 gap-10">
          <div className="flex flex-col text-left">
            <Link href="/" className="group flex flex-col mb-4">
              <span className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-widest text-white transition-colors duration-300">
                ELEV8
              </span>
              <span className="text-[10px] md:text-[11px] tracking-[0.4em] md:tracking-[0.5em] text-[#C5A059] uppercase mt-1 font-light">
                Atmospheric Music
              </span>
            </Link>
            <p className="text-white/40 font-light text-sm md:text-base max-w-sm leading-relaxed">
              Curating refined sonic landscapes for the world’s most distinguished gatherings. Led by Principal Tony Devine.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
             <Button asChild className="bg-[#25D366] hover:bg-[#20B858] text-white rounded-none px-8 lg:px-10 py-6 lg:py-7 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-bold h-auto shadow-2xl w-full sm:w-auto">
                <a href="https://wa.me/+353857512997?text=Hello%20Tony!" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Concierge WhatsApp
                </a>
              </Button>
              <Link href="/booking" className="w-full sm:w-auto">
                <Button className="bg-white text-black hover:bg-[#C5A059] hover:text-white transition-all duration-500 rounded-none px-8 lg:px-10 py-6 lg:py-7 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-bold h-auto w-full shadow-2xl">
                  Request Curation
                </Button>
              </Link>
          </div>
        </div>

        <div className="h-[1px] w-full bg-white/5 mb-16 lg:mb-20" />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="space-y-6 lg:space-y-8">
            <h4 className="text-[11px] font-bold text-[#C5A059] tracking-[0.3em] uppercase">The Experience</h4>
            <ul className="space-y-3 lg:space-y-4">
              <FooterLink href="/about" label="About Tony & Plamen" />
              <FooterLink href="/music" label="Our Music" />
              <FooterLink href="/performances" label="Visual Archives" />
            </ul>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <h4 className="text-[11px] font-bold text-[#C5A059] tracking-[0.3em] uppercase">Occasions</h4>
            <ul className="space-y-3 lg:space-y-4">
              <FooterLink href="/events/weddings" label="Explore Wedding Packages" />
              <FooterLink href="/events/corporate" label="View Corporate Entertainment" />
              <FooterLink href="/events/private" label="Private Party Live Music" />
              <FooterLink href="/contact" label="Regional Residencies" />
            </ul>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <h4 className="text-[11px] font-bold text-[#C5A059] tracking-[0.3em] uppercase">Contact</h4>
            <div className="space-y-4 text-sm font-light">
              <div className="flex items-start space-x-4 group cursor-pointer">
                <MapPin className="w-4 h-4 text-[#C5A059] mt-1 flex-shrink-0" />
                <p className="text-white/50 group-hover:text-white transition-colors leading-relaxed">
                  Serving Dublin, Wicklow, <br />Kildare & Co. Clare
                </p>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <p className="text-white/50 group-hover:text-white transition-colors">+353 (85) 751 2997</p>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <Mail className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <p className="text-white/50 group-hover:text-white transition-colors break-all">Elev8piano@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <h4 className="text-[11px] font-bold text-[#C5A059] tracking-[0.3em] uppercase">Connect</h4>
            <div className="flex space-x-4">
              <SocialIcon href="https://instagram.com/elev8piano" icon={<Instagram className="w-4 h-4" />} />
              <SocialIcon href="https://www.youtube.com/@elev8piano" icon={<Youtube className="w-4 h-4" />} />
            </div>
            <div className="pt-2">
               <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-4">Inquiry Brochure</p>
               <div className="relative group">
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C5A059] transition-all rounded-none placeholder:text-white/10"
                  />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C5A059] group-hover:translate-x-1 transition-transform">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 lg:mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-center md:text-left">
            © 2025 ELEV8 PIANO. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center space-x-6 lg:space-x-8 text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/20">
            <Link href="/privacy" className="hover:text-[#C5A059] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#C5A059] transition-colors">Terms</Link>
          </div>

          <p className="text-white/20 text-[9px] md:text-[10px] tracking-[0.2em] uppercase">
            DESIGNED BY{" "}
            <a 
              href="https://wa.me/917851988964" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#C5A059] hover:text-white transition-colors font-bold"
            >
              JINESH MEHTA
            </a>
          </p>
        </div>
      </div>

      {/* --- RESPONSIVE REALISTIC PIANO KEYBOARD --- */}
      <div className="relative w-full h-20 md:h-32 flex bg-black select-none border-t border-white/10">
        {whiteKeys.map((_, i) => {
          const patternIndex = i % 7;
          const hasBlackKey = patternIndex !== 2 && patternIndex !== 6;
          const isHiddenOnMobile = i > 12;

          return (
            <div 
              key={i} 
              className={cn(
                "relative flex-1 h-full min-w-[20px] md:min-w-[40px]",
                isHiddenOnMobile ? "hidden sm:block" : "block"
              )}
            >
              <motion.div 
                whileHover={{ backgroundColor: "#f9f9f9" }}
                whileTap={{ scaleY: 0.97, originY: 0, backgroundColor: "#eeeeee" }}
                className="w-full h-full bg-white border-r border-zinc-200 transition-colors duration-75 cursor-pointer shadow-[inset_0_-4px_6px_rgba(0,0,0,0.05)]"
              />
              {hasBlackKey && (
                <motion.div 
                  whileHover={{ backgroundColor: "#333" }}
                  whileTap={{ height: "55%", backgroundColor: "#000" }}
                  className="absolute top-0 left-[65%] w-[70%] h-[60%] bg-[#111] z-10 rounded-b-[2px] cursor-pointer shadow-[0_4px_8px_rgba(0,0,0,0.6)] border-x border-b border-white/10"
                />
              )}
            </div>
          )
        })}
      </div>
    </footer>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-white/40 hover:text-[#C5A059] transition-all duration-300 text-sm font-light flex items-center group">
        <span className="w-0 group-hover:w-3 h-[1px] bg-[#C5A059] mr-0 group-hover:mr-2 transition-all duration-300" />
        {label}
      </Link>
    </li>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} target="_blank">
      <div className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white/60 hover:border-[#C5A059] hover:text-[#C5A059] transition-all duration-500">
        {icon}
      </div>
    </Link>
  )
}