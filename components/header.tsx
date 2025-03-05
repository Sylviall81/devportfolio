"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"



interface HeaderProps {
  accentColor: "purple" | "turquoise"
}

export default function Header({ accentColor }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }


 const navigateToSection = (sectionId: string) => {
    // Si estamos en la página principal, desplazarse a la sección
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        if (isMenuOpen) {
          setIsMenuOpen(false)
        }
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // Si estamos en otra página, navegar a la página principal con el hash
      window.location.href = `/#${sectionId}`
    }
  }
  
  const accentClass =
    accentColor === "purple"
      ? "bg-purple-600 text-white hover:bg-purple-700"
      : "bg-teal-600 text-white hover:bg-teal-700"

  const textAccentClass = accentColor === "purple" ? "text-purple-600" : "text-teal-600"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className={`text-xl font-bold ${textAccentClass}`}>Sylvia Llorente - Full Stack Dev</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Reemplazamos los Links por botones */}
          <button onClick={() => navigateToSection("about")} className="text-sm font-medium hover:text-gray-900">
            Sobre mí
          </button>
          <button onClick={() => navigateToSection("skills")} className="text-sm font-medium hover:text-gray-900">
            Habilidades
          </button>
          <button onClick={() => navigateToSection("projects")} className="text-sm font-medium hover:text-gray-900">
            Proyectos
          </button>
          <button onClick={() => navigateToSection("contact")} className="text-sm font-medium hover:text-gray-900">
            Contacto
          </button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className={accentClass}>
            <a href="/SLlorenteDevCV.pdf" target="_blank" rel="noopener noreferrer">
            Ver CV
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Cerrar Menú" : "Abrir Menú"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container py-4 pb-6 border-b">
          <nav className="flex flex-col space-y-4">
            {/* Reemplazamos los Links por botones */}
            <button
              onClick={() => navigateToSection("about")}
              className="text-sm font-medium hover:text-gray-900 text-left"
            >
              Sobre mí
            </button>
            <button
              onClick={() => navigateToSection("skills")}
              className="text-sm font-medium hover:text-gray-900 text-left"
            >
              Habilidades
            </button>
            <button
              onClick={() => navigateToSection("projects")}
              className="text-sm font-medium hover:text-gray-900 text-left"
            >
              Proyectos
            </button>
            <button
              onClick={() => navigateToSection("contact")}
              className="text-sm font-medium hover:text-gray-900 text-left"
            >
              Contacto
            </button>
            <div className="pt-2">
              <Button className={accentClass}><a href="/SLlorenteDevCV.pdf" target="_blank" rel="noopener noreferrer">Ver CV </a></Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

