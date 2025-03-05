"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

// Tipos para los estados del formulario
type FormStatus = "idle" | "submitting" | "success" | "error"
type FormErrors = {
  name?: string
  email?: string
  message?: string
}

export default function Contact() {
  // Referencias y estados
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<FormStatus>("idle")
  const [errors, setErrors] = useState<FormErrors>({})

  // Validación del formulario
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    let isValid = true

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio"
      isValid = false
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio"
      isValid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Por favor, introduce un email válido"
      isValid = false
    }

    // Validar mensaje
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio"
      isValid = false
    } else if (formData.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
      isValid = false
    } else if (formData.message.length > 1000) {
      newErrors.message = "El mensaje no puede exceder los 1000 caracteres"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  // Manejar cambios en los campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Limpiar error del campo cuando el usuario escribe
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar formulario
    if (!validateForm()) {
      return
    }

    setFormStatus("submitting")

    try {
      // Reemplaza estos valores con tus propias credenciales de EmailJS
      const result = await emailjs.sendForm(
        "service_ef8m3xn", // Reemplaza con tu Service ID
        "template_y9400l4", // Reemplaza con tu Template ID
        formRef.current!,
        "gIfmy087SQ5nbXW8T", // Reemplaza con tu Public Key
      )

      console.log("Email enviado!", result.text)
      setFormStatus("success")
      setFormData({ name: "", email: "", message: "" })
      console.log(formData)

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Error al enviar el email:", error)
      setFormStatus("error")

      // Resetear el estado después de 5 segundos
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }
  }

  // Renderizar mensaje de estado
  const renderStatusMessage = () => {
    switch (formStatus) {
      case "success":
        return (
          <div className="flex items-center gap-2 text-green-600 mt-4 p-3 bg-green-50 rounded-md">
            <CheckCircle size={20} />
            <span>¡Mensaje enviado con éxito! Te responderé pronto.</span>
          </div>
        )
      case "error":
        return (
          <div className="flex items-center gap-2 text-red-600 mt-4 p-3 bg-red-50 rounded-md">
            <AlertCircle size={20} />
            <span>Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</span>
          </div>
        )
      default:
        return null
    }
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
              <Card className="border border-teal-100 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-teal-50">
                      <Mail className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="text-gray-500">sllorente.dev@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-teal-100 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-teal-50">
                      <Phone className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Teléfono</h3>
                      <p className="text-gray-500">+34 628 840 747</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-teal-100 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-full bg-teal-50">
                      <MapPin className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Ubicación</h3>
                      <p className="text-gray-500">Barcelona, España</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="border border-teal-100 bg-white">
            <CardContent className="p-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className={`border-teal-100 focus-visible:ring-teal-600 ${errors.name ? "border-red-300" : ""}`}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className={`border-teal-100 focus-visible:ring-teal-600 ${errors.email ? "border-red-300" : ""}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="¿En qué puedo ayudarte?"
                    className={`min-h-[120px] border-teal-100 focus-visible:ring-teal-600 ${errors.message ? "border-red-300" : ""}`}
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  <p className="mt-1 text-xs text-gray-500">{formData.message.length}/1000 caracteres</p>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-teal-600 text-white hover:bg-teal-700"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar mensaje"
                  )}
                </Button>
                {renderStatusMessage()}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

