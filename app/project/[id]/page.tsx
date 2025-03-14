import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { projects } from '@/data/projects';
import parse from 'html-react-parser';

// Función para generar metadatos dinámicos
export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: "Proyecto no encontrado",
    }
  }

  return {
    title: `${project.title} | Mi Portafolio`,
    description: project.description,
  }
}

// Componente principal de la página
export default function ProjectDetail({ params }: { params: { id: string } }) {
  // Buscar el proyecto que coincida con el id
  const project = projects.find((p) => p.id === params.id)

  // Si no se encuentra el proyecto, mostrar una página 404
  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header accentColor="turquoise" />
      <main className="flex-grow py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            {/* Navegación de regreso */}
            <div className="mb-8">
              <Link href="/#projects" className="text-teal-600 hover:text-teal-700 flex items-center">
                ← Volver a proyectos
              </Link>
            </div>

            {/* Título del proyecto */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>

            {/* Imagen del proyecto 
            <div className="rounded-lg overflow-hidden mb-8 border border-teal-100"> */}
            <div style={{ width: '500px', aspectRatio: '16/9', borderRadius: '20px', overflow: 'hidden', }} className="mb-4">
            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">

            <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={500 * (9 / 16)} // Mantener la proporción de 16:9
                className="object-cover"
                style={{ borderRadius: '20px' }}
              />
                 

              </Link>
            </div>

            {/* Etiquetas */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-teal-50 text-teal-600 text-sm font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            {/* Descripción */}
            <div className="prose max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-4">Descripción del proyecto</h2>
              <div className="text-gray-700 leading-relaxed mb-6"> {parse(project.description)}</div>

              {/* Puedo agregar mas secciones como  "Soluciones", "Tecnologías utilizadas", etc. */}
            </div>

            {/* Enlaces */}
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-teal-600 text-white hover:bg-teal-700">
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-teal-200 text-teal-600 hover:bg-teal-50">
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Ver Repositorio
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer accentColor="turquoise" />
    </div>
  )
}

