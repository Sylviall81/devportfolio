"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log(formData)
    alert("¡Gracias por tu mensaje! Te responderé pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="space-y-6">
              <Card className="border border-purple-100 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-purple-50">
                      <Mail className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="text-gray-500">tunombre@ejemplo.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-purple-100 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-purple-50">
                      <Phone className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Teléfono</h3>
                      <p className="text-gray-500">+34 123 456 789</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-purple-100 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-purple-50">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Ubicación</h3>
                      <p className="text-gray-500">Madrid, España</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border border-purple-100 bg-white">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    required
                    className="border-purple-100 focus-visible:ring-purple-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="border-purple-100 focus-visible:ring-purple-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿En qué puedo ayudarte?"
                    required
                    className="min-h-[120px] border-purple-100 focus-visible:ring-purple-600"
                  />
                </div>
                <Button type="submit" className="w-full bg-purple-600 text-white hover:bg-purple-700">
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

