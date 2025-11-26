"use client"

import { motion } from "framer-motion"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiReact,
  SiRedux,
  SiGatsby,
  SiGraphql,
  SiNextdotjs,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#E34C26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "Gatsby", icon: SiGatsby, color: "#663399" },
  { name: "REST API", icon: TbApi, color: "#0EA5E9" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
]

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 px-4 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">Skills</h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div key={index} variants={itemVariants} className="group relative">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center justify-center cursor-pointer transform hover:scale-105 hover:-translate-y-1">
                  <Icon size={40} color={skill.color} className="mb-3" />
                  <p className="text-sm font-medium text-slate-900 dark:text-white text-center">{skill.name}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
