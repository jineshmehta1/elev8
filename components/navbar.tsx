"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { BookingModal } from "@/components/bookingmodal"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  
  const pathname = usePathname()

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [isOpen])

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const eventLinks = [
    { name: "Weddings", href: "/events/weddings" },
    { name: "Corporate", href: "/events/corporate" },
    { name: "Private Events", href: "/events/private" },
  ]

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          isScrolled || isOpen
            ? "bg-black/95 backdrop-blur-xl py-4 md:py-5"
            : "bg-transparent py-6 md:py-8"
        )}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="group flex flex-col">
            <span className="text-3xl md:text-4xl font-serif tracking-[0.05em] text-white">
              ELEV8
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.4em] text-[#C5A059] uppercase font-light -mt-1">
              ATMOSPHERIC MUSIC
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-x-10 text-sm">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />

            {/* Events Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('events')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-x-1.5 text-[13px] uppercase tracking-widest font-light text-white/90 hover:text-white transition-colors">
                Events
                <ChevronDown className="w-4 h-4 transition-transform" />
              </button>
              <DropdownMenu isOpen={activeDropdown === 'events'} items={eventLinks} />
            </div>

            <NavLink href="/music" label="Our Music" />
            <NavLink href="/performances" label="Performances" />
            <NavLink href="/contact" label="Contact" />
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:block">
            <Button 
              onClick={() => setIsBookingOpen(true)}
              variant="outline"
              className="border-[#C5A059] text-white bg-[#C5A059] hover:bg-[#C5A059] hover:text-black rounded-none px-8 py-6 text-xs tracking-[0.25em] uppercase font-medium transition-all"
            >
              Easy Enquiry Here
            </Button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white z-[110]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} className="text-[#C5A059]" />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 180, damping: 22 }}
            className="fixed inset-0 bg-black z-[95] lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col min-h-screen px-8 py-24">
              <div className="flex flex-col space-y-8 text-4xl font-serif">
                <MobileNavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/about" label="About" onClick={() => setIsOpen(false)} />

                {/* Mobile Events Accordion */}
                <div>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === 'events' ? null : 'events')}
                    className="flex w-full justify-between items-center text-4xl font-serif text-white py-3"
                  >
                    Events
                    <ChevronDown className={cn("transition-transform", mobileExpanded === 'events' && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === 'events' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-6 space-y-6 mt-4 border-l border-[#C5A059]/30"
                      >
                        {eventLinks.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="block text-2xl text-white/70 hover:text-white transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <MobileNavLink href="/music" label="Our Music" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/performances" label="Performances" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/contact" label="Contact" onClick={() => setIsOpen(false)} />
              </div>

              {/* Mobile CTA */}
              <div className="mt-auto pt-12">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setIsBookingOpen(true)
                  }}
                  className="w-full bg-[#C5A059] hover:bg-white text-black py-7 text-sm tracking-[0.3em] uppercase font-bold transition-all"
                >
                  EASY ENQUIRY HERE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  )
}

/* ====================== HELPER COMPONENTS ====================== */

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        "relative text-[13px] uppercase tracking-widest font-light transition-colors",
        isActive ? "text-[#C5A059]" : "text-white/70 hover:text-white"
      )}
    >
      {label}
      <span className={cn(
        "absolute -bottom-1 left-0 h-px bg-[#C5A059] transition-all",
        isActive ? "w-full" : "w-0 group-hover:w-full"
      )} />
    </Link>
  )
}

function DropdownMenu({ isOpen, items }: { isOpen: boolean; items: { name: string; href: string }[] }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          className="absolute top-full left-0 mt-4 w-56 bg-black/95 backdrop-blur-xl border border-white/10 p-6 shadow-2xl z-[120]"
        >
          <div className="flex flex-col gap-y-4 text-sm">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/70 hover:text-[#C5A059] transition-colors tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileNavLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-white hover:text-[#C5A059] transition-colors py-2"
    >
      {label}
    </Link>
  )
}