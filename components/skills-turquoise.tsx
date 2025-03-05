import { Card, CardContent } from "@/components/ui/card"
import { Code, PenTool, Server, ClipboardCheck } from "lucide-react"
//import { CheckCircleIcon, BugIcon } from '@heroicons/react/outline';

export default function Skills() {
  const skills = [
    {
      icon: <Code className="h-8 w-8 text-teal-600" />,
      title: "Desarrollo Frontend",
      description: "HTML, CSS, JavaScript, React",
    },
    {
      icon: <Server className="h-8 w-8 text-teal-600" />,
      title: "Desarrollo Backend",
      description: "PHP, Laravel, Node.js, SQL, APIs RESTful",
    },
    {
      icon: <PenTool className="h-8 w-8 text-teal-600" />,
      title: "Diseño UI/UX",
      description: "Diseño Responsive, Accesibilidad",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-teal-600" />,
      title: "Herramientas QA",
      description: "Playwright, TestRail, Postman, API Testing",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mis Habilidades</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tecnologías y herramientas con las que trabajo
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 pt-10">
          {skills.map((skill, index) => (
            <Card key={index} className="border border-teal-100 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-teal-50">{skill.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold">{skill.title}</h3>
                    <p className="text-gray-500">{skill.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

