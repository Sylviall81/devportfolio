import { getProjects } from '@/lib/projects';
import ProjectsGrid from './projects-grid';

export default async function Projects() {
  const projects = await getProjects();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis Proyectos</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Una selección de mis proyectos recientes
            </p>
          </div>
        </div>
        <div className="pt-10">
          <ProjectsGrid projects={projects} />
        </div>
      </div>
    </section>
  )
}
