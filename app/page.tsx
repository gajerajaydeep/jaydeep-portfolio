import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { FooterSection } from "@/components/sections/footer-section"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-gradient-to-br from-background to-background">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  )
}
