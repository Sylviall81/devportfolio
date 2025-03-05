import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hola, soy <span className="text-purple-600">Tu Nombre</span>
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Desarrolladora web con 2 años de experiencia creando soluciones digitales elegantes y funcionales.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-purple-600 text-white hover:bg-purple-700">Ver proyectos</Button>
              <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                Contactar
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-600"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-purple-600"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden border-4 border-purple-100">
              <img src="/placeholder.svg?height=400&width=400" alt="Tu Nombre" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

