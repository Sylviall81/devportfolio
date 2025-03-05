import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github} from "lucide-react"
import Link from "next/link"
//import { projects } from '@/data/projects';
import Image from "next/image"
import { getProjects } from '@/lib/projects';
import parse from 'html-react-parser';





export default async function Projects() {

  const projects = await getProjects();
 
  return (
    <section id="projects" className="py-20 bg-white">
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
          {projects.map((project) => (
            
            <Card key={project.id} className="overflow-hidden border border-teal-100 bg-white">
              <Link href={`/project/${project.id}`}>
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  width="500"
                  height="300"
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              </Link>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <div className="text-gray-500 mb-4 line-clamp-3">{parse(project.description)}</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 bg-teal-50 text-teal-600 text-xs font-medium rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-teal-200 text-teal-600 hover:bg-teal-50"
                  >
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      Código
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="bg-teal-600 text-white hover:bg-teal-700">
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

