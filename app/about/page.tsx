"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Trophy, Award, Users, Target, Calendar, Star, Heart, BookOpen, Lightbulb, Eye } from "lucide-react"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/aboutBanner"
import { OurStory } from "@/components/about"
import { MissionVision } from "@/components/mission"
import { WhyChooseElev8 } from "@/components/whyus"
import { OurValues } from "@/components/benefit"
import { ArtistShowcase } from "@/components/artist"
import { AboutCTA } from "@/components/aboutcta"
import { MeetTonyDevine } from "@/components/tony"
import { MusicForEveryOccasion } from "@/components/musicforeveryoccasion"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <AboutHero/>
      <OurStory/>
      <MissionVision/>
      <MeetTonyDevine/>
      <WhyChooseElev8/>
      <MusicForEveryOccasion/>
      <OurValues/>
      <ArtistShowcase/>
      <AboutCTA/>
     


      <Footer/>
    </div>
  )
}