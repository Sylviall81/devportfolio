"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import parse from "html-react-parser"
import type { Project } from "@/data/projects"

type Filter = "all" | "dev" | "qa"

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "dev", label: "Desarrollo" },
  { value: "qa", label: "QA" },
]

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("all")

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <div className="flex justify-center gap-2 mb-10">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === value
                ? "bg-teal-600 text-white"
                : "bg-teal-50 text-teal-600 hover:bg-teal-100"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filtered.map((project) => (
          <Card key={project.id} className="overflow-hidden border border-teal-100 bg-white">
            <Link href={`/project/${project.id}`}>
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  width={500}
                  height={300}
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
    </>
  )
}
