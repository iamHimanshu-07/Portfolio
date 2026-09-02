import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Certificates } from "@/components/certificates"
import { Achievements } from "@/components/achievements"
import { Experience } from "@/components/experience"
import { OpenSource } from "@/components/open-source"
import { Roadmap } from "@/components/roadmap"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Certificates />
      <Achievements />
      <OpenSource />
      <Roadmap />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
