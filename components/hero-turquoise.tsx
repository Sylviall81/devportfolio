//import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from 'next/image'

export default function Hero() {


  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-4 lg:grid-cols-[1fr_400px] lg:gap-8 xl:grid-cols-[1fr_500px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hola, soy <span className="text-teal-600"> Sylvia</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Desarrolladora Full-stack Jr. y QA Tester entusiasta del aprendizaje y la innovacion enfocada en crear soluciones digitales funcionales y atractivas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
            <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-teal-700"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-teal-200 bg-transparent px-4 py-2 text-sm font-medium text-teal-600 shadow-sm hover:bg-teal-50"
              >
                Contactar
              </a>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Link
                href="https://github.com/Sylviall81"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-600"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/sllorentedev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-teal-600"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-teal-100">
              <Image src="https://res.cloudinary.com/dsesprxhl/image/upload/v1702062201/portfolio/IMG_9247_kdhwrv.jpg" alt="Sylvia Llorente Desarrolladora Full Stack" height="400" width="400" className="w-full h-full object-cover object-[50%_20%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

