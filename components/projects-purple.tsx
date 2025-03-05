import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Proyecto 1",
      description:
        "Una aplicación web para gestionar tareas diarias con autenticación de usuarios y almacenamiento en la nube.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB"],
      liveLink: "https://proyecto1.com",
      githubLink: "https://github.com/tuusuario/proyecto1",
    },
    {
      title: "Proyecto 2",
      description: "Sitio web responsive para una tienda online con carrito de compras y pasarela de pagos.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "Stripe"],
      liveLink: "https://proyecto2.com",
      githubLink: "https://github.com/tuusuario/proyecto2",
    },
    {
      title: "Proyecto 3",
      description: "Aplicación móvil para seguimiento de hábitos y rutinas diarias con notificaciones personalizadas.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React Native", "Firebase", "Redux"],
      liveLink: "https://proyecto3.com",
      githubLink: "https://github.com/tuusuario/proyecto3",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis Proyectos</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Una selección de mis trabajos recientes
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-10">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border border-purple-100 bg-white">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-50 text-purple-600 text-xs font-medium rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-purple-200 text-purple-600 hover:bg-purple-50"
                  >
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Código
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="bg-purple-600 text-white hover:bg-purple-700">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

