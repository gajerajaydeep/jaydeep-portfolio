"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const typingTextRef = useRef<HTMLSpanElement>(null)

  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Bootstrap",
    "Tailwind CSS",
    "React",
    "Redux",
    "Gatsby",
    "REST API",
    "GraphQL",
    "Next.js",
  ]

  useEffect(() => {
    let currentTechIndex = 0
    let currentCharIndex = 0
    let isDeleting = false

    const typeEffect = () => {
      const element = typingTextRef.current
      if (!element) return

      const currentTech = technologies[currentTechIndex]
      const displayText = currentTech.substring(0, currentCharIndex)

      element.textContent = displayText

      if (!isDeleting) {
        if (currentCharIndex < currentTech.length) {
          currentCharIndex++
        } else {
          isDeleting = true
          setTimeout(() => typeEffect(), 1500)
          return
        }
      } else {
        if (currentCharIndex > 0) {
          currentCharIndex--
        } else {
          isDeleting = false
          currentTechIndex = (currentTechIndex + 1) % technologies.length
        }
      }

      setTimeout(typeEffect, isDeleting ? 50 : 100)
    }

    typeEffect()
  }, [])

  const downloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "resume.pdf"
    link.click()
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/male-developer-bg.jpg"
          alt="Male developer workspace background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      </div>

      <div className="max-w-5xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-fade-in">Frontend Developer</h1>
        <p className="text-2xl md:text-3xl text-blue-400 mb-8 font-semibold">Specializing in JavaScript</p>

        <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto">
          I build accessible, pixel-perfect digital experiences for the web.
        </p>

        <div className="mb-8 h-12 flex items-center justify-center">
          <span className="text-xl text-slate-200">
            Tech Stack: <span ref={typingTextRef} className="text-blue-400 font-mono font-semibold" />
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button
            onClick={downloadResume}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download Resume
          </Button>
          <Button
            variant="outline"
            className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-6 text-lg flex items-center justify-center gap-2 bg-transparent"
          >
            View Work <ArrowRight size={20} />
          </Button>
        </div>

        {/* Animated scroll indicator */}
        <div className="animate-bounce">
          <svg className="w-6 h-6 mx-auto text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
