import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {ContactHero} from "@/components/contactBanner"
import { ContactSection } from "@/components/contact"
import { ContactPresence } from "@/components/map"
import { ContactCTA } from "@/components/contactcta"


export default function ContactPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <ContactHero />
      <ContactSection />
      <ContactPresence />
      <ContactCTA />
      <Footer />
    </main>
  )
}