"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product filtering, cart management, and secure checkout.",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Weather App",
    description: "Real-time weather application with geolocation support and detailed forecast data.",
    tech: ["React", "TypeScript", "REST API", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    tech: ["Next.js", "GraphQL", "Firebase", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website showcasing projects and skills with smooth animations.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Blog Platform",
    description: "Content management system for creating and sharing blog posts with markdown support.",
    tech: ["Gatsby", "GraphQL", "Contentful", "Tailwind CSS"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for managing multiple social media accounts and tracking metrics.",
    tech: ["React", "TypeScript", "Chart.js", "Bootstrap"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
]

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Projects</h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white dark:bg-slate-900 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="default"
                      className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2"
                    >
                      <ExternalLink size={18} />
                      Live
                    </Button>
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                      <Github size={18} />
                      Code
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
