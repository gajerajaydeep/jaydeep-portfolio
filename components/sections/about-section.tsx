import { Mail, Phone } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12">About Me</h2>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div className="md:col-span-2">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              I'm a passionate Frontend Developer with expertise in building modern, responsive web applications. With
              1+ years of experience, I specialize in creating intuitive user experiences using the latest web
              technologies.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              My journey in web development started with a curiosity about how things work on the internet. Today, I use
              that curiosity to build solutions that solve real problems and delight users.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg h-fit">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-blue-500" />
                <a href="mailto:jaydeepgajera63526@gmail.com" className="text-slate-700 dark:text-slate-300 hover:text-blue-500">
                jaydeepgajera63526@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-blue-500" />
                <a href="tel:+916352685326" className="text-slate-700 dark:text-slate-300 hover:text-blue-500">
                +916352685326
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
