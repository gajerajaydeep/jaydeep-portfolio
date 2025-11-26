import { Mail, Phone, Github, Linkedin } from "lucide-react"

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@example.com"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition"
              >
                <Mail size={20} />
                hello@example.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition"
              >
                <Phone size={20} />
                +1 (234) 567-890
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Follow Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-blue-400 transition"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-slate-300 hover:text-blue-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-blue-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-slate-300 hover:text-blue-400 transition">
                  Skills
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-slate-400">© {currentYear} Frontend Developer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
