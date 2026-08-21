"use client"

import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import {
  Trophy,
  Users,
  Globe,
  Target,
  Award,
  BookOpen,
  Clock,
  Heart,
  CheckCircle,
  Play,
  ChevronDown,
  ChevronUp,
  Star,
  Quote,
} from "lucide-react"
import { Hero } from "@/components/hero"
import { BrandIntroduction } from "@/components/intro"
import { MusicCollection } from "@/components/services"
import { FAQSection } from "@/components/faq"
import { FinalCTA } from "@/components/cta"
import { EventExperiences } from "@/components/service"
import { ArtistShowcase } from "@/components/artist"
import { TestimonialsSection } from "@/components/testimonial"
import { WhyChooseElev8 } from "@/components/why"


export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  // Structured Data for SEO
  const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Elev8 Piano",
  url: "https://www.elev8piano.com",
  logo: "https://www.elev8piano.com/logo.webp",

  description:
    "Luxury live piano performances for weddings, private celebrations, corporate events, and destination occasions throughout Ireland.",

  telephone: "+353857512997",
  email: "elev8piano@gmail.com",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Coach Lodge, Rear 59 Rathar Avenue, D6",
    addressLocality: "Dublin",
    addressCountry: "IE",
  },

  areaServed: [
    "Dublin",
    "Wicklow",
    "Kildare",
    "Ireland",
  ],

  sameAs: [
    "https://www.instagram.com/elev8piano",
    "https://www.youtube.com/@elev8piano",
  ],

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },

  faqPage: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide your own piano?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can provide a premium stage piano and professional sound system, or perform on your venue's acoustic piano if available.",
        },
      },
      {
        "@type": "Question",
        name: "Can we request specific songs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We are happy to learn special requests for weddings, private celebrations, and corporate events with sufficient notice.",
        },
      },
      {
        "@type": "Question",
        name: "What areas do you cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We regularly perform throughout Dublin, Wicklow, Kildare and across Ireland, including destination weddings and private events.",
        },
      },
    ],
  },
}

  return (
    <>
      <Head>
  <title>
    Elev8 Piano | Luxury Wedding & Event Pianist in Ireland
  </title>

  <meta
    name="description"
    content="Elegant live piano performances for weddings, private celebrations, corporate events, and luxury occasions throughout Dublin, Wicklow, Kildare, and across Ireland."
  />

  <meta
    name="keywords"
    content="Wedding Pianist Ireland, Dublin Pianist, Luxury Event Music, Corporate Event Pianist, Wedding Music Dublin, Wedding Pianist Wicklow, Wedding Pianist Kildare, Live Piano Music, Luxury Wedding Entertainment, Destination Wedding Music Ireland"
  />

  <meta name="author" content="Elev8 Piano" />

  <meta name="robots" content="index,follow" />

  <meta
    property="og:title"
    content="Elev8 Piano | Luxury Wedding & Event Pianist"
  />

  <meta
    property="og:description"
    content="Luxury piano performances for weddings, private celebrations, corporate occasions and destination events throughout Ireland."
  />

  <meta
    property="og:image"
    content="https://www.elev8piano.com/og-image.webp"
  />

  <meta
    property="og:url"
    content="https://www.elev8piano.com"
  />

  <meta property="og:type" content="website" />

  <meta property="og:site_name" content="Elev8 Piano" />

  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Elev8 Piano | Luxury Wedding & Event Pianist"
  />

  <meta
    name="twitter:description"
    content="Elegant piano performances for weddings, luxury events and private celebrations across Ireland."
  />

  <meta
    name="twitter:image"
    content="https://www.elev8piano.com/og-image.webp"
  />

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData),
    }}
  />
</Head>
      <div className="min-h-screen bg-white">
        <header>
          <Navbar />
        </header>
        <main>
         <Hero/>
         <BrandIntroduction/>
         <MusicCollection/>
         <EventExperiences/>
         <ArtistShowcase/>
         <TestimonialsSection/>
         <WhyChooseElev8/>
         <FAQSection/>
         <FinalCTA/>
        </main>
        <Footer/>
      </div>
    </>
  )
}
