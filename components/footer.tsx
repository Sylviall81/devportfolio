import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

interface FooterProps {
  accentColor: "purple" | "turquoise"
}

export default function Footer({ accentColor }: FooterProps) {
  const textAccentClass = accentColor === "purple" ? "text-purple-600" : "text-teal-600"

  const iconHoverClass = accentColor === "purple" ? "hover:text-purple-600" : "hover:text-teal-600"

  return (
    <footer className="border-t bg-white">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="flex items-center space-x-2">
              <span className={`text-xl font-bold ${textAccentClass}`}>Sylvia Llorente - Full Stack Dev</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500">
            Desarrolladora Full-stack Jr. entusiasta del aprendizaje y la innovacion enfocada en crear soluciones digitales funcionales y atractivas.</p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/Sylviall81/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 ${iconHoverClass}`}
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/sllorentedev/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-500 ${iconHoverClass}`}
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:sllorente.dev@gmail.com" className={`text-gray-500 ${iconHoverClass}`}>
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sylvia Llorente Suárez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

